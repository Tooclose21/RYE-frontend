import React from 'react';
import "./Input.css";

const Input = ({ value, placeholder, onChange, error, className, type }) => {
    return (
        <div className={`input--container ${className}`}>
            <input
                value={value}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                className="inputBox"
            />
            {error && (
                <label className="errorLabel">
                    {error}
                </label>
            )}
        </div>
    );
};

export default Input;