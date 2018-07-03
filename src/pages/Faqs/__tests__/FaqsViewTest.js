import React from "react";

import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import FaqsView from "../FaqsView";

describe("Component <FaqsView />", () => {
  const fetchFaqs = jest.fn();
  const actions = { fetchFaqs };
  const faqs = [
    { title: "test title here", body: "testBody" },
    { title: "element test", body: "<p>first</p><p>second</p>" }
  ];

  it("should render initial state properly", () => {
    const component = shallow(<FaqsView faqs={[]} isLoading={false} actions={actions} />);

    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
    expect(fetchFaqs.mock.calls.length).toBe(1);
  });

  it("should render a loader when fetching data", () => {
    const component = shallow(<FaqsView faqs={[]} isLoading={true} actions={actions} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

  it("should render properly with data", () => {
    const component = shallow(<FaqsView faqs={faqs} isLoading={false} actions={actions} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

  it("should render properly when switch to another title", () => {
    const component = shallow(<FaqsView faqs={faqs} isLoading={false} actions={actions} />);
    component.setState({ activeIndex: 1 });
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
