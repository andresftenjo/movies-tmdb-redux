import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function movieVideosReducer(state = initialState.movievideos, action) {
  switch (action.type) {
    case types.LOAD_MOVIEVIDEOS_SUCCESS:
      return action.movievideos;
    default:
      return state;
  }
}
