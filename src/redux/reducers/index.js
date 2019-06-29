import { combineReducers } from "redux";
import upcomingmovies from "./upcomingMoviesReducer";
import topmovies from "./topMoviesReducer";
import movievideos from "./movieVideosReducer";
import moviedetails from "./movieDetailsReducer";
import apiCallsInProgress from "./apiStatusReducer";
import relatedmovies from "./relatedMoviesReducer";
import searchmovies from "./searchMoviesReducer";

const rootReducer = combineReducers({
  upcomingmovies,
  topmovies,
  movievideos,
  moviedetails,
  relatedmovies,
  searchmovies,
  apiCallsInProgress
});

export default rootReducer;
