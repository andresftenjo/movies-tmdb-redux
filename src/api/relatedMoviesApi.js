import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.API_URL + "movie/";
const currentRoute = "/similar";
const token = "?api_key=" + process.env.API_TOKEN;

export function getRelatedMovies(idMov) {
  return fetch(baseUrl + idMov + currentRoute + token + "&language=en-US")
    .then(handleResponse)
    .catch(handleError);
}

