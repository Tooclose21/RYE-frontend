import '../../styles.css';
import Navbar from "../../components/Navbar";
import React from "react";
import Button from "../../components/Buttons";
import {Link } from 'react-router-dom'
import emotion from "../../images/emotion.png";

function MimicFromPicture() {
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#F2EFE3'}}>
            <Navbar style={{backgroundColor: "#F0BE5E"}} textColor="#FDFEFF"/>
            <h1 className="mfp--headline">Mimic from picture</h1>
            <img src={emotion} className="emotion--img" alt="Face with emotion to mimic"/>
            <Button loc={{position: 'absolute', top: '80%', left: '43%', width: '15%', height: '8%', color: '#F8A365'}}
                    color="#FEE8AA">Take a picture</Button>
            <Link to="/FinishedGame"><Button loc={{position: 'absolute', top: '80%', left: '75%', width: '10%', height: '8%', color: '#F8A365'}}
                                               color="#FEE8AA">Finish</Button></Link>
            <h1 className="counter--text--mfp">1/5</h1>
        </div>
    );
}

export default MimicFromPicture;
