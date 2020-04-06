import { isNumberArrayExactCopy } from "../utils/array-utils";

function Snake(props) {
  const nunmberOfCubeInARow = props.nunmberOfCubeInARow;
  const numberOfCubeInAColumn = props.numberOfCubeInAColumn;

  const startIngPoint = Math.floor(nunmberOfCubeInARow / 2);
  let countOfSnakeStart = 3;

  const SnakeTail = [];

  if (props.snakeTailPosition.length < 3) {
    for (let index = 0; index < countOfSnakeStart; index++) {
      if (SnakeTail.length === 0) {
        SnakeTail.push({
          point: startIngPoint,
          direction: "ArrowDown",
        });
      } else {
        const nextPoint = SnakeTail[index - 1].point + nunmberOfCubeInARow;
        SnakeTail.push({
          point: nextPoint,
          direction: "ArrowDown",
        });
      }
    }

    if (
      !isNumberArrayExactCopy(
        props.snakeTailPosition.map((ele) => ele.point),
        SnakeTail.map((ele) => ele.point)
      )
    ) {
      props._setSnakeTailPosition(SnakeTail);
    }
  }
}
export default Snake;
