import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-formal">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <h3 className="footer-brand">
              <i className="fas fa-film"></i> CineScope
            </h3>
            <p className="footer-description">
              Your ultimate destination for movie news, reviews, ratings, and recommendations. 
              Discover the best in cinema from classics to the latest releases.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/movies">Browse Movies</Link></li>
              <li><Link to="/reviews">Movie News</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              <li><a href="/movies?genre=Action">Action</a></li>
              <li><a href="/movies?genre=Drama">Drama</a></li>
              <li><a href="/movies?genre=Sci-Fi">Sci-Fi</a></li>
              <li><a href="/movies?genre=Thriller">Thriller</a></li>
              <li><a href="/movies?genre=Animation">Animation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><a href="/contact">Help Center</a></li>
              <li><a href="/contact">FAQ</a></li>
              <li><a href="/contact">Privacy Policy</a></li>
              <li><a href="/contact">Terms of Service</a></li>
              <li><a href="/contact">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@cinescope.com">info@cinescope.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Movie Lane, Cinema City, CC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CineScope. All rights reserved.</p>
          <p className="footer-credits">
            Designed with <i className="fas fa-heart"></i> by CineScope Team
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
