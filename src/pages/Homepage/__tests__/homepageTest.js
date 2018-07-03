import moxios from "moxios";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import promiseMiddleware from "redux-promise-middleware";

import reducer from "../modules/homepage";
import * as actions from "../modules/homepage";

const middlewares = [thunk, promiseMiddleware()];
const mockStore = configureMockStore(middlewares);

describe("Reducer homepage", () => {
  const initialState = { isLoading: false, homepage: {} };

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle homepage/FETCH_HOMEPAGE_PENDING", () => {
    const action = {
      type: "homepage/FETCH_HOMEPAGE_PENDING"
    };
    expect(reducer(initialState, action)).toEqual({ isLoading: true, homepage: {} });
  });

  it("should handle homepage/FETCH_HOMEPAGE_FULFILLED", () => {
    const action = {
      type: "homepage/FETCH_HOMEPAGE_FULFILLED",
      payload: { heading: "Heading", subheading: "Sub heading", heroImageUrl: "http://imageUrl" }
    };
    expect(reducer(initialState, action)).toEqual({
      isLoading: false,
      homepage: { heading: "Heading", subheading: "Sub heading", heroImageUrl: "http://imageUrl" }
    });
  });

  it("should handle homepage/FETCH_HOMEPAGE_REJECTED", () => {
    const action = {
      type: "homepage/FETCH_HOMEPAGE_REJECTED"
    };
    expect(reducer(initialState, action)).toEqual({ isLoading: false, homepage: {} });
  });
});

describe("Actions homepage", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("should create a series of actions when fetch data succeed", () => {
    moxios.stubRequest("http://localhost:4000/graphql", {
      status: 200,
      response: {
        data: {
          homepage: { heading: "Heading", subheading: "Sub heading", heroImageUrl: "http://imageUrl" }
        }
      }
    });

    const expectedAction = [
      {
        type: "homepage/FETCH_HOMEPAGE_PENDING"
      },
      {
        type: "homepage/FETCH_HOMEPAGE_FULFILLED",
        payload: { heading: "Heading", subheading: "Sub heading", heroImageUrl: "http://imageUrl" }
      }
    ];
    const store = mockStore({});
    store.dispatch(actions.fetchHomepage()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
