// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';
import '../navbars/DarkBlueNavbar.css';

const DarkBlueNavbar = ({ className }) => {
    return (
        <Link to='/' className={className}>
            <nav2>
                <img src={logo} className="nav--img2" alt="logo"/>
                <div className="nav--text2">
                    <h1 className="nav--text12">RYE</h1>
                    <h3 className="nav--text22">Recognize your emotions</h3>
                </div>
            </nav2>
        </Link>
    );
};

export default DarkBlueNavbar;
