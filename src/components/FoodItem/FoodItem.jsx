import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../context/Storecontext';
function FoodItem({id,desc,image,name,price}) {
    // const [itemCount,setItemCount]=useState(0);
    const {setCartItem,addToCart,removeCart,cartItem}=useContext(Storecontext);

  return (
    <div className="food-item">
        <div className="food-item-img">
            <img className='food-image' src={image} alt="img" />
       
        {!cartItem[id] ? <img onClick={()=>addToCart(id)} src={assets.add_icon_white}    className='add' /> :
        <div className="food-item-count">
            <img src={assets.remove_icon_red} onClick={()=>removeCart(id)}  alt='remove'/>
            <p>{cartItem[id]}</p>
            <img src={assets.add_icon_green} onClick={()=>addToCart(id)}   alt='add'/>

        </div>
        } </div>
        <div className="food-item-text">
            <div className="food-rating">
                <p>{name}</p>
                <img src={assets.rating_starts}  alt=''/>
            </div>
            <p className="food-desc">
                {desc}
            </p>
            <p className="food-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem