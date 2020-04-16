export const ARROW_KEY = {
  UP_ARROW: {
    key: 38,
    operation: {
      nextX: 0,
      nextY: -1,
    },
  },
  // up arrow
  DOWN_ARROW: {
    key: 40,
    operation: {
      nextX: 0,
      nextY: 1,
    },
  },
  // down arrow
  LEFT_ARROW: {
    key: 37,
    operation: {
      nextX: -1,
      nextY: 0,
    },
  },
  // left arrow
  RIGHT_ARROW: {
    key: 39,
    operation: {
      nextX: 1,
      nextY: 0,
    },
  },
  // right arrow
};
export const FIELD_SIZE = 15;
export const FIELD_ROW = [...new Array(FIELD_SIZE).keys()];

export const DIRECTIONS = {
  RIGHT: { x: 1, y: 0 },
  LEFT: { x: -1, y: 0 },
  TOP: { x: 0, y: -1 },
  BOTTOM: { x: 0, y: 1 },
};

export const initialSnakePosition = [
  { x: 8, y: 8 },
  { x: 8, y: 7 },
  { x: 8, y: 6 },
];
