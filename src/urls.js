import { API_KEY } from "./Constants/constants";

export const genres = [
  {
    url: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    title: "Netflix Originals",
  },
  {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    title: "Comedy",
  },
  {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    title: "Action",
  },
  {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    title: "Horror",
  },
  {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    title: "Romance",
  },
  {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
    title: "Documentaries",
  },
];
