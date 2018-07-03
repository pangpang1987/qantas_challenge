import React from "react";
import NoMatch from "../NoMatch";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<NoMatch page="http://www.facebook.com">Facebook</NoMatch>).toJSON();
  expect(tree).toMatchSnapshot();
});
