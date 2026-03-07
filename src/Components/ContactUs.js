import React, { useState } from "react";
import "../styles/Home.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^[\d\s\-+()]+$/.test(formData.phone) || formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Enter a valid phone number (at least 10 digits)";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-container">
        <header className="contact-header">
          <h2 className="contact-title" id="contact-title">
            Get in Touch
          </h2>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? Send us a message and we’ll get back to you shortly.
          </p>
        </header>

        <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="contact-name">
                Full name <span className="required-dot" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error-input" : ""}
                placeholder="e.g. John Smith"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
              />
              {errors.name && (
                <span id="contact-name-error" className="error-msg" role="alert">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">
                Email address <span className="required-dot" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error-input" : ""}
                placeholder="e.g. john@company.com"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
              />
              {errors.email && (
                <span id="contact-email-error" className="error-msg" role="alert">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-phone">
              Phone number <span className="required-dot" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error-input" : ""}
              placeholder="e.g. +1 (555) 000-0000"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            />
            {errors.phone && (
              <span id="contact-phone-error" className="error-msg" role="alert">
                {errors.phone}
              </span>
            )}
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">
              Message <span className="required-dot" aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error-input" : ""}
              placeholder="Tell us about your project or how we can help..."
              rows="5"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            />
            {errors.message && (
              <span id="contact-message-error" className="error-msg" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          {submitted && (
            <p className="contact-success" role="status">
              Thank you. Your message has been sent. We’ll be in touch soon.
            </p>
          )}

          <button type="submit" className="contact-btn" aria-label="Send message">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
