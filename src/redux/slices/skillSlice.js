import { createSlice } from "@reduxjs/toolkit";

function generateUUID() {
  return "xxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const initialState = [
  {
    id: generateUUID(),
    name: "",
    level: "",
  },
];

export const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    setSkillName: (state, action) => {
      state.name = action.payload;
    },
    setSkillLevel: (state, action) => {
      state.level = action.payload;
    },
  },
});

export const { setSkillName, setSkillLevel } = skillSlice.actions;
export default skillSlice.reducer;
