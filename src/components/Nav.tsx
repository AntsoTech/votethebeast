import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="nav">
      <img src="../icons/ball.png" alt="" width="50px" className="nav__ball" />
      <Link to="/">
        <li className="nav__logo">
          <h1 className="nav__logo__title">BEASTIES </h1>
        </li>
      </Link>
      <Link to="/ranking">
        <li className="nav__leaderboard">
          <img src="../icons/podium.png" alt="" width="22px" />
          <h2>Leaderboard</h2>
        </li>
      </Link>
      <Link to="/newplayer">
        <li className="nav__newplayer">
          <img src="../icons/addition.png" alt="" width="22px" />
          <h2>Add a player</h2>
        </li>
      </Link>
    </ul>
  );
};

export default Nav;
