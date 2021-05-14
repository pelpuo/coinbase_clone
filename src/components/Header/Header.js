import React from 'react'
import './Header.css';
import logo from "./../../images/logo.svg";
import Button from '@material-ui/core/Button';

function Header() {
    return (
        <div className="Header_container">
            <div className="Header_div">
                <img id="logo" src={logo} alt="coinbase" ></img>

                <ul className="nav_list">
                <li><a href="#">Prices</a></li> 
                <li><a href="#">Learn</a></li> 
                <li><a href="#">Individuals</a></li> 
                <li><a href="#">Businesses</a></li> 
                <li><a href="#">Developers</a></li> 
                <li><a href="#">Company</a></li> 
                </ul>    

                <div className="auth_btns">
                    <a href="#" id="SignIn">
                        Sign In
                    </a>
                    <button id="GetStarted">
                        Get Started
                    </button>
                </div>    
            </div>
        </div>
    )
}

export default Header
