import logo from '../images/logo.svg';
import '../styles.css';
import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img  src={logo} className="nav--img" width={70} height={70} alt="logo"/>
            <div className="nav--text">
            <h1 className="nav--text1"> RYE</h1>
            <h3 className="nav--text2">Recognize your emotions</h3>
            </div>
        </nav>
    )
}

