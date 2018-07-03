import React from "react";
import { Route, Switch } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Navigation from '../navigation';

import Homepage from "../pages/Homepage";
import Faqs from "../pages/Faqs";
import NoMatch from "../pages/NoMatch";

const routes = () => (
  <ScrollToTop>
    <Navigation>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/faqs" component={Faqs} />
        <Route component={NoMatch} />
      </Switch>
    </Navigation>
  </ScrollToTop>
);

export default routes;
