import React from 'react';

const Button = ({ children, loc, color, textColor}) => {
    const buttonStyle = {
        ...loc,
        backgroundColor: color,
        color: textColor
    };

    return (
        <button className="btn btn-primary button" style={buttonStyle}>
            {children}
        </button>
    );
};

export default Button;