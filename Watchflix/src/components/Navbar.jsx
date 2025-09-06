import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      {/* Centered Logo */}
      <div className="logo">Watchflix</div>

      {/* Right-aligned buttons */}
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="/" className="nav-btn">Home</Link></li>
          <li><Link to="/watchlist" className="nav-btn">Watchlist</Link></li>
          <li className="dropdown">
            <button className="dropbtn">Genres ▾</button>
            <div className="dropdown-content">
              <Link to="/genre/action" className="dropdown-item">Action</Link>
              <Link to="/genre/comedy" className="dropdown-item">Comedy</Link>
              <Link to="/genre/drama" className="dropdown-item">Drama</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
