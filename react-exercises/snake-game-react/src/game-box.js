import React from "react";
import "./game-box.css";

function GameBox() {
  // Box UI
  // Snake array of numbers
  // Snake move 1 step

  const boxWidth = 480;
  const boxHeight = 480;

  const cubeWidth = 30;
  const cubeHeight = 30;

  let cubesCount = (boxWidth / cubeWidth) * (boxHeight / cubeHeight);
  const cubesHtml = [];

  while (cubesCount > 0) {
    cubesHtml.push(
      <span
        className="cubes"
        id={"cube_" + cubesCount}
        style={{
          width: cubeWidth,
          height: cubeHeight,
          display: "inline-block",
        }}
      ></span>
    );

    cubesCount -= 1;
  }

  return (
    <div className="game-box" style={{ width: boxWidth, height: boxHeight }}>
      {cubesHtml}
    </div>
  );
}

export { GameBox };
