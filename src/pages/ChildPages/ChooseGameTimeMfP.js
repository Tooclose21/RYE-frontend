import '../../styles.css';
import Navbar from "../../components/Navbar";
import React from "react";
import Button from "../../components/Buttons";
import {Link, useNavigate, useNavigation} from 'react-router-dom'
import fetchPicture from "../../game-handle/PictureFetch";

// mimic from picture
function ChooseGameTimeMfP() {
    const navigate = useNavigate();

    const startGame = (quantity) => {
        fetchPicture(quantity).then(response => {
            console.log(response)
            navigate("/MimicFromPicture", {state: {quests: quantity, images: response.data}});

        }).catch(error => console.log(error));
    }

    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#B2F1FF'}}>
            <Navbar style={{backgroundColor: "#F0BE5E"}} textColor="#FDFEFF"/>
            <h1 className={"choose--game--text"}>Choose game mode</h1>
            <Button loc={{
                position: 'absolute', top: '35%', left: '40%',
                width: '25%', height: '8%', color: '#F8A365'
            }} color="#FEE8AA" onClick={() => startGame(5)}>5 quests</Button>
            <Link to={`/MimicFromPicture?quests=10`}><Button loc={{
                position: 'absolute', top: '45%', left: '40%',
                width: '25%', height: '8%', color: '#F8A365'
            }} color="#FEE8AA">10 quests</Button></Link>
            <Link to={`/MimicFromPicture?quests=15`}><Button loc={{
                position: 'absolute', top: '55%', left: '40%',
                width: '25%', height: '8%', color: '#F8A365'
            }} color="#FEE8AA">15 quests</Button></Link>
            <Link to={`/MimicFromPicture?quests=${Infinity}`}><Button loc={{
                position: 'absolute', top: '65%', left: '40%',
                width: '25%', height: '8%', color: '#F8A365'
            }} color="#FEE8AA">Endless mode</Button></Link>
        </div>
    );
}

export default ChooseGameTimeMfP;