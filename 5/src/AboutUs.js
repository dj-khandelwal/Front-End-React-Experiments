import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet.css';
import * as serviceWorker from './serviceWorker';
import {GridSection} from "./GridSection.js";
import {Header} from "./Header.js";
import {Footer} from "./Footer.js";

// class GridContent extends React.Component {
//     // constructor(props) {
//     //   super(props);
//     // }
//     render() {
//       return (<article class = "grid-content">
//       <h1>About Us:</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum repellendus neque repudiandae fugiat error blanditiis omnis nesciunt nostrum porro, officia vel cum deleniti adipisci nihil perferendis eos, veniam numquam, ipsum.</p>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum repellendus neque repudiandae fugiat error blanditiis omnis nesciunt nostrum porro, officia vel cum deleniti adipisci nihil perferendis eos, veniam numquam, ipsum.</p>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum repellendus neque repudiandae fugiat error blanditiis omnis nesciunt nostrum porro, officia vel cum deleniti adipisci nihil perferendis eos, veniam numquam, ipsum.</p>
//     </article>);
//     }
// }

let jsxElement = (
    <div class = 'grid-container'>
        <Header />
        <GridSection showMe = "AboutUs"/>
        <Footer />
    </div>
);

let rootElement = document.getElementById('root');

ReactDOM.render(
      jsxElement, rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();