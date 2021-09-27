import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { movieApi } from '../../api/movieApi';
import { addMovies } from '../../app/features/movies/moviesSlice';
import { MovieListing } from '../MovieListing';
import './styles.scss';

export const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [textMovieSearch, setTextMovieSearch] = useState('Harry');
  
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${process.env.API_KEY || 'a558b683'}&s=${textMovieSearch}&type=movie`)
        
      const moviesData = response.data;

      console.log(moviesData)
      dispatch(addMovies(moviesData))
    }
    fetchMovies()
  }, [])

  return (
    <>
      <div className="banner-img" ></div>

      <MovieListing />
    </>
  );
}