/**
 * @format
 */

import "react-native";
import React from "react";
import Home from "../../screens/Home";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  beforeAll(() => {
    jest.mock("@react-native-async-storage/async-storage");
  });

  jest.useFakeTimers();

  renderer.create(<Home />);
  //  expect(<Home />).toMatchSnapshot()
  //  expect(<Home />).toHaveLength(1)
});
