import React from 'react';
import './AboutUs.css';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <section id="about" className="about-section mt-5 py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h5 style={{color: 'var(--primary-color)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em'}}>DISCOVER OUR STORY</h5>
          <h2 className="fw-bold" style={{fontSize: '3rem'}}>About Printzaa</h2>
          <p className="text-muted" style={{maxWidth: '700px', margin: '0 auto'}}>
            Leading the printing revolution with cutting-edge technology, unmatched quality, and exceptional customer experiences.
          </p>
        </div>

        {/* Company Overview */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop" 
              alt="Printzaa Team" 
              className="img-fluid rounded" 
              style={{borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-xl)'}}
            />
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4">Empowering Your Print Journey</h3>
            <p style={{lineHeight: '1.8', color: 'var(--text-secondary)'}}>
              At <strong style={{color: 'var(--primary-color)'}}>Printzaa</strong>, we revolutionize the printing landscape by delivering innovative solutions that combine advanced technology with user-centric design. Our commitment to excellence drives everything we do.
            </p>
            <p style={{lineHeight: '1.8', color: 'var(--text-secondary)'}}>
              From enterprise-grade equipment to eco-friendly supplies, we provide comprehensive printing solutions that empower businesses and individuals to achieve their goals with confidence and efficiency.
            </p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" 
              alt="Innovation at Printzaa" 
              className="img-fluid rounded" 
              style={{borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-xl)'}}
            />
          </div>
          <div className="col-lg-6 order-lg-1">
            <h3 className="fw-bold mb-4">Innovation Meets Reliability</h3>
            <p style={{lineHeight: '1.8', color: 'var(--text-secondary)'}}>
              Our expert team brings decades of combined experience in print technology, ensuring that every solution we offer meets the highest standards of performance and reliability.
            </p>
            <p style={{lineHeight: '1.8', color: 'var(--text-secondary)'}}>
              We believe in building lasting relationships through transparency, exceptional service, and continuous innovation—making Printzaa your trusted partner in the digital age.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section py-5" style={{background: 'var(--bg-light)', borderRadius: 'var(--border-radius-lg)'}}>
          <div className="text-center mb-5">
            <h3 className="fw-bold" style={{fontSize: '2.5rem'}}>Comprehensive Solutions</h3>
            <p style={{color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto'}}>
              Explore our full spectrum of premium printing services designed to exceed expectations.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="service-card text-center p-4" style={{background: 'var(--bg-white)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-md)', height: '100%', transition: 'all var(--transition-base)'}}>
                <img 
                  src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=300&fit=crop" 
                  alt="Premium Equipment" 
                  className="img-fluid mb-3" 
                  style={{borderRadius: 'var(--border-radius-sm)'}}
                />
                <h5 style={{color: 'var(--text-primary)', fontWeight: '700'}}>Premium Equipment</h5>
                <p style={{color: 'var(--text-secondary)'}}>
                  Industry-leading printers and scanners engineered for peak performance and reliability.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="service-card text-center p-4" style={{background: 'var(--bg-white)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-md)', height: '100%', transition: 'all var(--transition-base)'}}>
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop" 
                  alt="Expert Support" 
                  className="img-fluid mb-3" 
                  style={{borderRadius: 'var(--border-radius-sm)'}}
                />
                <h5 style={{color: 'var(--text-primary)', fontWeight: '700'}}>Expert Support</h5>
                <p style={{color: 'var(--text-secondary)'}}>
                  24/7 professional assistance from certified technicians who understand your needs.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="service-card text-center p-4" style={{background: 'var(--bg-white)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-md)', height: '100%', transition: 'all var(--transition-base)'}}>
                <img 
                  src="/images/Ink-Toner.jpg" 
                  alt="Quality Supplies" 
                  className="img-fluid mb-3" 
                  style={{borderRadius: 'var(--border-radius-sm)'}}
                />
                <h5 style={{color: 'var(--text-primary)', fontWeight: '700'}}>Quality Supplies</h5>
                <p style={{color: 'var(--text-secondary)'}}>
                  Authentic, eco-friendly ink, toner, and paper that deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="why-choose-us py-5">
          <div className="text-center mb-5">
            <h3 className="fw-bold" style={{fontSize: '2.5rem'}}>Why Printzaa?</h3>
            <p style={{color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto'}}>
              Experience the difference that sets us apart in the printing industry.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 text-center mb-4">
              <div className="p-4" style={{background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)', borderRadius: 'var(--border-radius)', height: '100%'}}>
                <div style={{width: '60px', height: '60px', background: 'var(--bg-gradient)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: 'var(--shadow-glow)'}}>
                  <i className="fas fa-bolt" style={{fontSize: '1.5rem', color: 'var(--text-white)'}}></i>
                </div>
                <h5 style={{color: 'var(--text-primary)', fontWeight: '700'}}>Lightning-Fast Service</h5>
                <p style={{color: 'var(--text-secondary)'}}>
                  Same-day solutions and rapid response times that keep your business running smoothly.
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-center mb-4">
              <div className="p-4" style={{background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)', borderRadius: 'var(--border-radius)', height: '100%'}}>
                <div style={{width: '60px', height: '60px', background: 'var(--bg-gradient)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: 'var(--shadow-glow)'}}>
                  <i className="fas fa-shield-alt" style={{fontSize: '1.5rem', color: 'var(--text-white)'}}></i>
                </div>
                <h5 style={{color: 'var(--text-primary)', fontWeight: '700'}}>Certified Excellence</h5>
                <p style={{color: 'var(--text-secondary)'}}>
                  Industry-certified products and services backed by comprehensive warranties.
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-center mb-4">
              <div className="p-4" style={{background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)', borderRadius: 'var(--border-radius)', height: '100%'}}>
                <div style={{width: '60px', height: '60px', background: 'var(--bg-gradient)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: 'var(--shadow-glow)'}}>
                  <i className="fas fa-leaf" style={{fontSize: '1.5rem', color: 'var(--text-white)'}}></i>
                </div>
                <h5 style={{color: 'var(--text-primary)', fontWeight: '700'}}>Eco-Conscious</h5>
                <p style={{color: 'var(--text-secondary)'}}>
                  Sustainable printing solutions that reduce environmental impact without compromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section text-center py-5 text-white rounded" style={{background: 'var(--bg-gradient)', boxShadow: 'var(--shadow-xl)'}}>
          <h3 className='text-white fw-bold' style={{fontSize: '2.25rem'}}>Ready to Transform Your Printing?</h3>
          <p className='text-white' style={{fontSize: '1.125rem', opacity: '0.95', maxWidth: '600px', margin: '1rem auto 2rem'}}>
            Join thousands of satisfied customers who trust Printzaa for their printing needs.
          </p>
          <a href="/contact-us" className="btn btn-light btn-lg mt-3" style={{padding: '1rem 2.5rem', borderRadius: 'var(--border-radius-sm)', fontWeight: '700'}}>
            Get Started Today
          </a>
        </div>
      </div>
    </section>
    <Footer />
    </>
    
  );
};

export default AboutUs;
