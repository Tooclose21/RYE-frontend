import React, { useState } from "react";
import '../../styles.css';
import Navbar from "../../navbars/Navbar.js";
import Button from "../../components/Button";
import blueGhost from "../../images/blueGhost.png";
import Input from "../../components/Input";
import {Link, useNavigate} from "react-router-dom";
import LightBlueNavbar from "../../navbars/LighBlueNavbar";

// import './styles.css';
// import Navbar from "./components/Navbar.js";
// import Button from "./components/Button";
// import React, { useState } from "react";
// import blueGhost from "./images/blueGhost.png";
// import Input from "./components/Input";


const ParentLoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#B0C5DA'}}>
            <LightBlueNavbar/>
            <h1 className="login--text" style={{color: '#FFFFFF', left: "41%"}}> Log in as PARENT</h1>
            <h1 className="small--text"
                style={{color: '#FFFFFF', left: "41%", top: "29.5%", position: 'absolute'}}> username:</h1>
            <Input
                loc={{position: 'absolute', top: '30%', left: '41%'}}
                style={{
                    color: "#3A3A72", backgroundColor: "#CBD8E5", borderColor: "#CBD8E5",
                    width: '20%', height: '5%', marginTop: '2%'
                }}
                value={email}
                placeholder=""
                onChange={(ev) => setEmail(ev.target.value)}
                error={emailError}
            />
            <br/>
            <h1 className="small--text"
                style={{color: '#FFFFFF', left: "41%", top: "39.5%", position: 'absolute'}}> password:</h1>
            <Input
                loc={{position: 'absolute', top: '40%', left: '41%'}}
                style={{
                    color: "#3A3A72", backgroundColor: "#CBD8E5", borderColor: "#CBD8E5",
                    width: '20%', height: '5%', marginTop: '2%'
                }}
                value={password}
                placeholder=""
                onChange={(ev) => setPassword(ev.target.value)}
                error={passwordError}
            />
                <Button loc={{position: 'absolute', top: '50%', left: '45%'}} color="#CBD8E5" onClick={() => navigate('/main-page')}>Log in</Button>
            <img src={blueGhost} className="welcome--img" alt="Blue ghost"
                 style={{transform: 'translate(-50%, 5%)', left: '15%'}}/>
        </div>
    );
}

export default ParentLoginPage;