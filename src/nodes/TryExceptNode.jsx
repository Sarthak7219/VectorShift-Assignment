import React from "react";
import ReadOnly from "../components/ReadOnly";
import NodeHead from "../components/NodeHead";
import Integerinput from "../components/IntegerInput";
import { Handle, Position } from "reactflow";

const TryExceptNode = ({ id }) => {
  return (
    <div className="basenode">
      <NodeHead
        id={id}
        heading="Try and Except"
        showSettings={true}
        showMoreInfo={true}
      />

      <div className="node-content">
        <ReadOnly text="Try" />
        <Integerinput placeholder="Retry attempts (Optional)" />
        <ReadOnly text="Except" />
      </div>

      <Handle id={`${id}-input`} type="target" position={Position.Left} />
      <Handle
        id={`${id}-try`}
        type="source"
        position={Position.Right}
        style={{ top: "30%" }}
      />
      <Handle
        id={`${id}-except`}
        type="source"
        position={Position.Right}
        style={{ top: "81%" }}
      />
    </div>
  );
};

export default TryExceptNode;
