import React from 'react';
import './stylesheet.css';
import {Clock} from "./clock.js";
import logo from './BlogHouse.JPG';
import NavLinks from "./NavLinks.js";

class Header extends React.Component {

  constructor(props) {
    super(props); 
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }
  
  handleLinkClick = (value) => {
    this.props.checkPage(value); 
  }
  
  render() {
    return (<header class = "grid-header">
      <a href = "index.html"><img src = {logo} alt="The Blog House" /></a>
      <h4><Clock offset = "+0"/></h4>
      <div className='rowC'><NavLinks classname = "header-links" text = "Home" onClick={() => this.handleLinkClick("HomePage")} /> <NavLinks classname = "header-links" text = "ContactUs" onClick={() => this.handleLinkClick("ContactUs")}/> <NavLinks classname = "header-links" text = "AboutUs" onClick={() => this.handleLinkClick("AboutUs")}/>
      </div>
      </header>
    );
  }
}


export default Header;