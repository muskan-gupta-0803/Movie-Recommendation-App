import React from "react";
import { useState } from "react";
import "./styles.css";

const movieDB = {
  Action: [
    {
      name: "Udumba (2019)",
      rating: 9.0
    },
    {
      name: "The Dark Knight (2008)",
      rating: 9.0
    },
    {
      name: "No Time to Die (2021)",
      rating: 7.8
    }
  ],
  "Sci-Fi": [
    {
      name: "Forest monster (2021)",
      rating: 9.7
    },
    {
      name: " The Peacemakers (2021)",
      rating: 8.8
    },
    {
      name: "Inception (2010)",
      rating: 8.8
    }
  ],
  Fantasy: [
    {
      name: " The Wig (2021)",
      rating: 9.4
    },
    {
      name: " Midnight Dreamers (2018)",
      rating: 9.2
    },
    {
      name: "Bhanwar (2017)",
      rating: 9.2
    }
  ]
};

export default function App() {
  const [movie, setMovie] = useState("Action");
  function onClickRecommend(genre) {
    setMovie(genre);
  }
  return (
    <div className="App">
      <nav>
        <h1>Movie Recommendation App</h1>
      </nav>
      <div>
        <h3>Select your Genre to get recommendations:</h3>
        {Object.keys(movieDB).map((genre) => (
          <button className="genre" onClick={() => onClickRecommend(genre)}>
            {genre}
          </button>
        ))}
      </div>

      <div className="recomend">
        <ul className="list">
          {movieDB[movie].map((movies) => (
            <li className="items">
              <div>Name: {movies.name}</div>
              <div className="rating">Ratings: {movies.rating}/10</div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
