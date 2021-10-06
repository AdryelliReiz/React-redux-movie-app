import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getAllMovies, getAllShows } from '../../app/features/movies/moviesSlice';
import { settingsSlider } from '../../utils/settingsSlider';
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
          <Slider {...settingsSlider} >
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
          </Slider>
        </div>
      </div>

      <div className="show-list" >
        <h2>Shows</h2>
        <div className="show-container" >
          <Slider {...settingsSlider}>
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
          </Slider>
        </div>
      </div>
    </div>
  );
}