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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ background: '#141414', minHeight: '100vh', paddingBottom: '60px' }}
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
            <h1 className="about-hero-title" style={{ color: 'white' }}>
              <i className="fas fa-clapperboard me-3"></i>
              About CineScope
            </h1>
            <p className="about-hero-subtitle" style={{ color: '#ccc' }}>
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
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8p3USsRvfzA3bqNfXrSUHK2nXAACxg-6Q&s"
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
      <motion.div
        className="card-dark p-4 mb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.01 }}
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px'
        }}
      >
        <h2 className="mb-3" style={{ color: 'white', fontSize: '24px', fontWeight: '700' }}>
          <i className="fas fa-info-circle me-2" style={{ color: '#e50914' }}></i>
          Project Overview
        </h2>
        <p className="text-grey mb-3" style={{ color: '#ccc', lineHeight: '1.8' }}>
          <strong style={{ color: '#e50914' }}>CineScope</strong> is a React Single Page Application (SPA) 
          built with React Router. It allows users to browse movies, read reviews, 
          learn about the platform, and contact the team. The SPA architecture 
          ensures seamless navigation without page reloads.
        </p>
        <p className="text-grey mb-3" style={{ color: '#ccc', lineHeight: '1.8' }}>
          This project demonstrates modern web development practices including:
        </p>
        <ul style={{ color: '#ccc', lineHeight: '2' }}>
          <li>Client-side routing with React Router</li>
          <li>Reusable component architecture</li>
          <li>External CSS with consistent styling</li>
          <li>Search and filter functionalities</li>
          <li>Form validation and accessibility</li>
          <li>Responsive design with Bootstrap</li>
          <li>Smooth animations with Framer Motion</li>
        </ul>
      </motion.div>

      {/* Core Features */}
      <motion.div
        className="card-dark p-4 mb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px'
        }}
      >
        <h2 className="mb-4" style={{ color: 'white', fontSize: '24px', fontWeight: '700' }}>
          <i className="fas fa-star me-2" style={{ color: '#e50914' }}></i>
          Core Features
        </h2>
        <motion.div
          className="row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="col-md-6 mb-3" variants={itemVariants} whileHover={{ x: 5 }}>
            <div style={{
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.3s'
            }}>
              <h5 style={{ color: '#e50914', marginBottom: '10px', fontSize: '18px' }}>
                <i className="fas fa-film me-2"></i>Movie Browsing
              </h5>
              <p style={{ color: '#999', margin: 0 }}>Search and filter through our movie collection</p>
            </div>
          </motion.div>
          <motion.div className="col-md-6 mb-3" variants={itemVariants} whileHover={{ x: 5 }}>
            <div style={{
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.3s'
            }}>
              <h5 style={{ color: '#e50914', marginBottom: '10px', fontSize: '18px' }}>
                <i className="fas fa-star me-2"></i>User Reviews
              </h5>
              <p style={{ color: '#999', margin: 0 }}>Read and sort authentic user reviews</p>
            </div>
          </motion.div>
          <motion.div className="col-md-6 mb-3" variants={itemVariants} whileHover={{ x: 5 }}>
            <div style={{
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.3s'
            }}>
              <h5 style={{ color: '#e50914', marginBottom: '10px', fontSize: '18px' }}>
                <i className="fas fa-mobile-alt me-2"></i>Responsive Design
              </h5>
              <p style={{ color: '#999', margin: 0 }}>Seamless experience across all devices</p>
            </div>
          </motion.div>
          <motion.div className="col-md-6 mb-3" variants={itemVariants} whileHover={{ x: 5 }}>
            <div style={{
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.3s'
            }}>
              <h5 style={{ color: '#e50914', marginBottom: '10px', fontSize: '18px' }}>
                <i className="fas fa-universal-access me-2"></i>Accessible
              </h5>
              <p style={{ color: '#999', margin: 0 }}>Built with accessibility standards in mind</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Team Section */}
      <div className="mb-5">
        <motion.h2
          className="text-center mb-4"
          style={{ color: 'white', fontSize: '28px', fontWeight: '700' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <i className="fas fa-users me-2" style={{ color: '#e50914' }}></i>
          Meet the Team
        </motion.h2>
        <div className="row">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="col-md-6 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div
                className="card-dark p-4 h-100"
                style={{
                  background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.1) 0%, rgba(229, 9, 20, 0.05) 100%)',
                  border: '1px solid rgba(229, 9, 20, 0.3)',
                  borderRadius: '12px',
                  transition: 'all 0.3s'
                }}
              >
                <h4 style={{ color: '#e50914', marginBottom: '10px', fontSize: '20px', fontWeight: '700' }}>
                  <i className="fas fa-user-circle me-2"></i>
                  {member.name}
                </h4>
                <h6 style={{ color: '#999', marginBottom: '15px', fontSize: '14px' }}>
                  {member.role}
                </h6>
                <p style={{ color: '#ccc', marginBottom: 0, lineHeight: '1.6' }}>
                  <strong style={{ color: 'white' }}>Responsibilities:</strong> {member.responsibilities}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <motion.div
        className="card-dark p-4 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px'
        }}
      >
        <h2 className="mb-4" style={{ color: 'white', fontSize: '24px', fontWeight: '700' }}>
          <i className="fas fa-code me-2" style={{ color: '#e50914' }}></i>
          Built With
        </h2>
        <div className="tech-stack">
          {['React', 'React Router', 'Bootstrap', 'Framer Motion', 'CSS3'].map((tech, index) => (
            <motion.span
              key={tech}
              className="badge me-2 mb-2 p-2"
              style={{
                background: 'linear-gradient(135deg, #e50914 0%, #b8070f 100%)',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
                padding: '10px 20px',
                borderRadius: '6px'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -3 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;