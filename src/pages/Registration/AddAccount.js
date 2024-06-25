// AddAccount.js
import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import DarkBlueNavbar from "../../navbars/DarkBlueNavbar";
import blueGhost from "../../images/blueGhost.png";
import '../Registration/AddAccount.css';

function AddAccount() {
    const location = useLocation();
    const navigate = useNavigate();

    const kids = location.state?.kids? location.state.kids : [];
    console.log("kids", kids)

    const handleAddAccount = () => {
        navigate('/create-sub-account');
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#88CAFC' }}>
            <DarkBlueNavbar />
            <div className="add--account--messagebox">
                <h1 className="add--account--message">
                    Great! Thanks for registering.
                    Now create accounts for your children. Once you create their accounts, you will be able to track their progress and set goals for them to achieve.
                </h1>
            </div>
            <h1 className="add--account--child--text">Add account:</h1>
            <button className="plus-button" onClick={handleAddAccount}>+</button>
            <img src={blueGhost} className="add--child--img" alt="Blue ghost"/>
        </div>
    );
}

export default AddAccount;
