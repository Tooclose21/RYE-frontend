import React, {useCallback, useState} from "react";
import LightBlueNavbar from "../../navbars/LightBlueNavbar.js";
import Button from "../../components/Button";
import blueGhost from "../../images/blueGhost.png";
import {useNavigate} from "react-router-dom";
import BlueStar from "../../images/BlueStar.svg";
import WhiteStar from "../../images/WhiteStar.svg";
import Input from "../../components/Input";
import "../Registration/CreateChildAccountPage.css"
import {useApi} from "../../api/ApiProvider";


function CreateChildAccountPage() {
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();
    const api = useApi();

    const createAccount = useCallback(() => {
        if (password !== passwordRepeat) {
            setPasswordError("Passwords do not match")
            return
        }

        api.createChild({username: username, password: password}).then(response => {
            if (!response.success) {
                console.log(response)
                return
            }
            navigate('/add-sub-account', {state: {kids: response.data}})
        })
    })

    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#88CAFC'}}>
            <LightBlueNavbar/>
            <h1 className={"create--child--acc-text"}>Create child's account</h1>
            <div className={'column'}>

            </div>
            <h1 className="create--child--acc--name">name:</h1>
            <Input
                className="child--acc--name--input"
                value={name}
                placeholder=""
                onChange={(ev) => setName(ev.target.value)}
                // error={emailError}
            />
            <br/>
            <h1 className="create--child--acc--username"> username:</h1>
            <Input
                className="child--acc--username--input"
                value={username}
                placeholder=""
                onChange={(ev) => setUsername(ev.target.value)}
                // error={emailError}
            />
            <br/>

            <h1 className="create--child--acc-password"> password:</h1>
            <Input
                className="child--acc--password--input"
                value={password}
                type={'password'}
                placeholder=""
                onChange={(ev) => setPassword(ev.target.value)}
                error={passwordError}
            />
            <br/>
            <h1 className="create--child--acc-repeatpassword"> repeat password:</h1>
            <Input
                className="child--acc--rep--password--input"
                value={passwordRepeat}
                placeholder=""
                type={'password'}
                onChange={(ev) => setPasswordRepeat(ev.target.value)}
                // error={passwordError}
            />
            <div style={{position: "fixed", bottom: 0, left: 0, zIndex: -10}}>
                <img src={BlueStar} alt="Star"
                     style={{width: "50vw", height: "50vw", transform: "translate(-35%,30%)"}}/>
                <img src={WhiteStar} alt="Star"
                     style={{width: "45vw", height: "45vw", transform: "translate(-138%,20%)"}}/>
                <img src={blueGhost} className="gh--img" alt="Blue ghost"
                     style={{width: "25vw", height: "28vw", transform: "translate(-105%,-10%)"}}/>
            </div>


            <Button onClick={createAccount} loc={{
                position: 'absolute',
                top: '70%',
                left: '58%',
                width: "15%",
                height: "7%",
                fontWeight: 'bold',
                fontSize: "1.5vw"
            }}
                    color="#FBFFEA" textColor={"#88CAFC"}>Create account</Button>

        </div>
    );
}

export default CreateChildAccountPage;