import * as types from "./actionTypes";
import * as topMoviesApi from "../../api/relatedMoviesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadTopMoviesSuccess(topmovies) {
  return { type: types.LOAD_TOPMOVIES_SUCCESS, topmovies };
}

export function loadRelatedMovies(id) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return topMoviesApi
      .getRelatedMovies(id)
      .then(topmovies => {
        
        dispatch(loadTopMoviesSuccess(topmovies.results));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
