import React from 'react';
import './TermsAndConditions.css';
import Navbar from './Navbar';
import Footer from './Footer';

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="terms-wrapper py-5 mt-5">
        <div className="container">
          <h1 className="text-center mb-5">Terms and Conditions</h1>
          <p className="text-muted text-center">Effective Date: January 1, 2024</p>

          <section className="mb-5">
            <h3>1. Introduction</h3>
            <p>
              Welcome to <strong>Printzaa.com</strong>. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-5">
            <h3>2. Intellectual Property Rights</h3>
            <p>
              Unless otherwise stated, Printzaa.com and/or its licensors own the intellectual property rights for all content and material on this website. 
              All intellectual property rights are reserved. You may access this for personal use, subject to the restrictions set forth in these terms.
            </p>
            <p><strong>You must not:</strong></p>
            <ul>
              <li>Republish material from Printzaa.com</li>
              <li>Sell, rent, or sub-license material</li>
              <li>Reproduce, duplicate, or copy material</li>
              <li>Redistribute content from Printzaa.com</li>
            </ul>
          </section>

          <section className="mb-5">
            <h3>3. User Accounts</h3>
            <p>
              To access certain features of Printzaa.com, you may be required to register an account. By creating an account, you agree to:
            </p>
            <ul>
              <li>Provide accurate and up-to-date information</li>
              <li>Maintain the confidentiality of your account details</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
            </ul>
            <p>Printzaa.com reserves the right to terminate accounts at its discretion.</p>
          </section>

          <section className="mb-5">
            <h3>4. Product and Service Descriptions</h3>
            <p>
              Printzaa.com strives to provide accurate descriptions of products and services. However, we do not guarantee that product descriptions are error-free. If a product is not as described, your sole remedy is to return it in unused condition.
            </p>
          </section>

          <section className="mb-5">
            <h3>5. Pricing and Payment</h3>
            <p>
              All prices listed on Printzaa.com are subject to change without notice. We reserve the right to modify or discontinue products or services at any time. Payment must be made in full at the time of purchase. Printzaa.com accepts major credit cards, PayPal, and other forms of payment specified during checkout.
            </p>
          </section>

          <section className="mb-5">
            <h3>6. Shipping and Delivery</h3>
            <p>
              Printzaa.com aims to process and ship orders promptly. Delivery times may vary based on your location and selected shipping method. We are not responsible for delays caused by third-party carriers or unforeseen circumstances.
            </p>
          </section>

          <section className="mb-5">
            <h3>7. Returns and Refunds</h3>
            <p>
              We offer a 30-day return policy for most products. To qualify for a return, the item must be unused and in the same condition as received. Refunds are processed to the original payment method once the returned item is inspected.
            </p>
            <p>
              <strong>Non-refundable items:</strong> Personalized products, opened software, and downloadable content.
            </p>
          </section>

          <section className="mb-5">
            <h3>8. Limitation of Liability</h3>
            <p>
              Printzaa.com shall not be liable for any indirect, incidental, or consequential damages arising out of your use of our website. Our liability is limited to the amount you paid for the products or services.
            </p>
          </section>

          <section className="mb-5">
            <h3>9. External Links</h3>
            <p>
              This website may contain links to third-party websites. Printzaa.com is not responsible for the content or privacy practices of these external sites. We encourage you to review their terms and policies before engaging with them.
            </p>
          </section>

          <section className="mb-5">
            <h3>10. Governing Law</h3>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the State of [Your State/Country]. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-5">
            <h3>11. Changes to Terms and Conditions</h3>
            <p>
              Printzaa.com reserves the right to update or modify these terms at any time without prior notice. Changes will take effect immediately upon posting. Your continued use of this website constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-5">
            <h3>12. Contact Information</h3>
            <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
            <ul>
              <li>Email: <a href="mailto:support@printzaa.com">support@printzaa.com</a></li>
              <li>Phone: +1 (800) 123-4567</li>
              <li>Address: 123 Printzaa Street, New York, NY, 10001</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
