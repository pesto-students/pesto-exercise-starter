export const ARROW_KEY = {
  UP_ARROW: {
    key: 38,
    operation: {
      nextX: 0,
      nextY: -1
    }
  },
  // up arrow
  DOWN_ARROW: {
    key: 40,
    operation: {
      nextX: 0,
      nextY: 1
    }
  },
  // down arrow
  LEFT_ARROW: {
    key: 37,
    operation: {
      nextX: -1,
      nextY: 0
    }
  },
  // left arrow
  RIGHT_ARROW: {
    key: 39,
    operation: {
      nextX: 1,
      nextY: 0
    }
  }
  // right arrow
};
