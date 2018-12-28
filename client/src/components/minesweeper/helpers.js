const getMines = function(board) {
  let mines = [];
  board.forEach((row) => {
    row.forEach((square) => {
      if (square.isMine) {
        mines.push(square);
      }
    })
  })
  return mines;
}

const getFlags = function(board) {
  let mines = [];
  board.forEach((row) => {
    row.forEach((square) => {
      if (square.isFlagged) {
        mines.push(square);
      }
    })
  })
  return mines;
}

const getHidden = function(board) {
  let hidden = [];
  board.forEach((boardRow) => {
    boardRow.forEach((square) => {
      if (!square.isRevealed) {
        hidden.push(square);
      }
    })
  })
  return hidden;
}

const placeMines = function(board, height, width, totalMines) {
  let mines = 0;
  while (mines < totalMines) {
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);
    if (!board[x][y].isMine) { // check to see if a mine is already placed there
      board[x][y].isMine = true;
      mines++;
    }
  }

  return board;
}

const getNeighbors = function(board, height, width) {
  let updatedBoard = board;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (!board[i][j].isMine) { // if square is not a mine
        let mines = 0;
        let neighbors = findNeighbors(updatedBoard, i, j, height);
        neighbors.forEach((neighbor) => {
          if (neighbor.isMine) {
            mines++;
          }
        })
        if (mines === 0) {
          updatedBoard[i][j].isEmpty = true;
        }
        updatedBoard[i][j].neighbors = mines;
      }
    }
  }
  return updatedBoard;
}

const findNeighbors = function(board, a, b, size) {
  let neighbors = [];
  let x = board[a][b].x;
  let y = board[a][b].y;

  //top left
  if (x > 0 && y > 0) {
    neighbors.push(board[x - 1][y - 1]);
  }
  //top
  if (x > 0) {
    neighbors.push(board[x - 1][y]);
  }
  //top right
  if (x > 0 && y < size - 1) {
    neighbors.push(board[x - 1][y + 1]);
  }
  //left
  if (y > 0) {
    neighbors.push(board[x][y - 1]);
  }
  //right
  if (y < size - 1) {
    neighbors.push(board[x][y + 1]);
  }
  //bottom left
  if (x < size - 1 && y > 0) {
    neighbors.push(board[x + 1][y - 1]);
  }
  //bottom
  if (x < size - 1) {
    neighbors.push(board[x + 1][y]);
  }
  //bottom right
  if (x < size - 1 && y < size - 1) {
    neighbors.push(board[x + 1][y + 1]);
  }
  return neighbors;
}

module.exports = {
  getMines: getMines,
  getFlags: getFlags,
  getHidden: getHidden,
  placeMines: placeMines,
  getNeighbors: getNeighbors,
  findNeighbors: findNeighbors,


}

