import React from "react";
import styles from "./Cell.module.scss";

export const Cell = ({
  row,
  col,
  sizeOfGrid,
  head,
  isSnakeOnCell,
  eatableCell
}) => {
  const isHead = () => head.row === row && head.col === col;
  const isEatableCell = () =>
    eatableCell.row === row && eatableCell.col === col;

  return col !== sizeOfGrid ? (
    <div
      className={
        isSnakeOnCell
          ? isHead()
            ? styles.headStyle
            : styles.filledCell
          : isEatableCell()
          ? styles.eatableCell
          : styles.cell
      }
    />
  ) : (
    <br />
  );
};
