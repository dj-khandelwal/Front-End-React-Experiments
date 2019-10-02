import React from 'react';
import './stylesheet.css';

class NavLinks extends React.Component {
  constructor(props) {
      super(props); 
      //this.handleLinkClick = this.handleLinkClick.bind(this);
    }
  render() {
      return (
          <div class = {this.props.classname} onClick={this.props.onClick}>{this.props.text}</div>
      );
  }
}
export default NavLinks;
