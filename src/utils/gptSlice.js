import { createSlice } from "@reduxjs/toolkit";
const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    show: false,
    openaiKey: "",
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    setShow: (state, action) => {
      state.show = !state.show;
    },
    setKey: (state, action) => {
      state.openaiKey = action.payload;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { setShow, setKey, addGptMovieResult} = GptSlice.actions;
export default GptSlice.reducer;
