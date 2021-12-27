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
      {renderMovies === "True" && (
        <div className="movie-list" >
          <h2>Movies</h2>
          <div className="movie-container" >
          
            <Slider {...settingsSlider} >
              {movies.Search?.map((movie: any, index: number) => (
                <MovieCard key={index} data={movie} />
              ))}
            </Slider>
            )
          </div>
        </div>
      )}

      
      {renderShows === "True" && (
        <div className="show-list" >
          <h2>Shows</h2>
          <div className="show-container" >
          
            <Slider {...settingsSlider}>
              {shows.Search?.map((show: any, index: number) => (
                <MovieCard key={index} data={show} />
              ))}
            </Slider>
            )
          </div>
        </div>
      )}
    </div>
  );
}