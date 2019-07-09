import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
                <img className="posterMovieImg" src={"http://image.tmdb.org/t/p/original/" + movie.poster_path }></img>
            </td>
            <td>
              <Link className="linkMovie" to={"/movie/" + movie.id}>{movie.title}</Link>
            </td>
            <td className="overviewMovie">{movie.overview}</td>
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
