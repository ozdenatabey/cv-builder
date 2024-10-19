import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "tr",
  color: "color1",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.color = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setTheme, setLanguage } = themeSlice.actions;
export default themeSlice.reducer;
