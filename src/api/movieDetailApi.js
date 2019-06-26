import { handleResponse, handleError } from "./apiUtils";

//const baseUrl = "https://api.themoviedb.org/3/movie/320288/videos?api_key=ec710cf0baa819470d27d508e5004923&language=en-US";

const baseUrl = process.env.API_URL + "movie/";

export function getMovieVideos(idMov) {
  return fetch(baseUrl + idMov + "/videos?api_key=ec710cf0baa819470d27d508e5004923&language=en-US")
    .then(handleResponse)
    .catch(handleError);
}

export function getMovieDetails(idMov) {
  return fetch(baseUrl + idMov + "?api_key=ec710cf0baa819470d27d508e5004923&language=en-US")
    .then(handleResponse)
    .catch(handleError);
}

