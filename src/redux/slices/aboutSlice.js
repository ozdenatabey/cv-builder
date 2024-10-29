import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    addAbout: (state, action) => {
      state.push(action.payload);
    },
    removeAbout: (state, action) => {
      return state.filter((about) => about.id !== action.payload);
    },
    setAbout: (state, action) => {
      const about = state.find((about) => about.id === action.payload.id);
      if (about) {
        about.name = action.payload.name;
      }
    },
  },
});

export const { addAbout, removeAbout, setAbout } = aboutSlice.actions;
export default aboutSlice.reducer;
