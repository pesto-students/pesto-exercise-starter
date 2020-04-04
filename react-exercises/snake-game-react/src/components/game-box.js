import React from "react";
import "./game-box.css";

function GameBox(props) {
  // Box UI
  // Snake array of numbers
  // Snake move 1 step

  const boxWidth = props.boxWidth;
  const boxHeight = props.boxHeight;

  const cubeWidth = props.cubeWidth;
  const cubeHeight = props.cubeHeight;

  const nunmberOfCubeInARow = props.nunmberOfCubeInARow;
  const numberOfCubeInAColumn = props.numberOfCubeInAColumn;

  let cubesCount = nunmberOfCubeInARow * numberOfCubeInAColumn;
  const cubeHtmls = [];

  const getClassName = (index) => {
    let className = "cube";

    if (props.snakeTailPosition.find((snake) => snake.point === index)) {
      className += " snake-box";
    }

    return className;
  };

  for (let index = 1; index <= cubesCount; index++) {
    cubeHtmls.push(
      <span
        className={getClassName(index)}
        id={"cube_" + index}
        style={{
          width: cubeWidth,
          height: cubeHeight,
          display: "inline-block",
          borderRadius: "0.5rem",
        }}
      ></span>
    );
  }

  return (
    <div className="game-box" style={{ width: boxWidth, height: boxHeight }}>
      {cubeHtmls}
    </div>
  );
}

export { GameBox };
