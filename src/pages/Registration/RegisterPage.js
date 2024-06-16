import React, {useCallback, useState} from "react";
import '../Registration/RegisterPage.css';
import YellowNavbar from "../../navbars/YellowNavbar.js";
import Button from "../../components/Button";
import blueGhost from "../../images/blueGhost.png";
import Input from "../../components/Input";
import {useNavigate} from "react-router-dom";
import {useApi} from "../../api/ApiProvider";


const RegisterPage = (props) => {
    const [error, setError] = useState('')
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [familyMember, setFamilyMember] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();
    const api = useApi()


    const registerCallback = useCallback(() => {
        setPasswordError("")
        if (password !== passwordRepeat) {
            setPasswordError("Passwords do not match!")
            return;
        }

        api.registerGuardian({
            username: `${username}`,
            familyMember: familyMember,
            email: email,
            password: password
        }).then(response => {
                if (!response.success) {
                    setError("Unable to register")
                    return
                }
                navigate("/")
            }
        )

    }, [api, firstName, username, password, passwordRepeat, email, familyMember])

    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#FFFDEE'}}>
            <YellowNavbar/>
            <h1 className="registration--welcome--text"> Welcome to RYE! Fill the fields below
                to register</h1>
            <div className='form-container'>
                <div className='input-container'>
                    <div className='input-column'>
                        <h1 className='description-text'>First name</h1>

                        <Input value={firstName} onChange={e => setFirstName(e.target.value)}
                               style={{color: "#FFFDEE", backgroundColor: "#88CAFC", borderColor: "#88CAFC"}}/>

                        <h1 className='description-text'>Email name</h1>

                        <Input value={email} onChange={e => setEmail(e.target.value)}
                               style={{color: "#FFFDEE", backgroundColor: "#88CAFC", borderColor: "#88CAFC"}}/>

                        <h1 className='description-text'>Password</h1>

                        <Input value={password} onChange={e => setPassword(e.target.value)} type={'password'}
                               style={{color: "#FFFDEE", backgroundColor: "#88CAFC", borderColor: "#88CAFC"}}
                               error={passwordError}/>
                    </div>

                    <div className='input-column'>
                        <h1 className='description-text'>Username</h1>

                        <Input value={username} onChange={e => setUsername(e.target.value)}
                               style={{color: "#FFFDEE", backgroundColor: "#88CAFC", borderColor: "#88CAFC"}}/>

                        <h1 className='description-text'>Family member</h1>

                        <Input value={familyMember} onChange={e => setFamilyMember(e.target.value)}
                               style={{color: "#FFFDEE", backgroundColor: "#88CAFC", borderColor: "#88CAFC"}}/>

                        <h1 className='description-text'>Repeat password</h1>

                        <Input value={passwordRepeat} onChange={e => setPasswordRepeat(e.target.value)}
                               type={'password'}
                               style={{color: "#FFFDEE", backgroundColor: "#88CAFC", borderColor: "#88CAFC"}}
                               error={passwordError}/>

                    </div>

                </div>

                <Button color="#88CAFC" textColor={"#FFFDEE"} onClick={registerCallback}>Sign
                    up</Button>
            </div>


            <img src={blueGhost} className="welcome--img" alt="Blue ghost"
                 style={{transform: 'translate(-40%, -30%)', left: '15%'}}/>
        </div>
    );
}

export default RegisterPage;