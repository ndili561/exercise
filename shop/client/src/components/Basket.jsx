var React = require('react')
var Listing= require('./Listing')
var BasketItem = require('./BasketItem')


var Basket = React.createClass({
     
    


    render: function() {
      console.log(this.props.basket)
      if (!this.props.basket) return;
      var basketItem = this.props.basket.map(function(item){
       return(
        <BasketItem description={item.description} key={item.id} price={item.price}>
       </BasketItem>
        )
      })

      return(
      <div className="basket">
      {basketItem}
      </div>

        )
     
    }
});

module.exports = Basket