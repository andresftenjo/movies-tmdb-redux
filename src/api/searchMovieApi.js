import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.API_URL;

export function getSearchMovie(query) {
  return fetch(baseUrl + "search/movie?api_key=ec710cf0baa819470d27d508e5004923&language=en-US&query=" + query + "&page=1&include_adult=false")
    .then(handleResponse)
    .catch(handleError);
}