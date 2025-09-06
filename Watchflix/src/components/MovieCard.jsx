import "./MovieCard.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist } from "../redux/watchlistSlice";

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist);

  const isInWatchlist = watchlist.some((m) => m.id === movie.id);

  const handleClick = () => {
    if (!isInWatchlist) {
      dispatch(addToWatchlist(movie));
    }
  };

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-poster" />
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-meta">
        ⭐ {movie.rating} | 🎯 {movie.popularity}
      </p>
      <button
        className="watchlist-btn"
        onClick={handleClick}
        disabled={isInWatchlist}
      >
        {isInWatchlist ? "Added to Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
}

export default MovieCard;
