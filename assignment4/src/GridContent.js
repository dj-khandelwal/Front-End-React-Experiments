import React from 'react';
import './stylesheet.css';
import HomePageContent from './content/HomePageContent.js';
import AboutUsContent from './content/AboutUsContent.js';
import Experiments from './content/Experiments.js';
import MindfulFocus from './content/MindfulFocus.js';
import GoodWriter from './content/GoodWriter.js';
import ProductivitySystems from './content/ProductivitySystems.js';
import SenseOfDirection from './content/SenseOfDirection.js';
import ContactUsContent from './content/ContactUsContent.js';

class GridContent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showMe: props.showMe};
    }
    
    render() {
        if (this.state.showMe.id === "HomePage") {
            return (
                <HomePageContent />  
            );
        } else if (this.state.showMe.id === "AboutUs") {
            return (
                <AboutUsContent />
            );
        } else if (this.state.showMe.id === "Experiments") {
            return (
                <Experiments />
            );
        } else if (this.state.showMe.id === "GoodWriter") {
            return (
                <GoodWriter />
            );
        } else if (this.state.showMe.id === "MindfulFocus") {
            return (
                <MindfulFocus />
            );
        } else if (this.state.showMe.id === "ProductivitySystems") {
            return (
                <ProductivitySystems />
            );
        } else if (this.state.showMe.id === "SenseOfDirection") {
            return (
                <SenseOfDirection />
            );
        } else if (this.state.showMe.id === "ContactUs") {
            return (
                <ContactUsContent />
            );
        }
    }
}

export {GridContent};