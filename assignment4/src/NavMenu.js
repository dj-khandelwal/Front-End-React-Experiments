import React from 'react';
import './stylesheet.css';

class NavMenu extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
    render() {
      return (<nav id = 'menu' class = "grid-menu">
      <ul>
        <li><a class = "nav-links" href="8 Experiments in Motivation.html">8 Experiments in Motivation</a></li>
        <li><a class = "nav-links" href="A Mindful Shift of Focus.html">A Mindful Shift of Focus</a></li>
        <li><a class = "nav-links" href="How to Develop an Awesome Sense of Direction.html">How to Develop an Awesome Sense of Direction</a></li>
        <li><a class = "nav-links" href="Training to Be a Good Writer.html">Training to Be a Good Writer</a></li>
        <li><a class = "nav-links" href="What Productivity Systems Won't Solve.html">What Productivity Systems Won't Solve</a></li>    
      </ul>
    </nav>);
    }
}

export default NavMenu;