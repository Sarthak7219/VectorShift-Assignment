import React from "react";

const ReadOnly = ({ text }) => {
  return (
    <div className="input-container nodrag">
      <div className="input-box">{text}</div>
    </div>
  );
};

export default ReadOnly;
