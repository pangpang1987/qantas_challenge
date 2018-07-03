import React from "react";

import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import PanelLink from "../PanelLink";

describe("Component PanelLink", () => {
  const setActiveIndex = jest.fn();
  it("should render normal state", () => {
    const component = shallow(<PanelLink index={1} activeIndex={0} title="test" setActiveIndex={setActiveIndex} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

  it("should render active state", () => {
    const component = shallow(<PanelLink index={0} activeIndex={0} title="test" setActiveIndex={setActiveIndex} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

  it("should render active state", () => {
    const component = shallow(<PanelLink index={0} activeIndex={1} title="test" setActiveIndex={setActiveIndex} />);
    component.instance().handleClick();

    expect(setActiveIndex.mock.calls).toEqual([[0]]);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
