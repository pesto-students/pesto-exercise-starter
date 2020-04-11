import { shallow, mount, render } from "enzyme";
import React from "react";
import { GameBox2, getCubesCount, style, getCubesHtml } from "./game-box-2";
import { Cube } from "./cube";

describe("test getCubesCount()", () => {
  test("should return correct value in correct params", () => {
    expect(getCubesCount(2, 2)).toBe(1);
    expect(getCubesCount(10, 2)).toBe(25);
    expect(getCubesCount(12, 2)).toBe(36);
  });

  test("should return 0 when params are incorrect", () => {
    expect(getCubesCount(-2, -2)).toBe(0);
    expect(getCubesCount({})).toBe(0);
    expect(getCubesCount(10)).toBe(0);
    expect(
      getCubesCount(Number.MAX_SAFE_INTEGER + 1, Number.MAX_SAFE_INTEGER - 1)
    ).toBe(0);
  });
});

describe("test getCubesHtml()", () => {
  test("should return correct JSX", () => {
    // let length = 0;
    // getCubesHtml(20, 20).forEach((value, index, array) => {
    //   length += length;
    //   expect(value.type).toBe(Cube);
    // });
    // console.log(
    //   render(<React.Fragment>{getCubesHtml(20, 20)}</React.Fragment>).find(Cube)
    // );
    // console.log(length);
    // getCubesHtml(20, 20).map
    // expect(getCubesHtml(20, 20).length).toBe(400);
  });
});

describe("test updateProps()", () => {
  test("should return correct JSX", () => {});
});

describe("test GameBox2()", () => {
  test("should render correctly without props", () => {
    const component = shallow(<GameBox2 />);
    const componentStyle = component.prop("style");

    for (const key of Object.keys(style)) {
      expect(componentStyle[key]).toBe(style[key]);
    }
  });
  test("should render correctly with props", () => {
    const propsStyle = { borderColor: "red" };
    const component = shallow(<GameBox2 style={propsStyle} />);
    const componentStyle = component.prop("style");

    for (const key of Object.keys(propsStyle)) {
      expect(componentStyle[key]).toBe(propsStyle[key]);
    }
  });
});
