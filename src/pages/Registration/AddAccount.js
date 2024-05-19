// AddAccount.js
import React from "react";
import { useNavigate } from "react-router-dom";
import LightBlueNavbar from "../../navbars/LightBlueNavbar";
import blueGhost from "../../images/blueGhost.png";
import '../../styles.css';

function AddAccount() {
    const navigate = useNavigate();

    const handleAddAccount = () => {
        navigate('/create-sub-account');
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#88CAFC' }}>
            <LightBlueNavbar />
            <div className="message" style={{ backgroundColor: "#3A3A72" }}>
                <h1 className="medium--text" style={{ marginLeft: "30%", color: "#88CAFC" }}>
                    Great! Thanks for registering.
                    Now create accounts for your children. Once you create their accounts, you will be able to track their progress and set goals for them to achieve.
                </h1>
            </div>
            <h1 className="login--text2" style={{ top: "43%", left: "45%", color: "#FFFDEE" }}>Add account:</h1>
            <button className="plus-button" onClick={handleAddAccount}>+</button>
            <img src={blueGhost} className="welcome--img" alt="Blue ghost" style={{ top: "20%", left: "5%", width: '11%', height: '17%' }} />
        </div>
    );
}

export default AddAccount;
