import React, { useState } from "react";
import '../Registration/RegisterPage.css';
import YellowNavbar from "../../navbars/YellowNavbar.js";
import Button from "../../components/Button";
import blueGhost from "../../images/blueGhost.png";
import Input from "../../components/Input";
import {useNavigate} from "react-router-dom";
import LightBlueNavbar from "../../navbars/LightBlueNavbar";


const RegisterPage = (props) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [username, setUsername] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#FFFDEE'}}>
            <LightBlueNavbar/>
            <h1 className="registration--welcome--text"> Welcome to RYE! Fill the fields below
                to register</h1>

            <h1 className="register--firstname--text"> first name:</h1>
            <Input
                className="register--firstname--input"
                value={firstName}
                placeholder=""
                onChange={(ev) => setFirstName(ev.target.value)}
                // error={emailError}
            />
            <br/>

            <h1 className="register--lastname--text"> last name:</h1>
            <Input
                className="register--lastname--input"
                value={lastName}
                placeholder=""
                onChange={(ev) => setLastName(ev.target.value)}
                // error={emailError}
            />
            <br/>

            <h1 className="register--username--text"> username:</h1>
            <Input
                className="register--username--input"
                value={username}
                placeholder=""
                onChange={(ev) => setUsername(ev.target.value)}
                // error={emailError}
            />
            <br/>

            <h1 className="register--email--text"> email:</h1>
            <Input
                className="register--email--input"
                value={email}
                placeholder=""
                onChange={(ev) => setEmail(ev.target.value)}
                error={emailError}
            />
            <br/>
            <h1 className="register--password--text"> password:</h1>
            <Input
                className="register--password--input"
                value={password}
                placeholder=""
                onChange={(ev) => setPassword(ev.target.value)}
                error={passwordError}
            />
            <br/>
            <h1 className="register--repeatpassword--text"> repeat password:</h1>
            <Input
                className="register--repeatpassword--input"
                value={passwordRepeat}
                placeholder=""
                onChange={(ev) => setPasswordRepeat(ev.target.value)}
                // error={passwordError}
            />

                <Button loc={{position: 'absolute', top: '65%', left: '58%', fontWeight: 'bold'}} color="#88CAFC" textColor={"#FFFDEE"} onClick={() => navigate('/add-sub-account')}>Sign up</Button>
            <img src={blueGhost} className="welcome--img" alt="Blue ghost"
                 style={{transform: 'translate(-40%, -30%)', left: '15%'}}/>
        </div>
    );
}

export default RegisterPage;