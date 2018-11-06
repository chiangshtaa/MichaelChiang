import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


// import './App.css';
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