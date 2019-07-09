import React from "react";
import PropTypes from "prop-types";

const RelatedMoviesList = ({ relatedmovies, refreshMovie }) => (
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
      {relatedmovies.map(movie => {
        return (
          <tr key={movie.id}>
            <td>
                <img className="posterMovieImg" src={"http://image.tmdb.org/t/p/original/" + movie.poster_path }></img>
            </td>
            <td>
              <a
                className="linkMovie"
                onClick={() => refreshMovie(movie.id)}
              >
                {movie.title}
              </a>
            </td>
            <td className="overviewMovie">{movie.overview}</td>
            <td>{movie.release_date}</td>
            <td>
              <button className="btn btn-outline-info" onClick={() => refreshMovie(movie.id)}>
                Trailer
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

RelatedMoviesList.propTypes = {
  relatedmovies: PropTypes.array.isRequired,
  refreshMovie: PropTypes.func.isRequired
};

export default RelatedMoviesList;
