import logo from '../images/logo.svg';
import '../styles.css';
import React from "react";
import {Link} from "react-router-dom";


const Navbar = ({style, textColor}) => {
    const textStyle1 = {marginBottom: '-0.3rem', marginTop: '0.3rem', color: textColor};
    const textStyle2 = {marginTop: '0.25rem', marginBottom: '0', color: textColor};

    return (
        <Link to='/'>
            <nav style={style}>
                <img src={logo} className="nav--img" alt="logo"/>
                <div className={"nav--text"}>
                    <h1 className="nav--text1" style={textStyle1}>RYE</h1>
                    <h3 className="nav--text2" style={textStyle2}>Recognize your emotions</h3>
                </div>
            </nav>
        </Link>

    );
};

export default Navbar;
