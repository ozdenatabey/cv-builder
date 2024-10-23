import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import themeReducer from "./slices/themeSlice";
import personalInformationReducer from "./slices/personalInformationSlice";
import translateReducer from "./slices/translateSlice";
import translateButtonReducer from "./slices/translateButtonSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    theme: themeReducer,
    personal: personalInformationReducer,
    translate: translateReducer,
    translateButton: translateButtonReducer,
  },
});
