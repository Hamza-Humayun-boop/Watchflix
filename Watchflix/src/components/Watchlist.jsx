import { useSelector, useDispatch } from "react-redux";
import { removeFromWatchlist, clearWatchlist } from "../redux/watchlistSlice";
import "./MovieCard.css";

function Watchlist() {
  const watchlist = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  return (
    <div className="movies-container">
      {watchlist.length === 0 ? (
        <p style={{ color: "white", textAlign: "center", width: "100%" }}>
          Your watchlist is empty.
        </p>
      ) : (
        <>
          {watchlist.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.image} alt={movie.title} className="movie-img" />
              <h3>{movie.title}</h3>
              <p><strong>Genre:</strong> {movie.genre}</p>
              <p><strong>Cast:</strong> {movie.cast}</p>
              <p><strong>IMDb:</strong> ⭐ {movie.rating}</p>
              <button
                className="watchlist-btn"
                onClick={() => dispatch(removeFromWatchlist(movie.id))}
              >
                ❌ Remove
              </button>
            </div>
          ))}

          <button
            className="clearall-btn"
            style={{ marginTop: "20px" }}
            onClick={() => dispatch(clearWatchlist())}
          >
            🗑 Clear All
          </button>
        </>
      )}
    </div>
  );
}

export default Watchlist;
