import '../styles.css';
import { useState } from "react";

function ComboBox({ options, style, value, handleChange }) {

    return (
        <div style={{ ...style, backgroundColor: "#FBFFEA", borderRadius: "10px", width: "15%", height: "7%" }} >
            <select value={value} onChange={handleChange} style={{ height: "100%", width: "100%", padding: "0.5em", borderRadius: "10px", border: "none", backgroundColor: "#FBFFEA", fontSize: '24px' }}>
                {/*<option value={options[0]}></option>*/}
                {options.map(option => (
                    <option key={option} value={option} className="option--text">{option.toLowerCase().replaceAll('_', " ")}</option>
                ))}
            </select>
        </div>
    );
}

export default ComboBox;