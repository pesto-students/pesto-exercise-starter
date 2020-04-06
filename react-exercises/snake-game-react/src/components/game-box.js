import React, { useState, useRef, useEffect } from "react";
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

  const useStateRef = useRef(snakeTailPosition);
  const _setSnakeTailPosition = (data) => {
    useStateRef.current = data;
    setSnakeTailPosition(data);
  };

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
    _setSnakeTailPosition,
    nunmberOfCubeInARow,
    numberOfCubeInAColumn,
  });

  if (snakeTailPosition[snakeTailPosition.length - 1].point > cubesCount) {
    props.setIsRunning(false);
  }

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (
        event.code === "ArrowUp" ||
        "ArrowDown" ||
        "ArrowRight" ||
        "ArrowLeft"
      ) {
        changeDirection(
          useStateRef.current,
          _setSnakeTailPosition,
          nunmberOfCubeInARow,
          event.code
        );
      }
    });
  });

  moveSnake(snakeTailPosition, _setSnakeTailPosition, nunmberOfCubeInARow);

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

function changeDirection(
  snakeTailPosition,
  setSnakeTailPosition,
  numberOfCubeInARow,
  direction
) {
  const snakeTailClone = [...snakeTailPosition];
  const forwardHeadOfSnake = snakeTailClone[snakeTailClone.length - 1];
  if (direction && direction !== forwardHeadOfSnake.direction) {
    if (
      direction === "ArrowLeft" &&
      forwardHeadOfSnake.direction !== "ArrowRight"
    ) {
      window.clearTimeout(interval);
      if (forwardHeadOfSnake.direction === "ArrowDown") {
        forwardHeadOfSnake.direction = "ArrowLeft";
        forwardHeadOfSnake.point -= 1;
      }
      _moveSnake(
        snakeTailPosition,
        setSnakeTailPosition,
        numberOfCubeInARow,
        true
      );
    }
  }
}

function moveSnake(
  snakeTailPosition,
  setSnakeTailPosition,
  numberOfCubeInARow
) {
  window.clearTimeout(interval);
  interval = setTimeout(() => {
    debugger;
    _moveSnake(snakeTailPosition, setSnakeTailPosition, numberOfCubeInARow);
  }, 3000);
}

function _moveSnake(
  snakeTailPosition,
  setSnakeTailPosition,
  numberOfCubeInARow,
  ignoreHead
) {
  const snakeTailClone = [...snakeTailPosition];
  const forwardHeadOfSnake = snakeTailClone[snakeTailClone.length - 1];

  if (!ignoreHead) {
    if (forwardHeadOfSnake.direction === "ArrowDown") {
      forwardHeadOfSnake.point += numberOfCubeInARow;
    } else if (forwardHeadOfSnake.direction === "ArrowLeft") {
      forwardHeadOfSnake.point -= 1;
    }
  }

  for (let index = snakeTailClone.length - 2; index >= 0; index--) {
    const element = snakeTailClone[index];
    if (
      snakeTailClone[index + 1].direction === snakeTailClone[index].direction
    ) {
      if (snakeTailClone[index].direction === "ArrowDown") {
        element.point += numberOfCubeInARow;
      } else if (snakeTailClone[index].direction === "ArrowLeft") {
        element.point -= 1;
      }
    } else {
      if (snakeTailClone[index + 1].direction === "ArrowLeft") {
        if (
          snakeTailClone[index + 1].point ===
          snakeTailClone[index].point - 2
        ) {
          element.direction = "ArrowLeft";
          element.point -= 1;
        } else {
          element.point += numberOfCubeInARow;
        }
      } else {
        if (element.direction === "ArrowDown") {
          element.point += numberOfCubeInARow;
        } else if (element.direction === "ArrowLeft") {
          element.point -= 1;
        }
      }
    }
  }
  setSnakeTailPosition(snakeTailClone);
}

export { GameBox };
