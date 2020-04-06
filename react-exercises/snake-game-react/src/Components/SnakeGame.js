import React from "react";
import { Board } from "./Board/Board";
import { SNAKE_SIZE } from "../utils";

export const SnakeGame = () => {
  return (
    <>
      <Board
        size={20}
        initialSnakeSize={SNAKE_SIZE}
        initialSnakePos={{ row: 10, col: 10 }}
      />
    </>
  );
};
