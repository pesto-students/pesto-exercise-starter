import React from "react";

let style = {
  display: "inline-block",
  height: "20px",
  width: "20px",
};

function Cube(props) {
  updateStyles(props.style);
  return <span id={props.id} style={style} />;
}

const updateStyles = (propsStyle) => {
  style = {
    ...style,
    ...propsStyle,
  };
};

export { Cube, style };
