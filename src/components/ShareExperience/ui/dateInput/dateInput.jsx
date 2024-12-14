import "./dateInput.css"; // CSS file for styles
import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const CustomDateInput = ({...props}) => {
  const [value, setValue] = useState(""); // State to store the date value
  const [focus, setFocus] = useState(false)

  const handleIconClick = () => {
    const inputElement = document.getElementById("customDateInput");
    inputElement.showPicker(); // Programmatically open the date picker
  };

  const handleChange = (event) => {
    setValue(event.target.value); // Update state with selected date
    setFocus(true);
  };

  return (
    <div className="date-input-container">
      <input
        id="customDateInput"
        type="date"
        className={focus?"date-input focusedDateInput":"date-input"}
        value={value}
        onChange={handleChange}
        onClick={handleIconClick}
        style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
        {...props}
      />
      <FaCalendarAlt className={focus?"calendar-icon focusedIcon":"calendar-icon"} onClick={handleIconClick} />
    </div>
  );
};

export default CustomDateInput;