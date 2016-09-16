const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router')
const {Router, Route, IndexRoute, hashHistory} = ReactRouter
const Main = require('./components/Main')


const App = React.createClass({

  render(){
    return(
    <Router history={hashHistory}>
    <Route path='/' component={Main}>
    <IndexRoute component={Home}/>
    <Route path='/men' component={Listing}/>
    </Route>
    </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))

