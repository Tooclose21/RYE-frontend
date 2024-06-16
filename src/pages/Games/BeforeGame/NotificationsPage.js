import React from "react";
import YellowNavbar from "../../../navbars/YellowNavbar.js";
import Button from "../../../components/Button";
import { useState } from 'react';
import './NotificationsPage.css';
import Rectangle from "../../../components/Rectangle";

const NotificationsPage = () => {
    const [showComponent, setShowComponent] = useState(false);

    const handleCheckboxChange = () => {
        setShowComponent(!showComponent);
    };
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#88CAFC'}}>
            <YellowNavbar />
            <h1 className={"notifications--text"} > Notifications</h1>
            <h1 className={"start--time--text"}>Start time:</h1>
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
            <h1 className={"start--date--text"} >Start date:</h1>

            <div>
                <div className={"repeat--notifications--text"}>
                    Repeat notification
                </div>
                <div className="checkBox" >
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
            <Rectangle className="rectangle"/>
            <h1 className={"interval--text"} >Interval</h1>
            <Button loc={{
                position: 'absolute',
                top: '55%',
                left: '73.5%',
                width: "13%",
                height: "5%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#3A3A72"}>15 min</Button>
            <Button loc={{
                position: 'absolute',
                top: '65%',
                left: '73.5%',
                width: "13%",
                height: "5%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#3A3A72"}>30 min</Button>
            <Button loc={{
                position: 'absolute',
                top: '75%',
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