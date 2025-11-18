import React from 'react'
import CountdownScroll from './components/CountdownScroll';
import BlogSection from './components/BlogSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to ThankYou page on form submit
    navigate('/thankyou2');
  };

  
  return (
    <>
    <body data-bs-spy="scroll" data-bs-target=".navbar">

{/* Navigation Section */}
<Navbar />

{/* <!-- Home section -->  */}
<section id="home" className="home pt-5 overflow-hidden">
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button> 
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="home-banner home-banner-1">
          <div className="home-banner-text">
            <h1>Next-Gen Printing</h1>
            <h2>Experience superior quality with our premium printer collection</h2>
            <a href="#products" className="btn btn-danger mt-4">Explore Collection</a>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="home-banner home-banner-2">
          <div className="home-banner-text">
            <h1>Expert Resources</h1>
            <h2>Master your printing with professional guides and tutorials</h2>
            <a href="/blogs" className="btn btn-danger mt-4">Discover Resources</a>
          </div>
        </div>
      </div> 
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true">
        <span className="ti-angle-left slider-icon"></span>
      </span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true">
        <span className="ti-angle-right slider-icon"></span>
      </span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</section>

  {/* <!-- Offer Section --> */}
  <div className="offers">
    <div className="container">
      <div className="row">
        {/* <!-- Offer Box One --> */}
        <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4">
          <Link to="/blogs">
            <div className="offer-box text-center position-relative">
              <div className="offer-inner">
                <div className="offer-image position-relative overflow-hidden">
                  <img decoding="async" src="/images/offer1.jpg" alt="Professional Printing Solutions" className="img-fluid" />
                  <div className="offer-overlay"></div>
                </div>
                <div className="offer-info">
                  <div className="offer-info-inner">
                    <p className="heading-bigger">Pro</p>
                    <p className="offer-title-1">Printing Solutions</p>
                    <span className="btn btn-outline-danger mt-4">
                      Explore Now
                    </span>
                  </div> 
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* <!-- Offer Box Two --> */}
        <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4 d-flex flex-column justify-content-between" style={{gap: 0}}>
          <Link to="/product/3" style={{display: 'block', marginBottom: 0}}>
            <div className="offer-box text-center position-relative" style={{marginBottom: 0}}>
              <div className="offer-inner">
                <div className="offer-image position-relative overflow-hidden">
                  <img decoding="async" src="/images/offer2.jpg" alt="Premium Ink & Toner" className="img-fluid" />
                  <div className="offer-overlay"></div>
                </div>
                <div className="offer-info">
                  <div className="offer-info-inner">
                    <p className="heading-bigger">Save 60%</p>
                    <p className="offer-title-1">Premium Supplies</p>
                    <span className="btn btn-outline-danger mt-4">
                      Shop Now
                    </span>
                  </div> 
                </div>
              </div>
            </div>
          </Link>
          <Link to="/product/4" style={{display: 'block', marginTop: 0}}>
            <div className="offer-box text-center position-relative" style={{marginTop: 0}}>
              <div className="offer-inner">
                <div className="offer-image position-relative overflow-hidden">
                  <img decoding="async" src="/images/offer3.jpg" alt="Quality Paper" className="img-fluid" />
                  <div className="offer-overlay"></div>
                </div>
                <div className="offer-info">
                  <div className="offer-info-inner">
                    <p className="heading-bigger">New</p>
                    <p className="offer-title-1">Eco-Friendly Paper</p>
                    <span className="btn btn-outline-danger mt-4">
                      Discover
                    </span>
                  </div> 
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* <!-- Offer Box Three --> */}
        <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4">
          <Link to="/blogs">
            <div className="offer-box text-center position-relative">
              <div className="offer-inner">
                <div className="offer-image position-relative overflow-hidden">
                  <img decoding="async" src="/images/offer4.jpg" alt="Expert Guides" className="img-fluid" />
                  <div className="offer-overlay"></div>
                </div>
                <div className="offer-info">
                  <div className="offer-info-inner">
                    <p className="heading-bigger">Free</p>
                    <p className="offer-title-1">Expert Guides</p>
                    <span className="btn btn-outline-danger mt-4">
                      Learn More
                    </span>
                  </div> 
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>

   

 {/* <!-- Products section --> */}
 <section id="products" className="products">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="headline text-center mb-5">
          <h2 className="pb-3 position-relative d-inline-block">FEATURED PRODUCTS</h2>
        </div>
      </div>
    </div>
    <div className="row">

      {/* <!-- Product 1 --> */}
      <div className="col-sm-6 col-lg-4 mb-4">
        <Link to="/product/1" className="d-block text-center">
          <div className="product-list">
            <div className="product-image position-relative">
              <span className="sale">Hot Deal</span>
              <img decoding="async" src="/images/p2.jpg" alt="Wireless Printer" className="img-fluid product-image-first" />
              <img decoding="async" src="/images/p3.jpg" alt="Wireless Printer Alt View" className="img-fluid product-image-secondary" />
            </div>
            <div className="product-name pt-3">
              <h3>Professional Wireless Printer</h3>
              <p className="mb-0 amount">$449.99 <del>$599.99</del></p>
              <div className="py-1">
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
              </div>
              <button className="btn btn-danger mt-3">View Details</button>
            </div>
          </div>
        </Link>
      </div>

      {/* <!-- Product 2 --> */}
      <div className="col-sm-6 col-lg-4 mb-4">
        <Link to="/product/2" className="d-block text-center">
          <div className="product-list">
            <div className="product-image position-relative">
              <img decoding="async" src="/images/p3.jpg" alt="Laser Printer" className="img-fluid product-image-first" />
              <img decoding="async" src="/images/p4.jpg" alt="Laser Printer Alt View" className="img-fluid product-image-secondary" />
            </div>
            <div className="product-name pt-3">
              <h3>Ultra-Fast Laser Printer</h3>
              <p className="mb-0 amount">$329.99</p>
              <div className="py-1">
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star"></span>
              </div>
              <button className="btn btn-danger mt-3">View Details</button>
            </div>
          </div>
        </Link>
      </div>

      {/* <!-- Product 3 --> */}
      <div className="col-sm-6 col-lg-4 mb-4">
        <Link to="/product/3" className="d-block text-center">
          <div className="product-list">
            <div className="product-image position-relative">
              <img decoding="async" src="/images/p4.jpg" alt="Ink Cartridges" className="img-fluid product-image-first" />
              <img decoding="async" src="/images/Ink-Toner.jpg" alt="Ink Cartridges Alt View" className="img-fluid product-image-secondary" />
            </div>
            <div className="product-name pt-3">
              <h3>Premium Ink & Toner Set</h3>
              <p className="mb-0 amount">$79.99</p>
              <div className="py-1">
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
              </div>
              <button className="btn btn-danger mt-3">View Details</button>
            </div>
          </div>
        </Link>
      </div>

      {/* <!-- Product 4 --> */}
      <div className="col-sm-6 col-lg-4 mb-4">
        <Link to="/product/4" className="d-block text-center">
          <div className="product-list">
            <div className="product-image position-relative">
              <img decoding="async" src="/images/p5.jpg" alt="Printer Paper" className="img-fluid product-image-first" />
              <img decoding="async" src="/images/p6.jpg" alt="Printer Paper Alt View" className="img-fluid product-image-secondary" />
            </div>
            <div className="product-name pt-3">
              <h3>Eco-Friendly A4 Paper</h3>
              <p className="mb-0 amount">$24.99</p>
              <div className="py-1">
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star"></span>
              </div>
              <button className="btn btn-danger mt-3">View Details</button>
            </div>
          </div>
        </Link>
      </div>

      {/* <!-- Product 5 --> */}
      <div className="col-sm-6 col-lg-4 mb-4">
        <Link to="/product/5" className="d-block text-center">
          <div className="product-list">
            <div className="product-image position-relative">
              <img decoding="async" src="/images/p6.jpg" alt="Photo Printer" className="img-fluid product-image-first" />
              <img decoding="async" src="/images/p2.jpg" alt="Photo Printer Alt View" className="img-fluid product-image-secondary" />
            </div>
            <div className="product-name pt-3">
              <h3>Compact Photo Printer</h3>
              <p className="mb-0 amount">$179.99</p>
              <div className="py-1">
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star"></span>
              </div>
              <button className="btn btn-danger mt-3">View Details</button>
            </div>
          </div>
        </Link>
      </div>

      {/* <!-- Product 6 --> */}
      <div className="col-sm-6 col-lg-4 mb-4">
        <Link to="/product/6" className="d-block text-center">
          <div className="product-list">
            <div className="product-image position-relative">
              <span className="sale">Trending</span>
              <img decoding="async" src="/images/p5.jpg" alt="Color Laser Printer" className="img-fluid product-image-first" />
              <img decoding="async" src="/images/p6.jpg" alt="Color Laser Printer Alt View" className="img-fluid product-image-secondary" />
            </div>
            <div className="product-name pt-3">
              <h3>Color LaserJet Pro</h3>
              <p className="mb-0 amount">$649.99 <del>$849.99</del></p>
              <div className="py-1">
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
                <span className="ti-star active"></span>
              </div>
              <button className="btn btn-danger mt-3">View Details</button>
            </div>
          </div>
        </Link>
      </div>
    </div>

    {/* <!-- Banner Section --> */}
    <div className="overflow-hidden my-5">
      <div className="row">
        <div className="col-sm-12 up_to_off">
          <img decoding="async" src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1400&h=400&fit=crop" alt="Limited Time Offer" className="img-fluid w-100" />
          <div className="up_to_content">
            <h2>EXCLUSIVE SEASON SALE - UP TO 60% OFF</h2>
          </div>
        </div>
      </div>
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
                  <img decoding="async" src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&h=800&fit=crop" alt="Special Offer Product" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>


        <BlogSection />


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

{/* <!-- Contact section --> */}
{/* <section id="contact">
  <div class="contact">
    <div class="container">
      <div class="mb-5 text-center">
          <h5>Let’s Start a Conversation!</h5>
          <h2 class="fw-bold">Contact Us</h2>
          <p class="contact-subtext">We would love to hear from you. Get in touch for any inquiries or feedback!</p>
      </div>

      <div class="row align-items-center">
        <div class="col-lg-5 col-md-5">
            <h4 class="fw-bold mb-4">Contact Info</h4>
            <ul class="info list-unstyled">
              <li class="d-flex align-items-center mb-3"> 
                  <span class="icon-box me-3"><i class="ti-location-pin fs-5"></i></span>
                  <p class="mb-0"><a href="#">Address: 3900 34TH ST S, FL, SAINT PETERSBURG, United States, 33711-4346</a></p>
              </li>
              
              <li class="d-flex align-items-center">
                  <span class="icon-box me-3"><i class="ti-envelope fs-5"></i></span>
                  <p class="mb-0"><a href="mailto:info@printzaa.com">Email: info@printzaa.com</a></p>
              </li> 
            </ul>
        </div>
        <div class="col-lg-7 col-md-7 pt-lg-0 pt-md-0 pt-4">
        <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        rows="5"
                        placeholder="Enter your message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-danger">
                      <i className="ti-rocket pe-2 fs-5"></i> Send Message
                    </button>
                  </div>
                </div>
              </form>
        </div>
      </div>
    </div>
  </div>
</section> */}

{/* <!-- Footer section --> */}
<Footer />

</body>
    </>
  )
}

export default Home