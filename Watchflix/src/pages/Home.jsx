import React from "react";
import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

function Home() {
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
    <div className="home">
      {/* Popular Section */}
      <h2 className="section-title"> Popular Movies</h2>
      <div className="movies-container">
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Top Rated Section */}
      <h2 className="section-title"> Highest Rated IMDb</h2>
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
  );
}

export default Home;