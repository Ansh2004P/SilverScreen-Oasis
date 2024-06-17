import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: null,
    trailerVideo: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopular: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    removePlaying: (state) => {
      state.nowPlaying = null;
      state.trailerVideo = null;
      state.popularMovies = null;
      state.topRatedMovies = null;
      state.upcomingMovies = null;
    },
  },
});

export const {
  addNowPlaying,
  addTrailerVideo,
  addTopRatedMovies,
  addUpcomingMovies,
  addPopular,
  removePlaying,
} = MovieSlice.actions;

export default MovieSlice.reducer;
