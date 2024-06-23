import './FinishedGame.css';

import React, {useEffect} from "react";
import Button from "../../../components/Buttons";
import {useLocation, useNavigate} from 'react-router-dom'
import blueGhost from "../../../images/blueGhost.png";
import OrangeNavbar from "../../../navbars/OrangeNavbar";
import saveResult from "../../../game-handle/SaveResult";
import {useApi} from "../../../api/ApiProvider";

function FinishedGame() {
    const location = useLocation();
    const clickCount = location.state ? location.state.clickCount : 0;
    const navigate = useNavigate();
    const api = useApi()

    let quests = 0;
    let mode = '';
    let result = 0;
    let total = 0;

    if (location.state) {
        quests = location.state.quests ? location.state.quests : 0;
        mode = location.state.mode ? location.state.mode : '';
        result = location.state.results ? location.state.results.reduce((a, b) => a + b, 0) : 0;
        total = location.state.results ? location.state.results.length : 0;
    }

    const handleClick = () => {
        console.log("Result:", result)
        console.log("Results", location.state.results)

        api.saveResults({
            mode: mode,
            result: result,
            reward: result,
            time: total
        }).then(response => {
            if (!response.success) {
                console.log("failed")
                return
            }
            navigate("/ChooseGameMode")
        })
    }

    return (
        <div style={{backgroundColor: '#FFF9E9'}}>
            <OrangeNavbar style={{backgroundColor: "#F0BE5E"}} textColor="#FDFEFF"/>
            <h1 className={"finished--game--text1"}>Great job!</h1>
            <h1 className={"finished--game--text2"}>You’ll became a pro soon!</h1>
            <h2 className={"score--text"}>Score: {result}/{total}</h2>
            <img src={blueGhost} className="bghost--score" alt="Blue Ghost"/>
            <Button onClick={handleClick}
                    loc={{position: 'absolute', top: '60%', left: '55%', width: '20%', height: '8%', color: '#ED9C00'}}
                    color="#FEE8AA">Next quest</Button>
            {/*<Link to={"/ChooseGameMode"}>*/}
            {/*<Button loc={{position: 'absolute', top: '70%', left: '55%', width: '20%', height: '8%', color: '#ED9C00'}}*/}
            {/*        color="#FEE8AA">Finish</Button>*/}
            {/*</Link>*/}
        </div>
    );
}

export default FinishedGame;
