import '../styles.css';
import { useState } from "react";

function ComboBox({ options, style }) {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div style={{ ...style, backgroundColor: "#FBFFEA", borderRadius: "10px", width: "15%", height: "7%" }} >
            <select value={selectedValue} onChange={handleChange} style={{ height: "100%", width: "100%", padding: "0.5em", borderRadius: "10px", border: "none", backgroundColor: "#FBFFEA" }}>
                <option value=""></option>
                {options.map(option => (
                    <option key={option} value={option} className="option--text">{option}</option>
                ))}
            </select>
        </div>
    );
}

export default ComboBox;