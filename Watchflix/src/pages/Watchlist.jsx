import { useWatchlist } from "./context/WatchlistContext";
import MovieCard from "../components/MovieCard";

function Watchlist() {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <div className="movie-grid">
          {watchlist.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
              <button
                onClick={() => removeFromWatchlist(movie.id)}
                style={{
                  background: "gray",
                  color: "white",
                  border: "none",
                  padding: "0.3rem 0.7rem",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "0.5rem",
                }}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;
