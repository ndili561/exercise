
import { DefaultRoute, Link, Route, RouteHandler,Router,hashHistory,IndexRoute, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

const Main = require('./components/Main')
const Home = require('./components/Home')
const Listing = require('./components/Listing')


function run() {
  ReactDOM.render((
    <Router history={browserHistory} >
    <Route path='/' component={Main}/>
    <Route path='/Listing'component={Listing}/>
    <Route path='/Main' component={Main}/>
    </Router>
    ), document.getElementById('app'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}


