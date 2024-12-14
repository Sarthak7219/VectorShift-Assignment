import React from "react";

const Button = ({ text, onClick, idx }) => {
  const handleClick = () => {
    if (idx !== undefined) {
      onClick(idx);
    } else {
      onClick();
    }
  };
  return (
    <div>
      <button onClick={handleClick} className="button">
        {text}
      </button>
    </div>
  );
};

export default Button;
