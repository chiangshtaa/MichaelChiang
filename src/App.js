import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/CustomNavbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/skills" component={ Skills } />
          <Route path="/projects" component={ Projects } />
          <Route path="/contact" component={ Contact } />
        </div>
      </Router>
    );
  }
}

export default App;