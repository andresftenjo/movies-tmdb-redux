export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";
export const LOAD_TOPMOVIES_SUCCESS = "LOAD_TOPMOVIES_SUCCESS";
export const LOAD_UPCOMINGMOVIES_SUCCESS = "LOAD_UPCOMINGMOVIES_SUCCESS";
export const LOAD_MOVIEVIDEOS_SUCCESS = "LOAD_MOVIEVIDEOS_SUCCESS";
export const LOAD_MOVIEDETAILS_SUCCESS = "LOAD_MOVIEDETAILS_SUCCESS";
export const LOAD_RELATEDMOVIES_SUCCESS = "LOAD_RELATEDMOVIES_SUCCESS";
export const LOAD_SEARCHMOVIES_SUCCESS = "LOAD_SEARCHMOVIES_SUCCESS";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";
