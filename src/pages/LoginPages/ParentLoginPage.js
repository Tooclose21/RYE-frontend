import React, {useCallback, useState} from "react";
import './LoginPage.css';
import Button from "../../components/Button";
import blueGhost from "../../images/blueGhost.png";
import Input from "../../components/Input";
import {useNavigate} from "react-router-dom";
import LightBlueNavbar from "../../navbars/LightBlueNavbar";
import {useApi} from "../../api/ApiProvider";


const ParentLoginPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();
    const api = useApi();

    const handleLogin = useCallback(() => {
        api.loginGuardian({login: username, password: password}).then(response => {
            if (!response.success) {
                setEmailError("Invalid credentials")
                return
            }
            navigate('/main-page')
        })
    }, [api, username, password])

    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#98b4c9'}}>
            <LightBlueNavbar/>
            <div className={'login-col'}>

                <h1 className="login--as--parent"> Log in as PARENT</h1>
                <h1 className="username--parent--text"> username:</h1>
                <Input
                    style={{
                        color: "#3A3A72", backgroundColor: "#CBD8E5", borderColor: "#CBD8E5",
                    }}
                    value={username}
                    placeholder=""
                    onChange={(ev) => setUsername(ev.target.value)}
                />
                <br/>
                <h1 className="password--parent--text"> password:</h1>
                <Input
                    style={{
                        color: "#3A3A72", backgroundColor: "#CBD8E5", borderColor: "#CBD8E5",
                    }}
                    value={password}
                    placeholder=""
                    type={'password'}
                    onChange={(ev) => setPassword(ev.target.value)}
                />
                <Button color="#CBD8E5" onClick={handleLogin}>Log in</Button>
                <p className='error-msg'>{emailError}</p>
            </div>

            <img src={blueGhost} className="login--img" alt="Blue ghost"/>
        </div>
    );
}

export default ParentLoginPage;