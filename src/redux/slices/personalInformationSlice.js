import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  phone: "",
  mail: "",
  linkedin: "",
  github: "",
  website: "",
  universityName: "",
  universityStatus: "",
  dateOfBirth: "",
  nationality: "",
  disability: "",
  drivingLicense: "",
  military: "",
};

export const personalInformationSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setMail: (state, action) => {
      state.mail = action.payload;
    },
    setLinkedin: (state, action) => {
      state.linkedin = action.payload;
    },
    setGithub: (state, action) => {
      state.github = action.payload;
    },
    setWebsite: (state, action) => {
      state.website = action.payload;
    },
    setUniversityName: (state, action) => {
      state.universityName = action.payload;
    },
    setUniversityStatus: (state, action) => {
      state.universityStatus = action.payload;
    },
    setDateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload;
    },
    setNationality: (state, action) => {
      state.nationality = action.payload;
    },
    setDisability: (state, action) => {
      state.disability = action.payload;
    },
    setDrivingLicense: (state, action) => {
      state.drivingLicense = action.payload;
    },
    setMilitary: (state, action) => {
      state.military = action.payload;
    },
  },
});

export const {
  setDateOfBirth,
  setDisability,
  setDrivingLicense,
  setGithub,
  setLinkedin,
  setLocation,
  setMail,
  setMilitary,
  setNationality,
  setUniversityName,
  setUniversityStatus,
  setWebsite,
  setPhone,
} = personalInformationSlice.actions;
export default personalInformationSlice.reducer;
