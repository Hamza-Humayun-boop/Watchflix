import React from "react";
import "./MovieCard.css";

function MovieList({ watchlist }) {
  return (
    <div className="movies-container">
      {watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        watchlist.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.image} alt={movie.title} className="movie-img" />
            <h3>{movie.title}</h3>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Cast:</strong> {movie.cast}</p>
            <p><strong>IMDB:</strong> ⭐ {movie.rating}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MovieList;
