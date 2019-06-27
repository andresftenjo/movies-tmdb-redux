import { combineReducers } from "redux";
import courses from "./courseReducer";
import upcomingmovies from "./upcomingMoviesReducer";
import topmovies from "./topMoviesReducer";
import movievideos from "./movieVideosReducer";
import moviedetails from "./movieDetailsReducer";
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";
import relatedmovies from "./relatedMoviesReducer";

const rootReducer = combineReducers({
  courses,
  upcomingmovies,
  topmovies,
  authors,
  movievideos,
  moviedetails,
  relatedmovies,
  apiCallsInProgress
});

export default rootReducer;
