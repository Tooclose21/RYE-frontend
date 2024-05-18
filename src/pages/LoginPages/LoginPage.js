import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../navbars/Navbar';
import Button from '../../components/Button';
import blueGhost from '../../images/blueGhost.png';
import '../../styles.css';
import LightBlueNavbar from "../../navbars/LightBlueNavbar";

function LoginPage() {
    const navigate = useNavigate();

    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#fffdee'}}>
            <LightBlueNavbar/>
            <h1 className="login--text">Log in as</h1>
            <Button
                loc={{ position: 'absolute', top: '30%', left: '59%' }}
                color="#88CAFC"
                onClick={() => navigate('/parent-login')}
            >
                Parent
            </Button>
            <Button
                loc={{ position: 'absolute', top: '40%', left: '59%' }}
                color="#88CAFC"
                onClick={() => navigate('/child-login')}
            >
                Child
            </Button>
            <h1 className="login--text2">Don't have an account yet?</h1>
            <Button
                loc={{ position: 'absolute', top: '63%', left: '59%' }}
                color="#88CAFC"
                onClick={() => navigate('/register')}
            >
                Sign up here
            </Button>
            <img src={blueGhost} className="welcome--img" alt="Blue ghost" />
        </div>
    );
}

export default LoginPage;