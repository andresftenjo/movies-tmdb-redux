import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.API_URL;
const currentRoute = "movie/upcoming";
const token = "?api_key=" + process.env.API_TOKEN;

export function getUpcoming() {
  return fetch(baseUrl + currentRoute + token + "&language=en-US&page=1")
    .then(handleResponse)
    .catch(handleError);
}

