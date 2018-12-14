import React, {Component} from 'react';

import profilePic from './css/img/profilePic.jpeg';
import './css/NavBar.css';


class Navbar extends Component {

  // changePage(t, dur) {
  //   function smoothScrollTo(target, duration) {
  //     // let targetElement = document.querySelector('#' + target);
  //     let targetElement = document.getElementById(target);
  //     // let targetPosition = targetElement.getBoundingClientRect().top;
  //     let targetPosition = targetElement.offsetTop;
  //     let startPosition = window.pageYOffset;
  //     let distance = targetPosition - startPosition;
  //     let startTime = null;

  //     console.log('targetPos', targetPosition);

  //     function animation(currentTime) {
  //       if (startTime === null) startTime = currentTime;
  //       let timeElapsed = currentTime - startTime;
  //       let run = ease(timeElapsed, startPosition, distance, duration);
  //       window.scrollTo(0, run);
  //       if (timeElapsed < duration) requestAnimationFrame(animation);
  //     }

  //     function ease(t, b, c, d) {
  //       t /= d / 2;
  //       if (t < 1) return c / 2 * t * t + b;
  //       t--;
  //       return -c / 2 * (t * (t - 2) - 1) + b;
  //     }

  //     requestAnimationFrame(animation);
  //   }

  //   smoothScrollTo(t, dur);
  //   // this.setState({
  //   //   activePage: t
  //   // });
  // }

  render() {
    return (
      <div className="table-cell">
        <img src={profilePic} id="profilePic" alt="profilePic" />
        <h3> Michael Chiang </h3>
        <div className="nav">
          <div id="homeMenu" className="menu"> Home </div>
          <div id="aboutMenu" className="menu"> About </div>
          <div id="projectsMenu" className="menu"> Projects </div>
          <div id="skillsMenu" className="menu"> Skills </div>
          <div id="contactMenu" className="menu"> Contact </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/michaelchiang3/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/chiangshtaa" target="_blank"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
