import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import { useInterval } from "./hooks/useInterval";
import {
  ARROW_KEY,
  initialSnakePosition,
  FIELD_ROW,
  FIELD_SIZE,
  DIRECTIONS,
} from "./constants";

function limitField(x) {
  if (x >= FIELD_SIZE) return 0;
  if (x < 0) return FIELD_SIZE - 1;
  return x;
}

function App() {
  const [snakeSegments, setSnakeSegments] = useState(initialSnakePosition);
  const [direction, setDirection] = useState(DIRECTIONS.LEFT);
  const [foodItem, setFoodItem] = useState({
    x: 10,
    y: 10,
  });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [head, ...tail] = snakeSegments;
  let intersectWithItself = tail.some(
    (segment) => segment.x === head.x && segment.y === head.y
  );
  useInterval(
    () => {
      setSnakeSegments((segment) => newSnakePosition(segment, direction));
      if (intersectWithItself) {
        setGameOver(true);
        setSnakeSegments(initialSnakePosition);
        setScore(0);
      }
    },
    gameOver ? null : 100
  );

  function newSnakePosition(segments, direction) {
    const [head] = segments;
    const newHead = {
      x: limitField(head.x + direction.x),
      y: limitField(head.y + direction.y),
    };

    if (newHead.x === foodItem.x && newHead.y === foodItem.y) {
      setScore((score) => score + 1);
      setFoodItem({
        x: Math.round(Math.random() * FIELD_SIZE - 1),
        y: Math.round(Math.random() * FIELD_SIZE - 1),
      });
      return [newHead, ...segments];
    }
    return [newHead, ...segments.slice(0, -1)];
  }

  function getItem(x, y, snakeSegments) {
    if (x === foodItem.x && y === foodItem.y) {
      return <span>🍓</span>;
    }

    for (const segment of snakeSegments) {
      if (segment.x === x && segment.y === y) {
        return <div className={styles.snakeBody} />;
      }
    }
  }

  useEffect(() => {
    const arrowKeyListener = (event) => {
      switch (event.keyCode) {
        case ARROW_KEY.UP_ARROW.key: {
          setDirection(DIRECTIONS.TOP);
          break;
        }
        case ARROW_KEY.DOWN_ARROW.key: {
          setDirection(DIRECTIONS.BOTTOM);

          break;
        }
        case ARROW_KEY.LEFT_ARROW.key: {
          setDirection(DIRECTIONS.LEFT);

          break;
        }
        case ARROW_KEY.RIGHT_ARROW.key: {
          setDirection(DIRECTIONS.RIGHT);

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

  return (
    <div className={styles.app}>
      <p>Snake Game</p>
      {gameOver ? (
        <>
          "Game Over"
          <button
            onClick={() => {
              setGameOver(false);
            }}
          >
            Restart
          </button>
        </>
      ) : (
        <div>
          <div>Score - {score}</div>
          {FIELD_ROW.map((y) => (
            <div className={styles.dFlex} key={y}>
              {FIELD_ROW.map((x) => (
                <span className={styles.emptyBlock}>
                  {getItem(x, y, snakeSegments) || <div />}
                </span>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
