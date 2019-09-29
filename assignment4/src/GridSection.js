import React from 'react';
import './stylesheet.css';
import NavMenu from "./NavMenu.js";
import {GridContent} from "./GridContent.js";
import GridComments from './GridComments';

class GridSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showMe: props.showMe};
  }

  render() {
    if (this.state.showMe.showComments) {
        return (
          <section class = "grid-section">
            <NavMenu /> <GridContent showMe = {this.props.showMe} /> <GridComments /> 
          </section>
        );
    } else {
        return (
          <section class = "grid-section">
            <NavMenu /> <GridContent showMe = {this.props.showMe} /> 
          </section>
        );
    }
}
}

export default GridSection;