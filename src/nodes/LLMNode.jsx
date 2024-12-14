import { useState } from "react";
import NodeHead from "../components/NodeHead";
import { Handle, Position } from "reactflow";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import SelectInput from "../components/SelectInput";

const LLMNode = ({ id, data }) => {
  const [text, setText] = useState("");
  const [inputType, setInputType] = useState(data.inputType || "Text");
  return (
    <div className="basenode">
      <NodeHead id={id} heading="LLM" showSettings={true} showMoreInfo={true} />

      <div className="node-content">
        <TextInput placeholder="Describe the AI's role in the system" />
        <TextArea
          placeholder="Write your prompt here"
          rows={4}
          value={text}
          onChange={(value) => setText(value)}
        />
        <SelectInput
          label="Model"
          value={inputType}
          placeholder="Choose AI Model"
          onChange={(value) => setInputType(value)}
          options={[
            { value: "gpt-3", label: "GPT-3" },
            { value: "gpt-4", label: "GPT-4" },
            { value: "custom-model", label: "Custom Model" },
          ]}
        />
      </div>

      <Handle
        id={`${id}-system`}
        type="target"
        position={Position.Left}
        style={{ top: "32%" }}
      />
      <Handle
        id={`${id}-prompt`}
        type="target"
        position={Position.Left}
        style={{ top: "62%" }}
      />
      <Handle id={`${id}-response`} type="source" position={Position.Right} />
    </div>
  );
};

export default LLMNode;
