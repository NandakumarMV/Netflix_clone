import "./Banner.css";
import React from "react";
import { movieDetails } from "../../getMovieDetails";
import { imageUrl } from "../../Constants/constants";
function Banner() {
  const movie = movieDetails();

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <p className="description">{movie ? movie.overview : ""}</p>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
