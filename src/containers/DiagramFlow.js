import React, { useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from "react-flow-renderer";
import Sidebar from "../components/Sidebar/Sidebar";
import "./DiagramFlow.css";
const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Start Node" },
    position: { x: 250, y: 25 },
  },
];

const initialEdges = [];

const DiagramFlow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  );

  return (
    <div className="diagram-container">
      <Sidebar
        onAddNode={(node) => {
          const newNode = {
            id: `${nodes.length + 1}`,
            type: "default",
            data: { label: node },
            position: {
              x: Math.random() * 400,
              y: Math.random() * 400,
            },
          };
          setNodes((nds) => [...nds, newNode]);
        }}
      />
      <div className="flow-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default DiagramFlow;
