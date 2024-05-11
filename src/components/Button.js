import React from 'react';

const Button = ({ children, loc, color, textColor, onClick}) => {
    const buttonStyle = {
        ...loc,
        backgroundColor: color,
        color: textColor
    };

    return (
        <button className="btn btn-primary button" style={buttonStyle} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;