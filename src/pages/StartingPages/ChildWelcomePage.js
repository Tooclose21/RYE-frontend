import '../StartingPages/ChildWelcomePage.css';
import LightBlueNavbar from "../../navbars/LightBlueNavbar";
import React, {useCallback} from "react";
import blueGhost from "../../images/blueGhost.png";
import Button from "../../components/Buttons";
import {useNavigate} from 'react-router-dom'
import {useApi} from "../../api/ApiProvider";

function ChildWelcomePage() {
    const navigate = useNavigate();
    const api = useApi();
    const chooseGameMode = useCallback(()=>{
        navigate("/ChooseGameMode")
    }, [navigate])
    const goCustomization = useCallback(()=>{
        navigate("/CharacterCustomization")
    },[navigate])

    const goToChildStats = useCallback(()=>{
        api.fetchStats().then(response => {
            if (!response.success) {
                console.log(response);
                return
            }
            console.log(response)
            navigate("/StatsForChild", {state: {stats: response.data}})
        }).catch(err => console.log(err))
    },[navigate])
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',backgroundColor: '#FFEEC0'}}>
            <LightBlueNavbar/>
            <div className="welcome--child--text">
                <h1 className="welcome--child--text1"> Welcome back!</h1>
                <h1 className="welcome--child--text2">What would you like to do today?</h1>
            </div>
            <img src={blueGhost} className="welcome--child--img" alt="Blue ghost"/>
            <Button loc={{position: 'absolute', top: '42%', left: '60%'}}
                    color="#88CAFC" onClick={chooseGameMode}>Play</Button>
            <Button loc={{position: 'absolute', top: '53%', left: '60%'}} color="#88CAFC"
                    onClick={() => navigate("/Task")}
            >Tasks</Button>
            <Button loc={{position: 'absolute', top: '64%', left: '60%'}}
                    color="#88CAFC" onClick={goToChildStats}>My statistics</Button>
            <Button loc={{position: 'absolute', top: '75%', left: '60%'}}
                    color="#88CAFC" onClick={() => navigate("/")}>Log out</Button>
        </div>
    );
}

export default ChildWelcomePage;
