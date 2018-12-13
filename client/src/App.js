import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
// import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import Projects2 from './components/Projects2';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <div id="left">
          <NavBar />
        </div>   

        <div id="right">
          <Home />
          <About />
          <Projects2 />
          <Skills />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;