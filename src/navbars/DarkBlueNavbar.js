// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';
import '../navbars/DarkBlueNavbar.css';

const DarkBlueNavbar = ({ className }) => {
    return (
        <Link to='/' className={className}>
            <nav--dark>
                <img src={logo} className="nav--img--dark" alt="logo--dark"/>
                <div className="nav--text--dark">
                    <h1 className="nav--text1--dark">RYE</h1>
                    <h3 className="nav--text2--dark">Recognize your emotions</h3>
                </div>
            </nav--dark>
        </Link>
    );
};

export default DarkBlueNavbar;
