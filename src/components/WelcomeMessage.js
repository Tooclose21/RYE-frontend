// import blueGhost from '../images/blueGhost.png';
import '../styles.css';
import React from "react"
import logo from "../images/logo.svg"


export default function WelcomeMessage() {

    return (
        <>
            <img  src={logo} className="nav--img" alt="logo"/>
            <div className={"message--text"}>
            <h1 className="message--text1"> Welcome back!</h1>
            <h1 className="message--text2">What would you like to do today?</h1>
            </div>
            {/*<img src={blueGhost} className="welcome--img" alt="Blue ghost"/>*/}
        </>
    )
}
