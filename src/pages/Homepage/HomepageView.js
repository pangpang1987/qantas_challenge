import React from "react";
import PropTypes from "prop-types";



import {HomepageContainer, HomepageBox, Title, SubTitle, Link} from './styled';

class HomepageView extends React.Component {
  componentDidMount() {
    this.props.actions.fetchHomepage();
  }

  render() {
    const { isLoading, homepage } = this.props;

    if(isLoading) {
      return <div>Loading...</div>
    }
    const {heroImageUrl, heading, subheading} = homepage;

    return <HomepageContainer image={heroImageUrl}>
      <HomepageBox>
        <Title>{heading}</Title>
        <SubTitle>{subheading}</SubTitle>
        <Link to="/faqs">Learn more</Link>
      </HomepageBox>

    </HomepageContainer>;
  }
}

HomepageView.propTypes = {
  isLoading: PropTypes.bool,
  homepage: PropTypes.object,
  actions: PropTypes.object
};

export default HomepageView;
