import React from 'react';
import "../styles.css"

const Input = ({value, placeholder, onChange, error, style, loc, type}) => {
    const inputStyle = {
        ...style,
        color: "#06066a", // TODO: Refactor in stylesheet
        ...loc,
        borderRadius: '10px'
    };
    const labelStyle = {
        ...loc,
        color: "#FF0000" // Default color if not provided
    };

    return (
        <div className="input--container">
            <input
                value={value}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                className="input-box"
                style={inputStyle}
            />
            <label className="errorLabel" style={labelStyle}>
                {error}
            </label>
        </div>
    );
};

export default Input;