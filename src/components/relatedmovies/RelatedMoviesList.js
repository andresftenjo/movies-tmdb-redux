import React from "react";
import PropTypes from "prop-types";

const RelatedMoviesList = ({ relatedmovies }) => (
  <table className="table table-striped">
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
                className="linkMovie" href={/movie/ + movie.id}
              >
                {movie.title}
              </a>
              
            </td>
            <td className="overviewMovie">{movie.overview}</td>
            <td>{movie.release_date}</td>
            <td>
             <button className="btn btn-outline-info">
                <a className="btn-box" href={/movie/ + movie.id}>Trailer</a>
             </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

RelatedMoviesList.propTypes = {
  relatedmovies: PropTypes.array.isRequired
};

export default RelatedMoviesList;
