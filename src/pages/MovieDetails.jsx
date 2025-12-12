// ---------------------------------------------------------
// MovieDetails.jsx - Detailed Movie View
// Member 3: Dinesh Babu Illamaran - Movie Content & Details
// ---------------------------------------------------------

import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StarRating from "../components/StarRating";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies.json";
import reviewsData from "../data/reviews.json";
import "../styles/MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showTrailer, setShowTrailer] = useState(false);

  // Find the movie by ID
  const movie = moviesData.find((m) => m.id === parseInt(id));

  // Extract trailer ID for thumbnail
  const trailerId = useMemo(() => {
    if (!movie?.trailerUrl) return null;
    const parts = movie.trailerUrl.split("/");
    return parts[parts.length - 1];
  }, [movie]);

  // Calculate similar movies based on genre and year
  const similarMovies = useMemo(() => {
    if (!movie) return [];
    
    return moviesData
      .filter((m) => m.id !== movie.id)
      .map((m) => ({
        ...m,
        score: 
          (m.genre === movie.genre ? 3 : 0) + 
          (Math.abs(m.year - movie.year) < 5 ? 2 : 0) + 
          (Math.abs(m.rating - movie.rating) < 0.5 ? 1 : 0)
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
  }, [movie]);

  // Find reviews for this movie
  const movieReviews = reviewsData.filter((r) => r.movie === movie?.title);

  // If movie not found, show error
  if (!movie) {
    return (
      <div className="movie-not-found">
        <i className="fas fa-film-slash"></i>
        <h2>Movie not found</h2>
        <p>The movie you're looking for doesn't exist.</p>
        <button className="btn-back-error" onClick={() => navigate("/movies")}>
          <i className="fas fa-arrow-left"></i> Back to Movies
        </button>
      </div>
    );
  }

  const handleRatingClick = (rating) => {
    setUserRating(rating);
  };

  return (
    <div className="movie-details-page-enhanced">
      {/* Hero Section with Backdrop */}
      <div 
        className="movie-hero-backdrop"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.3) 0%, rgba(20, 20, 20, 0.9) 50%, #141414 100%), url(${movie.poster})`
        }}
      >
        <div className="hero-content-container">
          <button
            className="btn-back-movies"
            onClick={() => navigate("/movies")}
            aria-label="Go back to movies list"
          >
            <i className="fas fa-arrow-left"></i> Back to Movies
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="movie-content-container">
        <div className="movie-content-grid">
          {/* Left Column - Poster */}
          <motion.div 
            className="poster-column"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="poster-wrapper">
              <img
                src={movie.poster}
                alt={`${movie.title} poster`}
                className="movie-detail-poster"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='600'%3E%3Crect width='400' height='600' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='%23666'%3ENo Poster%3C/text%3E%3C/svg%3E";
                }}
              />
              
              {/* Streaming Badges on Poster */}
              {movie.streaming && movie.streaming.length > 0 && (
                <div className="poster-streaming-badges">
                  <div className="streaming-label">
                    <i className="fas fa-tv"></i> Watch on
                  </div>
                  {movie.streaming.map((platform, index) => (
                    <span key={index} className="streaming-badge">
                      {platform}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div 
            className="details-column"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Title and Meta */}
            <div className="title-section">
              <h1 className="movie-title-enhanced">{movie.title}</h1>
              <div className="movie-meta-badges">
                <span className="badge-genre">{movie.genre}</span>
                <span className="badge-year">
                  <i className="fas fa-calendar"></i> {movie.year}
                </span>
                <span className="badge-rating">
                  <i className="fas fa-star"></i> {movie.rating}/5
                </span>
              </div>
            </div>

            {/* Quick Info */}
            {(movie.runtime || movie.language || movie.director) && (
              <div className="quick-info-grid">
                {movie.runtime && (
                  <div className="info-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <div className="info-label">Runtime</div>
                      <div className="info-value">{movie.runtime}</div>
                    </div>
                  </div>
                )}
                {movie.language && (
                  <div className="info-item">
                    <i className="fas fa-language"></i>
                    <div>
                      <div className="info-label">Language</div>
                      <div className="info-value">{movie.language}</div>
                    </div>
                  </div>
                )}
                {movie.director && (
                  <div className="info-item">
                    <i className="fas fa-film"></i>
                    <div>
                      <div className="info-label">Director</div>
                      <div className="info-value">{movie.director}</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Synopsis */}
            <div className="synopsis-section">
              <h3 className="section-title">
                <i className="fas fa-align-left"></i> Synopsis
              </h3>
              <p className="synopsis-text">{movie.description}</p>
            </div>

            {/* Cast */}
            {movie.cast && movie.cast.length > 0 && (
              <div className="cast-section-enhanced">
                <h3 className="section-title">
                  <i className="fas fa-users"></i> Cast
                </h3>
                <div className="cast-grid">
                  {movie.cast.map((actor, index) => (
                    <div key={index} className="cast-card">
                      <i className="fas fa-user-circle cast-icon"></i>
                      <span className="cast-name">{actor}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* User Rating */}
            <div className="user-rating-card">
              <h3 className="section-title">
                <i className="fas fa-star-half-alt"></i> Rate This Movie
              </h3>
              <div className="rating-stars-container">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`fas fa-star rating-star-interactive ${
                      star <= (hoverRating || userRating) ? 'active' : ''
                    }`}
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  ></i>
                ))}
              </div>
              {userRating > 0 && (
                <p className="rating-feedback">
                  <i className="fas fa-check-circle"></i>
                  You rated this movie: {userRating}/5 stars
                </p>
              )}
            </div>

            {/* Trailer Section */}
            {movie.trailerUrl && (
              <div className="trailer-section-enhanced">
                <h3 className="section-title">
                  <i className="fas fa-play-circle"></i> Watch Trailer
                </h3>
                <div className="trailer-container-enhanced">
                  {showTrailer && trailerId ? (
                    <iframe
                      width="100%"
                      height="400"
                      src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&rel=0`}
                      title={`${movie.title} Trailer`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="trailer-iframe-enhanced"
                      loading="lazy"
                    ></iframe>
                  ) : (
                    <button
                      className="trailer-thumbnail"
                      onClick={() => setShowTrailer(true)}
                      aria-label="Play trailer"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${trailerId}/maxresdefault.jpg`}
                        alt={`${movie.title} trailer thumbnail`}
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = `https://img.youtube.com/vi/${trailerId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="trailer-play-overlay">
                        <div className="play-button-large">
                          <i className="fas fa-play"></i>
                        </div>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Reviews Section */}
            <div className="reviews-section-enhanced">
              <h3 className="section-title">
                <i className="fas fa-comments"></i> User Reviews ({movieReviews.length})
              </h3>

              {movieReviews.length > 0 ? (
                <div className="reviews-list-enhanced">
                  {movieReviews.map((review) => (
                    <div key={review.id} className="review-card">
                      <div className="review-header">
                        <div className="reviewer-info">
                          <i className="fas fa-user-circle reviewer-avatar"></i>
                          <strong className="reviewer-name">{review.user}</strong>
                        </div>
                        <StarRating rating={review.rating} />
                      </div>
                      <p className="review-comment">{review.comment}</p>
                      <small className="review-date">
                        <i className="fas fa-calendar-alt"></i> {review.date}
                      </small>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-reviews">
                  <i className="fas fa-comment-slash"></i>
                  <p>No reviews yet. Be the first to review this movie!</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Similar Movies Section */}
      {similarMovies.length > 0 && (
        <motion.div
          className="similar-movies-section-enhanced"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="similar-movies-container">
            <h2 className="similar-title">
              <i className="fas fa-heart"></i> You May Also Like
            </h2>
            <div className="similar-movies-grid">
              {similarMovies.map((similarMovie) => (
                <div key={similarMovie.id} className="similar-movie-item">
                  <MovieCard movie={similarMovie} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default MovieDetails;