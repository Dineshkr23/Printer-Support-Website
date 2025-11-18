import React from 'react';
import './TermsAndConditions.css';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="terms-wrapper">
        <div className="container">
          <section>
            <h1>Privacy Policy</h1>
            <p>
              Welcome to Printzaa.com. Your privacy is important to us, and this Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
            </p>
          </section>

          <section>
            <h3>1. Information We Collect</h3>
            <p>
              When you interact with Printzaa.com, we may collect the following types of information:
            </p>
            <ul>
              <li>Personal Information (name, email address, phone number, etc.)</li>
              <li>Payment Information (billing details and transaction history)</li>
              <li>Website Usage Data (pages visited, time spent on the site, etc.)</li>
            </ul>
          </section>

          <section>
            <h3>2. How We Use Your Information</h3>
            <p>We use the information collected for the following purposes:</p>
            <ul>
              <li>To process orders and provide products or services</li>
              <li>To improve our website and customer experience</li>
              <li>To communicate promotions, updates, and offers</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h3>3. Sharing Your Information</h3>
            <p>
              We respect your privacy. Printzaa does not sell or rent your personal information to third parties. We may share information with trusted service providers to fulfill orders or improve our services.
            </p>
            <ul>
              <li>Payment processing partners</li>
              <li>Shipping and logistics providers</li>
              <li>Marketing and analytics services</li>
            </ul>
          </section>

          <section>
            <h3>4. Data Security</h3>
            <p>
              We implement robust security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. Sensitive data is encrypted during transmission.
            </p>
          </section>

          <section>
            <h3>5. Cookies and Tracking</h3>
            <p>
              Printzaa.com uses cookies to enhance your experience. Cookies help us analyze site traffic and customize content. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h3>6. Third-Party Links</h3>
            <p>
              Our website may contain links to third-party sites. Printzaa is not responsible for the privacy practices or content of external websites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h3>7. Your Rights</h3>
            <p>
              You have the right to access, correct, or delete your personal data. Contact us if you would like to exercise these rights.
            </p>
          </section>

          <section>
            <h3>8. Policy Updates</h3>
            <p>
              We may update this Privacy Policy periodically. Any changes will be posted on this page. Please review this policy regularly to stay informed.
            </p>
          </section>

          <section className="contact-info">
            <h3>Contact Us</h3>
            <p>If you have any questions about our Privacy Policy, please contact us:</p>
            <ul>
              <li>Email: <a href="mailto:support@printzaa.com">support@printzaa.com</a></li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 123 Printzaa Street, Mumbai, India</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
