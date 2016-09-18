
const React = require('react')
const Router = require('react-router')
const { Link, browserHistory } = Router
var ShoppingBasket = require('react-icons/lib/md/add-shopping-cart');
var Basket = require('./Basket')

var Items = React.createClass({
 

  getInitialState: function(){
    return{items:null}
  },

 handleClick: function(e){
   this.setState({items: this.props},
   function(){
   this.handleState()
   }
    )
 },

 handleState: function(){
  
 },


render:function(){

  return(
  <div className="container">
  <div className='box'>
   <img src={`images/${this.props.img}`} className='show-image' />
   <h4 className="description">{this.props.description}</h4>
   <h3 className="price">{"£ "+this.props.price+"0"}</h3>
   <div className="buttonAdd"><button type="submit" onClick={this.handleClick}><ShoppingBasket className="icon" icon={this.icon}/></button></div>
   </div>
   </div>

  

  
 )



}
})


module.exports = Items