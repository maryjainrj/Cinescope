// ---------------------------------------------------------
// Home.jsx - CineScope Top 10 Movies Landing Page
// Member 2: Mary Jain Joshy - UI Design, Content & Styling
// IMDb-style Top Movies Layout
// ---------------------------------------------------------

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import movies from "../data/movies.json";

function Home() {
  // Get top 10 movies by rating
  const top10Movies = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  // Get remaining popular movies
  const otherMovies = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(10, 16);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.08, 
      y: -10,
      boxShadow: "0 12px 40px rgba(229, 9, 20, 0.4)"
    }
  };

  return (
    <div className="home-page">
      {/* ===== HERO SECTION WITH TOP 3 ===== */}
      <section className="hero-top-movies">
        <div className="hero-content">
          <h1 className="hero-main-title">
            <span className="highlight-text">Top 10 on CineScope</span>
            <span className="hero-subtitle-small">This Week</span>
          </h1>
          <p className="hero-description">
            Discover the highest-rated movies on CineScope. Explore our curated collection of the best cinema has to offer.
          </p>
          <Link to="/movies" className="btn btn-danger btn-lg">
            <i className="fas fa-play-circle"></i> Explore All Movies
          </Link>
        </div>
      </section>

      {/* ===== TOP 10 GRID ===== */}
      <section className="top-10-section">
        <div className="top-10-container">
          <motion.div
            className="top-10-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {top10Movies.map((movie, index) => (
              <motion.div
                key={movie.id}
                className="top-10-card-wrapper"
                variants={itemVariants}
              >
                <motion.div
                  className="top-10-card"
                  whileHover="hover"
                  initial="initial"
                  variants={cardHoverVariants}
                >
                  {/* Rank Badge */}
                  <div className="rank-badge">#{index + 1}</div>

                  {/* Movie Poster */}
                  <div className="top-10-poster">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="poster-image"
                    />
                  </div>

                  {/* Movie Info Overlay */}
                  <div className="top-10-info">
                    <div className="movie-rank-number">{index + 1}</div>

                    <Link to={`/movies/${movie.id}`} className="movie-title-link">
                      <h3 className="top-10-title">{movie.title}</h3>
                    </Link>

                    <div className="movie-meta">
                      <span className="movie-year">{movie.year}</span>
                      <span className="movie-genre">{movie.genre}</span>
                    </div>

                    <div className="rating-container">
                      <div className="star-rating">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fas fa-star ${
                              i < Math.floor(movie.rating)
                                ? "filled"
                                : i < movie.rating
                                ? "half"
                                : "empty"
                            }`}
                          ></i>
                        ))}
                      </div>
                      <span className="rating-value">{movie.rating.toFixed(1)}</span>
                    </div>

                    <p className="movie-description">{movie.description}</p>

                    <Link
                      to={`/movies/${movie.id}`}
                      className="btn btn-sm btn-outline"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== MORE GREAT MOVIES ===== */}
      <section className="more-movies-section">
        <div className="section-header">
          <h2><i className="fas fa-fire"></i> More Great Movies</h2>
          <p className="section-subtitle">Explore more highly-rated films</p>
        </div>

        <motion.div
          className="more-movies-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {otherMovies.map((movie) => (
            <motion.div key={movie.id} variants={itemVariants}>
              <Link to={`/movies/${movie.id}`} className="movie-card-link">
                <div className="simple-card">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="card-poster"
                  />
                  <div className="card-info">
                    <h4 className="card-title">{movie.title}</h4>
                    <div className="card-meta">
                      <span className="card-year">{movie.year}</span>
                      <span className="card-rating">
                        <i className="fas fa-star"></i> {movie.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <motion.section
        className="final-cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="cta-content">
          <h2>Ready to Dive Deeper?</h2>
          <p>Browse our complete collection and find your next favorite movie</p>
          <Link to="/movies" className="btn btn-danger btn-lg">
            <i className="fas fa-film"></i> Browse All Movies
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
