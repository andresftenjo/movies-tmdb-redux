import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/toppopular" >
            Top Popular
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/search" >
            Search movie
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" >
            About
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Header;
