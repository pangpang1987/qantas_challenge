import React from "react";
import PropTypes from "prop-types";

import { ViewContainer, MainSection, Title, Body, RightPanel } from "./styled";
import PanelLink from "./PanelLink";

class FaqsView extends React.Component {
  state = {
    activeIndex: 0
  };
  componentDidMount() {
    this.props.actions.fetchFaqs();
  }

  setActiveIndex = activeIndex => {
    this.setState({ activeIndex });
  };

  render() {
    const { faqs, isLoading } = this.props;
    const { activeIndex } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    const activeFaq = faqs[activeIndex] || {};

    return (
      <ViewContainer>
        <MainSection>
          <Title>{activeFaq.title}</Title>
          <Body dangerouslySetInnerHTML={{ __html: activeFaq.body }} />
        </MainSection>
        <RightPanel>
          {faqs.map((faq, index) => (
            <PanelLink
              key={index}
              index={index}
              title={faq.title}
              activeIndex={activeIndex}
              setActiveIndex={this.setActiveIndex}
            />
          ))}
        </RightPanel>
      </ViewContainer>
    );
  }
}

FaqsView.propTypes = {
  faqs: PropTypes.array,
  isLoading: PropTypes.bool,
  actions: PropTypes.object
};

export default FaqsView;
