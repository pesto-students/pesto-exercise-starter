import React, { useState } from "react";
import "./styles.css";

export default props => {
  const { foodBody } = props;
  const style = {
    left: `${foodBody[0]}%`,
    top: `${foodBody[1]}%`
  };

  return <div className="snake-food" style={style}></div>;
};
