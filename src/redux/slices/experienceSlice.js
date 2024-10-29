import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addExperience: (state, action) => {
      state.push(action.payload);
    },
    removeExperience: (state, action) => {
      return state.filter((experience) => experience.id !== action.payload);
    },
    setExperienceYear(state, action) {
      const experience = state.find(
        (experience) => experience.id === action.payload.id,
      );
      if (experience) {
        experience.year = action.payload.year;
      }
    },
    setExperienceTitle(state, action) {
      const experience = state.find(
        (experience) => experience.id === action.payload.id,
      );
      if (experience) {
        experience.title = action.payload.title;
      }
    },
    setExperienceCompany(state, action) {
      const experience = state.find(
        (experience) => experience.id === action.payload.id,
      );
      if (experience) {
        experience.company = action.payload.company;
      }
    },
    setExperienceContent(state, action) {
      const experience = state.find(
        (experience) => experience.id === action.payload.id,
      );
      if (experience) {
        experience.content = action.payload.content;
      }
    },
  },
});

export const {
  addExperience,
  removeExperience,
  setExperienceYear,
  setExperienceTitle,
  setExperienceCompany,
  setExperienceContent,
} = experienceSlice.actions;

export default experienceSlice.reducer;
