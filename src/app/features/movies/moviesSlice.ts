/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { RootStateOrAny } from "react-redux";
import { movieApi } from "../../../api/movieApi";


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

interface ISeriesData extends IMovieData { }

interface IMovieOrShowDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<{}> ;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

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

export const fetchAsyncMovieOrShowDetails = createAsyncThunk('movies/fetchAsyncMovieOrShowDetails', async (id: string) => {
  const response = await movieApi
    .get(`?apiKey=${process.env.API_KEY || 'a558b683'}&i=${id}&Plot=full`)
        
    const seriesData = response.data;

  return seriesData;
})

const initialState  = {
  movies: {} as IMoviesData,
  shows: {} as ISeriesData,
  selectMovieOrShow: {} as IMovieOrShowDetails,
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
    //extraReducers of fetchAsyncMovies
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

    //extraReducer of fetchAsyncMovieOrShowDetails
    builder.addCase(fetchAsyncMovieOrShowDetails.pending, (state, action) => {
      console.log("Pending...")
    })
    builder.addCase(fetchAsyncMovieOrShowDetails.fulfilled, (state, action) => {
      console.log("Fetched Successfully!")
      return { ...state, selectMovieOrShow: action.payload }
    })
    builder.addCase(fetchAsyncMovieOrShowDetails.rejected, (state, action) => {
      console.log("Rejected!")
    })
  }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: RootStateOrAny) => state.movies.movies;
export const getAllShows = (state: RootStateOrAny) => state.movies.shows;
export const getSelectMovieOrShow = (state: RootStateOrAny) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;