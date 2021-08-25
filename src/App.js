import React, { useState } from "react";
import "./styles.css";
import seriesLib from "./database.js";

const genres = Object.keys(seriesLib);

export default function App() {
  const [currentGenre, setGenre] = useState(seriesLib.comedySeries);

  function genreClickHandler(genre) {
    const series = seriesLib[genre];
    setGenre(series);
  }

  function SeriesPost(series) {
    const title = seriesLib.name;
    const imgUrl = seriesLib.image;
    const desc = seriesLib.description;
    const rating = seriesLib.rating;
    const seriesList = (
      <li>
        <img alt="poster" src={imgUrl} />
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <p style={{ fontWeight: "bold" }}>{rating}</p>
        </div>
      </li>
    );
    return seriesList;
  }

  return (
    <div className="App">
      <h1>Seriopolis</h1>
      <h2>
        Explore the Top English WebSeries curated just for you. Select a genre
        to get started.
      </h2>
      <div>
        {genres.map((genre) => {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <ul>
        {currentGenre.map((series) => {
          return SeriesPost(series);
        })}
      </ul>
    </div>
  );
}
