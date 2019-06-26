import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function upcomingMoviesReducer(state = initialState.upcomingmovies, action) {
  switch (action.type) {
    case types.LOAD_UPCOMINGMOVIES_SUCCESS:
      return action.upcomingmovies;
    default:
      return state;
  }
}
