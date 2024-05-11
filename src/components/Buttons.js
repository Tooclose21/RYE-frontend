import React from 'react';

const Button = ({ children, loc, color, onClick }) => {
    const buttonStyle = {
        ...loc,
        backgroundColor: color
    };

    return (
        <button onClick={onClick} className="btn btn-primary button" style={buttonStyle}>
            {children}
        </button>
    );
};

export default Button;