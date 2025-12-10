// ---------------------------------------------------------
// MovieDetails.jsx - Detailed Movie View
// Member 3: Dinesh Babu Illamaran - Movie Content & Details
// ---------------------------------------------------------

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StarRating from "../components/StarRating";
import moviesData from "../data/movies.json";
import reviewsData from "../data/reviews.json";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Find the movie by ID
  const movie = moviesData.find((m) => m.id === parseInt(id));

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
                <iframe
                  width="100%"
                  height="450"
                  src={movie.trailerUrl}
                  title={`${movie.title} Trailer`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="trailer-iframe"
                ></iframe>
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
    </motion.div>
  );
}

export default MovieDetails;
