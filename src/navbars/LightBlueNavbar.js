// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';
import '../navbars/LightBlueNavbar.css';

const LightBlueNavbar = ({ className }) => {
    return (
        <Link to='/' className={className}>
            <nav--light>
                <img src={logo} className="nav--img--light" alt="logo--light"/>
                <div className="nav--text--light">
                    <h1 className="nav--text1--light">RYE</h1>
                    <h3 className="nav--text2--light">Recognize your emotions</h3>
                </div>
            </nav--light>
        </Link>
    );
};

export default LightBlueNavbar;
