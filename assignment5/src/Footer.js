import React from 'react';
import './stylesheet.css';
import NavLink from "./NavLink.js";

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
      <div className='rowC'><NavLink classname = "footer-links" text = "Home" onClick={() => this.handleLinkClick("HomePage")} /> <NavLink classname = "footer-links" text = "ContactUs" onClick={() => this.handleLinkClick("ContactUs")}/> <NavLink classname = "footer-links" text = "AboutUs" onClick={() => this.handleLinkClick("AboutUs")}/> <NavLink classname = "footer-links" text = "ViewContacts" onClick={() => this.handleLinkClick("ViewContacts")}/>
      </div>
      </header>);
    }
  }

export {Footer};