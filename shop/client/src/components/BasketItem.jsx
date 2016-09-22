var React = require('react')


var BasketItem = React.createClass({



  render: function(){
    return (
     <div className="descr">
     {this.props.description}
     <h4 className="it">
     {this.props.price}
     </h4>
     </div>
      )
  }

})

module.exports = BasketItem;