import React from 'react';
import './stylesheet.css';
import NavLinks from "./NavLinks.js";

class Footer extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
    render() {
      return (<header class = "grid-footer">
      <NavLinks />
      </header>);
    }
  }

export {Footer};