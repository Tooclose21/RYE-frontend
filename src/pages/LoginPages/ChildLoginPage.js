import React, {useCallback, useEffect, useState} from "react";
import '../../styles.css';
import LightBlueNavbar from "../../navbars/LightBlueNavbar";
import Button from "../../components/Button";
import blueGhost from "../../images/blueGhost.png";
import axios from "axios";
import Input from "../../components/Input";
import {useNavigate} from "react-router-dom";


const ChildLoginPage = (props) => {

    const callUrl = `${process.env.REACT_APP_LOCAL_URL}/kid/login`

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();


    const login = useCallback(() => {
        console.log(email)
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
    }, [email, password, callUrl, navigate])

    return (<div className="ParentLoginPage"
                 style={{
                     position: 'fixed',
                     top: 0,
                     left: 0,
                     width: '100%',
                     height: '100%',
                     backgroundColor: '#93D7FF'
                 }}>
            <LightBlueNavbar/>
            <h1 className="login--text" style={{color: '#FBFFEA', left: "41%"}}> Log in as CHILD</h1>
            <Input
                loc={{position: 'absolute', top: '30%', left: '41%'}}
                style={{ color: "#B0C5DA",  backgroundColor: "#FBFFEA", borderColor: "#FBFFEA",
                    width:'20%', height:'5%', marginTop:'2%'  }}
                value={email}
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
                error={emailError}
            />
            <br/>
            <Input
                loc={{position: 'absolute', top: '40%', left: '41%'}}
                style={{ color: "#3A3A72", backgroundColor: "#FBFFEA",borderColor: "#FBFFEA",
                    width:'20%', height:'5%', marginTop:'2%' }}
                value={password}
                placeholder="Password"
                onChange={(ev) => setPassword(ev.target.value)}
                error={passwordError}
            />
            <Button loc={{position: 'absolute', top: '50%', left: '45%'}} color="#FBFFEA" textColor={"#B0C5DA"}
                    onClick={login}>Log
                in</Button>
            <img src={blueGhost} className="welcome--img" alt="Blue ghost"
                 style={{transform: 'translate(-50%, 5%)', left: '15%'}}/>
        </div>);
}

export default ChildLoginPage;