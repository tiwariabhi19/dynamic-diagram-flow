import { createStore } from "redux";

const initialState = {
  nodes: [
    {
      id: "1",
      type: "input",
      position: { x: 250, y: 5 },
      data: { label: "Node 1" },
    },
  ],
  edges: [],
};

function diagramReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NODE":
      return {
        ...state,
        nodes: [...state.nodes, action.payload],
      };
    case "REMOVE_NODE":
      return {
        ...state,
        nodes: state.nodes.filter((node) => node.id !== action.payload),
      };
    case "ADD_EDGE":
      return {
        ...state,
        edges: [...state.edges, action.payload],
      };
    case "REMOVE_EDGE":
      return {
        ...state,
        edges: state.edges.filter((edge) => edge.id !== action.payload),
      };
    default:
      return state;
  }
}

const store = createStore(diagramReducer);

export default store;
