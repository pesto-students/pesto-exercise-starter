import React, { useState, useEffect, useCallback } from "react";
import Snake from "../Snake/index";
import Food from "../Food/index";

import "./styles.css";
export default function Canvas() {
  const [body, setBody] = useState([
    [0, 0],
    [2, 0],
  ]);
  const [foodBody, setFoodBody] = useState([10, 10]);
  const [xdir, setXdir] = useState(0);
  const [ydir, setYdir] = useState(0);
  const updatePosition = useCallback((e) => {
    switch (e.code) {
      case "ArrowUp":
        setYdir(-2);
        setXdir(0);
        break;
      case "ArrowDown":
        setYdir(2);
        setXdir(0);
        break;
      case "ArrowLeft":
        setXdir(-2);
        setYdir(0);
        break;
      case "ArrowRight":
        setXdir(2);
        setYdir(0);
        break;
      default:
        break;
    }
    const newBody = body.map((b) => [b[0] + xdir, b[1] + ydir]);
    setBody(newBody);
  });

  const checkIfOutOfBorders = () => {
    let head = body[body.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      console.log("game over");
    }
  };

  const checkIfEat = () => {
    let head = body[body.length - 1];
    if (head[0] === foodBody[0] && head[1] === foodBody[1]) {
      setFoodBody(getRandomCoordinates());
      enlargeSnake();
      //this.increaseSpeed();
    }
  };

  useEffect(() => {
    document.onkeydown = updatePosition;
  }, [updatePosition]);

  useEffect(() => {
    console.log(body, "body");
    checkIfOutOfBorders();
    checkIfEat();
  }, [body, checkIfEat, checkIfOutOfBorders]);

  const getRandomCoordinates = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x, y];
  };

  const enlargeSnake = () => {
    console.log("enalrged", body);
    let newSnake = [
      ...body,
      [body[body.length - 1][0] + 2, body[body.length - 1][1]],
    ];
    console.log(newSnake, xdir, ydir);
    setBody(newSnake);
  };
  return (
    <div className="game-area" onKeyPress={updatePosition}>
      <Snake body={body}></Snake>
      <Food foodBody={foodBody}></Food>
    </div>
  );
}
