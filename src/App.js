import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App2.css';


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
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;