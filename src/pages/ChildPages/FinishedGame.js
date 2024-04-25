
import '../../styles.css';
import Navbar from "../../components/Navbar";
import React from "react";
import BlueGhost from "../../components/BlueGhost";
import Button from "../../components/Buttons";
import {Link } from 'react-router-dom'
import blueGhost from "../../images/blueGhost.png";

function FinishedGame() {
    return (
        <div style={{backgroundColor: '#FFF9E9'}}>
            <Navbar style={{backgroundColor: "#F0BE5E"}} textColor="#FDFEFF"/>
            <h1 className={"finished--game--text1"}>Great job!</h1>
            <h1 className={"finished--game--text2"}>You’ll became a pro soon!</h1>
            <h2 className={"score--text"}>Score: 1/5</h2>
            <img src={blueGhost} className="bghost--score" alt="Blue Ghost"/>
            <Button loc={{position: 'absolute', top: '60%', left: '55%', width: '20%', height: '8%', color: '#ED9C00'}}
                    color="#FEE8AA">Next quest</Button>
            <Button loc={{position: 'absolute', top: '70%', left: '55%', width: '20%', height: '8%', color: '#ED9C00'}}
                    color="#FEE8AA">Finish</Button>
        </div>
    );
}

export default FinishedGame;
