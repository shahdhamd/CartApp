import React, { useContext } from 'react'
import './Cart.css'
import { Storecontext } from '../../context/Storecontext'
import { useNavigate } from 'react-router-dom'
function Cart() {
  const { food_list, cartItem, removeCart ,getTotalCartAmount} = useContext(Storecontext)
  let navigate=useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quatity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((i, index) => {
          if (cartItem[i._id]) {
            console.log(i.id)

            return (
              (
                <>
                  <div className='cart-items-title cart-items-item '>
                    <img src={i.image} alt="" />
                    <p>{i.name}</p>
                    <p>${i.price}</p>
                    <p>{cartItem[i._id]}</p>
                    <p>{cartItem[i._id] * (i.price)}</p>
                    <p className='remove' onClick={() => removeCart(i._id)}>x</p>
                  </div>
                  <hr />
                </>

              )
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className='x'>
            <div className="cart-total-detalis">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detalis">
              <p>Delivery  fee</p>
              <p>${getTotalCartAmount()===0 ? 0:5}</p>
            </div>
            <hr />
            <div className="cart-total-detalis">
              <p>Total</p>
              <p>${getTotalCartAmount()===0 ? 0:getTotalCartAmount()+5}</p>
            </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
     <div className="cart-code">
        <div>
          <p>If you have a promo code, Enter it here.</p>
          <form action="" className="cart-input">
            <input type="text" name="" id="" placeholder='Code...' />
            <button>Submit</button>
          </form>
        </div>
      </div> </div>
      
    </div>
  )
}

export default Cart