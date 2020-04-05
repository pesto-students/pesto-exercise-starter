import React, { useState } from "react";
import "./game-box.css";
import Snake from "./snake";

let interval;

function GameBox(props) {
  // Box UI
  // Snake array of numbers

  const [snakeTailPosition, setSnakeTailPosition] = [
    props.snakeTailPosition,
    props.setSnakeTailPosition,
  ];

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

    if (snakeTailPosition.find((snake) => snake.point === index)) {
      className += " snake-box";
    }

    return className;
  };

  Snake({
    snakeTailPosition,
    setSnakeTailPosition,
    nunmberOfCubeInARow,
    numberOfCubeInAColumn,
  });

  if (snakeTailPosition[snakeTailPosition.length - 1].point > cubesCount) {
    props.setIsRunning(false);
  }

  moveSnake(snakeTailPosition, setSnakeTailPosition, nunmberOfCubeInARow);

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

function moveSnake(
  snakeTailPosition,
  setSnakeTailPosition,
  nunmberOfCubeInARow
) {
  window.clearTimeout(interval);
  interval = setTimeout(() => {
    const snakeTailClone = [...snakeTailPosition];

    const tailHeadClone = { ...snakeTailClone[snakeTailClone.length - 1] };
    tailHeadClone.point += nunmberOfCubeInARow;
    snakeTailClone[snakeTailClone.length] = tailHeadClone;

    snakeTailClone.splice(snakeTailClone[0], 1);
    setSnakeTailPosition(snakeTailClone);
  }, 100);
}

export { GameBox };
