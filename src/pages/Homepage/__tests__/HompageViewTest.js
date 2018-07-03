import React from "react";

import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import HomepageView from "../HomepageView";

describe("Component HomepageView", () => {
  const fetchHomepage = jest.fn();
  const actions = { fetchHomepage };
  const homepage = {
    heading: "Heading",
    subheading: "Sub heading",
    heroImageUrl: "https://developers.google.com/identity/images/incorrect-buttons/lightbutton.png"
  };

  it("should render initial state properly", () => {
    const component = shallow(<HomepageView homepage={{}} isLoading={false} actions={actions} />);

    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
    expect(fetchHomepage.mock.calls.length).toBe(1);
  });

  it("should render a loader when fetching data", () => {
    const component = shallow(<HomepageView homepage={{}}isLoading={true} actions={actions} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

  it("should render properly with data", () => {
    const component = shallow(<HomepageView homepage={homepage} isLoading={false} actions={actions} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

});
