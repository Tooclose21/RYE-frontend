import '../styles.css';
import React from "react"

export default function WelcomeMessage() {
    return (
        <welcome>
            <div className={"message--text"}>
            <h2 className="message--text1"> Welcome back!</h2>
            <h2 className="message--text2">What would you like to do today?</h2>
            </div>
        </welcome>
    )
}
