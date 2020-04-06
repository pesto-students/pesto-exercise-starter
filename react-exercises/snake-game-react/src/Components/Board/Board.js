import React, { useEffect, useState } from "react";
import { Cell } from "./Cell";
import styles from "./Board.module.scss";

import { make2dArray, endGame } from "../../utils";
import { ARROW_KEY } from "../../constants";

export const Board = ({ size, initialSnakePos, initialSnakeSize }) => {
  const randomRow = Math.floor(Math.random() * size) + 1;
  const randomCol = Math.floor(Math.random() * size) + 1;

  const [snakePos, setSnakePos] = useState(initialSnakePos);
  const [snakeBody, setSnakeBody] = useState([]);
  const [snakeSize, setSnakeSize] = useState(initialSnakeSize);
  const [eatableCell, setNewEatableCell] = useState({
    row: randomRow,
    col: randomCol
  });

  // setInterval(() => {
  //   for (let i = 0; i < snakeSize; i++) {
  //       snakeTrail[i].x * tileSize,
  //       snakeTrail[i].y * tileSize,
  //       tileSize,
  //       tileSize
  // }}, 1000 / 8);

  useEffect(() => {
    if (checkIfSnakeAte(snakePos)) {
      setSnakeSize(snakeSize + 1);
      setNewEatableCell({
        row: Math.floor(Math.random() * size) + 1,
        col: Math.floor(Math.random() * size) + 1
      });
    }
  }, [snakePos]);

  const updateSnakeWithParams = changePosParams => {
    setSnakePos(snake => ({
      row: snake.row + changePosParams.nextY,
      col: snake.col + changePosParams.nextX
    }));

    let body = [{ row: snakePos.row, col: snakePos.col }];
    for (let i = 0; i < snakeSize; i++) {
      body.push({
        row: body[i].row + changePosParams.nextY,
        col: body[i].col + changePosParams.nextX
      });
    }
    setSnakeBody(body);
  };

  useEffect(() => {
    const arrowKeyListener = event => {
      switch (event.keyCode) {
        case ARROW_KEY.UP_ARROW.key: {
          if (snakePos.row < 0 || snakePos.col < 0) endGame();
          const changePosParams = ARROW_KEY.UP_ARROW.operation;
          updateSnakeWithParams(changePosParams);
          break;
        }
        case ARROW_KEY.DOWN_ARROW.key: {
          if (snakePos.row < 0 || snakePos.col < 0) endGame();
          const changePosParams = ARROW_KEY.DOWN_ARROW.operation;
          updateSnakeWithParams(changePosParams);
          break;
        }
        case ARROW_KEY.LEFT_ARROW.key: {
          if (snakePos.row < 0 || snakePos.col < 0) endGame();
          const changePosParams = ARROW_KEY.LEFT_ARROW.operation;
          updateSnakeWithParams(changePosParams);
          break;
        }
        case ARROW_KEY.RIGHT_ARROW.key: {
          if (snakePos.row < 0 || snakePos.col < 0) endGame();
          const changePosParams = ARROW_KEY.RIGHT_ARROW.operation;
          updateSnakeWithParams(changePosParams);
          break;
        }
        default: {
          break;
        }
      }
    };
    document.onkeydown = arrowKeyListener;
    return () => {
      document.removeEventListener("keydown", () => {});
    };
  }, []);

  const grid = make2dArray(size);

  const checkIfSnakeAte = snakePosition => {
    if (
      snakePosition.row === eatableCell.row &&
      snakePosition.col === eatableCell.col
    )
      return true;
    else return false;
  };

  const checkSnakeOnCell = (snakeBody, row, col) => {
    if (snakePos.row === row && snakePos.col === col) return true;
    for (let i = 0; i < snakeBody.length; i++) {
      if (snakeBody[i].row === row && snakeBody[i].col === col) {
        return true;
      } else return false;
    }
  };
  return (
    <div className={styles.board}>
      {grid.map((row, i) => (
        <div key={`row-${row[i].col}`} className={styles.boardRow}>
          {row.map(({ row, col }) => (
            <Cell
              key={`${row} - ${col}`}
              sizeOfGrid={size}
              row={row}
              col={col}
              snakeSize={snakeSize}
              isSnakeOnCell={checkSnakeOnCell(snakeBody, row, col)}
              eatableCell={eatableCell}
              head={snakePos}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
