export const addNode = (node) => ({
  type: "ADD_NODE",
  payload: node,
});

export const removeNode = (nodeId) => ({
  type: "REMOVE_NODE",
  payload: nodeId,
});

export const addEdge = (edge) => ({
  type: "ADD_EDGE",
  payload: edge,
});

export const removeEdge = (edgeId) => ({
  type: "REMOVE_EDGE",
  payload: edgeId,
});
