import * as types from "./actionTypes";
import * as searchMovieApi from "../../api/searchMovieApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";


export function loadMovieSearchSuccess(searchmovies) {
  return { type: types.LOAD_SEARCHMOVIES_SUCCESS, searchmovies };
}

export function loadMovieSearch(query) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return searchMovieApi
      .getSearchMovie(query)
      .then(searchmovies => {
        dispatch(loadMovieSearchSuccess(searchmovies.results));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
