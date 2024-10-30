import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import themeReducer from "./slices/themeSlice";
import personalInformationReducer from "./slices/personalInformationSlice";
import translateReducer from "./slices/translateSlice";
import translateButtonReducer from "./slices/translateButtonSlice";
import skillReducer from "./slices/skillSlice";
import aboutReducer from "./slices/aboutSlice";
import experienceReducer from "./slices/experienceSlice";
import projectReducer from "./slices/projectSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    theme: themeReducer,
    personal: personalInformationReducer,
    translate: translateReducer,
    translateButton: translateButtonReducer,
    skill: skillReducer,
    about: aboutReducer,
    experience: experienceReducer,
    project: projectReducer,
  },
});
