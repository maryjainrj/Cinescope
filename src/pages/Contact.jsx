// ---------------------------------------------------------
// Contact.jsx - Contact Form with Validation
// Member 2: Mary Jain Joshy - UI Design & Form Validation
// ---------------------------------------------------------

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
    >
      <h1 className="page-title">Contact Us</h1>

      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Contact Info */}
          <div className="card-dark p-4 mb-4">
            <h3 className="mb-3">Get in Touch</h3>
            <p className="text-grey mb-3">
              Have questions, suggestions, or feedback? We'd love to hear from you!
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div className="text-grey">
              <p className="mb-2">
                <strong>Email:</strong> contact@cinescope.com
              </p>
              <p className="mb-2">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-dark p-4">
            <h3 className="mb-4">Send us a Message</h3>

            {submitted ? (
              <motion.div
                className="alert alert-success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                role="alert"
              >
                <h4 className="alert-heading">Thank you!</h4>
                <p className="mb-0">
                  Your message has been sent successfully. We'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name Field */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
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
                  />
                  {errors.name && (
                    <div id="name-error" className="invalid-feedback" role="alert">
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
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
                  />
                  {errors.email && (
                    <div id="email-error" className="invalid-feedback" role="alert">
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
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
                  ></textarea>
                  {errors.message && (
                    <div id="message-error" className="invalid-feedback" role="alert">
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-danger btn-lg w-100">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
