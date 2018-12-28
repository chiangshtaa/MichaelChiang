import React from 'react';
// import ReactDOM from 'react-dom';
import Board from './Board.js';

import '../css/minesweeper.css';

class MineSweeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 8,
      width: 8,
      mines: 10,
      newGame: true,
    }
  }

  handleGameStart() {
    let difficulty = document.getElementById('level').value;
    let newGame = !this.state.newGame;
    if (difficulty === 'beginner') {
      this.setState({
        height: 8,
        width: 8,
        mines: 10,
        newGame: newGame
      })
    }
    if (difficulty === 'intermediate') {
      this.setState({
        height: 12,
        width: 12,
        mines: 20,
        newGame: newGame
      })
    }
    if (difficulty === 'advanced') {
      this.setState({
        height: 16,
        width: 16,
        mines: 40,
        newGame: newGame
      })
    }
  }

  render() {
    return (
      <div className="game">
        <h2>MineSweeper</h2>
        <div className="game-info">
          <span>Level:  
            <select id="level" onChange={() => this.handleGameStart()}>
              <option value="beginner"> Beginner </option>
              <option value="intermediate"> Intermediate </option>
              <option value="advanced"> Advanced </option>
            </select>
          </span>
          <button className="playAgain" onClick={() => this.handleGameStart()}>New Game</button>
        </div>

        <Board height={this.state.height} width={this.state.width} mines={this.state.mines} change={this.state.newGame}/>
      </div>
    )
  }
}

export default MineSweeper;