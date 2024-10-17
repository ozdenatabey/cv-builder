import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    formSlice: formReducer,
    themeSlice: themeReducer,
  },
});
