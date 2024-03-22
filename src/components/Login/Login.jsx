import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets';
function Login({ setShowLogin }) {
    const [currState, SetCurrState] = useState('Login');
    return (
        <div className='login'>

            <form className="login-container" action="">
                <div className="login-title">
                    <h2>{currState}</h2>
                    <img src={assets.cross_icon} onClick={() => setShowLogin(false)} alt="close" />
                </div>
                <div className="login-input">
                    {currState === 'Login' ?
                        <></>
                        : <><input type="text" name="" id="" placeholder='Your name' required /></>}
                    {/* <input type="text" name="" id="" placeholder='Your name' required/> */}
                    <input type="email" name="" id="" placeholder='Your email' required />
                    <input type="password" name="" id="" placeholder='password' required />
                </div>
                <button>{currState === 'Login' ? 'Login' : 'create Account'}</button>
                <div className="login-condition">
                    <input type="checkbox" name="" id="" required />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                    {currState === 'Login' ?
                        <p onClick={() => SetCurrState('sign up')}>create a new accoutn?  <span>Click here</span></p>
                        : <p onClick={() => SetCurrState('Login')}>Already have an account? <span>Login here</span></p>
                    }
            </form>

        </div>
    )
}

export default Login