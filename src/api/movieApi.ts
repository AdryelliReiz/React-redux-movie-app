import axios from 'axios';

export const movieApi = axios.create({
  baseURL: "http://www.omdbapi.com/",
})