import React from 'react'


class GridContainer extends React.Component {
  render() {
    var grid = this.props.gameData.map((row, i) => {
      return (
        <div className="grid-row" key={i}>
          {
            row.map((a, index) => {
              return (
                <div className="grid-cell" key={index}></div>
              )
            })
          }
        </div>
      )
    })

    return (
      <div className="grid-container">
        {grid}
      </div>
    )
  }
}

export default GridContainer;