import React, { useState } from "react";
import NodeHead from "../components/NodeHead";
import IntegerInput from "../components/IntegerInput";
import SelectInput from "../components/SelectInput";
import { Handle, Position } from "reactflow";

const TimedLoopNode = ({ id, data }) => {
  const [timeFormat, setTimeFormat] = useState(data.inputType || "Text");
  return (
    <div className="basenode">
      <NodeHead
        id={id}
        heading="Timed Looping"
        showSettings={true}
        showMoreInfo={true}
      />

      <div className="node-content">
        <IntegerInput placeholder="Time interval for looping (eg. 5s)" />
        <SelectInput
          label="Time format"
          value={timeFormat}
          placeholder="Choose time format"
          onChange={setTimeFormat}
          options={[
            { value: "secs", label: "Seconds" },
            { value: "mins", label: "Minutes" },
            { value: "hrs", label: "Hours" },
            { value: "days", label: "Days" },
            { value: "months", label: "Months" },
          ]}
        />
        <IntegerInput placeholder="Max Iterations (blank = none)" />
      </div>

      <Handle id={`${id}-loop-end`} type="target" position={Position.Left} />
      <Handle id={`${id}-loop-start`} type="source" position={Position.Right} />
    </div>
  );
};

export default TimedLoopNode;
