import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.API_URL;
const currentRoute = "search/movie";
const token = "?api_key=" + process.env.API_TOKEN;

export function getSearchMovie(query) {
  return fetch(baseUrl + currentRoute + token + "&language=en-US&query=" + query + "&page=1&include_adult=false")
    .then(handleResponse)
    .catch(handleError);
}