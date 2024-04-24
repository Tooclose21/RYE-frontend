import React, { useState } from "react";
import '../styles.css';
import Navbar from "../components/Navbar.js";
import Button from "../components/Button";
import blueGhost from "../images/blueGhost.png";
import Input from "../components/Input";


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

    return (
        <div className="ParentLoginPage" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#B0C5DA' }}>
            <Navbar style={{backgroundColor: "#B0C5DA"}} textColor="#FFFFFF"/>
            <h1 className="login--text" style={{color: '#FFFFFF', left:"41%"}}> Log in as PARENT</h1>
            <Input
                loc={{position: 'absolute', top: '30%', left: '41%'}}
                style={{ color: "#FFFFFF",  backgroundColor: "#CBD8E5", borderColor: "#CBD8E5",
                    width:'20%', height:'5%', marginTop:'2%'  }}
                value={email}
                placeholder="Email"
                onChange={(ev) => setEmail(ev.target.value)}
                error={emailError}
            />
            <br/>
            <Input
                loc={{position: 'absolute', top: '40%', left: '41%'}}
                style={{ color: "#FFFFFF", backgroundColor: "#CBD8E5",borderColor: "#CBD8E5",
                    width:'20%', height:'5%', marginTop:'2%' }}
                value={password}
                placeholder="Password"
                onChange={(ev) => setPassword(ev.target.value)}
                error={passwordError}
            />
            <Button loc={{position: 'absolute', top: '50%', left: '45%'}} color="#CBD8E5">Log in</Button>
            <img src={blueGhost} className="welcome--img" alt="Blue ghost" style={{transform: 'translate(-50%, 5%)', left:'15%'}}/>
        </div>
    );
}

export default ParentLoginPage;