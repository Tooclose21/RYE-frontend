import '../../../styles.css';
import OrangeNavbar from "../../../navbars/OrangeNavbar";
import React from "react";
import Button from "../../../components/Buttons";
import { useNavigate } from 'react-router-dom';

function ChooseGameMode() {
    const navigate = useNavigate();

    const handleButtonClick = (value) => {
        console.log("Selected mode:", value);
        navigate('/ChooseGameTime', { state: { mode: value } });
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#B2F1FF' }}>
            <OrangeNavbar />
            <h1 className={"choose--game--text"}>Choose game mode</h1>
            <Button
                onClick={() => handleButtonClick("DailyChallenge")}
                loc={{position: 'absolute', top: '35%', left: '35%', width: '35%', height: '8%', color: '#F8A365'}}
                color="#FEE8AA"
            >
                Daily challenge
            </Button>
            <Button
                onClick={() => handleButtonClick("Mimic from name")}
                loc={{position: 'absolute', top: '45%', left: '35%', width: '35%', height: '8%', color: '#F8A365'}}
                color="#FEE8AA"
            >
                Mimic from name
            </Button>
            <Button
                onClick={() => handleButtonClick("Mimic from picture")}
                loc={{position: 'absolute', top: '55%', left: '35%', width: '35%', height: '8%', color: '#F8A365'}}
                color="#FEE8AA"
            >
                Mimic from picture
            </Button>
            <Button
                onClick={() => handleButtonClick("Recognize from picture")}
                loc={{position: 'absolute', top: '65%', left: '35%', width: '35%', height: '8%', color: '#F8A365'}}
                color="#FEE8AA"
            >
                Recognize from picture
            </Button>
            <Button
                onClick={() => navigate('/HowToPlay')}
                loc={{position: 'absolute', top: '75%', left: '35%', width: '35%', height: '8%', color: '#F8A365'}}
                color="#FEE8AA"
            >
                How to play?
            </Button>
        </div>
    );
}

export default ChooseGameMode;
