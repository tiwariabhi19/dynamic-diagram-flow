import React, { useState, useEffect } from "react";
import "./NodeEditor.css";

const NodeEditor = ({ node, onSave, onCancel }) => {
  const [label, setLabel] = useState(node?.data?.label || "");
  const [type, setType] = useState(node?.type || "default");
  const [position, setPosition] = useState(node?.position || { x: 0, y: 0 });

  useEffect(() => {
    setLabel(node?.data?.label || "");
    setType(node?.type || "default");
    setPosition(node?.position || { x: 0, y: 0 });
  }, [node]);

  const handleSave = () => {
    const updatedNode = {
      ...node,
      data: { ...node.data, label },
      type,
      position,
    };
    onSave(updatedNode);
  };

  return (
    <div className="node-editor">
      <h3>Edit Node</h3>
      <div>
        <label>Label: </label>
        <input value={label} onChange={(e) => setLabel(e.target.value)} />
      </div>
      <div>
        <label>Type: </label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="default">Default</option>
          <option value="input">Input</option>
          <option value="output">Output</option>
        </select>
      </div>
      <div>
        <label>Position: </label>
        <input
          type="number"
          value={position.x}
          onChange={(e) => setPosition({ ...position, x: +e.target.value })}
        />
        <input
          type="number"
          value={position.y}
          onChange={(e) => setPosition({ ...position, y: +e.target.value })}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default NodeEditor;
