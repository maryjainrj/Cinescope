// ---------------------------------------------------------
// About.jsx - About Page
// Member 3: Dinesh Babu Illamaran - Content Development
// ---------------------------------------------------------

import { motion } from "framer-motion";

function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Kalyan Charagondla",
      role: "Project Setup & Routing",
      responsibilities: "Initial project setup, React Router configuration, folder structure, navigation system",
    },
    {
      id: 2,
      name: "Mary Jain Joshy",
      role: "UI/UX Designer & Content Developer",
      responsibilities: "UI design, Home page, Reviews page, Contact form, styling and content creation",
    },
    {
      id: 3,
      name: "Dinesh Babu Illamaran",
      role: "Movies & Content Developer",
      responsibilities: "Movie listing, filters, search functionality, MovieDetails page, About page content, movie data",
    },
    {
      id: 4,
      name: "Kalyani Karri",
      role: "Features & Integration Developer",
      responsibilities: "Trailer integration, user rating system, accessibility features, footer design, testing and quality assurance",
    },
  ];

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.div
        className="about-hero-banner"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-hero-content">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="about-hero-title">
              <i className="fas fa-clapperboard me-3"></i>
              About CineScope
            </h1>
            <p className="about-hero-subtitle">
              Your ultimate destination for real movie news, authentic reviews, and immersive cinematic experiences
            </p>
            <div className="hero-tags">
              <span className="hero-tag"><i className="fas fa-users me-2"></i>4 Creators</span>
              <span className="hero-tag"><i className="fas fa-film me-2"></i>40 Movies</span>
              <span className="hero-tag"><i className="fas fa-star me-2"></i>Ratings & Trailers</span>
            </div>
          </motion.div>

          <motion.div
            className="about-hero-image"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=700&h=450&fit=crop&auto=format&q=70"
              alt="About CineScope"
              loading="lazy"
              width="700"
              height="450"
            />
            <div className="hero-image-overlay">
              <span className="hero-badge">
                <i className="fas fa-bolt me-2"></i>Built for Film Lovers
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Project Description */}
      <div className="card-dark p-4 mb-5">
        <h2 className="mb-3">Project Overview</h2>
        <p className="text-grey mb-3">
          <strong className="text-light">CineScope</strong> is a React Single Page Application (SPA) 
          built with React Router. It allows users to browse movies, read reviews, 
          learn about the platform, and contact the team. The SPA architecture 
          ensures seamless navigation without page reloads.
        </p>
        <p className="text-grey mb-3">
          This project demonstrates modern web development practices including:
        </p>
        <ul className="text-grey">
          <li>Client-side routing with React Router</li>
          <li>Reusable component architecture</li>
          <li>External CSS with consistent styling</li>
          <li>Search and filter functionalities</li>
          <li>Form validation and accessibility</li>
          <li>Responsive design with Bootstrap</li>
          <li>Smooth animations with Framer Motion</li>
        </ul>
      </div>

      {/* Core Features */}
      <div className="card-dark p-4 mb-5">
        <h2 className="mb-3">Core Features</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5 className="text-accent">
              <i className="fas fa-film me-2"></i>Movie Browsing
            </h5>
            <p className="text-grey">Search and filter through our movie collection</p>
          </div>
          <div className="col-md-6 mb-3">
            <h5 className="text-accent">
              <i className="fas fa-star me-2"></i>User Reviews
            </h5>
            <p className="text-grey">Read and sort authentic user reviews</p>
          </div>
          <div className="col-md-6 mb-3">
            <h5 className="text-accent">
              <i className="fas fa-mobile-alt me-2"></i>Responsive Design
            </h5>
            <p className="text-grey">Seamless experience across all devices</p>
          </div>
          <div className="col-md-6 mb-3">
            <h5 className="text-accent">
              <i className="fas fa-universal-access me-2"></i>Accessible
            </h5>
            <p className="text-grey">Built with accessibility standards in mind</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Meet the Team</h2>
        <div className="row">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="col-md-6 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="card-dark p-4 h-100">
                <h4 className="text-accent mb-2">{member.name}</h4>
                <h6 className="text-grey mb-3">{member.role}</h6>
                <p className="text-grey mb-0">
                  <strong>Responsibilities:</strong> {member.responsibilities}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="card-dark p-4 text-center">
        <h2 className="mb-3">Built With</h2>
        <div className="tech-stack">
          <span className="badge bg-danger me-2 mb-2 p-2">React</span>
          <span className="badge bg-danger me-2 mb-2 p-2">React Router</span>
          <span className="badge bg-danger me-2 mb-2 p-2">Bootstrap</span>
          <span className="badge bg-danger me-2 mb-2 p-2">Framer Motion</span>
          <span className="badge bg-danger me-2 mb-2 p-2">CSS3</span>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
