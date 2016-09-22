const React = require('react')
const Router = require('react-router')
const { Route, IndexRoute, hashHistory, Link} = Router


var CheckOut = React.createClass({

  getInitialState: function () {
      return {basket: null}
    },

    componentDidMount: function(){
      var data = JSON.parse(localStorage.getItem('basket') || '{}')
      this.setState({basket: data})

    },


  render: function(){
     return(
      <div className='shows-container'>  
      </div>
      )
  }



})

module.exports = CheckOut