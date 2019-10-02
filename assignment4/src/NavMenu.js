import React from 'react';
import './stylesheet.css';
import NavLinks from './NavLinks.js';

class NavMenu extends React.Component {
    constructor(props) {
      super(props);
      this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    handleLinkClick = (value) => {
      this.props.checkPage(value); 
    }
    
    render() {
      return (<nav id = 'menu' class = "grid-menu">
      <ul>
        <li><NavLinks classname = "nav-links" text = "8 Experiments in Motivation" onClick={() => this.handleLinkClick("Experiments")} /> </li>
        <li><NavLinks classname = "nav-links" text = "A Mindful Shift of Focus" onClick={() => this.handleLinkClick("MindfulFocus")}/> </li>
        <li><NavLinks classname = "nav-links" text = "How to Develop an Awesome Sense of Direction" onClick={() => this.handleLinkClick("SenseOfDirection")}/> </li>
        <li><NavLinks classname = "nav-links" text = "Training to Be a Good Writer" onClick={() => this.handleLinkClick("GoodWriter")}/></li>
        <li><NavLinks classname = "nav-links" text = "What Productivity Systems Won't Solve" onClick={() => this.handleLinkClick("ProductivitySystems")}/> </li>
      </ul>
    </nav>);
    }
}

export default NavMenu;