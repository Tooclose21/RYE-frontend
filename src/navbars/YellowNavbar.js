import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';
import '../navbars/YellowNavbar.css';

const YellowNavbar = ({ className }) => {
    return (
        <Link to='/' className={className}>
            <div className="nav--yellow">
                <img src={logo} className="nav--img--yellow" alt="logo--yellow"/>
                <div className="nav--text--yellow">
                    <h1 className="nav--text1--yellow">RYE</h1>
                    <h3 className="nav--text2--yellow">Recognize your emotions</h3>
                </div>
            </div>
        </Link>
    );
};

export default YellowNavbar;
