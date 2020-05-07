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
import ViewContactsContent from './content/ViewContactsContent.js';

class GridContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMe: {
                id: this.props.showMe.id, 
                showComments: ""
            }
        }
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
                <Experiments showMe = {this.props.showMe}/>
            );
        } else if (this.props.showMe.id === "GoodWriter") {
            return (
                <GoodWriter showMe = {this.props.showMe}/>
            );
        } else if (this.props.showMe.id === "MindfulFocus") {
            return (
                <MindfulFocus showMe = {this.props.showMe}/>
            );
        } else if (this.props.showMe.id === "ProductivitySystems") {
            return (
                <ProductivitySystems showMe = {this.props.showMe}/>
            );
        } else if (this.props.showMe.id === "SenseOfDirection") {
            return (
                <SenseOfDirection showMe = {this.props.showMe}/>
            );
        } else if (this.props.showMe.id === "ContactUs") {
            return (
                <ContactUsContent />
            );
        } else if (this.props.showMe.id === "ViewContacts") {
            return (
                <ViewContactsContent showMe = {this.props.showMe} />
            );
        }
    }
}

export default GridContent;