import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './BlogPage.css';
import CountdownScroll from './CountdownScroll';

const blogPosts = [
  {
    id: 1,
    title: 'Advanced Printer Maintenance Strategies',
    date: 'January 15, 2025',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&h=600&fit=crop',
    excerpt: 'Unlock professional-grade maintenance techniques to maximize your printer\'s performance and longevity.',
    link: '/blog/top-5-printer-maintenance-tips'
  },
  {
    id: 2,
    title: 'Resolving Printer Challenges Effectively',
    date: 'January 10, 2025',
    image: 'https://images.unsplash.com/photo-1586943101559-4cdcf86a6f87?w=800&h=600&fit=crop',
    excerpt: 'Master the art of troubleshooting with our comprehensive guide to solving common printer issues.',
    link: '/blog/troubleshooting-common-printer-issues'
  },
  {
    id: 3,
    title: 'Printer Selection Guide 2025',
    date: 'January 5, 2025',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&h=600&fit=crop',
    excerpt: 'Navigate the latest printer technology and find the perfect match for your business requirements.',
    link: '/blog/choosing-the-right-printer'
  }
];

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <section className="unique-blog-page py-5 mt-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold">Expert <span style={{background: 'var(--bg-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Resources & Guides</span></h1>
            <p className="text-muted">Discover cutting-edge insights and professional guidance for optimal printing solutions.</p>
          </div>

          <div className="row gy-4">
            {blogPosts.map((post) => (
              <div className="col-lg-4 col-md-6" key={post.id}>
                <div className="unique-blog-card shadow-sm rounded overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid unique-blog-image"
                  />
                  <div className="p-4 text-center">
                    <h3 className="unique-blog-title">{post.title}</h3>
                    <p className="blog-date text-muted">{post.date}</p>
                    <p>{post.excerpt}</p>
                    <Link to={post.link} className="btn btn-outline-red mt-3">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Section with Countdown */}
<section id="special" className="special">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="headline text-center mb-5">
                  <h2 className="pb-3 position-relative d-inline-block">LIMITED TIME FLASH SALE</h2>
                </div>
              </div>
              <div className="col-lg-7">
                <CountdownScroll />
              </div>
              <div className="col-lg-5">
                <div className="special-img position-relative">
                  <span className="sale">Flash Deal</span>
                  <img decoding="async" src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&h=800&fit=crop" alt="Special Offer" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* <!-- Testimonial section --> */}
  <section id="testimonial" className="testimonial mt-5">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="headline text-center mb-5">
            <h2 className="pb-3 position-relative d-inline-block">What Our Clients Say</h2>
          </div>
        </div>
        <div className="col-sm-12 col-lg-8 offset-lg-2 text-center">
          <div id="carouselExampleIndicatorsTwo" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicatorsTwo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicatorsTwo" data-bs-slide-to="1" aria-label="Slide 2"></button> 
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="testimonial-wrapper">
                  <div className="row">
                    <div className="col-sm-12">
                      <img decoding="async" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces" alt="Sarah Martinez" className="img-fluid" />
                    </div>
                    <div className="username">
                        <h3>Sarah Martinez</h3>
                        <span>CEO, Martinez Enterprises</span>
                        <p>"Printzaa transformed our office printing workflow. Their premium equipment and exceptional support have exceeded all expectations. The quality and reliability are unmatched!"</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="testimonial-wrapper">
                  <div className="row">
                    <div className="col-sm-12">
                      <img decoding="async" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces" alt="Michael Chen" className="img-fluid" />
                    </div>
                    <div className="username">
                      <h3>Michael Chen</h3>
                      <span>Design Director, Creative Studio</span>
                      <p>"Outstanding service and top-tier equipment! Printzaa's professional approach and cutting-edge technology have revolutionized our printing capabilities. Highly recommend!"</p>
                  </div>
                  </div>
                </div>
              </div> 
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorsTwo" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true">
                <span className="ti-angle-left slider-icon"></span>
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicatorsTwo" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true">
                <span className="ti-angle-right slider-icon"></span>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section> 

      <Footer />
    </>
  );
};

export default BlogPage;
