import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Name",
  title: "Title",
  photo: "",
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
    setPhoto: (state, action) => {
      state.photo = action.payload;
    },
  },
});

export const { setName, setTitle, setPhoto } = formSlice.actions;
export default formSlice.reducer;
