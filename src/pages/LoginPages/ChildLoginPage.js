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
        axios.post(callUrl, {
            "login": username, "password": password,
        }).then(response => {
            console.log(response.data)
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data}`;
            navigate("/child-welcome")
        }).catch(error => {
            console.log(error)
            setUsernameError("Incorrect credentials")
            // setPasswordError("Incorrect credentials")
        })
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
        <div className={'login-col'}>
            <h1
                className="login--as--child"
            > Log in as CHILD</h1>
            <h1
                className="username--parent--text"
            > username:</h1>
            <Input
                style={{
                    color: "#B0C5DA", backgroundColor: "#FBFFEA", borderColor: "#FBFFEA",
                }}
                value={username}
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
            />
            <h1
                className="password--parent--text"
            > password:</h1>
            <Input
                style={{
                    color: "#3A3A72", backgroundColor: "#FBFFEA", borderColor: "#FBFFEA",
                }}
                value={password}
                placeholder="Password"
                onChange={(ev) => setPassword(ev.target.value)}
            />
            <Button
                color="#FBFFEA"
                    textColor={"#B0C5DA"}
                    onClick={login}>Log
                in</Button>
            <p className='error-msg'>{usernameError}</p>
        </div>
        <img src={blueGhost} className="login--img" alt="Blue ghost"/>
    </div>);
}

export default ChildLoginPage;