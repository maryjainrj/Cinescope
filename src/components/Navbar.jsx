// ---------------------------------------------------------
// Navbar.jsx - Main Navigation Component
// Member 1: Kalyan Charagondla - Initial Setup & Navigation
// ---------------------------------------------------------

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">CineScope</Link>

        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navMenu" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/movies">Movies</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/reviews">News</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
