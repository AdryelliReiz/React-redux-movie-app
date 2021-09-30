import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../app/features/movies/moviesSlice';
import { MovieCard } from '../MovieCard';
import './styles.scss';

export const MovieListing: React.FC = () => {
  const [renderMovies, setRenderMovies] = useState("false");
  const [renderShows, setRenderShows] = useState("false");
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  useEffect(() => {
    setRenderMovies(movies.Response)
    setRenderShows(shows.Response)
  }, [movies, shows])

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

      <div className="show-list" >
        <h2>Shows</h2>
        <div className="show-container" >
          {renderShows === "True" ? (
            shows.Search.map((show: any, index: number) => (
              <MovieCard key={index} data={show} />
            ))
          ) : (
              <div className = "shows-error" >
                <h3>
                  {shows.Error}
                </h3>
              </div>
          )}
        </div>
      </div>
    </div>
  );
}