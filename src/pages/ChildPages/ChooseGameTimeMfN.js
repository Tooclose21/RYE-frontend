
import '../../styles.css';
import Navbar from "../../components/Navbar";
import React from "react";
import Button from "../../components/Buttons";
import {Link } from 'react-router-dom'

function ChooseGameTimeMfN() {

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#B2F1FF' }}>
            <Navbar style={{backgroundColor: "#F0BE5E"}} textColor="#FDFEFF"/>
            <h1 className={"choose--game--text"}>Choose game mode</h1>
            <Link to={`/MimicFromName?quests=5`}><Button loc={{position: 'absolute', top: '35%', left: '40%',
                width: '25%', height: '8%', color: '#F8A365'}} color="#FEE8AA">5 quests</Button></Link>
            <Link  to={`/MimicFromName?quests=10`}><Button loc={{position: 'absolute', top: '45%', left: '40%',
                width: '25%', height: '8%', color: '#F8A365'}} color="#FEE8AA">10 quests</Button></Link>
            <Link to={`/MimicFromName?quests=15`}><Button loc={{position: 'absolute', top: '55%', left: '40%',
                width: '25%', height: '8%', color: '#F8A365'}} color="#FEE8AA">15 quests</Button></Link>
            <Link to={`/MimicFromName?quests=${Infinity}`}><Button loc={{position: 'absolute', top: '65%', left: '40%',
                width: '25%', height: '8%', color: '#F8A365'}} color="#FEE8AA">Endless mode</Button></Link>
        </div>
    );
}

export default ChooseGameTimeMfN;