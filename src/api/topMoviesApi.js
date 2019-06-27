import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "https://api.themoviedb.org/3/movie/popular?api_key=ec710cf0baa819470d27d508e5004923&language=en-US&page=1";

export function getTopMovies() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
