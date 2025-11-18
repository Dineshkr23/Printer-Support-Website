import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou2 = () => {
  return (
    <div className="thankyou-container d-flex align-items-center justify-content-center vh-100" style={{background: 'var(--bg-light)'}}>
      <div className="thankyou-box p-5 shadow rounded text-center" style={{maxWidth: '600px', borderRadius: 'var(--border-radius-lg)'}}>
        <div style={{width: '80px', height: '80px', background: 'var(--bg-gradient)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', boxShadow: 'var(--shadow-glow)'}}>
          <i className="fas fa-check" style={{fontSize: '2.5rem', color: 'var(--text-white)'}}></i>
        </div>
        <h1 className="fw-bold" style={{color: 'var(--primary-color)', fontSize: '2.5rem'}}>Thank You!</h1>
        <p className="mt-3" style={{fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: '1.7'}}>
          We've received your message and our team will respond within 24 hours. We appreciate your interest in Printzaa!
        </p>
        <Link to="/" className="btn btn-danger mt-4" style={{padding: '0.875rem 2rem'}}>
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ThankYou2;
