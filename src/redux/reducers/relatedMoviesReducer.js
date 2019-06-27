import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function relatedMoviesReducer(state = initialState.relatedmovies, action) {
  switch (action.type) {
    case types.LOAD_RELATEDMOVIES_SUCCESS:
      return action.relatedmovies;
    default:
      return state;
  }
}
