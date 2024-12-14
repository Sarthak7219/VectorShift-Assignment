import React from "react";

const Selectinput = ({ value, options, placeholder, onChange }) => {
  return (
    <div className="input-container nodrag">
      <div className="select-box">
        <select
          value={value}
          className="input-box"
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option
              key={index}
              value={option.value}
              style={{
                fontFamily: "inherit",
                fontSize: "16px",
                fontWeight: "inherit",
              }}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Selectinput;
