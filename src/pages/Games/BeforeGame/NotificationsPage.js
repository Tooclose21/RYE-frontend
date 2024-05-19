import React from "react";
import YellowNavbar from "../../../navbars/YellowNavbar.js";
import Button from "../../../components/Button";
import { useState } from 'react';
import '../../../styles.css';
import Rectangle from "../../../components/Rectangle";

const NotificationsPage = () => {
    const [showComponent, setShowComponent] = useState(false);

    const handleCheckboxChange = () => {
        setShowComponent(!showComponent);
    };
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#88CAFC'}}>
            <YellowNavbar />
            <h1 className={"login--text"} style={{color: "#3A3A72", left: "5%", top: "10%"}}> Notifications</h1>
            <h1 className={"login--text2"} style={{color: "#FFFDEE", left: "5%", top: "25%"}}>Start time:</h1>
            <Button loc={{
                position: 'absolute',
                top: '35%',
                left: '5%',
                width: "12%",
                height: "7%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#3A3A72"}>10:00</Button>
            <Button loc={{
                position: 'absolute',
                top: '45%',
                left: '5%',
                width: "12%",
                height: "7%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#3A3A72"}>12:00</Button>
            <Button loc={{
                position: 'absolute',
                top: '55%',
                left: '5%',
                width: "12%",
                height: "7%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#3A3A72"}>16:00</Button>
            <h1 className={"login--text2"} style={{color: "#FFFDEE", left: "35%", top: "25%"}}>Start date:</h1>

            <div>
                <div className={"medium--text"} style={{position: 'absolute', top: '80%', left: '5%', color:"#FFFDEE", fontWeight:"bold"}}>
                    Repeat notification
                </div>
                <div style={{position: 'absolute', top: '81%', left: '19%'}}>
                    <label>
                        <input
                            type="checkbox"
                            checked={showComponent}
                            onChange={handleCheckboxChange}
                        />
                    </label>
                </div>
                {showComponent && <Interval/>}
            </div>
        </div>

    );
}
const Interval = () => {
    return (
        <div>
            <Rectangle style={{position: 'absolute',width:'20%', height:"40%", backgroundColor:"#FFEEC0",
                borderRadius:"10px", transform:"translate(350%, 55%)"}}/>
            <h1 className={"login--text2"} style={{color:"#3A3A72",position: 'absolute',top:"30%",left:"75.5%"}}>Interval</h1>
            <Button loc={{
                position: 'absolute',
                top: '40%',
                left: '73.5%',
                width: "13%",
                height: "5%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#3A3A72"}>15 min</Button>
            <Button loc={{
                position: 'absolute',
                top: '50%',
                left: '73.5%',
                width: "13%",
                height: "5%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#3A3A72"}>30 min</Button>
            <Button loc={{
                position: 'absolute',
                top: '60%',
                left: '73.5%',
                width: "13%",
                height: "5%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#3A3A72"}>1 hour</Button>
        </div>
    );
};

export default NotificationsPage;