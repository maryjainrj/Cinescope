// ---------------------------------------------------------
// App.js - Main Application Component
// Member 1: Kalyan Charagondla - Project Setup & Routing
// ---------------------------------------------------------

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./styles/styles.css";

function App() {
  return (
    <Router>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="page container-custom">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
