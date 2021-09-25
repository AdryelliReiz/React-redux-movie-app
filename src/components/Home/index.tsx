import React, { useEffect, useState } from 'react';
import { movieApi } from '../../api/movieApi';
import { MovieListing } from '../MovieListing';
import './styles.scss';

export const Home: React.FC = () => {
  const [ textMovieSearch, setTextMovieSearch ] = useState('Harry');
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${process.env.API_KEY || 'a558b683'}&s=${textMovieSearch}&type=movie`)
        .catch((err) => {
          console.log('Err:', err)
        })
      console.log(response)
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