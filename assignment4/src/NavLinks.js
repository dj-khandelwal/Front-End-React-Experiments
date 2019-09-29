import React from 'react';
import './stylesheet.css';

class NavLinks extends React.Component {
  constructor(props) {
      super(props); 
      this.handleLinkClick = this.handleLinkClick.bind(this);
    }
  handleLinkClick = (value) => {
    this.props.checkPage(value); 
  }
  render() {
      return (
          <p><a class = "header-links" href = "index.js" /*onClick = {this.handleLinkClick("index")}*/>Home</a><a class = "header-links" href = "ContactUs.js">Contact Us</a><a class = "header-links" href = "./AboutUs.js">About Us</a></p>
      );
  }
}
export default NavLinks;
