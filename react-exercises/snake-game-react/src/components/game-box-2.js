import React from "react";
import { isEven, isPositive } from "../utils/integer-utils";
import { Cube } from "./cube";
import Demo from "./demo";

const style = {
  border: "1px solid black",
  display: "flex",
  flexWrap: "wrap",
  height: "400px",
  width: "400px",
};

const [boxSize, cubeSize] = [400, 20];

const defaultProps = {
  boxSize,
  cubeSize,
  style,
};

function GameBox2(props) {
  let updatedProps = updateProps(props, defaultProps);

  return (
    <div className="game-box" style={updatedProps.style}>
      {getCubesHtml(updatedProps.boxSize, updatedProps.cubeSize)}
    </div>
  );
}

const updateProps = (props, defaultProps) => {
  let updatedProps = { ...defaultProps };
  if (isPositive(props.boxSize) && isEven(props.boxSize)) {
    updatedProps.boxSize = props.boxSize;
  }

  if (isPositive(props.cubeSize) && isEven(props.cubeSize)) {
    updatedProps.cubeSize = props.cubeSize;
  }

  updatedProps.style = updateStyles(props.style, updatedProps.style);

  return updatedProps;
};

const updateStyles = (propsStyle, defaultStyle) => {
  return {
    ...defaultStyle,
    ...propsStyle,
  };
};

const getCubesHtml = (boxSize, cubeSize) => {
  let htmlArray = [];

  const cubesCount = getCubesCount(boxSize, cubeSize);
  const cubesInSingleLine = Math.sqrt(cubesCount);

  for (let row = 0; row < cubesInSingleLine; row++) {
    for (let column = 0; column < cubesInSingleLine; column++) {
      htmlArray.push(
        <Cube
          key={`cube_${row}_${column}`}
          style={{
            height: `${cubeSize}px`,
            width: `${cubeSize}px`,
          }}
        />
        // row === 5 ? (
        //   <Demo key={`cube_${row}_${column}`} />
        // ) : (
        //   <Cube
        //     key={`cube_${row}_${column}`}
        //     style={{
        //       height: `${cubeSize}px`,
        //       width: `${cubeSize}px`,
        //     }}
        //   />
        // )
      );
    }
  }

  return htmlArray;
};

const getCubesCount = (boxSize, cubeSize) => {
  if (!isEven(boxSize) || !isEven(cubeSize)) {
    return 0;
  }

  if (!isPositive(boxSize) || !isPositive(cubeSize)) {
    return 0;
  }

  const boxArea = boxSize * boxSize;
  const cubeArea = cubeSize * cubeSize;

  const cubesCount = boxArea / cubeArea;

  return cubesCount;
};

export { getCubesCount, getCubesHtml, GameBox2, style };
