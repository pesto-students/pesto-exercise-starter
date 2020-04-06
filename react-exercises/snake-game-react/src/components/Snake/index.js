import React, { useState, useEffect, useCallback } from "react";
import "./styles.css";
export default function Snake(props) {
  return (
    <div>
      {props.body.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        };
        return <div className="snake-dot" key={i} style={style}></div>;
      })}
    </div>
  );
}
