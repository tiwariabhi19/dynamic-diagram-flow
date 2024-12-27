// src/components/Sidebar.js
import React, { useState } from "react";

const Sidebar = ({ onAddNode }) => {
  const [nodeName, setNodeName] = useState("");

  const handleAddNode = () => {
    if (nodeName.trim()) {
      onAddNode(nodeName);
      setNodeName("");
    }
  };

  return (
    <div className="sidebar">
      <h2>Node Editor</h2>
      <input
        type="text"
        placeholder="Enter node name"
        value={nodeName}
        onChange={(e) => setNodeName(e.target.value)}
      />
      <button onClick={handleAddNode}>Add Node</button>
    </div>
  );
};

export default Sidebar;
