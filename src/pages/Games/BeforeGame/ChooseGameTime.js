import '../../../styles.css';
import Navbar from "../../../navbars/OrangeNavbar";
import React from "react";
import Button from "../../../components/Buttons";
import {useLocation, useNavigate} from 'react-router-dom';
import fetchEmotions from "../../../game-handle/FetchEmotions";

function ChooseGameTime() {
    const navigate = useNavigate();
    const location = useLocation();

    const mode = location.state && location.state.mode ? location.state.mode : null;

    const startGame = (quantity, infty = false) => {

        const modeToPath = {
            "Mimic from name": "/MimicFromName",
            "Mimic from picture": "/MimicFromPicture",
            "Recognize from name": "/RecognizeFromPicture",
            "DailyChallenge": "/DailyChallenge",

        };

        const path = modeToPath[mode];
        navigate(path)

    //     if (path) {
    //         fetchEmotions(quantity).then(response => {
    //             console.log(response);
    //             navigate(path, {
    //                 state: {
    //                     quests: quantity,
    //                     images: response.data,
    //                     results: [],
    //                     infty: infty
    //                 }
    //             });
    //         }).catch(error => console.log(error));
    //     } else {
    //         console.log("Invalid mode selected.");
    //     }
    };
    // const handleNavigate = (selectedMode) => {
    //     if(selectedMode==="DailyChallenge"){
    //         navigate("/DailyChallenge");
    //     }
    //     if(selectedMode==="Mimic from name"){
    //         navigate("/MimicFromName");
    //     }
    //     if(selectedMode==="Mimic from picture"){
    //         navigate("/MimicFromPicture");
    //     }
    //     if(selectedMode==="Recognize from name"){
    //         navigate("/RecognizeFromPicture");
    //     }
    // };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#B2F1FF' }}>
            <Navbar style={{backgroundColor: "#F0BE5E"}} textColor="#FDFEFF"/>
            <h1 className="choose--game--text">Choose game mode</h1>
            <Button
                loc={{position: 'absolute', top: '35%', left: '40%', width: '25%', height: '8%', color: '#F8A365'}}
                color="#FEE8AA"
                onClick={() => startGame(5)}
            >
                5 quests
            </Button>
            <Button
                loc={{position: 'absolute', top: '45%', left: '40%', width: '25%', height: '8%', color: '#F8A365'}}
                color="#FEE8AA"
                onClick={() => startGame(10)}
            >
                10 quests
            </Button>
            <Button
                loc={{position: 'absolute', top: '55%', left: '40%', width: '25%', height: '8%', color: '#F8A365'}}
                color="#FEE8AA"
                onClick={() => startGame(15)}
            >
                15 quests
            </Button>
            <Button
                loc={{position: 'absolute', top: '65%', left: '40%', width: '25%', height: '8%', color: '#F8A365'}}
                color="#FEE8AA"
                onClick={() => startGame(1, true)}
            >
                Endless mode
            </Button>
        </div>
    );
}

export default ChooseGameTime;
