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
    }
    
    render() {
        if (this.props.showMe.id === "HomePage") {
            return (
                <HomePageContent />  
            );
        } else if (this.props.showMe.id === "AboutUs") {
            return (
                <AboutUsContent />
            );
        } else if (this.props.showMe.id === "Experiments") {
            return (
                <Experiments />
            );
        } else if (this.props.showMe.id === "GoodWriter") {
            return (
                <GoodWriter />
            );
        } else if (this.props.showMe.id === "MindfulFocus") {
            return (
                <MindfulFocus />
            );
        } else if (this.props.showMe.id === "ProductivitySystems") {
            return (
                <ProductivitySystems />
            );
        } else if (this.props.showMe.id === "SenseOfDirection") {
            return (
                <SenseOfDirection />
            );
        } else if (this.props.showMe.id === "ContactUs") {
            return (
                <ContactUsContent />
            );
        }
    }
}

export default GridContent;