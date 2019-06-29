import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function searchMoviesReducer(state = initialState.searchmovies, action) {
  switch (action.type) {
    case types.LOAD_SEARCHMOVIES_SUCCESS:
      return action.searchmovies;
    default:
      return state;
  }
}
