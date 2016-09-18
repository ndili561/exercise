const ShoppingBasket = require('react-icons/lib/md/add-shopping-cart');
const React = require('react')
const Router = require('react-router')
const { Route, IndexRoute, hashHistory,Link} = Router
const Items = require('./Items')





const Listing = React.createClass({

 
  getInitialState(){
    return{searchQuery:'',items:[], basket:[]}
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

  render(){
    return(
      <div>
      <nav>
        <ul>
          <li><Link className="home" to='/Main'>Home</Link></li>
          <li className="active">About</li>
          <li>Shopping Basket</li>
          <li>Contact</li>
        </ul>
      </nav>
      


      <div className="list">
          <input className='search-box' type='text' placeholder='Search...' value={this.state.searchQuery} onChange={this.doSearch} />
     
     

      <div className='shows-container'>
        {
          this.state.items.filter((item) => `${item.description} ${item.img}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0)
           .map((item) => (
            <Items { ...item } key={item.id} addToBasket={this.addToBasket}/>

          ))
          
        }
      </div>
      </div>
      </div>
    
       
  )
  }
})

module.exports = Listing