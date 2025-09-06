import React from "react";
import "./MovieCard.css";

function MovieList({ watchlist }) {
  return (
    <div className="watchlist-section">
      <h2 className="watchlist-title">🎬 My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p className="empty-watchlist">Your watchlist is empty.</p>
      ) : (
        <div className="movies-container">
          {watchlist.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.image} alt={movie.title} className="movie-img" />
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-meta">
                <strong>Genre:</strong> {movie.genre}
              </p>
              <p className="movie-meta">
                <strong>Cast:</strong> {movie.cast}
              </p>
              <p className="movie-meta">
                <strong>IMDB:</strong> ⭐ {movie.rating}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
