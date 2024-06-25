import React, {useState} from "react";
import LightBlueNavbar from "../../../navbars/LightBlueNavbar.js";
import blueGhost from "../../../images/blueGhost.png";
import './ParentStatisticsPage.css';
import ComboBox from "../../../components/ComboBox";
import Rectangle from "../../../components/Rectangle";


function ParentStatisticsPage() {
    const AmountOptions = Array.from({ length: 5 }, (_, index) => index + 1);
        const [selectedValue, setSelectedValue] = useState(AmountOptions[0]);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#D2EBFF'}}>
            <LightBlueNavbar/>
            <div className={"statistics--parent--message"}>
                <h1 className={"parent--statistics--text"} >
                    <span style={{fontSize: "2vw"}}>Welcome to Statistics!</span> <br/>
                    Here you can view your children’s progress and learn everything about the process!
                </h1>
            </div>
            <div className={"account--message"}>
                <h1 className={"account--statistics--text"} >
                    Account
                </h1>
            </div>
            <ComboBox className="comboBox" options={AmountOptions} style={{position:'absolute',top: "35.5%", left: "25%"}} value={selectedValue} handleChange={handleChange}/>
            <div className={"general--message"}>
                <h1 className={"general--statistics--text"}>
                    General
                </h1>
            </div>
            <Rectangle className="rectangle1" />
            <h1 className={"period--statistics--text"}>Period</h1>
            <Rectangle className="rectangle3"/>
            <h1 className={"score--statistics--text"}>Score</h1>
            <Rectangle className="rectangle2"/>
            <h1 className={"practice--statistics--text"}>Practice time</h1>
            <img src={blueGhost} className="ghost--statistics--img" alt="Blue ghost"/>
        </div>
    );
}

export default ParentStatisticsPage;