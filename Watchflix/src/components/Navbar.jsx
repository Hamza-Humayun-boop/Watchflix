import { Link } from "react-router-dom";

function Navbar({ genres }) {
  return (
    <nav className="navbar">
      <h1 className="logo">Watchflix</h1>
      <div className="nav-links">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/watchlist" className="nav-btn">Watchlist</Link>

        <div className="dropdown">
          <button className="dropbtn">Genres ▾</button>
          <div className="dropdown-content">
            {genres.map((genre) => (
              <Link key={genre} to={`/genre/${genre}`} className="dropdown-item">
                {genre}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;