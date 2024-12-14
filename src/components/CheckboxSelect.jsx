import React, { useState, useRef, useEffect } from "react";

const CheckboxDropdown = ({ options, placeholder, onChange }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
    onChange(selectedValues);
  };

  return (
    <div className="input-container nodrag" ref={dropdownRef}>
      <div className="select-box" onClick={toggleDropdown}>
        <div className="input-box" style={{ cursor: "pointer" }}>
          {selectedValues.length ? selectedValues.join(", ") : `${placeholder}`}
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <div key={index} className="dropdown-item">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedValues.includes(option.value)}
                  onChange={() => handleCheckboxChange(option.value)}
                />
                <span className="checkbox-text">{option.label}</span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckboxDropdown;
