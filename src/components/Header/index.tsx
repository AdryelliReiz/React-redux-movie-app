import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import user from '../../styles/assets/user.png';
import logo from '../../styles/assets/logo.png';
import { MdSearch} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../app/features/movies/moviesSlice';

export const Header: React.FC = () => {
  const [term, setTerm] = useState("")
  const dispatch = useDispatch()

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()

    if (term === "") {
      return
    }

    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
  }
  return (
    <div className="header" >
      <div className="logo">
        <Link to="/" >
          <img src={logo} alt="logo" />   
          Movie App
        </Link>
      </div>

      <div className="search-bar">
        <form onSubmit={(e) => submitHandler(e)}>
          <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e) => setTerm(e.target.value)} />
          <button type="submit" >
            <MdSearch size={20} />
          </button>
        </form>
      </div>
      
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}