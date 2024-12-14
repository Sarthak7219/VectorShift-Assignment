import React, { useState } from "react";
import CheckboxDropdown from "../components/CheckboxSelect";
import NodeHead from "../components/NodeHead";
import { Handle, Position } from "reactflow";

const MarketingNode = ({ id }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  return (
    <div className="basenode">
      <NodeHead
        id={id}
        heading="Marketing"
        showSettings={true}
        showMoreInfo={true}
      />

      <div className="node-content">
        <CheckboxDropdown
          options={[
            { value: "Instagram", label: "Instagram" },
            { value: "Whatsapp", label: "Whatsapp" },
            { value: "Facebook", label: "Facebook" },
            { value: "Twitter", label: "Twitter" },
          ]}
          placeholder="Select Apps to post"
          onChange={setSelectedValues}
        />
      </div>

      <Handle id={`${id}-content`} type="target" position={Position.Left} />
    </div>
  );
};

export default MarketingNode;
