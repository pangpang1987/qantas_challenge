import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

import reducers from "./reducers";

const initialState = {};
const enhancers = [];
const middleware = [thunk, promiseMiddleware()];

// Redux devtool connector
if (window || process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);
const store = createStore(reducers, initialState, composedEnhancers);

export default store;
