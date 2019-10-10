import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet.css';
import * as serviceWorker from './serviceWorker';
import {HomePage} from "./HomePage.js";

let jsxElement = (
    <div>
        <HomePage />
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
