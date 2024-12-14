import React, { useRef } from "react";

const TextArea = ({ value, placeholder, rows = 4, onChange }) => {
  const textAreaRef = useRef(null);

  const handleInput = (e) => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = "38px";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };
  return (
    <div>
      <textarea
        ref={textAreaRef}
        placeholder={placeholder}
        className="input-box nodrag"
        rows={rows}
        value={value}
        onChange={(e) => onChange(e)}
        onInput={handleInput}
      ></textarea>
    </div>
  );
};

export default TextArea;
