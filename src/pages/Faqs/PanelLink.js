import React from "react";
import PropTypes from "prop-types";

import { Link } from "./styled";

class PanelLink extends React.PureComponent {
  handleClick = () => {
    const { index, setActiveIndex } = this.props;
    setActiveIndex(index);
  };

  render() {
    const { index, activeIndex, title } = this.props;
    const isActive = index === activeIndex;
    return (
      <Link className={isActive ? 'isActive' : ''} onClick={this.handleClick}>
        {title}
      </Link>
    );
  }
}

PanelLink.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  activeIndex: PropTypes.number,
  setActiveIndex: PropTypes.func
};

export default PanelLink;
