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
      <div className="text-center py-5">
        <h2>Movie not found</h2>
        <button className="btn btn-danger mt-3" onClick={() => navigate("/movies")}>
          Back to Movies
        </button>
      </div>
    );
  }

  const handleRatingClick = (rating) => {
    setUserRating(rating);
  };

  return (
    <motion.div
      className="movie-details-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="btn btn-outline-light mb-4"
        onClick={() => navigate("/movies")}
        aria-label="Go back to movies list"
      >
        ← Back to Movies
      </button>

      <div className="row">
        {/* Movie Poster */}
        <div className="col-md-4 mb-4">
          <img
            src={movie.poster}
            alt={`${movie.title} poster`}
            className="movie-detail-poster"
            loading="lazy"
            width="400"
            height="600"
          />
        </div>

        {/* Movie Information */}
        <div className="col-md-8">
          <h1 className="movie-detail-title">{movie.title}</h1>

          <div className="movie-detail-meta mb-3">
            <span className="badge bg-danger me-2">{movie.genre}</span>
            <span className="text-grey">{movie.year}</span>
          </div>

          <div className="mb-4">
            <StarRating rating={movie.rating} />
          </div>

          {/* Movie Metadata */}
          {(movie.runtime || movie.language || movie.director) && (
            <div className="movie-metadata mb-4">
              {movie.runtime && (
                <span className="metadata-item">
                  <i className="fas fa-clock me-2"></i>
                  {movie.runtime}
                </span>
              )}
              {movie.language && (
                <span className="metadata-item">
                  <i className="fas fa-language me-2"></i>
                  {movie.language}
                </span>
              )}
              {movie.director && (
                <span className="metadata-item">
                  <i className="fas fa-film me-2"></i>
                  {movie.director}
                </span>
              )}
            </div>
          )}

          {/* Streaming Availability */}
          {movie.streaming && movie.streaming.length > 0 && (
            <div className="streaming-section mb-4">
              <h5 className="mb-2">
                <i className="fas fa-tv me-2"></i>Available On
              </h5>
              <div className="streaming-badges">
                {movie.streaming.map((platform, index) => (
                  <span key={index} className={`streaming-badge ${platform.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Cast */}
          {movie.cast && movie.cast.length > 0 && (
            <div className="cast-section mb-4">
              <h5 className="mb-3">
                <i className="fas fa-users me-2"></i>Cast
              </h5>
              <div className="cast-list">
                {movie.cast.map((actor, index) => (
                  <span key={index} className="cast-member">
                    {actor}
                  </span>
                ))}
              </div>
            </div>
          )}

          <h3>Synopsis</h3>
          <p className="movie-description">{movie.description}</p>

          {/* User Rating Section */}
          <div className="user-rating-section card-dark p-4 mt-4">
            <h4 className="mb-3">Rate This Movie</h4>
            <div className="rating-stars mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <i
                  key={star}
                  className={`fas fa-star rating-star ${
                    star <= (hoverRating || userRating) ? 'active' : ''
                  }`}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  style={{ cursor: 'pointer' }}
                ></i>
              ))}
            </div>
            {userRating > 0 && (
              <p className="text-accent mb-0">
                You rated this movie: {userRating} / 5 stars
              </p>
            )}
          </div>

          {/* Trailer Section */}
          {movie.trailerUrl && (
            <div className="trailer-section mt-4">
              <h3 className="mb-3">
                <i className="fas fa-play-circle me-2"></i>Watch Trailer
              </h3>
              <div className="trailer-container">
                {showTrailer && trailerId ? (
                  <iframe
                    width="100%"
                    height="450"
                    src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&rel=0`}
                    title={`${movie.title} Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="trailer-iframe"
                    loading="lazy"
                  ></iframe>
                ) : (
                  <button
                    className="trailer-thumb"
                    onClick={() => setShowTrailer(true)}
                    aria-label="Play trailer"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${trailerId}/hqdefault.jpg`}
                      alt={`${movie.title} trailer thumbnail`}
                      loading="lazy"
                      width="1280"
                      height="720"
                    />
                    <div className="trailer-thumb-overlay">
                      <i className="fas fa-play"></i>
                    </div>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Reviews Section */}
          <div className="mt-5">
            <h3 className="mb-3">User Reviews ({movieReviews.length})</h3>

            {movieReviews.length > 0 ? (
              <div className="reviews-list">
                {movieReviews.map((review) => (
                  <div key={review.id} className="card-dark mb-3 p-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <strong>{review.user}</strong>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-grey mb-1">{review.comment}</p>
                    <small className="text-grey">{review.date}</small>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-grey">No reviews yet for this movie.</p>
            )}
          </div>
        </div>
      </div>

      {/* You May Also Like Section */}
      {similarMovies.length > 0 && (
        <motion.div
          className="similar-movies-section mt-5 pt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="mb-4">
            <i className="fas fa-heart me-2"></i>You May Also Like
          </h2>
          <div className="row g-4">
            {similarMovies.map((similarMovie) => (
              <div key={similarMovie.id} className="col-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie={similarMovie} />
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default MovieDetails;
