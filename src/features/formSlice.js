import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Name",
  title: "Title",
};

export const formSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setName, setTitle } = formSlice.actions;
export default formSlice.reducer;
