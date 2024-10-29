import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    addSkill: (state, action) => {
      state.push(action.payload);
    },
    removeSkill: (state, action) => {
      return state.filter((skill) => skill.id !== action.payload);
    },
    setSkillName(state, action) {
      const skill = state.find((skill) => skill.id === action.payload.id);
      if (skill) {
        skill.name = action.payload.name;
      }
    },
    setSkillLevel: (state, action) => {
      const skill = state.find((skill) => skill.id === action.payload.id);
      if (skill) {
        skill.level = action.payload.level;
      }
    },
  },
});

export const { addSkill, removeSkill, setSkillLevel, setSkillName } =
  skillSlice.actions;
export default skillSlice.reducer;
