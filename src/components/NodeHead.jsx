import React from "react";
import "../index.css";
import { useStore } from "../store";
import { ReactComponent as CloseIcon } from "../icons/cancel-icon.svg";
import { ReactComponent as SettingsIcon } from "../icons/settings-icon.svg";
import { ReactComponent as Infoicon } from "../icons/info-icon.svg";

const NodeHead = ({
  id,
  heading,
  showSettings = false,
  showMoreInfo = false,
}) => {
  const { removeNode } = useStore((state) => ({
    removeNode: state.removeNode,
  }));
  return (
    <div className="heading">
      <div className="left">
        <img src="/assets/icons/integration-icon.svg" alt="icon" />
        <p>{heading}</p>
      </div>

      <div className="right">
        {showSettings && <SettingsIcon className="node-opt-icon" />}
        {showMoreInfo && <Infoicon className="node-opt-icon" />}
        <CloseIcon className="node-opt-icon" onClick={() => removeNode(id)} />
      </div>
    </div>
  );
};

export default NodeHead;
