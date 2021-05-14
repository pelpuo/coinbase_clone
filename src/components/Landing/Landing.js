import React from 'react'
import "./Landing.css"
import phone from "./../../images/phone.png"
import btc_blue from "./../../images/btc_blue.png"

function Landing() {
    return (
        <div className="Landing_container">
            <div className="Landing_div">
                <div className="Landing_info">
                    <div id="jump_start_link">
                        <img src={btc_blue} alt="btc blue"></img>
                        <p>Jump start your portfolio</p>
                        <p id="arrow">→</p>
                    </div>
                    <h1>Jump start your crypto portfolio</h1>
                    <h4>Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</h4>
                    <div className="getStarted">
                        <input type="text" placeholder="Email Address"></input>
                        <button>Get Started</button>
                    </div>
                </div>
                <img alt="landing" src={phone}></img>
            </div>
        </div>
    )
}

export default Landing
