import React from "react";
import LightBlueNavbar from "../../../navbars/LightBlueNavbar.js";
import blueGhost from "../../../images/blueGhost.png";
import './StatsForChild.css';
import ComboBox from "../../../components/ComboBox";
import Rectangle from "../../../components/Rectangle";


function StatsForChild() {
    const AmountOptions = Array.from({ length: 5 }, (_, index) => index + 1);
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#D2EBFF'}}>
            <LightBlueNavbar />
            <div className={"statistics--child--message"}>
                <h1 className={"child--statistics--text"}>
                    <span style={{fontSize: "2vw"}}>Welcome to Statistics!</span> <br/>
                    Here you can view your progress and learn everything about the process!
                </h1>
            </div>
            <div className={"child--general--message"}
                 >
                <h1 className={"child--general--statistics--text"}>
                    General
                </h1>
            </div>
            <Rectangle className="child--rectangle1"/>
            <h1 className={"child--period--statistics--text"}>Period</h1>
            <Rectangle className="child--rectangle3" />
            <h1 className={"child--score--statistics--text"}>Score</h1>
            <Rectangle className="child--rectangle2"/>
            <h1 className={"child--practice--statistics--text"}>Practice time</h1>
            <img src={blueGhost} className="child--ghost--statistics--img" alt="Blue ghost"/>
        </div>
    );
}

export default StatsForChild;