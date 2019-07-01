import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.API_URL + "movie/";
const token = "?api_key=" + process.env.API_TOKEN;

export function getMovieVideos(idMov) {
  return fetch(baseUrl + idMov + "/videos" + token + "&language=en-US")
    .then(handleResponse)
    .catch(handleError);
}

export function getMovieDetails(idMov) {
  return fetch(baseUrl + idMov + token + "&language=en-US")
    .then(handleResponse)
    .catch(handleError);
}

