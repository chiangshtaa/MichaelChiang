import React from 'react';
import { getMines, getFlags, getHidden, placeMines, getNeighbors, findNeighbors } from './helpers.js';
import Square from './Square.js';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardData: this.initBoard(this.props.height, this.props.width, this.props.mines),
      gameOver: false,
      mineCount: this.props.mines
    }
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
      this.setState({
        boardData: this.initBoard(nextProps.height, nextProps.width, nextProps.mines),
        gameOver: false,
        mineCount: nextProps.mines,
      });
    }
  }

  initBoard(height, width, mines) {
    let board = [];
    for (let i = 0; i < height; i++) {
      board.push([]);
      for (let j = 0; j < width; j++) {
        board[i][j] = {
          x: i,
          y: j,
          neighbors: 0,
          isMine: false,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false
        }
      }
    }
    board = placeMines(board, height, width, mines);
    board = getNeighbors(board, height, width);
    return board;
  }

  revealBoard() {
    let updatedBoard = this.state.boardData;
    updatedBoard.forEach((boardRow) => {
      boardRow.forEach((square) => {
        square.isRevealed = true;
      })
    })
    this.setState({
      boardData: updatedBoard
    })
  }

  revealEmpty(board, x, y) {
    let neighbors = findNeighbors(board, x, y, this.props.height);
    neighbors.map(neighbor => {
      if (!neighbor.isRevealed && !neighbor.isFlagged && (neighbor.isEmpty || !neighbor.isMine)) {
        board[neighbor.x][neighbor.y].isRevealed = true;
        if (neighbor.isEmpty) {
          this.revealEmpty(board, neighbor.x, neighbor.y);
        }
      }
    });
    return board;
  }

  handleSquareClick(x, y) {
    console.log('x', x, 'y', y)
    let win = false;

    if (this.state.boardData[x][y].isRevealed) {
      return null;
    }

    if (this.state.boardData[x][y].isMine) {
      this.revealBoard();
      alert('Game over!');
    }

    let updatedBoard = this.state.boardData;
    updatedBoard[x][y].isFlagged = false;
    updatedBoard[x][y].isRevealed = true;

    if (updatedBoard[x][y].isEmpty) {
      updatedBoard = this.revealEmpty(updatedBoard, x, y);
    }

    if (getHidden(updatedBoard).length === this.props.mines) {
      win = true;
      this.revealBoard();
      alert('You win!');
    }

    this.setState({
      boardData: updatedBoard,
      gameOver: win,
      mineCount: this.props.mines - getFlags(updatedBoard).length,
    })
  }

  handleFlagPlacement(e, x, y) {
    console.log('flag');
    e.preventDefault();
    let updatedBoard = this.state.boardData;
    let mines = this.state.mineCount;
    let win = false;

    if (updatedBoard[x][y].isRevealed) {
      return;
    }

    if (updatedBoard[x][y].isFlagged) {
      updatedBoard[x][y].isFlagged = false;
      mines++;
    } else {
      updatedBoard[x][y].isFlagged = true;
      mines--;
    }

    if (mines === 0) {
      let mineArray = getMines(updatedBoard);
      let flagArray = getFlags(updatedBoard);
      win = JSON.stringify(mineArray) === JSON.stringify(flagArray);
      if (win) {
        this.revealBoard();
        alert('You win!');
      }
    }

    this.setState({
      boardData: updatedBoard,
      gameOver: win,
      mineCount: mines
    })
  }

  renderBoard(board) {
    let squareSize = 400 / this.props.height;
    let style = {
      width: squareSize + 'px',
      height: squareSize + 'px',
      lineHeight: squareSize + 'px',
    }
    console.log(board);
    return board.map((boardRow) => {
      return boardRow.map((square, i) => {
        let className = 'square-space' + (square.isRevealed ? '' : ' not-revealed') + (square.isMine ? ' mine' : '') + (square.isFlagged ? ' flagged' : '');
        return (
          <Square 
            handleSquareClick={() => this.handleSquareClick(square.x, square.y)}
            cMenu={(e) => this.handleFlagPlacement(e, square.x, square.y)}
            square={square}
            class={className}
            style={style}
            key={i}
          />
        )
      })
    })

  }

  render() {
    return (
      <div className="board">
        <div className="game-results">
          <span className="results"> {this.state.gameOver ? 'You win!' : ''}</span>
        </div>
        <div className="boardtwo">
        {
          this.renderBoard(this.state.boardData)
        }
        </div>
      </div>
    )
  }
}

export default Board;