import React, { Component } from 'react';

import './css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home scroll-container" id="home">
        <div className="me">
          <h1> Michael Chiang </h1>
          <h2> Web Developer </h2>
        </div>
      </div>
    );
  }
}

export default Home;