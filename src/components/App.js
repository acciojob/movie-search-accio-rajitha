import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const API_KEY = "99eb9fd1"; // OMDb API key

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    if (!query.trim()) {
      setError("Invalid movie name. Please try again.");
      setMovies([]);
      return;
    }

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
      } else {
        setError("Invalid movie name. Please try again.");
        setMovies([]);
      }
    } catch (err) {
      setError("An error occurred while fetching the data. Please try again.");
      setMovies([]);
    }
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <form className="search-container" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      <ul className="movies-container">
        {movies.map((movie) => (
          <li key={movie.imdbID} className="movie-card">
            <div className="movie-info">
              <div className="movie-header">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </div>
              <img
                src={movie.Poster}
                alt={`${movie.Title} poster`}
                className="movie-poster"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
/*
import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const API_KEY = "99eb9fd1"; // OMDb API key

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Invalid movie name. Please try again.");
      setMovies([]);
      return;
    }

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
      } else {
        setError("Invalid movie name. Please try again.");
        setMovies([]);
      }
    } catch (err) {
      setError("An error occurred while fetching the data. Please try again.");
      setMovies([]);
    }
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      <ul className="movies-container">
        {movies.map((movie) => (
          <li key={movie.imdbID} className="movie-card">
            <div className="movie-info">
              <div className="movie-header">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </div>
              <img
                src={movie.Poster}
                alt={`${movie.Title} poster`}
                className="movie-poster"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
/*
import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const API_KEY = "99eb9fd1"; // OMDb API key

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Invalid movie name. Please try again.");
      setMovies([]);
      return;
    }

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
      } else {
        setError("Invalid movie name. Please try again.");
        setMovies([]);
      }
    } catch (err) {
      setError("An error occurred while fetching the data. Please try again.");
      setMovies([]);
    }
  };

  return (
    <div>
     
      <h1>Movie Search</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="movies-container">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <p>Release Year: {movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

/*
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
       
    </div>
  )
}

export default App
*/