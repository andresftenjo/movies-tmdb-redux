import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.API_URL;
const currentRoute = "movie/upcoming";
const token = "?api_key=" + process.env.API_TOKEN;

export function getUpcoming(index) {
  return fetch(baseUrl + currentRoute + token + "&language=en-US&page=" + index)
    .then(handleResponse)
    .catch(handleError);
}

