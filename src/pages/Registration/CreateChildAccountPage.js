import React, {useState} from "react";
import Navbar from "../../navbars/Navbar.js";
import Button from "../../components/Button";
import blueGhost from "../../images/blueGhost.png";
import {Link } from "react-router-dom";
import BlueStar from "../../images/BlueStar.svg";
import WhiteStar from "../../images/WhiteStar.svg";
import Input from "../../components/Input";


function CreateChildAccountPage() {
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [username, setUsername] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#88CAFC'}}>
            <Navbar style={{backgroundColor: "#88CAFC"}} textColor="#FBFFEA"/>
            <h1 className={"login--text"} style={{color:"#FBFFEA", left:"55%", top:"25%"}}>Create child account</h1>
            <h1 className="small--text"
                style={{color: '#FBFFEA', left: "55%", top: "39.5%", position: 'absolute'}}> username:</h1>
            <Input
                loc={{position: 'absolute', top: '40%', left: '55%'}}
                style={{
                    color: "#FFFDEE", backgroundColor: "#FBFFEA", borderColor: "#FBFFEA",
                    width: '20%', height: '5%', marginTop: '2%'
                }}
                value={username}
                placeholder=""
                onChange={(ev) => setUsername(ev.target.value)}
                // error={emailError}
            />
            <br/>
            <h1 className="small--text"
                style={{color: '#FBFFEA', left: "55%", top: "49.5%", position: 'absolute'}}> password:</h1>
            <Input
                loc={{position: 'absolute', top: '50%', left: '55%'}}
                style={{
                    color: "#FFFDEE", backgroundColor: "#FBFFEA", borderColor: "#FBFFEA",
                    width: '20%', height: '5%', marginTop: '2%'
                }}
                value={password}
                placeholder=""
                onChange={(ev) => setPassword(ev.target.value)}
                error={passwordError}
            />
            <br/>
            <h1 className="small--text"
                style={{color: '#FBFFEA', left: "55%", top: "59.5%", position: 'absolute'}}> repeat password:</h1>
            <Input
                loc={{position: 'absolute', top: '60%', left: '55%'}}
                style={{
                    color: "#FFFDEE", backgroundColor: "#FBFFEA", borderColor: "#FBFFEA",
                    width: '20%', height: '5%', marginTop: '2%'
                }}
                value={passwordRepeat}
                placeholder=""
                onChange={(ev) => setPasswordRepeat(ev.target.value)}
                // error={passwordError}
            />
            <div style={{position: "fixed", bottom: 0, left: 0}}>
                <img src={BlueStar} alt="Star"
                     style={{width: "50vw", height: "50vw", transform: "translate(-35%,30%)"}}/>
                <img src={WhiteStar} alt="Star"
                     style={{width: "45vw", height: "45vw", transform: "translate(-138%,20%)"}}/>
                <img src={blueGhost} className="welcome--img" alt="Blue ghost"
                     style={{width: "25vw", height: "19vw", transform: "translate(-105%,20%)"}}/>
            </div>
            <Link to="/add-sub-account">

            <Button loc={{
                position: 'absolute',
                top: '70%',
                left: '58%',
                width: "15%",
                height: "7%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#88CAFC"}>Create account</Button>
            </Link>
        </div>
    );
}

export default CreateChildAccountPage;