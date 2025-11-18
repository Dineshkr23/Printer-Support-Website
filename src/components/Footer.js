import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row">
          {/* About Company Section */}
          <div className="col-md-4 mb-4">
            <h4>About Printzaa</h4>
            <p>
              At Printzaa, we revolutionize your printing experience with cutting-edge technology and expert guidance. From premium printers to eco-friendly supplies, we deliver excellence at every touchpoint. Your trusted partner for all printing needs.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-4">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/blogs">Resources & Guides</Link>
              </li>
              <li>
                <Link to="/terms-condition">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contact-us">Get in Touch</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Section */}
          <div className="col-md-4 mb-4">
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li>
                <a href="tel:(888) 366-2141" style={{ color: "#fff" }}>
                  <i className="fa fa-phone"></i>(888) 366-2141
                </a>
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@printzaa.com
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> 3900 34TH ST S, Suite 200, Saint Petersburg, FL 33711, United States
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom text-center mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="mb-0">
            © 2025 <Link to="/">Printzaa</Link>. Empowering your printing journey with innovation and reliability.
          </p>
        </div>
      </div>
      <div className="fixed-strip">
        <a href="tel:(888) 366-2141">
          <i className="fa fa-phone"></i>
          <span className="hidden-number">(888) 366-2141</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
