import React from 'react';
import './stylesheet.css';
import {Clock} from "./clock.js";
import logo from './BlogHouse.JPG';
import NavLinks from "./NavLinks.js";

const Header = (props) => {
  return (<header class = "grid-header">
  <a href = "index.html"><img src = {logo} alt="The Blog House" /></a>
  <NavLinks {...props}/>
  <h4><Clock offset = "+0"/></h4>
  </header>);
}

export default Header;