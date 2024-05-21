import React, {useCallback, useEffect, useState} from "react";
import '../LoginPages/LoginPage.css';
import LightBlueNavbar from "../../navbars/LightBlueNavbar";
import Button from "../../components/Button";
import blueGhost from "../../images/blueGhost.png";
import axios from "axios";
import Input from "../../components/Input";
import {useNavigate} from "react-router-dom";


const ChildLoginPage = (props) => {

    const callUrl = `${process.env.REACT_APP_LOCAL_URL}/kid/login`

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();


    const login = useCallback(() => {
        console.log(username)
        console.log(password)
        navigate("/child-welcome")
        // axios.post(callUrl, {
        //     "login": email, "password": password,
        // }).then(response => {
        //     navigate("/child-welcome")
        // }).catch(error => {
        //     setEmailError("Incorrect credentials")
        //     setPasswordError("Incorrect credentials")
        // })
    }, [username, password, callUrl, navigate])

    return (<div className="ParentLoginPage"
                 style={{
                     position: 'fixed',
                     top: 0,
                     left: 0,
                     width: '100%',
                     height: '100%',
                     backgroundColor: '#a8ddfd'
                 }}>
        <LightBlueNavbar/>
        <h1 className="login--as--child"> Log in as CHILD</h1>
        <h1 className="username--parent--text"> username:</h1>
        <Input
            loc={{position: 'absolute', top: '30%', left: '41%'}}
            style={{
                color: "#B0C5DA", backgroundColor: "#FBFFEA", borderColor: "#FBFFEA",
                width: '20%', height: '5%', marginTop: '2%'
            }}
            value={username}
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
            error={usernameError}
        />
        <br/>
        <h1 className="password--parent--text"> password:</h1>
        <Input
            loc={{position: 'absolute', top: '40%', left: '41%'}}
            style={{
                color: "#3A3A72", backgroundColor: "#FBFFEA", borderColor: "#FBFFEA",
                width: '20%', height: '5%', marginTop: '2%'
            }}
            value={password}
            placeholder="Password"
            onChange={(ev) => setPassword(ev.target.value)}
            error={passwordError}
        />
        <Button loc={{position: 'absolute', top: '50%', left: '43.5%', fontWeight: "bold"}} color="#FBFFEA" textColor={"#B0C5DA"}
                onClick={login}>Log
            in</Button>
        <img src={blueGhost} className="login--img" alt="Blue ghost"/>
    </div>);
}

export default ChildLoginPage;