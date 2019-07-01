import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/toppopular" >
        Top Popular
      </NavLink>
      {" | "}
      <NavLink to="/search" >
        Search movie
      </NavLink>
      {" | "}
      <NavLink to="/about" >
        About
      </NavLink>
    </nav>
  );
};

export default Header;
