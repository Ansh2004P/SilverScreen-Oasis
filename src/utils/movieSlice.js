import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },

    removePlaying: (state) => {
      state.nowPlaying = null;
      state.trailerVideo = null;
    },
  },
});

export const { addNowPlaying, addTrailerVideo, removePlaying } =
  MovieSlice.actions;
export default MovieSlice.reducer;
