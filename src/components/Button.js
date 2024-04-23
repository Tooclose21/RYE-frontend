import React from 'react';

const Button = ({ children, loc, color }) => {
    const buttonStyle = {
        ...loc,
        backgroundColor: color
    };

    return (
        <button className="btn btn-primary button" style={buttonStyle}>
            {children}
        </button>
    );
};

export default Button;