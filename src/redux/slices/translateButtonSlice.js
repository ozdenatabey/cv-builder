import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  translateButton: "off",
};

export const translateButtonSlice = createSlice({
  name: "translateButton",
  initialState,
  reducers: {
    setButtonStatus: (state, action) => {
      state.translateButton = action.payload;
    },
  },
});

export const { setButtonStatus } = translateButtonSlice.actions;
export default translateButtonSlice.reducer;
