const API_BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "ae4f5e68f33d82ca3555b1ac98313d11";

const SEARCH_BASE_URL = `${API_BASE_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_BASE_URL}movie/popular?api_key=${API_KEY}`;
const GENRE_BASE_URL = `${API_BASE_URL}genre/movie/list?api_key=${API_KEY}`;

export {
  API_BASE_URL,
  API_KEY,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  GENRE_BASE_URL,
};
