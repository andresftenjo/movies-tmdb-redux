import * as types from "./actionTypes";
import * as topMoviesApi from "../../api/topMoviesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadTopMoviesSuccess(topmovies) {
  return { type: types.LOAD_TOPMOVIES_SUCCESS, topmovies };
}

export function loadTopMovies() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return topMoviesApi
      .getTopMovies()
      .then(topmovies => {
        dispatch(loadTopMoviesSuccess(topmovies.results));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

