import axios from "axios";
import { SEARCH_BASE_URL, POPULAR_BASE_URL, GENRE_BASE_URL } from "./config";

export default class Api {
  getMovieList = () => {
    return axios.get(`${POPULAR_BASE_URL}&language=en-US`);
  };

  getGenres = () => {
    return axios.get(`${GENRE_BASE_URL}&language=en-US`);
  };

  searchMovies = (keyword, year) => {
    return axios.get(`${SEARCH_BASE_URL}${keyword}&year=${year}`);
  };
}
