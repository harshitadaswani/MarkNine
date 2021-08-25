import React, { useState } from "react";
import "./styles.css";
import seriesLib from "./database.js";

const genres = Object.keys(seriesLib);

export default function App() {
  const [currentGenre, setGenre] = useState(seriesLib.Comedy);

  function genreClickHandler(genre) {
    const series = seriesLib[genre];
    setGenre(series);
  }

  function SeriesPost(series) {
    const title = series.name;
    const imgUrl = series.image;
    const desc = series.description;
    const rating = series.rating;
    const seriesList = (
      <li>
        <img alt="poster" src={imgUrl} />
        <div class="output-list">
          <h3 class="title">{title}</h3>
          <p>{desc}</p>
          <p class="rating">Rating: {rating}</p>
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
      <footer class="footer">
        <div class="social-container">
          <center>
            <a href="https://github.com/harshitadaswani" class="social-icons">
              <img
                src="https://i.postimg.cc/5NXrhDMS/github.png"
                alt="github icon"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/harshitabdaswani/"
              class="social-icons"
            >
              <img
                src="https://i.postimg.cc/1zsJ3jbT/ilinkedin.png"
                alt="linkedin icon"
              />
            </a>

            <a href="https://twitter.com/harshi_daswani" class="social-icons">
              <img
                src="https://i.postimg.cc/zDctFpRb/twitter.png"
                alt="twitter icon"
              />
            </a>
            <a href="https://harshitadaswani.netlify.app/" class="social-icons">
              <img
                src="https://i.postimg.cc/tC7gLRTv/website.png"
                alt="portfolio icon"
              />
            </a>
          </center>
        </div>
      </footer>
    </div>
  );
}
