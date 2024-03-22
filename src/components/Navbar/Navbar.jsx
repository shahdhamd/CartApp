import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from './../../assets/assets';
import { Storecontext } from '../../context/Storecontext';
import {Link} from 'react-router-dom'
function Navbar({setShowLogin}) {
    const [menu,setMenu]=useState('home')
    const { getItemQuantity } = useContext(Storecontext);

    return (
        <div className='navbar'>
          <Link to='/home'> <img src={assets.logo} alt='logo' /></Link> 
            <ul className="navbar-menu">
                <li onClick={()=>setMenu('home')} className={menu=='home'? 'active':''}><a href='#header'>Home</a> </li>
                <li onClick={()=>setMenu('menu')} className={menu=='menu'? 'active':''}><a href='#explore-menu'>menu</a> </li>
                {/* <li onClick={()=>setMenu('mobile')} className={menu=='mobile'? 'active':''}>mobile-app</li> */}
                <li onClick={()=>setMenu('contact')} className={menu=='contact'? 'active':''}><a href='#footer'>contact us</a></li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                 <Link to='/cart'>   <img src={assets.basket_icon} alt="basket icon" /></Link>
                    <div className="dot">{getItemQuantity()}</div>
                </div>
                <button onClick={()=>setShowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}

export default Navbar