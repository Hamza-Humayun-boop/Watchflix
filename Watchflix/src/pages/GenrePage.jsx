import React from "react";
import { useParams } from "react-router-dom";
import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

function GenrePage() {
  const { genreName } = useParams();

  // filter movies by genre
  const filteredMovies = movies.filter(
    (m) => m.genre.toLowerCase() === genreName.toLowerCase()
  );

  return (
    <div className="genre-page">
      <h2 className="section-title">{genreName} Movies</h2>
      <div className="movies-container">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No movies found in this genre.</p>
        )}
      </div>
    </div>
  );
}

export default GenrePage;
