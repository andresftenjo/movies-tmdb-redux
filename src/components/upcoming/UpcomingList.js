import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const imgPoster = {
  width: "100%"
};

const UpcomingList = ({ upcomingmovies }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Overview</th>
        <th>Release</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {upcomingmovies.map(movie => {
        return (
          <tr key={movie.id}>
            <td>
                <img style={imgPoster} src={"http://image.tmdb.org/t/p/original/" + movie.poster_path }></img>
            </td>
            <td>
              <Link to={"/movie/" + movie.id}>{movie.title}</Link>
            </td>
            <td>{movie.overview}</td>
            <td>{movie.release_date}</td>
            <td>
              <button className="btn btn-outline-info">
                  <Link to={"/movie/" + movie.id}>Trailer</Link>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

UpcomingList.propTypes = {
  upcomingmovies: PropTypes.array.isRequired
};

export default UpcomingList;