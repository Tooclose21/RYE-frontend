import React from 'react';

const Button = ({ children, loc }) => {
    return (
        <button className="btn btn-primary blue-button" style={loc}>{children}</button>
    );
};

export default Button;