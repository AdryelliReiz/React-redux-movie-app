import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import user from '../../styles/assets/user.png';
import logo from '../../styles/assets/logo.png';

export const Header: React.FC = () => {
  return (
    <div className="header" >
      <Link to="/" >
        <div className="logo">
          <img src={logo} alt="logo" />   
          Movie App
        </div>
      </Link>
      
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}