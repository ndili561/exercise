const React = require('react')
const ReactRouter = require('react-router')
const {Router, Route, IndexRoute, hashHistory,Link} = ReactRouter


var Main = React.createClass({


  render: function(){
  return(
  <div className="Welcome">
    OnLine Shop
    <Link className='home' to='/Listing'>Enter Shop</Link>
   
  </div>
  )
}
  })
  


module.exports = Main