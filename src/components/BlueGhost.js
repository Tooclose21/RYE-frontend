import blueGhost from '../images/blueGhost.png';
import '../styles.css';
import React from "react"

export default function BlueGhost() {
    return(
        <>
        <img src={blueGhost} className="bghost--img" alt="Blue ghost"/>
        </>)
}