import React from "react";
import { GameBox2 } from "./game-box-2";

function GameController2() {
  const [boxSize, cubeSize] = [400, 20];

  return (
    <div>
      <GameBox2 boxSize={boxSize} cubeSize={cubeSize} />
    </div>
  );
}

export { GameController2 };
