import * as types from "./actionTypes";
import * as topMoviesApi from "../../api/topMoviesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadTopMoviesSuccess(topmovies) {
  return { type: types.LOAD_TOPMOVIES_SUCCESS, topmovies };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function deleteCourseOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}

export function loadTopMovies() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return topMoviesApi
      .getTopMovies()
      .then(topmovies => {
        dispatch(loadTopMoviesSuccess(topmovies.results));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveCourse(course) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return topMoviesApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteCourse(course) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteCourseOptimistic(course));
    return topMoviesApi.deleteCourse(course.id);
  };
}
