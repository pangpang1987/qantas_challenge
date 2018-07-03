import moxios from "moxios";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import promiseMiddleware from "redux-promise-middleware";

import reducer from "../modules/faq";
import * as actions from "../modules/faq";

const middlewares = [thunk, promiseMiddleware()];
const mockStore = configureMockStore(middlewares);

describe("Reducer faq", () => {
  const initialState = { isLoading: false, faqs: [] };

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle faq/FETCH_FAQS_PENDING", () => {
    const action = {
      type: "faq/FETCH_FAQS_PENDING"
    };
    expect(reducer(initialState, action)).toEqual({ isLoading: true, faqs: [] });
  });

  it("should handle faq/FETCH_FAQS_FULFILLED", () => {
    const action = {
      type: "faq/FETCH_FAQS_FULFILLED",
      payload: [{ title: "test", body: "body" }]
    };
    expect(reducer(initialState, action)).toEqual({ isLoading: false, faqs: [{ title: "test", body: "body" }] });
  });

  it("should handle faq/FETCH_FAQS_REJECTED", () => {
    const action = {
      type: "faq/FETCH_FAQS_REJECTED"
    };
    expect(reducer(initialState, action)).toEqual({ isLoading: false, faqs: [] });
  });
});

describe("Actions faq", () => {
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
          faqs: [{ title: "test", body: "body" }]
        }
      }
    });

    const expectedAction = [
      {
        type: "faq/FETCH_FAQS_PENDING"
      },
      {
        type: "faq/FETCH_FAQS_FULFILLED",
        payload: [{ title: "test", body: "body" }]
      }
    ];
    const store = mockStore({});
    store.dispatch(actions.fetchFaqs()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
