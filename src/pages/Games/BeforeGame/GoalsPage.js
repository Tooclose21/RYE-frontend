import React from "react";
import YellowNavbar from "../../../navbars/YellowNavbar";
import './GoalsPage.css';
import Button from "../../../components/Button";
import blueGhost from "../../../images/blueGhost.png";
import { useNavigate} from "react-router-dom";
import ComboBox from "../../../components/ComboBox";


function GoalsPage() {
    const navigate = useNavigate();
    const AmountOptions = Array.from({ length: 5 }, (_, index) => index + 1);
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#88CAFC'}}>
            <YellowNavbar />
            <div className={"goals--message"}>

                <h1 className={"goals--text"}>
                    <span style={{fontSize: "1.5em"}}>Welcome to Goals!</span> <br/> Here you can define goals for your
                    children to achieve and set custom notifications
                </h1>
            </div>
            <h1 className={"account--text"} >Account:</h1>
            <ComboBox className="comboBox1" options={AmountOptions} style={{position:'absolute',top: "25%", left: "80%"}}/>
            <h1 className={"game--mode--text"} >Game mode:</h1>
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


            <h1 className={"game--time--text"} >Game time:</h1>
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
            <img src={blueGhost} className="goals--img" alt="Blue ghost"/>
            <h1 className={"amount--text"} >Amount:</h1>
            <ComboBox className="comboBox" options={AmountOptions} style={{position:'absolute',top: "65%", left: "80%"}}/>

            <Button  onClick={() => navigate('/set-notifications')} loc={{
                position: 'absolute',
                top: '85%',
                left: '78%',
                width: "19%",
                height: "7%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#3A3A72" textColor={"#FFFDEE"}>Set notifications</Button>

        </div>);

}

export default GoalsPage;