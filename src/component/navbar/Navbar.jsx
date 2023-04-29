import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="https://www.freshmenu.com/images/fm-header-logo.svg" alt="" />
      </div>
      <div className="leftContent">
        <ul className='menu'>
          <Link to="/register">
            <li>Register</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/offers">
            <li>offers</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>



        </ul>
      </div>
    </div>
  )
}

export default Navbar