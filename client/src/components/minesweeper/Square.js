import React from 'react';

class Square extends React.Component {
  getValue() {
    if (!this.props.square.isRevealed) {
      return this.props.square.isFlagged ? '🚩' : null;
    }
    if (this.props.square.isMine) {
      return '💣';
    }
    if (this.props.square.neighbors === 0) {
      return null;
    }
    return this.props.square.neighbors;
  }

  render() {
    // let squareSize = 400 / this.props.size;
    // let style = {
    //   width: squareSize + 'px',
    //   height: squareSize + 'px',
    // }
    // let className = 'square-space' + (this.props.square.isRevealed ? '' : ' hidden') + (this.props.square.isMine ? ' mine' : '') + (this.props.square.isFlagged ? ' flagged' : '');
    return (
      <div style={this.props.style} onClick={this.props.handleSquareClick} className={this.props.class} onContextMenu={this.props.cMenu}>
        {this.getValue()}
      </div>
    )
  }
}

export default Square;