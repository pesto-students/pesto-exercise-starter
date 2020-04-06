import React, { useState } from "react";
import { GameBox } from "./game-box";

function GameController(props) {
  const boxWidth = 480;
  const boxHeight = 480;

  const cubeWidth = 20;
  const cubeHeight = 20;

  const nunmberOfCubeInARow = boxWidth / cubeWidth;
  const numberOfCubeInAColumn = boxHeight / cubeHeight;

  const [snakeTailPosition, setSnakeTailPosition] = useState([
    {
      point: -1,
      direction: "ArrowDown",
    },
  ]);

  return (
    <div>
      <GameBox
        nunmberOfCubeInARow={nunmberOfCubeInARow}
        numberOfCubeInAColumn={numberOfCubeInAColumn}
        boxWidth={boxWidth}
        boxHeight={boxHeight}
        cubeWidth={cubeWidth}
        cubeHeight={cubeHeight}
        snakeTailPosition={snakeTailPosition}
        setSnakeTailPosition={setSnakeTailPosition}
        setIsRunning={props.setIsRunning}
      />
    </div>
  );
}

export default GameController;
