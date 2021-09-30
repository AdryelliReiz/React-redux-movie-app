/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { RootStateOrAny } from "react-redux";
import { movieApi } from "../../../api/movieApi";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
  const textMovieSearch = 'Harry';
  const response = await movieApi
    .get(`?apiKey=${process.env.API_KEY || 'a558b683'}&s=${textMovieSearch}&type=movie`)
        
    const moviesData = response.data;

  return moviesData;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
  const textSeriesSearch = 'Friends';
  const response = await movieApi
    .get(`?apiKey=${process.env.API_KEY || 'a558b683'}&s=${textSeriesSearch}&type=series`)
        
    const seriesData = response.data;

  return seriesData;
})

interface IMovieData {
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string,
}

interface IMoviesData {
  Response: string,
  Search: Array<IMovieData>,
  totalResults: string
}

interface ISeriesData extends IMovieData {}

const initialState  = {
  movies: <IMoviesData>{},
  shows: <ISeriesData>{}
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<IMoviesData>) => {
      state.movies = action.payload;
    }
  },
  extraReducers: (builder) => {
    //extraReducers of fetchAsyncMoies
    builder.addCase(fetchAsyncMovies.pending, (state, action) => {
      console.log("Pending...")
    })
    builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      console.log("Fetched Successfully!")
      return { ...state, movies: action.payload }
    })
    builder.addCase(fetchAsyncMovies.rejected, (state, action) => {
      console.log("Rejected!")
    })

    //extraReducers of fetchAsyncShows
    builder.addCase(fetchAsyncShows.pending, (state, action) => {
      console.log("Pending...")
    })
    builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
      console.log("Fetched Successfully!")
      return { ...state, shows: action.payload }
    })
    builder.addCase(fetchAsyncShows.rejected, (state, action) => {
      console.log("Rejected!")
    })
  }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: RootStateOrAny) => state.movies.movies;
export const getAllShows = (state: RootStateOrAny) => state.movies.shows;
export default movieSlice.reducer;