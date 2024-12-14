import React from "react";
import { useStore } from "../store";
import ResultBox from "./ResultBox";

const ResultCard = () => {
  const { results, isVisible, setVisibility } = useStore((state) => ({
    results: state.results,
    isVisible: state.isVisible,
    setVisibility: state.setVisibility,
  }));

  if (!isVisible) return null;

  return (
    <div className="result-card">
      <div
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          cursor: "pointer",
        }}
        onClick={() => setVisibility(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "16px", height: "16px" }}
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>

      <h1 style={{ margin: "10px 0" }}>Results</h1>
      <div className="wrapper">
        <ResultBox value={results.nodesCount} label="Nodes" />
        <ResultBox value={results.edgesCount} label="Edges" />
        <ResultBox value={results.isDAG ? "True" : "False"} label="IsDAG" />
      </div>
    </div>
  );
};

export default ResultCard;
