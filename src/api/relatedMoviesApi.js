import { handleResponse, handleError } from "./apiUtils";

//const baseUrl = "https://api.themoviedb.org/3/movie/320288/videos?api_key=ec710cf0baa819470d27d508e5004923&language=en-US";

const baseUrl = "https://api.themoviedb.org/3/movie/";

export function getRelatedMovies(idMov) {
  return fetch(baseUrl + idMov + "/similar?api_key=ec710cf0baa819470d27d508e5004923&language=en-US")
    .then(handleResponse)
    .catch(handleError);
}

