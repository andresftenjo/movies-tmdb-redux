import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function topMoviesReducer(state = initialState.topmovies, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_TOPMOVIES_SUCCESS:
      return action.topmovies;
    case types.DELETE_COURSE_OPTIMISTIC:
      return state.filter(course => course.id !== action.course.id);
    default:
      return state;
  }
}
