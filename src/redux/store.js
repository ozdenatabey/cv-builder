import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import themeReducer from "./slices/themeSlice";
import personalInformationReducer from "./slices/personalInformationSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    theme: themeReducer,
    personal: personalInformationReducer,
  },
});
