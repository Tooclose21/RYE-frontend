
import '../../styles.css';
import Navbar from "../../components/Navbar";
import React, {useEffect} from "react";
import Button from "../../components/Buttons";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import blueGhost from "../../images/blueGhost.png";

function FinishedGame() {
    const location = useLocation();
    const clickCount = location.state ? location.state.clickCount : 0;
    const navigate = useNavigate();
    const quests = location.state ? location.state.quests : 0;
    const gameMode = location.state ? location.state.gameMode : '';
    const images = location.state.images;
    const handleClick = () => {
        if(clickCount === quests){
            navigate("/ChooseGameMode", {state:{quests:quests}})
        }

        else{
            if (gameMode === 'mimicFromName') {
                navigate(`/MimicFromName?quests=${quests}`, { state: { clickCount: clickCount, quests: quests } });
            } else if (gameMode === 'mimicFromPicture') {
                navigate(`/MimicFromPicture?quests=${quests}`, { state: { clickCount: clickCount, quests: quests, images: images} });
            }
    }}
    useEffect(() => {
        console.log("Quests:", quests, "Gamemode:", gameMode);
    }, [quests]);
    return (
        <div style={{backgroundColor: '#FFF9E9'}}>
            <Navbar style={{backgroundColor: "#F0BE5E"}} textColor="#FDFEFF"/>
            <h1 className={"finished--game--text1"}>Great job!</h1>
            <h1 className={"finished--game--text2"}>You’ll became a pro soon!</h1>
            <h2 className={"score--text"}>Score: {clickCount}/5</h2>
            <img src={blueGhost} className="bghost--score" alt="Blue Ghost"/>
            <Button onClick={handleClick} loc={{position: 'absolute', top: '60%', left: '55%', width: '20%', height: '8%', color: '#ED9C00'}}
                    color="#FEE8AA">Next quest</Button>
            <Link to={"/ChooseGameMode"}>
            <Button loc={{position: 'absolute', top: '70%', left: '55%', width: '20%', height: '8%', color: '#ED9C00'}}
                    color="#FEE8AA">Finish</Button>
            </Link>
        </div>
    );
}

export default FinishedGame;
