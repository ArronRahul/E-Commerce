import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar=()=> {
    const [menu,seMenu]=useState('shop')

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>seMenu('shop')} ><Link to='/' style={{textDecoration: 'none'}}>Shop</Link>{menu==='shop'?<hr></hr>:<></>}</li>
            <li onClick={()=>seMenu('mens')}><Link to='/mens' style={{textDecoration: 'none'}}>Men</Link> {menu==='mens'?<hr></hr>:<></>}</li>
            <li onClick={()=>seMenu('womens')}><Link to='/womens' style={{textDecoration: 'none'}}>Women</Link>{menu==='womens'?<hr></hr>:<></>}</li>
            <li onClick={()=>seMenu('kids')}><Link to='/kids' style={{textDecoration: 'none'}}>Kids</Link>{menu==='kids'?<hr></hr>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login' style={{textDecoration: 'none'}}><button>Login</button></Link>
            <Link to='/cart' style={{textDecoration: 'none'}}><img src={cart_icon} alt="cart" /></Link>
            <div className='nav-cart-count'>0</div>
        </div>
        
    </div>
  )
}

export default Navbar