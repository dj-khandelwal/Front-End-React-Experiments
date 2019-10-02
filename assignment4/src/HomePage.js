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

    checkPage = (target) => {
        console.log("HELLO!");
        console.log(target);
        this.setState(state => ({showMe: {
            id: target,
            showComments: this.commentsVisibility[target]
        }})); 
        console.log(this.state.showMe);
    }

    render() {
        console.log("RENDER!");
        console.log(this.state.showMe);
        if (this.state.showMe.showComments) {
            return (
                <div class = 'grid-container'>
                    <Header checkPage = {this.checkPage.bind(this)} />
                    <section class = "grid-section">
                    <NavMenu checkPage = {this.checkPage.bind(this)} /> 
                    <GridContent showMe = {this.state.showMe} />
                    <GridComments />
                    </section>
                    <Footer checkPage = {this.checkPage.bind(this)}/>
                </div>
            );
        } else {
            return (
                <div class = 'grid-container'>
                    <Header checkPage = {this.checkPage.bind(this)} />
                    <section class = "grid-section">
                    <NavMenu checkPage = {this.checkPage.bind(this)} /> 
                    <GridContent showMe = {this.state.showMe} />
                    </section>
                    <Footer checkPage = {this.checkPage.bind(this)}/>
                </div>
            );
            }
    }
}

export {HomePage};