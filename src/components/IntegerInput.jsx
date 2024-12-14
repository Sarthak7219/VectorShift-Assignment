import React from "react";

const IntegerInput = ({ placeholder }) => {
  return (
    <div className="input-container nodrag">
      <input type="number" placeholder={placeholder} className="input-box" />
    </div>
  );
};

export default IntegerInput;
