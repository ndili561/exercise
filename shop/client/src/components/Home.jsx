const React = require('react')
const {Link} = require('react-router')


const Home=() => (
    <div className = "home">
    <h1 className="title">Shop</h1>
    <Link className='show' to='/items'>View items</Link>
    </div>

  )

module.exports = Home