import React, { useState } from "react";
import "./radioBtn.css";

const RadioButton = () => {
    const [selected, setSelected] = useState("YES");

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <div className="radio-group">
            <label className="radio-container">
                <input
                    type="radio"
                    name="choice"
                    value="YES"
                    checked={selected === "YES"}
                    onChange={handleChange}
                />
                <span className="checkmark"></span>
                YES
            </label>
            <label className="radio-container">
                <input
                    type="radio"
                    name="choice"
                    value="NO"
                    checked={selected === "NO"}
                    onChange={handleChange}
                />

                <span className="checkmark"></span>
                NO
            </label>
        </div>
    );
};

export default RadioButton;
