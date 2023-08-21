import axios from "../src/Components/axios";
import { API_KEY } from "./Constants/constants";
import { useEffect, useState } from "react";

export const movieDetails = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await axios.get(
        `trending/all/week?api_key=${API_KEY}&language=en-US`
      );
      const ranfomIndex = Math.floor(
        Math.random() * response.data.results.length
      );

      setMovie(response.data.results[ranfomIndex]);
    } catch (error) {}
  };
  // console.log(movie, "movies are here");
  return movie;
};
