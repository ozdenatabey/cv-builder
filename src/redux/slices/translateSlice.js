import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  text: "",
  status: "idle",
  translatedText: "",
  error: null,
  disability: "",
  translatedDisability: "",
  drivingLicense: "",
  translatedDrivingLicense: "",
  military: "",
  translatedMilitary: "",
};

export const translateText = createAsyncThunk(
  "translate/translateText",
  async ({ text, field }) => {
    const options = {
      method: "POST",
      url: "https://deep-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "x-rapidapi-key": "20989dcbe7mshaa360e3218e30b5p1e12e3jsn6a21f00a7e3c",
        "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        q: text,
        source: "tr",
        target: "en",
      },
    };

    try {
      const response = await axios.request(options);
      return {
        translatedText: response.data.data.translations.translatedText,
        field,
      };
    } catch (error) {
      console.error("API çağrılırken hata oluştu", error);
      throw error;
    }
  }
);

export const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    updateText: (state, action) => {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(translateText.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(translateText.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { translatedText, field } = action.payload;

        switch (field) {
          case "disability":
            state.translatedDisability = translatedText;
            break;
          case "drivingLicense":
            state.translatedDrivingLicense = translatedText;
            break;
          case "military":
            state.translatedMilitary = translatedText;
            break;
        }
      })
      .addCase(translateText.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setStatus, updateText } = translateSlice.actions;
export default translateSlice.reducer;
