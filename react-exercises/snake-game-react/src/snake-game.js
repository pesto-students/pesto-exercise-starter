import React, { useState } from "react";
import GameController from "./components/game-controller";

function SnakeGame() {
  const [isRunning, setIsRunning] = useState(true);
  return (
    <div>
      {isRunning ? (
        <GameController isRunning={isRunning} setIsRunning={setIsRunning} />
      ) : (
        <h1> Game end </h1>
      )}
    </div>
  );
}

export default SnakeGame;
