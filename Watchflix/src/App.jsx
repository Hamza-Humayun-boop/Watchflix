import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import movies from "./data/movies";
import MovieCard from "./components/MovieCard";
import Watchlist from "./components/Watchlist";
import GenrePage from "./pages/GenrePage"; 
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  // Group movies by genre
  const genres = [...new Set(movies.map((m) => m.genre))];

  // Popular (top 8 by popularity)
  const popularMovies = [...movies]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 8);

  // Highest Rated (top 8 by IMDb rating)
  const topRatedMovies = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <div>
   <nav className="navbar">
  <h1 className="logo">Watchflix</h1>
  <div className="nav-links">
    <Link to="/" className="nav-btn">Home</Link>
    <Link to="/watchlist" className="nav-btn">Watchlist</Link>

    {/* Dropdown */}
    <div className="dropdown">
      <button className="dropbtn">Genres▾</button>
      <div className="dropdown-content">
        {genres.map((genre) => (
          <Link 
            key={genre} 
            to={`/genre/${genre}`} 
            className="dropdown-item"
          >
            {genre}
          </Link>
        ))}
      </div>
    </div>
  </div>
</nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* Popular Section */}
              <h2 className="section-title">🔥 Popular Movies</h2>
              <div className="movies-container">
                {popularMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>

              {/* Top Rated Section */}
              <h2 className="section-title">🏆 Highest Rated IMDb</h2>
              <div className="movies-container">
                {topRatedMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>

              {/* Genres Section */}
              {genres.map((genre) => (
                <div key={genre}>
                  <h2 className="section-title">{genre}</h2>
                  <div className="movies-container">
                    {movies
                      .filter((m) => m.genre === genre)
                      .map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          }
        />
        <Route path="/watchlist" element={<Watchlist />} />

        {/* ✅ Dynamic Genre Page */}
        <Route path="/genre/:genreName" element={<GenrePage />} />
      </Routes>
    </div>
  );
}

export default App;
