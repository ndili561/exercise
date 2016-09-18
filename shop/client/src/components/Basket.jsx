const React = require('react')
const Router = require('react-router')
const { Link, browserHistory } = Router


var Basket = React.createClass({

  render: function(){
     if(!this.props&this.props.length>1){return;}
     console.log(this.props)
     return(

     <div className="basket">{this.props.description}</div>

      )




  

  }
})

module.exports = Basket