import React from "react";
import "./Rowpost.css";
import { useEffect, useState } from "react";
import axios from "../axios";
import { imageUrl, API_KEY } from "../../Constants/constants";
import Youtube from "react-youtube";

const Rowpost = (props) => {
  const opts = {
    height: "390",
    width: "100%",

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState();
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data, "movies are here");
        setMovies(response.data.results);
      })
      .catch((err) => {
        // alert("network error");
      });
  }, [props.url]);
  const handleMovie = (id) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("no videos");
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleMovie(movie.id)}
            className={props.isSmall ? "poster" : "smallPoster"}
            src={`${imageUrl + movie.backdrop_path}`}
            alt="post"
          />
        ))}
      </div>
      {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  );
};

export default Rowpost;
