import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const referenceSlice = createSlice({
  name: "reference",
  initialState,
  reducers: {
    addReference: (state, action) => {
      state.push(action.payload);
    },
    removeReference: (state, action) => {
      return state.filter((reference) => reference.id !== action.payload);
    },
    setReferenceName: (state, action) => {
      const reference = state.find(
        (reference) => reference.id === action.payload.id,
      );
      if (reference) {
        reference.name = action.payload.name;
      }
    },
    setReferenceCompany: (state, action) => {
      const reference = state.find(
        (reference) => reference.id === action.payload.id,
      );
      if (reference) {
        reference.company = action.payload.company;
      }
    },
    setReferencePhone: (state, action) => {
      const reference = state.find(
        (reference) => reference.id === action.payload.id,
      );
      if (reference) {
        reference.phone = action.payload.phone;
      }
    },
  },
});

export const {
  addReference,
  removeReference,
  setReferencePhone,
  setReferenceCompany,
  setReferenceName,
} = referenceSlice.actions;
export default referenceSlice.reducer;
