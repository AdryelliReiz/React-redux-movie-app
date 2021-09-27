import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootStateOrAny } from "react-redux";

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
  }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: RootStateOrAny) => state.movies.movies;
export default movieSlice.reducer;