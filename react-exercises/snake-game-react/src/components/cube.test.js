import { shallow } from "enzyme";
import React from "react";
import { Cube, style } from "./cube";

describe("Test cube component", () => {
  test("should render correctly without props", () => {
    const component = shallow(<Cube />);
    expect(component.props().style).toBe(style);
  });
  test("should render correctly with props", () => {
    const propsStyle = {
      width: "40px",
      height: "40px",
      backgroundColor: "red",
    };
    const component = shallow(<Cube id="random" style={propsStyle} />);
    expect(component.prop("id")).toBe("random");
    expect(component.prop("style").height).toBe(propsStyle.height);
    expect(component.prop("style").width).toBe(propsStyle.width);
  });
});
