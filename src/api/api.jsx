import axios from 'axios';

const API_KEY = '38f484d9cc7856fa655e9ccb822c26af';
const BASE_URL = 'https://api.themoviedb.org/3';
const defaultParams = {
  api_key: API_KEY,
};

const moviesApiClient = axios.create({
  baseURL: BASE_URL,
  params: defaultParams,
});

export const fetchTrends = async () => {
  const { data } = await moviesApiClient.get('/trending/movie/week');
  return data.results;
};
export const getSerchMovies = async query => {
  const { data } = await moviesApiClient.get('/search/movie', {
    params: { query },
  });
  return data.results;
};
export const getDetailsMovies = async id => {
  const { data } = await moviesApiClient.get(`movie/${id}`);
  return data;
};
export const getCastMovies = async id => {
  const { data } = await moviesApiClient.get(`/movie/${id}/credits`);
  return data;
};
export const getRewiesMovies = async id => {
  const { data } = await moviesApiClient.get(`
/movie/${id}/reviews`);
  return data.results;
};