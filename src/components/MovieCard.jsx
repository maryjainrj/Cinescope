// ---------------------------------------------------------
// MovieCard.jsx - Reusable Movie Card Component
// Member 3: Dinesh Babu Illamaran - Movie Components
// ---------------------------------------------------------

import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { motion } from "framer-motion";

function MovieCard({ movie }) {
  return (
    <motion.div
      className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/movies/${movie.id}`} className="text-decoration-none">
        <div className="card-dark movie-card">
          <div className="poster-container">
            <img
              src={movie.poster}
              alt={`${movie.title} poster`}
              className="movie-poster"
            />
            <div className="movie-info-overlay">
              <h4 className="movie-title">{movie.title}</h4>
              <p className="movie-meta">
                {movie.genre} • {movie.year}
              </p>
              <StarRating rating={movie.rating} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default MovieCard;
