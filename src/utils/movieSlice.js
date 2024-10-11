import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: null, addTrailerVideo: null },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload; //mutating the state
    },
    addTrailerVideo: (state, action) => {
      state.addTrailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.addPopularMovies = action.payload;
    },
    addTvSeries: (state, action) => {
      state.addTvSeries = action.payload;
    },
    addNowPlayingTv: (state, action) => {
      state.addNowPlayingTv = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.addUpcomingMovies = action.payload;
    },
    addTrendingContent: (state, action) => {
      state.addTrendingContent = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTvSeries,
  addNowPlayingTv,
  addUpcomingMovies,
  addTrendingContent,
} = movieSlice.actions;
export default movieSlice.reducer;
