import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootStateOrAny } from "react-redux";

const initialState = {
  movies: []
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<[]>) => {
      state.movies = action.payload;
    }
  }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: RootStateOrAny) => state.movies.movies;
export default movieSlice.reducer;