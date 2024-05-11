import React from 'react';

const Input = ({value, placeholder, onChange, error, style, loc}) => {
    const inputStyle = {
        ...style,
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
                type='text'
                onChange={onChange}
                placeholder={placeholder}
                className="inputBox"
                style={inputStyle}
            />
            <label className="errorLabel" style={labelStyle}>
                {error}
            </label>
        </div>
    );
};

export default Input;