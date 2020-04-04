import React, { useState } from "react";
import { GameBox } from "./components/game-box";
import Snake from "./components/snake";

function SnakeGame() {
  const [snakeTailPosition, setSnakeTailPosition] = useState([
    {
      point: -1,
      direction: "D",
    },
  ]);

  const boxWidth = 480;
  const boxHeight = 480;

  const cubeWidth = 20;
  const cubeHeight = 20;

  const nunmberOfCubeInARow = boxWidth / cubeWidth;
  const numberOfCubeInAColumn = boxHeight / cubeHeight;

  Snake({
    snakeTailPosition,
    setSnakeTailPosition,
    nunmberOfCubeInARow,
    numberOfCubeInAColumn,
  });

  return (
    <div>
      <GameBox
        snakeTailPosition={snakeTailPosition}
        nunmberOfCubeInARow={nunmberOfCubeInARow}
        numberOfCubeInAColumn={numberOfCubeInAColumn}
        boxWidth={boxWidth}
        boxHeight={boxHeight}
        cubeWidth={cubeWidth}
        cubeHeight={cubeHeight}
      />
    </div>
  );
}

export default SnakeGame;
