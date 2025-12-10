// ---------------------------------------------------------
// Movies.jsx - Movies Listing with Search & Filters
// Member 3: Dinesh Babu Illamaran - Movie Content & Features
// ---------------------------------------------------------

import { useState } from "react";
import { motion } from "framer-motion";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies.json";

function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  // Get unique genres from movies data
  const genres = ["All", ...new Set(moviesData.map((movie) => movie.genre))];

  // Filter movies based on search and genre
  const filteredMovies = moviesData.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGenre =
      selectedGenre === "All" || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <motion.div
      className="movies-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <motion.div
        className="movies-hero-banner"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="movies-hero-content">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="movies-hero-title">
              <i className="fas fa-film me-3"></i>
              Browse Movies
            </h1>
            <p className="movies-hero-subtitle">
              Explore the latest releases, timeless classics, and hidden gems across every genre
            </p>
            <div className="hero-tags">
              <span className="hero-tag"><i className="fas fa-fire me-2"></i>New Releases</span>
              <span className="hero-tag"><i className="fas fa-crown me-2"></i>Top Rated</span>
              <span className="hero-tag"><i className="fas fa-clock me-2"></i>Now Trending</span>
            </div>
          </motion.div>

          <motion.div
            className="movies-hero-image"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=700&h=450&fit=crop"
              alt="Latest movie highlight"
            />
            <div className="hero-image-overlay">
              <span className="hero-badge">
                <i className="fas fa-play me-2"></i>Now Showing
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Search and Filter Section */}
      <div className="filters-section mb-4">
        <div className="row g-3 align-items-end">
          {/* Search Bar */}
          <div className="col-md-6">
            <label htmlFor="search-input" className="form-label">
              <i className="fas fa-search me-2"></i>Search Movies
            </label>
            <input
              id="search-input"
              type="text"
              className="form-control search-input"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search movies by title"
            />
          </div>

          {/* Genre Filter */}
          <div className="col-md-6">
            <label htmlFor="genre-filter" className="form-label">
              <i className="fas fa-layer-group me-2"></i>Filter by Genre
            </label>
            <select
              id="genre-filter"
              className="form-select filter-select"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              aria-label="Filter movies by genre"
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="d-flex justify-content-between align-items-center mb-3 movies-count-row">
        <p className="text-grey mb-0">
          Showing {filteredMovies.length} of {moviesData.length} movies
        </p>
        <span className="movies-count-badge">
          <i className="fas fa-video me-2"></i>{moviesData.length} Total Titles
        </span>
      </div>

      {/* Movies Grid */}
      <div className="row">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h3 className="text-grey">No movies found</h3>
            <p className="text-grey">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Movies;
