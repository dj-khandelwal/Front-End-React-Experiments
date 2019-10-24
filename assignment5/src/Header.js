import React from 'react';
import './stylesheet.css';
import {Clock} from "./clock.js";
import logo from './BlogHouse.JPG';
import NavLink from "./NavLink.js";

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
      <div className='rowC'><NavLink classname = "header-links" text = "Home" onClick={() => this.handleLinkClick("HomePage")} /> <NavLink classname = "header-links" text = "ContactUs" onClick={() => this.handleLinkClick("ContactUs")}/> <NavLink classname = "header-links" text = "AboutUs" onClick={() => this.handleLinkClick("AboutUs")}/>
      </div>
      </header>
    );
  }
}


export default Header;