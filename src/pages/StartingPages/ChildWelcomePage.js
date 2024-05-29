import './ChildWelcomePage.css';
import LightBlueNavbar from "../../navbars/LightBlueNavbar";
import React, {useCallback} from "react";
import BlueGhost from "../../components/BlueGhost";
import Button from "../../components/Buttons";
import {useNavigate} from 'react-router-dom'

function ChildWelcomePage() {
    const navigate = useNavigate();
    const chooseGameMode = useCallback(()=>{
        navigate("/ChooseGameMode")
    }, [navigate])
    const goCustomization = useCallback(()=>{
        navigate("/CharacterCustomization")
    },[navigate])
    const goToChildStats = useCallback(()=>{
        navigate("/StatsForChild")
    },[navigate])
    return (
        <div style={{backgroundColor: '#FFEEC0'}}>
            <LightBlueNavbar/>
            <div className={"start--text"}>
                <h1 className="start--text2"> Welcome back!</h1>
                <h1 className="start--text2">What would you like to do today?</h1>
            </div>
            <BlueGhost/>
            <Button loc={{position: 'absolute', top: '45%', left: '60%'}}
                    color="#88CAFC" onClick={chooseGameMode}>Play</Button>
            <Button loc={{position: 'absolute', top: '55%', left: '60%'}} color="#88CAFC">Tasks</Button>
            <Button loc={{position: 'absolute', top: '65%', left: '60%'}}
                    color="#88CAFC" onClick={goCustomization}>Customize</Button>
            <Button loc={{position: 'absolute', top: '75%', left: '60%'}}
                    color="#88CAFC" onClick={goToChildStats}>My stats</Button>
        </div>
    );
}

export default ChildWelcomePage;
