import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
  },
});

export const { addNowPlaying } = MovieSlice.actions;
export default MovieSlice.reducer;