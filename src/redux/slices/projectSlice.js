import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.push(action.payload);
    },
    removeProject: (state, action) => {
      return state.filter((project) => project.id !== action.payload);
    },
    setProjectName(state, action) {
      const project = state.find((project) => project.id === action.payload.id);
      if (project) {
        project.name = action.payload.name;
      }
    },
    setProjectContent(state, action) {
      const project = state.find((project) => project.id === action.payload.id);
      if (project) {
        project.content = action.payload.content;
      }
    },
  },
});

export const { addProject, removeProject, setProjectName, setProjectContent } =
  projectSlice.actions;
export default projectSlice.reducer;
