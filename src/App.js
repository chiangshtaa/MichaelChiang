import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navbar from './components/CustomNavbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

// import { Grid, Row, Col } from 'react-bootstrap';

// import './App.css';
import './App2.css';


class App extends Component {
  render() {
    return (
      <div>
        <div id="left">
          <div className="table-cell">
          <h3> Michael Chiang </h3>
            <div className="nav">
              <li><a href="#home"> Home </a></li>
              <li><a href="#about"> About </a></li>
              <li><a href="#skills"> Skills </a></li>
              <li><a href="#projects"> Projects </a></li>
              <li><a href="#contact"> Contact </a></li>
            </div>
          </div>
        </div>   

        <div id="right">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
    </div>
    );
  }
}

export default App;
      // <Router>
      //   <div className="container">
      //     <Grid className="grid" fluid={true}>
      //       <Row className="show-grid">
      //         <Col xs={12} md={3} className="navbar" >
      //           <Navbar />
      //         </Col>
      //         <Col xs={6} md={9} className="info">
      //           <div className="App">
      //             <Route exact path="/" component={ Home } />
      //             <Route path="/about" component={ About } />
      //             <Route path="/skills" component={ Skills } />
      //             <Route path="/projects" component={ Projects } />
      //             <Route path="/contact" component={ Contact } />
      //           </div>
      //         </Col>
      //       </Row>
      //     </Grid>

          
      //   </div>
      // </Router>