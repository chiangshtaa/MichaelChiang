import React, {Component} from 'react';

import profilePic from './css/img/profilePic.jpeg';
import './css/NavBar.css';


class Navbar extends Component {

  changePage(t, dur) {
    function smoothScrollTo(target, duration) {
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

    smoothScrollTo(t, dur);
    // this.setState({
    //   activePage: t
    // });
  }

  render() {
    return (
      <div className="table-cell">
        <img src={profilePic} id="profilePic" alt="profilePic" />
        <h3> Michael Chiang </h3>
        <div className="nav">
          <li id="homePage" className="active" > Home </li>
          <li id="aboutPage" > About </li>
          <li id="skillsPage" > Skills </li>
          <li id="projectsPage" > Projects </li>
          <li id="contactPage" > Contact </li>
        </div>
      </div>
    );
  }
}

export default Navbar;
