var React = require('react')


var BasketItem = React.createClass({


  render: function(){
    return (
     <div className="description">
     <h4 className="item">
     {this.props.description}
     {this.props.price}
     </h4>
     </div>
      )
  }

})

module.exports = BasketItem;