
import '../styles.css';
import Navbar from "../components/Navbar";
import React from "react";
import Button from "../components/Buttons";

function ChooseGameMode() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#B2F1FF' }}>
            <Navbar />
            <Button loc={{position: 'absolute', top: '35%', left: '35%', width: '35%', height: '8%', color: '#F8A365'}} color="#FEE8AA">Daily challenge</Button>
            <Button loc={{position: 'absolute', top: '45%', left: '35%', width: '35%', height: '8%', color: '#F8A365'}} color="#FEE8AA">Mimic from name</Button>
            <Button loc={{position: 'absolute', top: '55%', left: '35%', width: '35%', height: '8%', color: '#F8A365'}} color="#FEE8AA">Mimic from picture</Button>
            <Button loc={{position: 'absolute', top: '65%', left: '35%', width: '35%', height: '8%', color: '#F8A365'}} color="#FEE8AA">Recognize from picture</Button>
            <Button loc={{position: 'absolute', top: '75%', left: '35%', width: '35%', height: '8%', color: '#F8A365'}} color="#FEE8AA">How to play?</Button>
        </div>
    );
}

export default ChooseGameMode;