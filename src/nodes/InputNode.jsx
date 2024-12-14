import { useState } from "react";
import { Handle, Position } from "reactflow";
import "../index.css";
import NodeHead from "../components/NodeHead";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";

const InputNode = ({ id, data }) => {
  const [inputType, setInputType] = useState(data.inputType || "Text");

  return (
    <div className="basenode">
      <NodeHead
        id={id}
        heading="Input"
        showSettings={true}
        showMoreInfo={true}
      />

      <div className="node-content">
        <TextInput placeholder="Enter input name" />
        <SelectInput
          label="Type"
          value={inputType}
          onChange={setInputType}
          placeholder="Choose file type"
          options={[
            { value: "Text", label: "Text" },
            { value: "Image", label: "Image" },
          ]}
        />
      </div>

      <Handle id={`${id}-value`} type="source" position={Position.Right} />
    </div>
  );
};

export default InputNode;
