import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function topMoviesReducer(state = initialState.topmovies, action) {
  switch (action.type) {
    case types.LOAD_TOPMOVIES_SUCCESS:
      return action.topmovies;
    default:
      return state;
  }
}
