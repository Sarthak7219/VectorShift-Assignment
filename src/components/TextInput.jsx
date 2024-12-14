import React from "react";

const TextInput = ({ placeholder }) => {
  return (
    <div className="input-container nodrag">
      <input type="text" placeholder={placeholder} className="input-box" />
    </div>
  );
};

export default TextInput;
