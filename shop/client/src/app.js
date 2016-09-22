
import { DefaultRoute, Link, Route, Router,hashHistory,IndexRoute, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

const Main = require('./components/Main')
const Home = require('./components/Home')
const Listing = require('./components/Listing')
const CheckOut  = require('./components/CheckOut')


function run() {
  ReactDOM.render((
    <Router history={hashHistory} >
      <Route path='/' component={Main}/>
      <Route path='/listing'component={Listing}/>
      <Route path='/main' component={Main}/>
      <Route path='/home' component={Home}/>
      <Route path='/checkout' component={CheckOut}/>
     
    </Router>
    ), document.getElementById('app'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}


