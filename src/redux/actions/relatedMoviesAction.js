import * as types from "./actionTypes";
import * as relatedMoviesApi from "../../api/relatedMoviesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadRelatedMoviesSuccess(relatedmovies) {
  return { type: types.LOAD_RELATEDMOVIES_SUCCESS, relatedmovies };
}

export function loadRelatedMovies(id) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return relatedMoviesApi
      .getRelatedMovies(id)
      .then(relatedmovies => {
        dispatch(loadRelatedMoviesSuccess(relatedmovies.results));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
