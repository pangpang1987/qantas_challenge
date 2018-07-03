import React from "react";
import Navigation from "../Navigation";
// import renderer from "react-test-renderer";

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

it("renders initial state correctly", () => {
  const NavigationComponent = shallow(<Navigation>test</Navigation>);
  const tree = toJson(NavigationComponent);
  expect(tree).toMatchSnapshot();
});
