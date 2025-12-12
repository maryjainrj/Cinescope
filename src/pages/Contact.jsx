import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid - simulate submission
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ background: '#141414', minHeight: '100vh', paddingBottom: '60px' }}
    >
      <motion.h1
        className="page-title"
        style={{
          color: 'white',
          fontSize: '3rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '40px'
        }}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <i className="fas fa-envelope me-3" style={{ color: '#e50914' }}></i>
        Contact Us
      </motion.h1>

      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Contact Info */}
          <motion.div
            className="card-dark p-4 mb-4"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px'
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="mb-3" style={{ color: 'white', fontSize: '22px', fontWeight: '700' }}>
              <i className="fas fa-info-circle me-2" style={{ color: '#e50914' }}></i>
              Get in Touch
            </h3>
            <p className="text-grey mb-3" style={{ color: '#ccc', lineHeight: '1.8' }}>
              Have questions, suggestions, or feedback? We'd love to hear from you!
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div style={{ color: '#ccc' }}>
              <p className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-envelope" style={{ color: '#e50914', fontSize: '18px' }}></i>
                <strong style={{ color: 'white' }}>Email:</strong> contact@cinescope.com
              </p>
              <p className="mb-0" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-clock" style={{ color: '#e50914', fontSize: '18px' }}></i>
                <strong style={{ color: 'white' }}>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="card-dark p-4"
            style={{
              background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.05) 0%, rgba(0, 0, 0, 0.3) 100%)',
              border: '1px solid rgba(229, 9, 20, 0.3)',
              borderRadius: '12px'
            }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-4" style={{ color: 'white', fontSize: '22px', fontWeight: '700' }}>
              <i className="fas fa-paper-plane me-2" style={{ color: '#e50914' }}></i>
              Send us a Message
            </h3>

            {submitted ? (
              <motion.div
                className="alert"
                style={{
                  background: 'linear-gradient(135deg, rgba(70, 211, 105, 0.2) 0%, rgba(70, 211, 105, 0.1) 100%)',
                  border: '1px solid rgba(70, 211, 105, 0.5)',
                  borderRadius: '8px',
                  padding: '20px',
                  color: 'white'
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                role="alert"
              >
                <h4 style={{ color: '#46d369', marginBottom: '10px' }}>
                  <i className="fas fa-check-circle me-2"></i>
                  Thank you!
                </h4>
                <p className="mb-0" style={{ color: '#ccc' }}>
                  Your message has been sent successfully. We'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name Field */}
                <motion.div
                  className="mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <label htmlFor="name" className="form-label" style={{ color: '#ccc', fontWeight: '600' }}>
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control contact-input ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    aria-required="true"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${errors.name ? '#dc3545' : 'rgba(255, 255, 255, 0.1)'}`,
                      color: 'white',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      fontSize: '15px'
                    }}
                  />
                  {errors.name && (
                    <div id="name-error" className="invalid-feedback" role="alert" style={{ color: '#dc3545' }}>
                      <i className="fas fa-exclamation-circle me-1"></i>
                      {errors.name}
                    </div>
                  )}
                </motion.div>

                {/* Email Field */}
                <motion.div
                  className="mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <label htmlFor="email" className="form-label" style={{ color: '#ccc', fontWeight: '600' }}>
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className={`form-control contact-input ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${errors.email ? '#dc3545' : 'rgba(255, 255, 255, 0.1)'}`,
                      color: 'white',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      fontSize: '15px'
                    }}
                  />
                  {errors.email && (
                    <div id="email-error" className="invalid-feedback" role="alert" style={{ color: '#dc3545' }}>
                      <i className="fas fa-exclamation-circle me-1"></i>
                      {errors.email}
                    </div>
                  )}
                </motion.div>

                {/* Message Field */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <label htmlFor="message" className="form-label" style={{ color: '#ccc', fontWeight: '600' }}>
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className={`form-control contact-input ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="5"
                    aria-required="true"
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${errors.message ? '#dc3545' : 'rgba(255, 255, 255, 0.1)'}`,
                      color: 'white',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      fontSize: '15px',
                      resize: 'vertical'
                    }}
                  ></textarea>
                  {errors.message && (
                    <div id="message-error" className="invalid-feedback" role="alert" style={{ color: '#dc3545' }}>
                      <i className="fas fa-exclamation-circle me-1"></i>
                      {errors.message}
                    </div>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="btn btn-lg w-100"
                  style={{
                    background: 'linear-gradient(135deg, #e50914 0%, #b8070f 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '700',
                    transition: 'all 0.3s'
                  }}
                  whileHover={{ scale: 1.02, boxShadow: '0 4px 20px rgba(229, 9, 20, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fas fa-paper-plane me-2"></i>
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;