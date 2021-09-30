import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../app/features/movies/moviesSlice';
import { MovieListing } from '../MovieListing';
import './styles.scss';

export const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [textMovieSearch, setTextMovieSearch] = useState('Harry');
  
  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
  }, [dispatch])

  return (
    <>
      <div className="banner-img" ></div>

      <MovieListing />
    </>
  );
}