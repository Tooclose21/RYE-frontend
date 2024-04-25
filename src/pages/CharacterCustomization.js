
import '../styles.css';
import Navbar from "../components/Navbar";
import React from "react";
import Button from "../components/Buttons";
import {Link } from 'react-router-dom'
import blueGhost from "../images/blueGhost.png";

function CharacterCustomization() {
    return (
        <div style={{backgroundColor: '#F2EFE3'}}>
            <Navbar style={{backgroundColor: "#F0BE5E"}} textColor="#FDFEFF"/>
            <img src={blueGhost} className="bghost--img--customize" alt="Blue ghost"/>
            <Link to=""><Button loc={{position: 'absolute', top: '75%', left: '50%'}} color="#88CAFC">Ok</Button></Link>
            <Button loc={{position: 'absolute', top: '75%', left: '70%'}} color="#88CAFC">Cancel</Button>
        </div>
    );
}

export default CharacterCustomization;
