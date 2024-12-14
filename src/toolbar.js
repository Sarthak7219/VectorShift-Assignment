// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div className="toolbar">
        <DraggableNode
          type="customInput"
          label="Input"
          img_url="/assets/icons/input.svg"
        />

        <DraggableNode
          type="customOutput"
          label="Output"
          img_url="/assets/icons/output.svg"
        />
        <DraggableNode type="llm" label="LLM" img_url="/assets/icons/llm.svg" />
        <DraggableNode
          type="text"
          label="Text"
          img_url="/assets/icons/text.svg"
        />
        <DraggableNode
          type="market"
          label="Marketing"
          img_url="/assets/icons/marketing.svg"
        />
        <DraggableNode
          type="condition"
          label="Condition"
          img_url="/assets/icons/condition.svg"
        />
        <DraggableNode
          type="data_extract"
          label="Extract Data"
          img_url="/assets/icons/data-extract.svg"
        />
        <DraggableNode
          type="try_except"
          label="Try-Except"
          img_url="/assets/icons/try-except.svg"
        />
        <DraggableNode
          type="timed_loop"
          label="Time Loop"
          img_url="/assets/icons/time-loop.svg"
        />
      </div>
    </div>
  );
};
