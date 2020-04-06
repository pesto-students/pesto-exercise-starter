export const make2dArray = size => {
  const grid = [];
  for (let i = 0; i < size; i++) {
    grid[i] = new Array();
    for (let j = 0; j < size; j++) {
      grid[i][j] = { row: i, col: j };
    }
  }
  return grid;
};

export const SNAKE_SIZE = 2;

export const endGame = () => alert("Game End!");

export const getUpdatedSnakePos = (snakePos, direction) => {};
