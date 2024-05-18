import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';
import '../navbars/OrangeNavbar.css';

const OrangeNavbar = ({ className }) => {
    return (
        <Link to='/' className={className}>
            <div className="nav--orange">
                <img src={logo} className="nav--img--orange" alt="logo--orange"/>
                <div className="nav--text--orange">
                    <h1 className="nav--text1--orange">RYE</h1>
                    <h3 className="nav--text2--orange">Recognize your emotions</h3>
                </div>
            </div>
        </Link>
    );
};

export default OrangeNavbar;
