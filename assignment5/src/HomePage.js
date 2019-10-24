import React from 'react';
import './stylesheet.css';
import Header from "./Header.js";
import {Footer} from "./Footer.js";
import NavMenu from "./NavMenu.js";
import GridContent from "./GridContent.js";
import GridComments from "./GridComments.js";

class HomePage extends React.Component {
    constructor(props) {
        super(props); 
        this.checkPage = this.checkPage.bind(this);
    }

    state = {
        showMe: {
            id: "HomePage",
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
        SenseOfDirection: true,
        ViewContacts: false
    };

    checkPage = (target) => {
        this.setState(state => ({showMe: {
            id: target,
            showComments: this.commentsVisibility[target]
        }})); 
    }

    render() {
            return (
                <div class = 'grid-container'>
                    <Header checkPage = {this.checkPage.bind(this)} />
                    <section class = "grid-section">
                    <NavMenu checkPage = {this.checkPage.bind(this)} /> 
                    <GridContent showMe = {this.state.showMe} />
                    </section>
                    <Footer checkPage = {this.checkPage.bind(this)}/>
                    <script src = "./script.js"></script>
                </div>
            );
    }
}

export {HomePage};