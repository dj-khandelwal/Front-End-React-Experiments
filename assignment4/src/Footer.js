import React from 'react';
import './stylesheet.css';
import NavLinks from "./NavLinks.js";

class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    handleLinkClick = (value) => {
      this.props.checkPage(value); 
    }
    
    render() {
      return (<header class = "grid-footer">
      <div className='rowC'><NavLinks classname = "footer-links" text = "Home" onClick={() => this.handleLinkClick("HomePage")} /> <NavLinks classname = "footer-links" text = "ContactUs" onClick={() => this.handleLinkClick("ContactUs")}/> <NavLinks classname = "footer-links" text = "AboutUs" onClick={() => this.handleLinkClick("AboutUs")}/>
      </div>
      </header>);
    }
  }

export {Footer};