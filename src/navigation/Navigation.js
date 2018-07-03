import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { NavigationBar, Content, Link } from "./styled";

class Navigation extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <NavigationBar>
          <Link exact to="/" activeClassName="isActive">
            Home
          </Link>
          <Link exact to="/faqs" activeClassName="isActive">
            Faqs
          </Link>
        </NavigationBar>
        <Content>{children}</Content>
      </Fragment>
    );
  }
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired
};

export default Navigation;
