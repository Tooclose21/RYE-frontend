import React, { useState } from "react";
import '../LoginPages/LoginPage.css';
import Button from "../../components/Button";
import blueGhost from "../../images/blueGhost.png";
import Input from "../../components/Input";
import {useNavigate} from "react-router-dom";
import LightBlueNavbar from "../../navbars/LightBlueNavbar";


const ParentLoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#98b4c9'}}>
            <LightBlueNavbar/>
            <h1 className="login--as--parent"> Log in as PARENT</h1>
            <h1 className="username--parent--text"> username:</h1>
            <Input
               className="parent--username--input"
                value={email}
                placeholder=""
                onChange={(ev) => setEmail(ev.target.value)}
                error={emailError}
            />
            <br/>
            <h1 className="password--parent--text"> password:</h1>
            <Input

                value={password}
                placeholder=""
                onChange={(ev) => setPassword(ev.target.value)}
                error={passwordError}
                className="parent--password--input"
            />
                <Button loc={{position: 'absolute', top: '50%', left: '43.5%', fontWeight: "bold"}} color="#CBD8E5" onClick={() => navigate('/main-page')}>Log in</Button>
            <img src={blueGhost} className="login--img" alt="Blue ghost"/>
        </div>
    );
}

export default ParentLoginPage;