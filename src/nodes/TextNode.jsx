import React, { useState } from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";
import NodeHead from "../components/NodeHead";
import TextArea from "../components/TextArea";

const variableRegex = /{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g;

const TextNode = ({ id }) => {
  const [text, setText] = useState("");
  const [variables, setVariables] = useState([]);
  const updateNodeInternals = useUpdateNodeInternals();

  const detectVariables = (inputText) => {
    const matches = [];
    let match;
    while ((match = variableRegex.exec(inputText)) !== null) {
      matches.push(match[1]);
    }
    return [...new Set(matches)]; // Ensure variables are unique
  };

  // Handle text change and update variables dynamically
  const handleTextChange = (value) => {
    setText(value);

    const detectedVariables = detectVariables(value);
    setVariables(detectedVariables);

    // Update the node internals to reflect new handles
    updateNodeInternals(id);
  };

  return (
    <div className="basenode">
      <NodeHead
        id={id}
        heading="Text"
        showSettings={true}
        showMoreInfo={true}
      />

      <div className="node-content">
        <TextArea
          placeholder="Write your text here"
          rows={4}
          value={text}
          onChange={handleTextChange}
        />
      </div>

      {/* Dynamic handles for each variable */}
      {variables.map((variable, index) => (
        <Handle
          key={`${id}-var-${index}`}
          id={`${id}-${variable}`}
          type="target"
          position={Position.Left}
          style={{ top: `${(index + 1) * 20}px` }} // Position handles dynamically
        />
      ))}

      {/* Static source handle */}
      <Handle id={`${id}-textoutput`} type="source" position={Position.Right} />
    </div>
  );
};

export default TextNode;
