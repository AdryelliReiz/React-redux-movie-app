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

const initialState  = {
  movies: <IMoviesData>{}
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
  }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: RootStateOrAny) => state.movies.movies;
export default movieSlice.reducer;