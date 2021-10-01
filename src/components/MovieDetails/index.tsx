import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAsyncMovieOrShowDetails, getSelectMovieOrShow } from '../../app/features/movies/moviesSlice';

// import { Container } from './styles';

export const MovieDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const selectMovieOrShowData = useSelector(getSelectMovieOrShow)

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetails(id));
  }, [dispatch])
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">
          {selectMovieOrShowData.Title}
        </div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-start" ></i> : {selectMovieOrShowData.imdbRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumbs-up"></i> : {selectMovieOrShowData.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i> : {selectMovieOrShowData.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i> : {selectMovieOrShowData.Year}
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
        <img src={selectMovieOrShowData} alt={selectMovieOrShowData.Title} />
      </div>
    </div>
  );
}