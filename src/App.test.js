import React from "react";

import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import App from './App';

describe('Component App', () => {
  it('should render properly', () => {
    const component = shallow(<App />);

    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  })
})
