import '../../../styles.css';
import Navbar from "../../../components/Navbar";
import React from "react";
import Button from "../../../components/Buttons";
import {Link, useNavigate, useNavigation} from 'react-router-dom'
import fetchPicture from "../../../game-handle/PictureFetch";
import fetchEmotions from "../../../game-handle/FetchEmotions";

function ChooseGameTimeMfN() {
    const navigate = useNavigate();

    // TODO: Merge all choose game times into one component

    const startGame = (quantity, infty = false) => {
        fetchEmotions(quantity).then(response => {
            console.log(response)
            navigate("/MimicFromName", {
                state: {
                    quests: quantity, images: response.data, results: [], infty: infty
                }
            });

        }).catch(error => console.log(error));
    }

    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#B2F1FF'}}>
            <Navbar style={{backgroundColor: "#F0BE5E"}} textColor="#FDFEFF"/>
            <h1 className={"choose--game--text"}>Choose game mode</h1>
            <Button loc={{
                position: 'absolute', top: '35%', left: '40%', width: '25%', height: '8%', color: '#F8A365'
            }} color="#FEE8AA" onClick={() => startGame(5)}>5 quests</Button>
            <Button loc={{
                position: 'absolute', top: '45%', left: '40%', width: '25%', height: '8%', color: '#F8A365'
            }} color="#FEE8AA" onClick={() => startGame(10)}>10 quests</Button>
            <Button loc={{
                position: 'absolute', top: '55%', left: '40%', width: '25%', height: '8%', color: '#F8A365'
            }} color="#FEE8AA" onClick={() => startGame(15)}>15 quests</Button>
            <Button loc={{
                position: 'absolute', top: '65%', left: '40%', width: '25%', height: '8%', color: '#F8A365'
            }} color="#FEE8AA" onClick={() => startGame(1, true)}>Endless mode</Button>
        </div>);
}

export default ChooseGameTimeMfN;