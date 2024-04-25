
import '../styles.css';
import Navbar from "../components/Navbar";
import WelcomeMessage from "../components/WelcomeMessage";
import React from "react";
import BlueGhost from "../components/BlueGhost";
import Button from "../components/Buttons";
import {Link } from 'react-router-dom'

function ChildWelcomePage() {
  return (
      <div style={{backgroundColor: '#FFEEC0'}}>
        <Navbar />
        <WelcomeMessage />
        <BlueGhost />
          <Link to="/ChooseGameMode"><Button loc={{position: 'absolute', top: '45%', left: '60%'}} color="#88CAFC">Play</Button></Link>
          <Button loc={{position: 'absolute', top: '55%', left: '60%'}} color="#88CAFC">Tasks</Button>
          <Link to="/CharacterCustomization"><Button loc={{position: 'absolute', top: '65%', left: '60%'}} color="#88CAFC">Customize</Button></Link>
          <Button loc={{position: 'absolute', top: '75%', left: '60%'}} color="#88CAFC">My stats</Button>
      </div>
  );
}

export default ChildWelcomePage;
