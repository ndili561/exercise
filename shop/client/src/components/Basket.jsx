var React = require('react')
var Listing= require('./Listing')
var BasketItem = require('./BasketItem')
var CheckOut = require('./CheckOut')
const ReactRouter = require('react-router')
const {Router, Route, IndexRoute, hashHistory,Link} = ReactRouter


var Basket = React.createClass({

  getInitialState: function(){
    return {items:[{description:null, price:null}]}
  },

  handleCheckOut: function(e){
     this.setState({items: this.props.basket},
     function(){
      this.handleState()
     }
    )
   },

   handleState:function(){
    console.log(this.state.items)
   },

   getTotal: function(){
    if (!this.props.basket) return;
    var result = 0
    for(var i in this.props.basket){
       
    }

   },
  


    render: function() {
      if (!this.props.basket) return;
      var basketItem = this.props.basket.map(function(item){
       return(
        <BasketItem description={item.description} key={item.id} price={item.price}>
       </BasketItem>
        )
      
      })

      return(
      <div className="basket">
      {basketItem}<div></div>

      <Link className="checkout" to="/checkout"><button type="submit" onClick={this.handleCheckOut}>Proceed to checkout</button> </Link>
      <CheckOut className="basket" items={this.state.items}>
      </CheckOut>
     
      </div>
        )
    
    }
});

module.exports = Basket