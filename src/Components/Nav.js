import React from 'react';
import './Nav.css'
import {Link} from 'react-router-dom'
const Nav=()=>{
    return ( <nav className='nav-bar'>
    <ul className="nav-bar-items">
       <Link to='/'><li style={{color:'white'}}>Home</li></Link>
       <Link to='/category'><li  style={{color:'white'}}>Category</li></Link>
      <Link to='/products'> <li  style={{color:'white'}}>Products</li></Link>
     <Link to='/adminarea'><li  style={{color:'white'}}>Admin area</li></Link> 
    </ul>
  </nav>)
}
export default Nav;