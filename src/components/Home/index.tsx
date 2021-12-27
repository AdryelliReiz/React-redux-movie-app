import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../app/features/movies/moviesSlice';
import { MovieListing } from '../MovieListing';
import './styles.scss';

export const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [textMovieSearch, setTextMovieSearch] = useState('Harry');
  
  useEffect(() => {
    const textMoviesSearch = "Harry";
    const textShowsSearch = "Friends";
    dispatch(fetchAsyncMovies(textMoviesSearch))
    dispatch(fetchAsyncShows(textShowsSearch))
  }, [dispatch])

  return (
    <>
      <div className="banner-img" ></div>

      <MovieListing />
    </>
  );
}