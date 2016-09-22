const ShoppingBasket = require('react-icons/lib/md/add-shopping-cart');
const React = require('react')
const Router = require('react-router')
const { Route, IndexRoute, hashHistory, Link} = Router
const Items = require('./Items')
const Basket = require('./Basket')
const CheckOut = require('./CheckOut')


const Listing = React.createClass({

 
  getInitialState(){
    return{searchQuery:'',items:[], basket:[{description:null,price:null, id:null}]}
  },


  componentDidMount: function(){
     var url = "http://localhost:5000/api/shop"
     var request = new XMLHttpRequest();
     request.open("GET", url)

     request.setRequestHeader('Content-Type', 'application/json')
     request.withCredentials = true


     request.onload = () =>{
       if(request.status === 200){
        var data = JSON.parse(request.responseText)
        this.setState({items: data})
       }
       
     }
     request.send(null)
  },

  addToBasket: function(props){
    var item=[]
    this.state.item=this.state.basket
    this.state.item.push(props)
   this.setState({basket: this.state.item})
   console.log(this.state.basket)
   localStorage.setItem('basket', JSON.stringify(this.state.basket));
  },


  render(){
    return(
      <div>
      <nav>
        <ul>
          <li><Link className="home" to='/main'>Home</Link></li>
          <li><Link className="active" to='/home'>About</Link></li>
          <li><Link className="shooo" to='/checkout'>Shopping Basket</Link></li>
        </ul>
      </nav>

      <div className="basket">{
        <Basket className="basket" basket={this.state.basket}>
        </Basket>
      }
      </div>

      <div className="basket">{
        <CheckOut className="basket" basket={this.state.basket}>
        {
          console.log(this.state.basket)
        }
        </CheckOut>
      
      }
      </div>
     
      <div className='shows-container'>
        {
          this.state.items.filter((item) => `${item.description} ${item.img}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0)
           .map((item) => (
            <Items { ...item } key={item.id} addToBasket={this.addToBasket}/>

          ))

        }
      </div>
      </div>
       
  )
  }
})

module.exports = Listing