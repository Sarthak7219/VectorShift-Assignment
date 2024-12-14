import React, { useState } from "react";
import TextInput from "../components/TextInput";
import ReadOnly from "../components/ReadOnly";
import { Handle, Position } from "reactflow";
import Button from "../components/Button";
import NodeHead from "../components/NodeHead";
import { ReactComponent as CloseIcon } from "../icons/cancel-color.svg";

const ConditionalNode = ({ id }) => {
  const [conditions, setConditions] = useState([]);
  const addCondition = () =>
    setConditions([...conditions, { if: "", then: "" }]);
  const removeCondition = (index) =>
    setConditions(conditions.filter((_, i) => i !== index));

  return (
    <div className="basenode">
      <NodeHead
        id={id}
        heading="Condition"
        showSettings={true}
        showMoreInfo={true}
      />

      <div className="if-then-flex">
        <TextInput placeholder="If" />
        <TextInput placeholder="Then" />
      </div>

      {conditions.map((condition, idx) => (
        <div key={idx}>
          <div className="if-then-flex">
            <CloseIcon
              className="else-if-remove-icon"
              onClick={() => removeCondition(idx)}
            />
            <TextInput placeholder="Else If" className="else-if-input" />
            <TextInput placeholder="Then" />
          </div>
        </div>
      ))}
      <Button text="Add else-if" onClick={addCondition} />

      <div className="if-then-flex">
        <ReadOnly text="else" />
        <TextInput placeholder="Then " />
      </div>

      <Handle id={`${id}-condition`} type="target" position={Position.Left} />
      <Handle id={`${id}-input`} type="target" position={Position.Left} />
      <Handle
        id={`${id}-if-out`}
        type="source"
        position={Position.Right}
        style={{ top: "112px" }}
      />
      <Handle
        id={`${id}-else-out`}
        type="source"
        position={Position.Right}
        style={{ top: "auto", bottom: "43px" }}
      />

      {conditions.map((_, idx) => {
        return (
          <Handle
            key={`${id}-elseif-out-${idx}`}
            id={`${id}-elseif-out-${idx}`}
            type="source"
            position={Position.Right}
            style={{ top: `${112 + (idx + 1) * 68}px` }}
          />
        );
      })}
    </div>
  );
};

export default ConditionalNode;
