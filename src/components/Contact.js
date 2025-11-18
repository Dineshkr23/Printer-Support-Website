import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate(); // React Router navigation hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    // Redirect to ThankYou2 page after form submission
    navigate("/thankyou2");
  };

  return (
    <>
      <Navbar />
      <section id="contact" className="contact-section mt-5 py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h5>LET'S CONNECT</h5>
            <h2 className="fw-bold">Get in Touch</h2>
            <p className="text-muted">
              Have questions or need expert assistance? Our team is ready to help you find the perfect printing solution.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                alt="Contact Printzaa"
                className="img-fluid rounded"
                style={{borderRadius: 'var(--border-radius)'}}
              />
            </div>

            <div className="col-lg-6">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 9876543210"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@gmail.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    placeholder="Describe your issue or request here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-danger btn-lg w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="row contact-info mt-5">
            <div className="col-lg-4 text-center mb-4">
              <div className="info-box p-4 rounded shadow-sm" style={{background: 'var(--bg-white)', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)'}}>
                <i className="fas fa-envelope fs-2 mb-3" style={{color: 'var(--primary-color)'}}></i>
                <h4 className="fw-bold">Email Us</h4>
                <p style={{color: 'var(--text-secondary)'}}>info@printzaa.com</p>
              </div>
            </div>

            <div className="col-lg-4 text-center mb-4">
              <div className="info-box p-4 rounded shadow-sm" style={{background: 'var(--bg-white)', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)'}}>
                <i className="fas fa-map-marker-alt fs-2 mb-3" style={{color: 'var(--primary-color)'}}></i>
                <h4 className="fw-bold">Visit Us</h4>
                <p style={{color: 'var(--text-secondary)'}}>
                  3900 34TH ST S, Suite 200<br/>
                  Saint Petersburg, FL 33711
                </p>
              </div>
            </div>

            <div className="col-lg-4 text-center mb-4">
              <div className="info-box p-4 rounded shadow-sm" style={{background: 'var(--bg-white)', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)'}}>
                <i className="fas fa-phone fs-2 mb-3" style={{color: 'var(--primary-color)'}}></i>
                <h4 className="fw-bold">Call Us</h4>
                <a href="tel:(888) 366-2141" style={{color: 'var(--primary-color)', fontWeight: '600'}}>
                  (888) 366-2141
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
