// ---------------------------------------------------------
// Movies.jsx - Movies Listing with Search & Filters
// Member 3: Dinesh Babu Illamaran - Movie Content & Features
// ---------------------------------------------------------

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import moviesData from "../data/movies.json";
import "../styles/Movies.css";

function Movies() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [sortBy, setSortBy] = useState("title");

  // Get unique genres from movies data
  const genres = ["All", ...new Set(moviesData.map((movie) => movie.genre))];

  // Filter and sort movies
  let filteredMovies = moviesData.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGenre =
      selectedGenre === "All" || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  // Sort movies
  if (sortBy === "rating") {
    filteredMovies = [...filteredMovies].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "year") {
    filteredMovies = [...filteredMovies].sort((a, b) => b.year - a.year);
  } else {
    filteredMovies = [...filteredMovies].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="movies-page-enhanced">
      {/* Hero Banner */}
      <motion.div
        className="movies-hero-enhanced"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="hero-background-overlay"></div>
        <div className="hero-content-wrapper">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="hero-main-title">
              <i className="fas fa-film"></i> Discover Movies
            </h1>
            <p className="hero-description">
              Explore our complete collection of {moviesData.length} amazing films
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Filters Section */}
      <div className="filters-container-enhanced">
        <motion.div
          className="filters-grid"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* Search Bar */}
          <div className="filter-item search-box">
            <label htmlFor="search-input" className="filter-label">
              <i className="fas fa-search"></i> Search
            </label>
            <input
              id="search-input"
              type="text"
              className="filter-input"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Genre Filter */}
          <div className="filter-item">
            <label htmlFor="genre-filter" className="filter-label">
              <i className="fas fa-layer-group"></i> Genre
            </label>
            <select
              id="genre-filter"
              className="filter-select"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Filter */}
          <div className="filter-item">
            <label htmlFor="sort-filter" className="filter-label">
              <i className="fas fa-sort"></i> Sort By
            </label>
            <select
              id="sort-filter"
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="title">Title (A-Z)</option>
              <option value="rating">Rating (High to Low)</option>
              <option value="year">Year (Newest First)</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="filter-item results-count">
            <span className="count-badge">
              <i className="fas fa-film"></i> {filteredMovies.length} Results
            </span>
          </div>
        </motion.div>
      </div>

      {/* Movies Grid */}
      <div className="movies-grid-container">
        {isLoading ? (
          <div className="movies-grid">
            {Array.from({ length: 20 }).map((_, idx) => (
              <div key={idx} className="movie-card-enhanced skeleton">
                <div className="skeleton-poster"></div>
                <div className="skeleton-content">
                  <div className="skeleton-line"></div>
                  <div className="skeleton-line short"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredMovies.length > 0 ? (
          <motion.div
            className="movies-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredMovies.map((movie) => (
              <motion.div
                key={movie.id}
                className="movie-card-enhanced"
                variants={itemVariants}
                onMouseEnter={() => setHoveredMovie(movie.id)}
                onMouseLeave={() => setHoveredMovie(null)}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                onClick={() => handleMovieClick(movie.id)}
              >
                <div className="movie-poster-wrapper">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="movie-poster"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='450'%3E%3Crect width='300' height='450' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='20' fill='%23666'%3ENo Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className={`movie-overlay ${hoveredMovie === movie.id ? 'active' : ''}`}>
                    <div className="overlay-content">
                      <h3 className="movie-title">{movie.title}</h3>
                      <div className="movie-meta">
                        <span className="movie-rating">
                          <i className="fas fa-star"></i> {movie.rating}
                        </span>
                        <span className="movie-year">{movie.year}</span>
                      </div>
                      <p className="movie-genre">
                        <i className="fas fa-tag"></i> {movie.genre}
                      </p>
                      <button className="play-button">
                        <i className="fas fa-play"></i> Watch
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="no-results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <i className="fas fa-search no-results-icon"></i>
            <h3>No movies found</h3>
            <p>Try adjusting your search or filters</p>
            <button
              className="reset-button"
              onClick={() => {
                setSearchTerm("");
                setSelectedGenre("All");
              }}
            >
              <i className="fas fa-redo"></i> Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Movies;