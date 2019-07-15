import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div class="menu" id="menu">
        <Link to="/" className="navbar__link"><li>Home</li></Link>
        <Link to="/login" className="navbar__link"><li>Login</li></Link>
        <Link to="/signup" className="navbar__link"><li>Sign Up</li></Link>
    </div>
  )
}

export default NavBar