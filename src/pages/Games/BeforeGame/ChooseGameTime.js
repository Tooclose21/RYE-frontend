import '../../../styles.css';
import Navbar from "../../../navbars/OrangeNavbar";
import React from "react";
import Button from "../../../components/Buttons";
import {useLocation, useNavigate} from 'react-router-dom';
import fetchEmotions from "../../../game-handle/FetchEmotions";
import fetchPicture from "../../../game-handle/PictureFetch";
import {useApi} from "../../../api/ApiProvider";

function ChooseGameTime() {
    const navigate = useNavigate();
    const location = useLocation();
    const api = useApi();

    const mode = location.state && location.state.mode ? location.state.mode : null;

    const startGame = (quantity, infty = false) => {

        const modeToPath = {
            "Mimic from name": "/MimicFromName",
            "Mimic from picture": "/MimicFromPicture",
            "Recognize from picture": "/RecognizeFromPicture",
            "DailyChallenge": "/DailyChallenge",
        };

        const funcToPath = {
            "Mimic from name": "name",
            "Mimic from picture": "pic",
            "Recognize from picture": "rec",
            "DailyChallenge": "/DailyChallenge",
        };

        const path = modeToPath[mode];

        if (funcToPath[mode] === 'pic') {
            api.fetchPictures(quantity).then(response => {
                if (!response.success) {
                    console.log(response);
                    return;
                }
                navigate(path, {
                    state: {
                        quests: quantity, images: response.data, results: [], infty: infty
                    }
                })
            })
        } else if (funcToPath[mode] === 'rec') {
            api.fetchPicturesAndAnswers(quantity).then(response => {
                if (!response.success) {
                    console.log(response);
                    return;
                }
                navigate(path, {
                    state: {
                        quests: quantity, images: response.data.pic, answ: response.data.answ, results: [], infty: infty
                    }
                })
            })
        } else if (funcToPath[mode] === 'name') {
            api.fetchEmotions(quantity).then(response => {
                if (!response.success) {
                    console.log(response);
                    return;
                }
                navigate(path, {
                    state: {
                        quests: quantity, images: response.data, results: [], infty: infty
                    }
                })
            })
        }
    }

    return (
        <div
            style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#B2F1FF'}}>
            <Navbar style={{backgroundColor: "#F0BE5E"}} textColor="#FDFEFF"/>
            <h1 className="choose--game--text">Choose game time</h1>
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
