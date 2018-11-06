import React, { Component } from 'react';

import './css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home scroll" id="home">
        <div className="me">
          <h1> Michael Chiang </h1>
          <h3> Web Developer </h3>
        </div>
      </div>
    );
  }
}

export default Home;