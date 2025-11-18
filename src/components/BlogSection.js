import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
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

  return (
    <section id="blog" className="blog pt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="headline text-center mb-5">
              <h2 className="pb-3 position-relative d-inline-block">EXPERT INSIGHTS & GUIDES</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-sm-6 col-lg-4 mb-4">
              <div className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} className="img-fluid" />
                </div>
                <div className="blog-content p-4">
                  <h3>{post.title}</h3>
                  <p className="blog-date">{post.date}</p>
                  <p>{post.excerpt}</p>
                  <Link to={post.link} className="btn btn-danger mt-3">Explore Article</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>    
    </section>
  );
};

export default BlogSection;
