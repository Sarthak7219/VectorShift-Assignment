// store.js

import { createWithEqualityFn } from "zustand/traditional";
import { addEdge, applyNodeChanges, MarkerType } from "reactflow";
import axios from "axios";

export const useStore = createWithEqualityFn((set, get) => ({
  nodes: [],
  edges: [],
  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs };
    if (newIDs[type] === undefined) {
      newIDs[type] = 0;
    }
    newIDs[type] += 1;
    set({ nodeIDs: newIDs });
    return `${type}-${newIDs[type]}`;
  },
  addNode: (node) => {
    set({
      nodes: [...get().nodes, node],
    });
  },
  removeNode: (nodeId) => {
    set({
      nodes: get().nodes.filter((node) => node.id !== nodeId),
      edges: get().edges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId
      ), // Remove edges connected to the node
    });
  },

  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onDeleteEdge: (edgeId) => {
    const filteredEdges = get().edges.filter((edge) => edge.id !== edgeId);
    set({ edges: filteredEdges });
  },

  onConnect: (connection) => {
    console.log(connection);
    set({
      edges: addEdge(
        {
          ...connection,
          type: "custom",
          animated: true,
          markerEnd: { type: MarkerType.Arrow, height: "20px", width: "20px" },
        },
        get().edges
      ),
    });
  },
  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, [fieldName]: fieldValue };
        }

        return node;
      }),
    });
  },
  results: {
    nodesCount: 0,
    edgesCount: 0,
    isDAG: false,
  },
  isVisible: false,
  handleSubmit: async () => {
    const nodes = get().nodes;
    const edges = get().edges;

    const payload = {
      nodes: nodes.map((node) => ({ id: node.id, type: node.type })),
      edges: edges.map((edge) => ({
        source: edge.source,
        target: edge.target,
      })),
    };

    set({ isLoading: true });

    try {
      const formData = new FormData();
      formData.append("pipeline", JSON.stringify(payload));

      const response = await axios.post(
        "http://127.0.0.1:8000/pipelines/parse",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data) {
        // Update the result in the store
        set({
          results: {
            isDAG: response.data.is_dag,
            nodesCount: response.data.nodes_count,
            edgesCount: response.data.edges_count,
          },
          isVisible: true,
        });
      } else {
        alert("Unexpected server response.");
      }
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert("Failed to validate pipeline.");
    } finally {
      set({ isLoading: false });
    }
  },
  setVisibility: (visible) => set({ isVisible: visible }),
}));
