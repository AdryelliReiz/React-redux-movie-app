import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAsyncMovieOrShowDetails, getSelectMovieOrShow, removeSelectedMoviesOrShows } from '../../app/features/movies/moviesSlice';

import { FiStar, FiHeart, FiClock, FiCalendar } from "react-icons/fi";
import './styles.scss';

export const MovieDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const selectMovieOrShowData = useSelector(getSelectMovieOrShow)

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetails(id));

    return () => {
      dispatch(removeSelectedMoviesOrShows())
    }
  }, [dispatch, id])
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">
          {selectMovieOrShowData.Title}
        </div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i><FiStar size={24} /></i> : {selectMovieOrShowData.imdbRating}
          </span>
          <span>
            IMDB Votes <i><FiHeart size={24} /></i> : {selectMovieOrShowData.imdbVotes}
          </span>
          <span>
            Runtime <i><FiClock size={24} /></i> : {selectMovieOrShowData.Runtime}
          </span>
          <span>
            Year <i><FiCalendar size={24} /></i> : {selectMovieOrShowData.Year}
          </span>
        </div>
        <div className="movie-plot">{selectMovieOrShowData.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{selectMovieOrShowData.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{selectMovieOrShowData.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{selectMovieOrShowData.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{selectMovieOrShowData.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{selectMovieOrShowData.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={selectMovieOrShowData.Poster} alt={selectMovieOrShowData.Title} />
      </div>
    </div>
  );
}