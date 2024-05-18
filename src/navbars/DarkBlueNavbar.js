// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';
import '../navbars/DarkBlueNavbar.css';

const DarkBlueNavbar = ({ className }) => {
    return (
        <Link to='/' className={className}>
            <nav>
                <img src={logo} className="nav--img" alt="logo"/>
                <div className="nav--text">
                    <h1 className="nav--text1">RYE</h1>
                    <h3 className="nav--text2">Recognize your emotions</h3>
                </div>
            </nav>
        </Link>
    );
};

export default DarkBlueNavbar;
