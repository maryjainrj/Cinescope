/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moviesData from "../data/movies.json";

// Trending actors data with high-quality portrait photos
const trendingActors = [
  { id: 1, name: "Timothée Chalamet", photo: "https://thumbs.dreamstime.com/b/timothee-chalamet-th-annual-academy-awards-held-dolby-theatre-los-angeles-usa-march-timothee-chalamet-310363389.jpg", movies: 12, trending: "+15%" },
  { id: 2, name: "Zendaya", photo: "https://thumbs.dreamstime.com/b/zendaya-nd-annual-golden-globe-awards-held-beverly-hilton-hotel-beverly-hills-usa-january-zendaya-354894742.jpg", movies: 15, trending: "+22%" },
  { id: 3, name: "Florence Pugh", photo: "https://thumbs.dreamstime.com/b/florence-pugh-th-annual-academy-awards-held-dolby-theater-hollywood-usa-march-florence-pugh-310490781.jpg", movies: 18, trending: "+25%" },
  { id: 4, name: "Pedro Pascal", photo: "https://thumbs.dreamstime.com/b/pedro-pascal-los-angeles-ca-february-premiere-great-wall-tcl-chinese-theatre-hollywood-170554635.jpg", movies: 20, trending: "+30%" },
  { id: 5, name: "Anya Taylor-Joy", photo: "https://thumbs.dreamstime.com/b/anya-taylor-joy-los-angeles-ca-february-model-arriving-saint-laurent-palladium-fashion-show-hollywood-171392895.jpg", movies: 14, trending: "+12%" },
  { id: 6, name: "Margot Robbie", photo: "https://thumbs.dreamstime.com/b/margot-robbie-los-angeles-usa-december-premiere-bombshell-regency-village-theatre-picture-paul-smith-featureflash-166371722.jpg", movies: 22, trending: "+28%" },
  { id: 7, name: "Ryan Gosling", photo: "https://thumbs.dreamstime.com/b/ryan-gosling-20401736.jpg", movies: 25, trending: "+16%" },
  { id: 8, name: "Emma Stone", photo: "https://thumbs.dreamstime.com/b/emma-stone-20401734.jpg", movies: 24, trending: "+19%" },
  { id: 9, name: "Austin Butler", photo: "https://thumbs.dreamstime.com/b/austin-butler-th-annual-golden-globe-awards-held-beverly-hilton-hotel-beverly-hills-usa-january-austin-butler-272809475.jpg", movies: 10, trending: "+18%" },
  { id: 10, name: "Jenna Ortega", photo: "https://thumbs.dreamstime.com/b/jenna-ortega-249028153.jpg", movies: 16, trending: "+33%" }
];

function Home() {
  const navigate = useNavigate();
  const [currentHero, setCurrentHero] = useState(0);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  // Get top 10 movies by rating from JSON
  const top10Movies = [...moviesData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  // Get remaining popular movies (sorted by rating, next 6 movies)
  const otherMovies = [...moviesData]
    .sort((a, b) => b.rating - a.rating)
    .slice(10, 16);

  // Top 3 for hero carousel
  const heroMovies = top10Movies.slice(0, 3);

  // Auto-rotate hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroMovies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroMovies.length]);

  // Handle movie click
  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const heroVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="netflix-home">
      {/* ===== HERO CAROUSEL SECTION ===== */}
      <section className="netflix-hero">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHero}
            variants={heroVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="hero-slide"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%), url(${heroMovies[currentHero].poster})`,
            }}
          >
            <div className="hero-content-netflix">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="rank-badge-hero">#{currentHero + 1} in Top 10</div>
                <h1 className="hero-title-netflix">{heroMovies[currentHero].title}</h1>
                <div className="hero-meta">
                  <span className="hero-rating">
                    <i className="fas fa-star"></i> {heroMovies[currentHero].rating}/5
                  </span>
                  <span className="hero-year">{heroMovies[currentHero].year}</span>
                  <span className="hero-genre">{heroMovies[currentHero].genre}</span>
                </div>
                <p className="hero-description-netflix">
                  {heroMovies[currentHero].description}
                </p>
                <div className="hero-buttons">
                  <button 
                    className="btn-netflix btn-play"
                    onClick={() => handleMovieClick(heroMovies[currentHero].id)}
                  >
                    <i className="fas fa-play"></i> Watch Now
                  </button>
                  <button 
                    className="btn-netflix btn-info"
                    onClick={() => handleMovieClick(heroMovies[currentHero].id)}
                  >
                    <i className="fas fa-info-circle"></i> More Info
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {heroMovies.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentHero ? "active" : ""}`}
                  onClick={() => setCurrentHero(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ===== TOP 10 ROW ===== */}
      <section className="netflix-row">
        <div className="row-header">
          <h2 className="row-title">
            <i className="fas fa-fire"></i> Top 10 on CineScope This Week
          </h2>
          <a href="#" className="view-all-link">
            View All <i className="fas fa-chevron-right"></i>
          </a>
        </div>

        <motion.div
          className="row-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="row-scroll">
            {top10Movies.map((movie, index) => (
              <motion.div
                key={movie.id}
                className="movie-card-netflix"
                variants={itemVariants}
                onHoverStart={() => setHoveredMovie(movie.id)}
                onHoverEnd={() => setHoveredMovie(null)}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleMovieClick(movie.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-poster-wrapper">
                  <div className="rank-number-large">{index + 1}</div>
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="card-poster-netflix"
                  />
                  <motion.div
                    className="card-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredMovie === movie.id ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="overlay-content">
                      <h4 className="overlay-title">{movie.title}</h4>
                      <div className="overlay-meta">
                        <span className="overlay-rating">
                          <i className="fas fa-star"></i> {movie.rating.toFixed(1)}
                        </span>
                        <span className="overlay-year">{movie.year}</span>
                      </div>
                      <p className="overlay-genre">{movie.genre}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== MORE GREAT MOVIES ROW ===== */}
      <section className="netflix-row more-movies-section">
        <div className="row-header">
          <h2 className="row-title">
            <i className="fas fa-film"></i> More Great Movies
          </h2>
          <a href="#" className="view-all-link">
            Explore All <i className="fas fa-chevron-right"></i>
          </a>
        </div>

        <motion.div
          className="row-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="row-scroll">
            {otherMovies.map((movie) => (
              <motion.div
                key={movie.id}
                className="movie-card-netflix movie-card-bigger"
                variants={itemVariants}
                onHoverStart={() => setHoveredMovie(movie.id)}
                onHoverEnd={() => setHoveredMovie(null)}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleMovieClick(movie.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-poster-wrapper">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="card-poster-netflix"
                  />
                  <motion.div
                    className="card-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredMovie === movie.id ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="overlay-content">
                      <h4 className="overlay-title">{movie.title}</h4>
                      <div className="overlay-meta">
                        <span className="overlay-rating">
                          <i className="fas fa-star"></i> {movie.rating.toFixed(1)}
                        </span>
                        <span className="overlay-year">{movie.year}</span>
                      </div>
                      <p className="overlay-genre">{movie.genre}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== TRENDING ACTORS SECTION ===== */}
      <section className="netflix-row trending-actors-section">
        <div className="row-header">
          <h2 className="row-title">
            <i className="fas fa-fire"></i> Top 10 Trending Actors This Month
          </h2>
        </div>

        <motion.div
          className="row-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="row-scroll">
            {trendingActors.map((actor, index) => (
              <motion.div
                key={actor.id}
                className="actor-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="actor-rank">#{index + 1}</div>
                <div className="actor-photo-container">
                  <img
                    src={actor.photo}
                    alt={actor.name}
                    className="actor-photo"
                  />
                  <div className="actor-trending-badge">
                    <i className="fas fa-arrow-up"></i> {actor.trending}
                  </div>
                </div>
                <div className="actor-info">
                  <h4 className="actor-name">{actor.name}</h4>
                  <p className="actor-movies">
                    <i className="fas fa-film"></i> {actor.movies} Movies
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <motion.section
        className="final-cta-netflix"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="cta-content-netflix">
          <h2>Ready to Dive Deeper?</h2>
          <p>Browse our complete collection and find your next favorite movie</p>
          <a href="/movies" className="btn-netflix btn-cta">
            <i className="fas fa-film"></i> Browse All Movies
          </a>
        </div>
      </motion.section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #141414;
          margin: 0;
          padding: 0;
        }

        .netflix-home {
          background: #141414;
          min-height: 100vh;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        /* ===== HERO CAROUSEL ===== */
        .netflix-hero {
          position: relative;
          height: 80vh;
          overflow: hidden;
        }

        .hero-slide {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-content-netflix {
          max-width: 550px;
          padding: 0 60px;
          z-index: 2;
        }

        .rank-badge-hero {
          display: inline-block;
          background: rgba(229, 9, 20, 0.9);
          padding: 6px 16px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }

        .hero-title-netflix {
          font-size: 4rem;
          font-weight: 900;
          margin: 0 0 20px 0;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
          line-height: 1.1;
        }

        .hero-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          font-size: 16px;
        }

        .hero-rating {
          color: #46d369;
          font-weight: 700;
        }

        .hero-year,
        .hero-genre {
          color: #ddd;
        }

        .hero-description-netflix {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 30px;
          color: #eee;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
        }

        .btn-netflix {
          padding: 12px 32px;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s;
          text-decoration: none;
        }

        .btn-play {
          background: white;
          color: black;
        }

        .btn-play:hover {
          background: rgba(255, 255, 255, 0.85);
          transform: scale(1.05);
        }

        .btn-info {
          background: rgba(109, 109, 110, 0.7);
          color: white;
        }

        .btn-info:hover {
          background: rgba(109, 109, 110, 0.5);
          transform: scale(1.05);
        }

        .carousel-indicators {
          position: absolute;
          bottom: 40px;
          right: 60px;
          display: flex;
          gap: 8px;
          z-index: 3;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .indicator.active {
          background: white;
          transform: scale(1.2);
        }

        /* ===== NETFLIX ROWS ===== */
        .netflix-row {
          padding: 20px 60px;
        }

        .row-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .row-title {
          font-size: 24px;
          font-weight: 700;
          color: #e5e5e5;
          margin: 0;
        }

        .view-all-link {
          color: #e5e5e5;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;
        }

        .view-all-link:hover {
          color: white;
        }

        .row-container {
          position: relative;
        }

        .row-scroll {
          display: flex;
          gap: 4px;
          overflow-x: auto;
          overflow-y: visible;
          padding: 10px 0 30px 0;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }

        /* Larger gaps for actor cards */
        .trending-actors-section .row-scroll {
          gap: 20px;
        }

        .row-scroll::-webkit-scrollbar {
          height: 8px;
        }

        .row-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        .row-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }

        .row-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        /* ===== MOVIE CARDS ===== */
        .movie-card-netflix {
          min-width: 150px;
          max-width: 150px;
          flex-shrink: 0;
          cursor: pointer;
          position: relative;
        }

        /* Bigger cards for More Great Movies section */
        .more-movies-section .movie-card-bigger {
          min-width: 280px;
          max-width: 280px;
        }

        .movie-card-netflix a {
          text-decoration: none;
          color: inherit;
        }

        .card-poster-wrapper {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          aspect-ratio: 16/9;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        /* Bigger aspect ratio for More Great Movies */
        .more-movies-section .card-poster-wrapper {
          aspect-ratio: 2/3;
        }

        .card-poster-netflix {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s;
        }

        .movie-card-netflix:hover .card-poster-netflix {
          transform: scale(1.05);
        }

        .rank-number-large {
          position: absolute;
          bottom: 2px;
          left: 2px;
          font-size: 50px;
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.6);
          z-index: 1;
          line-height: 1;
          pointer-events: none;
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 40%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 8px;
        }

        .overlay-content {
          z-index: 2;
        }

        .overlay-title {
          font-size: 11px;
          font-weight: 700;
          margin: 0 0 4px 0;
          color: white;
          line-height: 1.2;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        /* Bigger overlay text for More Great Movies */
        .more-movies-section .overlay-title {
          font-size: 16px;
          margin: 0 0 8px 0;
        }

        .overlay-meta {
          display: flex;
          gap: 6px;
          margin-bottom: 2px;
          font-size: 9px;
        }

        /* Bigger meta for More Great Movies */
        .more-movies-section .overlay-meta {
          font-size: 13px;
          gap: 10px;
          margin-bottom: 6px;
        }

        .overlay-rating {
          color: #46d369;
          font-weight: 600;
        }

        .overlay-year {
          color: #ccc;
        }

        .overlay-genre {
          color: #999;
          font-size: 9px;
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* Bigger genre for More Great Movies */
        .more-movies-section .overlay-genre {
          font-size: 12px;
        }

        /* ===== CTA SECTION ===== */
        .final-cta-netflix {
          padding: 80px 60px;
          text-align: center;
          background: linear-gradient(to bottom, transparent, rgba(229, 9, 20, 0.1));
        }

        .cta-content-netflix h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .cta-content-netflix p {
          font-size: 18px;
          color: #ccc;
          margin-bottom: 30px;
        }

        .btn-cta {
          background: #e50914;
          color: white;
          padding: 14px 40px;
          font-size: 18px;
        }

        .btn-cta:hover {
          background: #f40612;
          transform: scale(1.05);
        }

        /* ===== TRENDING ACTORS SECTION ===== */
        .trending-actors-section {
          background: linear-gradient(to bottom, #141414, #0a0a0a);
          padding: 40px 60px;
          margin-bottom: 0;
        }

        .actor-card {
          min-width: 220px;
          max-width: 220px;
          flex-shrink: 0;
          cursor: pointer;
          position: relative;
          background: var(--card-bg, #1f1f1f);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #2f2f2f;
          transition: all 0.3s ease;
        }

        .actor-card:hover {
          border-color: #e50914;
          box-shadow: 0 8px 25px rgba(229, 9, 20, 0.3);
        }

        .actor-rank {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(0, 0, 0, 0.8);
          color: #e50914;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 14px;
          z-index: 2;
          border: 2px solid #e50914;
        }

        .actor-photo-container {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
          background: #0a0a0a;
        }

        .actor-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.3s ease;
        }

        .actor-card:hover .actor-photo {
          transform: scale(1.1);
        }

        .actor-trending-badge {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: #46d369;
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 4px;
          box-shadow: 0 4px 12px rgba(70, 211, 105, 0.4);
        }

        .actor-trending-badge i {
          font-size: 10px;
        }

        .actor-info {
          padding: 16px;
          background: linear-gradient(180deg, #1f1f1f 0%, #0f0f0f 100%);
        }

        .actor-name {
          font-size: 16px;
          font-weight: 700;
          color: white;
          margin: 0 0 8px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .actor-movies {
          font-size: 13px;
          color: #999;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .actor-movies i {
          color: #e50914;
          font-size: 12px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .netflix-hero {
            height: 60vh;
          }

          .hero-content-netflix {
            padding: 0 30px;
            max-width: 100%;
          }

          .hero-title-netflix {
            font-size: 2.5rem;
          }

          .hero-description-netflix {
            font-size: 16px;
          }

          .netflix-row {
            padding: 30px 30px;
          }

          .movie-card-netflix {
            min-width: 120px;
            max-width: 120px;
          }

          .carousel-indicators {
            right: 30px;
            bottom: 20px;
          }

          .row-title {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;