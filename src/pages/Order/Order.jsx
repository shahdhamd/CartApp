import React, { useContext } from 'react'
import './Order.css'
import { Storecontext } from '../../context/Storecontext'
function Order() {
  const { getTotalCartAmount } = useContext(Storecontext)
  return (
    <div className='order'>
      <div className="order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='First name' />
          <input type="text" name="" id="" placeholder='Last name' />
        </div>


        <input type="text" placeholder='Email Address'  style={{    width: 'calc(100% - 22px)'}} />
        <input type="text" placeholder='Street'  style={{    width: 'calc(100% - 22px)'}} />
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='City' />
          <input type="text" name="" id="" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='Zip code' />
          <input type="text" name="" id="" placeholder='Country' />
        </div>
        <input type="text" name="" id="" placeholder='Phone'  style={{    width: 'calc(100% - 22px)'}}/></div>
      <div className="order-right">
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
      </div>

    </div>
  )
}

export default Order