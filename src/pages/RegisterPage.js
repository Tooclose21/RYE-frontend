import React, { useState } from "react";
import '../styles.css';
import Navbar from "../components/Navbar.js";
import Button from "../components/Button";
import blueGhost from "../images/blueGhost.png";
import Input from "../components/Input";
import {Link} from "react-router-dom";


const RegisterPage = (props) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [username, setUsername] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#FFFDEE'}}>
            <Navbar style={{backgroundColor: "#93D7FF"}} textColor="#FBFFEA"/>
            <h1 className="login--text" style={{color: '#88CAFC', left: "37%"}}> Welcome to RYE! Fill the fields below
                to register</h1>

            <h1 className="small--text"
                style={{color: '#88CAFC', left: "41%", top: "29.5%", position: 'absolute'}}> first name:</h1>
            <Input
                loc={{position: 'absolute', top: '30%', left: '41%'}}
                style={{
                    color: "#FFFDEE", backgroundColor: "#88CAFC", borderColor: "#88CAFC",
                    width: '20%', height: '5%', marginTop: '2%'
                }}
                value={firstName}
                placeholder=""
                onChange={(ev) => setFirstName(ev.target.value)}
                // error={emailError}
            />
            <br/>

            <h1 className="small--text"
                style={{color: '#88CAFC', left: "69%", top: "29.5%", position: 'absolute'}}> last name:</h1>
            <Input
                loc={{position: 'absolute', top: '30%', left: '69%'}}
                style={{
                    color: "#FFFDEE", backgroundColor: "#88CAFC", borderColor: "#88CAFC",
                    width: '20%', height: '5%', marginTop: '2%'
                }}
                value={lastName}
                placeholder=""
                onChange={(ev) => setLastName(ev.target.value)}
                // error={emailError}
            />
            <br/>

            <h1 className="small--text"
                style={{color: '#88CAFC', left: "69%", top: "39.5%", position: 'absolute'}}> username:</h1>
            <Input
                loc={{position: 'absolute', top: '40%', left: '69%'}}
                style={{
                    color: "#FFFDEE", backgroundColor: "#88CAFC", borderColor: "#88CAFC",
                    width: '20%', height: '5%', marginTop: '2%'
                }}
                value={username}
                placeholder=""
                onChange={(ev) => setUsername(ev.target.value)}
                // error={emailError}
            />
            <br/>

            <h1 className="small--text"
                style={{color: '#88CAFC', left: "41%", top: "39.5%", position: 'absolute'}}> email:</h1>
            <Input
                loc={{position: 'absolute', top: '40%', left: '41%'}}
                style={{
                    color: "#FFFDEE", backgroundColor: "#88CAFC", borderColor: "#88CAFC",
                    width: '20%', height: '5%', marginTop: '2%'
                }}
                value={email}
                placeholder=""
                onChange={(ev) => setEmail(ev.target.value)}
                error={emailError}
            />
            <br/>
            <h1 className="small--text"
                style={{color: '#88CAFC', left: "41%", top: "49.5%", position: 'absolute'}}> password:</h1>
            <Input
                loc={{position: 'absolute', top: '50%', left: '41%'}}
                style={{
                    color: "#FFFDEE", backgroundColor: "#88CAFC", borderColor: "#88CAFC",
                    width: '20%', height: '5%', marginTop: '2%'
                }}
                value={password}
                placeholder=""
                onChange={(ev) => setPassword(ev.target.value)}
                error={passwordError}
            />
            <br/>
            <h1 className="small--text"
                style={{color: '#88CAFC', left: "69%", top: "49.5%", position: 'absolute'}}> repeat password:</h1>
            <Input
                loc={{position: 'absolute', top: '50%', left: '69%'}}
                style={{
                    color: "#FFFDEE", backgroundColor: "#88CAFC", borderColor: "#88CAFC",
                    width: '20%', height: '5%', marginTop: '2%'
                }}
                value={passwordRepeat}
                placeholder=""
                onChange={(ev) => setPasswordRepeat(ev.target.value)}
                // error={passwordError}
            />
            <Link to="/add-sub-account">
                <Button loc={{position: 'absolute', top: '60%', left: '59%'}} color="#88CAFC" textColor={"#FFFDEE"}>Sign up</Button>
            </Link>
            <img src={blueGhost} className="welcome--img" alt="Blue ghost"
                 style={{transform: 'translate(-40%, -30%)', left: '15%'}}/>
        </div>
    );
}

export default RegisterPage;