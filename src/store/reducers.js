import { combineReducers } from "redux";

import homepage from "../pages/Homepage/modules/homepage";
import faq from "../pages/Faqs/modules/faq";

const reducers = combineReducers({
  homepage,
  faq
});

export default reducers;
