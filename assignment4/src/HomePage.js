import React from 'react';
import './stylesheet.css';
import Header from "./Header.js";
import {Footer} from "./Footer.js";
import GridSection from "./GridSection.js";

class HomePage extends React.Component {
    constructor(props) {
        super(props); 
        this.checkPage = this.checkPage.bind(this);
    }

    state = {
        showMe: {
            id: "AboutUs",
            showComments: false
        } 
    };

    commentsVisibility = {
        AboutUs: false,
        ContactUs: false,
        HomePage: false,
        Experiments: true,
        GoodWriter: true,
        MindfulFocus: true,
        ProductivitySystems: true,
        SenseOfDirection: true
    };
    testStr = "Experiments";
    state = {showMe: 
        {
            id: this.testStr,
            showComments: this.commentsVisibility[this.testStr]
        }
    };

    checkPage = (id) => {
        this.setState({showMe:id}); 
    }

    render() {
        return (
            <div class = 'grid-container'>
                <Header checkPage = {this.checkPage} />
                <GridSection showMe = {this.state.showMe} />
                <Footer />
            </div>
        );
    }
}

export {HomePage};