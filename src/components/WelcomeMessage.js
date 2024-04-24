// import blueGhost from '../images/blueGhost.png';
import '../styles.css';
import React from "react"


export default function WelcomeMessage() {

    return (
        <welcome>
            <div className={"message--text"}>
            <h1 className="message--text1"> Welcome back!</h1>
            <h1 className="message--text2">What would you like to do today?</h1>
            </div>
            {/*<img src={blueGhost} className="welcome--img" alt="Blue ghost"/>*/}
        </welcome>
    )
}
