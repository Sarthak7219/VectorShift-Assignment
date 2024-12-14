import React, { useState } from "react";
import NodeHead from "../components/NodeHead";
import { Handle, Position } from "reactflow";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";

const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");
  return (
    <div className="basenode">
      <NodeHead
        id={id}
        heading="Output"
        showSettings={true}
        showMoreInfo={true}
      />

      <div className="node-content">
        <TextInput
          value={currName}
          onChange={setCurrName}
          placeholder="Enter output name"
        />
        <SelectInput
          label="Type"
          value={outputType}
          placeholder="Choose file type"
          onChange={setOutputType}
          options={[
            { value: "Text", label: "Text" },
            { value: "Image", label: "Image" },
          ]}
        />
      </div>

      <Handle id={`${id}-value`} type="target" position={Position.Left} />
    </div>
  );
};

export default OutputNode;
