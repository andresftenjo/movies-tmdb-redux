import * as types from "./actionTypes";
import * as upcomingApi from "../../api/upcomingApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadUpcomingSuccess(upcomingmovies) {
  return { type: types.LOAD_UPCOMINGMOVIES_SUCCESS, upcomingmovies };
}

export function loadUpcoming() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return upcomingApi
      .getUpcoming()
      .then(upcomingmovies => {
        dispatch(loadUpcomingSuccess(upcomingmovies.results));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
