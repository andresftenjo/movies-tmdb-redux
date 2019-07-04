import React from "react";
import PropTypes from "prop-types";

const MovieDetailPage = ({ movievideos, moviedetails }) => (
  <div className="movieDetailsContainer">
      <div className="starRating"><p>{moviedetails.vote_average}</p></div><h4>{moviedetails.title}</h4>
      <p className="description">{moviedetails.overview}</p>
      <div className="videoContainer">
      {movievideos.key ? (
          <iframe frameBorder="0" scrolling="no" width="100%" height="400px" type="text/html" 
          src={`https://www.youtube.com/embed/${movievideos.key}?autoplay=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0`} allow="autoplay"></iframe>
          ) : (
            <> 
            </>
          )}
      </div>
      <ul className="list-group">
        {moviedetails.genres ? moviedetails.genres.map(genre => {
          return (
            <li key={genre.id} className="list-group-item">{genre.name}</li>);
        }) : null}
      </ul>
  </div>
);

MovieDetailPage.propTypes = {
  movievideos: PropTypes.object.isRequired,
  moviedetails: PropTypes.object.isRequired
};

export default MovieDetailPage;
