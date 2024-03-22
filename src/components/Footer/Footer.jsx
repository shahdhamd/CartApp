import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" className='logoo'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus facere, quas officia perspiciatis cumque quibusdam ab delectus minima cupiditate.</p>
                    <div className="footer-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN ToUCH</h2>
                    <ul>
                        <li>0569322306</li>
                        <li>contact@greatstack.dev</li>
                    </ul>
                </div>
                </div>
                <hr />            

                {/* <br/> */}
                <span>Copyright 202410 Tomato.com - All Right Reserved</span>
        </div>
    )
}

export default Footer