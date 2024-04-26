import React from "react";
import Navbar from "../../components/Navbar.js";
import '../../styles.css';
import Button from "../../components/Button";
import blueGhost from "../../images/blueGhost.png";
import {Link } from "react-router-dom";
import ComboBox from "../../components/ComboBox";


function GoalsPage() {
    const AmountOptions = Array.from({ length: 5 }, (_, index) => index + 1);
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#88CAFC'}}>
            <Navbar style={{backgroundColor: "#FFFDEE"}} textColor="#88CAFC"/>
            <div className={"message"} style={{backgroundColor: "#FFFDEE"}}>

                <h1 className={"medium--text"} style={{marginLeft: "30%", color: "#3A3A72"}}>
                    <span style={{fontSize: "1.5em"}}>Welcome to Goals!</span> <br/> Here you can define goals for your
                    children to achieve and set custom notifications
                </h1>
            </div>
            <h1 className={"login--text2"} style={{color: "#FFFDEE", top: "10%", left: "80%"}}>Account:</h1>
            <ComboBox className="comboBox" options={AmountOptions} style={{top: "25%", left: "80%"}}/>
            <h1 className={"login--text2"} style={{color: "#FFFDEE", top: "35%", left: "5%"}}>Game mode:</h1>
            <Button loc={{
                position: 'absolute',
                top: '45%',
                left: '5%',
                width: "19%",
                height: "7%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#3A3A72"}>Mimic from name</Button>
            <Button loc={{
                position: 'absolute',
                top: '55%',
                left: '5%',
                width: "19%",
                height: "7%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#3A3A72"}>Mimic from picture</Button>
            <Button loc={{
                position: 'absolute',
                top: '65%',
                left: '5%',
                width: "19%",
                height: "7%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#3A3A72"}>Recognize from picture</Button>


            <h1 className={"login--text2"} style={{color: "#FFFDEE", top: "35%", left: "45%"}}>Game time:</h1>
            <Button loc={{
                position: 'absolute',
                top: '45%',
                left: '45%',
                width: "19%",
                height: "7%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#3A3A72"}>5 quests</Button>
            <Button loc={{
                position: 'absolute',
                top: '55%',
                left: '45%',
                width: "19%",
                height: "7%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#3A3A72"}>10 quests</Button>
            <Button loc={{
                position: 'absolute',
                top: '65%',
                left: '45%',
                width: "19%",
                height: "7%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#3A3A72"}>15 quests</Button>
            <img src={blueGhost} className="welcome--img" alt="Blue ghost"
                 style={{top: "20%", left: "5%", width: '11%', height: '17%'}}/>
            <h1 className={"login--text2"} style={{color: "#FFFDEE", top: "45%", left: "80%"}}>Amount:</h1>
            <ComboBox className="comboBox" options={AmountOptions} style={{top: "60%", left: "80%"}}/>

            <Button loc={{
                position: 'absolute',
                top: '85%',
                left: '78%',
                width: "19%",
                height: "7%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#3A3A72" textColor={"#FFFDEE"}>Set notifications</Button>
            <Link to="/set-notifications">
                <Button loc={{
                    position: 'absolute',
                    top: '85%',
                    left: '78%',
                    width: "19%",
                    height: "7%",
                    fontWeight: 'bold',
                    fontSize: "1.5vw"
                }}
                        color="#3A3A72" textColor={"#FFFDEE"}>Set notifications</Button>
            </Link>
        </div>);

}

export default GoalsPage;