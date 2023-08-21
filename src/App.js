import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import { genres } from "../src/urls";
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {genres.map((genre, index) => (
        <Rowpost
          key={index}
          url={genre.url}
          title={genre.title}
          isSmall={genre.title !== "Netflix Originals"}
        />
      ))}
    </div>
  );
}

export default App;
