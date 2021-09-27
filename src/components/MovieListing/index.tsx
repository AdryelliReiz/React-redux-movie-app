import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../app/features/movies/moviesSlice';
import { MovieCard } from '../MovieCard';
import './styles.scss';

export const MovieListing: React.FC = () => {
  const [renderMovies, setRenderMovies] = useState("false");
  const movies = useSelector(getAllMovies);

  useEffect(() => {
    setRenderMovies(movies.Response)
    console.log(movies)
  }, [movies])

  return (
    <div className="movie-wrapper" >
      <div className="movie-list" >
        <h2>Movies</h2>
        <div className="movie-container" >
          {renderMovies === "True" ? (
            movies.Search.map((movie: any, index: number) => (
              <MovieCard key={index} data={movie} />
            ))
          ) : (
              <div className = "movies-error" >
                <h3>
                  {movies.Error}
                </h3>
              </div>
          )}
        </div>
      </div>
    </div>
  );
}