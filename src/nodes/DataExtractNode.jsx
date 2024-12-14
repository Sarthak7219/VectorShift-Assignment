import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import NodeHead from "../components/NodeHead";
import SelectInput from "../components/SelectInput";

const DataExtractNode = ({ id, data }) => {
  const [inputType, setInputType] = useState(data.inputType || "pdf");
  const [outputType, setOutputType] = useState(data.inputType || "word");
  return (
    <div className="basenode">
      <NodeHead
        id={id}
        heading="Data Extractor"
        showSettings={true}
        showMoreInfo={true}
      />

      <div className="node-content">
        <SelectInput
          label="Input format"
          value={inputType}
          placeholder="Choose input format"
          onChange={setInputType}
          options={[
            { value: "pdf", label: "PDF (.pdf)" },
            { value: "word", label: "Word (.docx)" },
            { value: "excel", label: "Excel (.xlsx, .xls)" },
            { value: "json", label: "JSON (.json)" },
            { value: "csv", label: "CSV (.csv)" },
            { value: "xml", label: "XML (.xml)" },
            {
              value: "database",
              label: "Database (e.g., MySQL, PostgreSQL, SQLite)",
            },
            { value: "api", label: "APIs (url)" },
          ]}
        />
        <SelectInput
          label="Output format"
          value={outputType}
          placeholder="Choose output format"
          onChange={setOutputType}
          options={[
            { value: "excel", label: "Excel (.xlsx, .xls)" },
            { value: "json", label: "JSON (.json)" },
            { value: "csv", label: "CSV (.csv)" },
            { value: "xml", label: "XML (.xml)" },
            {
              value: "database",
              label: "Database (e.g., MySQL, PostgreSQL, SQLite)",
            },
          ]}
        />
      </div>

      <Handle id={`${id}-input`} type="target" position={Position.Left} />
      <Handle id={`${id}-output`} type="source" position={Position.Right} />
    </div>
  );
};

export default DataExtractNode;
