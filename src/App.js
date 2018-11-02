import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navbar from './components/CustomNavbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


// import './App.css';
import './App2.css';



class App extends Component {


  smoothScrollTo(target, duration) {
    // let targetElement = document.querySelector('#' + target);
    let targetElement = document.getElementById(target);
    // let targetPosition = targetElement.getBoundingClientRect().top;
    let targetPosition = targetElement.offsetTop;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    console.log('targetPos', targetPosition);

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  render() {
    return (
      <div>
        <div id="left">
          <div className="table-cell">
          <h3> Michael Chiang </h3>
            <div className="nav">
              <li onClick={() => this.smoothScrollTo('home', 1000)}> Home </li>
              <li onClick={() => this.smoothScrollTo('about', 1000)}> About </li>
              <li onClick={() => this.smoothScrollTo('skills', 1000)}> Skills </li>
              <li onClick={() => this.smoothScrollTo('projects', 1000)}> Projects </li>
              <li onClick={() => this.smoothScrollTo('contact', 1000)}> Contact </li>
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