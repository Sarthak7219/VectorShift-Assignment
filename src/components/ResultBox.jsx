import React from "react";

const ResultBox = ({ value, label }) => {
  return (
    <div className="result-box">
      <h1>{value}</h1>
      <p>{label}</p>
    </div>
  );
};

export default ResultBox;
