import React from "react";
import LightBlueNavbar from "../../../navbars/LightBlueNavbar.js";
import blueGhost from "../../../images/blueGhost.png";
import '../../../styles.css';
import ComboBox from "../../../components/ComboBox";
import Rectangle from "../../../components/Rectangle";


function StatsForChild() {
    const AmountOptions = Array.from({ length: 5 }, (_, index) => index + 1);
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#D2EBFF'}}>
            <LightBlueNavbar />
            <div className={"message"} style={{backgroundColor: "#FFFDEE", width: "55%"}}>
                <h1 className={"medium--text"} style={{marginLeft: "30%", color: "#3A3A72"}}>
                    <span style={{fontSize: "2vw"}}>Welcome to Statistics!</span> <br/>
                    Here you can view your progress and learn everything about the process!
                </h1>
            </div>
            <div className={"message"}
                 style={{backgroundColor: "#88CAFC", width: "20%", height: "5%", transform: "translate(-12%, 200%)"}}>
                <h1 className={"medium--text"} style={{marginLeft: "40%", color: "#FFFDEE"}}>
                    General
                </h1>
            </div>
            <Rectangle style={{
                position: 'absolute', width: '10%', height: "40%", backgroundColor: "#FFFEFB",
                borderRadius: "10px", transform: "translate(20%, 30%)"
            }}/>
            <h1 className={"medium--text"}
                style={{color: "#3A3A72", position: 'absolute', top: "55%", left: "4.5%"}}>Period</h1>
            <Rectangle style={{
                position: 'absolute', width: '25%', height: "40%", backgroundColor: "#FFFEFB",
                borderRadius: "10px", transform: "translate(110%, 30%)"
            }}/>
            <h1 className={"medium--text"}
                style={{color: "#3A3A72", position: 'absolute', top: "55%", left: "38%"}}>Score</h1>
            <Rectangle style={{
                position: 'absolute', width: '35%', height: "40%", backgroundColor: "#FFFEFB",
                borderRadius: "10px", transform: "translate(180%, 30%)"
            }}/>
            <h1 className={"medium--text"}
                style={{color: "#3A3A72", position: 'absolute', top: "55%", left: "77%"}}>Practice time</h1>
            <img src={blueGhost} className="welcome--img" alt="Blue ghost"
                 style={{top: "20%", left: "5%", width: '11%', height: '17%'}}/>
        </div>
    );
}

export default StatsForChild;