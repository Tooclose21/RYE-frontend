import React, {useCallback, useState} from "react";
import Navbar from "../../navbars/DarkBlueNavbar";
import Button from "../../components/Button";
import blueGhost from "../../images/blueGhost.png";
import {Link, useNavigate} from "react-router-dom";
import '../../styles.css';
import Input from "../../components/Input";
import WhiteStar from "../../images/WhiteStar.svg";
import {useApi} from "../../api/ApiProvider";


function ParentUserProfile() {
    const [username, setUsername] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigate = useNavigate();
    const api = useApi();


    const manageAccounts = useCallback(() => {
        api.fetchSubAccounts().then(response => {
            if (!response.success) {
                console.log(response);
                return
            }

            console.log(response.data)
            navigate('/add-sub-account', {state: {kids: response.data}})

        })
    }, [api, navigate])

    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#3A3A72'}}>
            <Navbar />
            <h1 className={"login--text"} style={{color: "#FBFFEA", top: "25%"}}> User profile</h1>
            <h1 className="small--text"
                style={{color: '#FBFFEA', left: "59%", top: "39.5%", position: 'absolute'}}> change username:</h1>
            <Input
                loc={{position: 'absolute', top: '40%', left: '59%'}}
                style={{
                    color: "#3A3A72", backgroundColor: "#FBFFEA", borderColor: "#FBFFEA",
                    width: '20%', height: '5%', marginTop: '2%'
                }}
                value={username}
                placeholder=""
                onChange={(ev) => setUsername(ev.target.value)}
                // error={emailError}
            />
            <br/>

            <h1 className="small--text"
                style={{color: '#FBFFEA', left: "59%", top: "49.5%", position: 'absolute'}}> change email address:</h1>
            <Input
                loc={{position: 'absolute', top: '50%', left: '59%'}}
                style={{
                    color: "#3A3A72", backgroundColor: "#FBFFEA", borderColor: "#FBFFEA",
                    width: '20%', height: '5%', marginTop: '2%'
                }}
                value={email}
                placeholder=""
                onChange={(ev) => setEmail(ev.target.value)}
                error={emailError}
            />
            <br/>
            <h1 className="small--text"
                style={{color: '#FBFFEA', left: "59%", top: "59.5%", position: 'absolute'}}> change password:</h1>
            <Input
                loc={{position: 'absolute', top: '60%', left: '59%'}}
                style={{
                    color: "#3A3A72", backgroundColor: "#FBFFEA", borderColor: "#FBFFEA",
                    width: '20%', height: '5%', marginTop: '2%'
                }}
                value={password}
                placeholder=""
                onChange={(ev) => setPassword(ev.target.value)}
                error={passwordError}
            />
            <h1 className="small--text"
                style={{color: '#FBFFEA', left: "59%", top: "69.5%", position: 'absolute'}}> repeat new password:</h1>
            <Input
                loc={{position: 'absolute', top: '70%', left: '59%'}}
                style={{
                    color: "#3A3A72", backgroundColor: "#FBFFEA", borderColor: "#FBFFEA",
                    width: '20%', height: '5%', marginTop: '2%'
                }}
                value={passwordRepeat}
                placeholder=""
                onChange={(ev) => setPasswordRepeat(ev.target.value)}
                // error={passwordError}
            />
            <img src={WhiteStar} alt="Star"
                 style={{width: "60vw", height: "60vw", transform: "translate(-25%,-5%)"}}/>
            <h1 className={"login--text2"} style={{color: "#3A3A72", top: "50%",left:"5%"}}> Manage children <br/>accounts:</h1>
            <Button loc={{position: 'absolute', top: '70%', left: '5%', width: "15%"}} color="#3A3A72" onClick={manageAccounts}>Children
                accounts</Button>
        </div>
    );
}

export default ParentUserProfile;