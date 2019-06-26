import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function movieDetailsReducer(state = initialState.moviedetails, action) {
  switch (action.type) {
    case types.LOAD_MOVIEDETAILS_SUCCESS:
      return action.moviedetails;
    default:
      return state;
  }
}
