import * as types from "./actionTypes";
import * as movieDetailApi from "../../api/movieDetailApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadMovieVideosSuccess(movievideos) {
  return { type: types.LOAD_MOVIEVIDEOS_SUCCESS, movievideos };
}

export function loadMovieDetailsSuccess(moviedetails) {
  return { type: types.LOAD_MOVIEDETAILS_SUCCESS, moviedetails };
}

export function loadMovieVideos(id) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return movieDetailApi
      .getMovieVideos(id)
      .then(movievideos => {
        dispatch(loadMovieVideosSuccess(movievideos.results[0]));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadMovie(id) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return movieDetailApi
      .getMovieDetails(id)
      .then(moviedetails => {
        dispatch(loadMovieDetailsSuccess(moviedetails));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
