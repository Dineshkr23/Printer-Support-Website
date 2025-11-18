const productData = [
    {
      id: 1,
      title: 'All-in-One Wireless Printer',
      brand: 'HP',
      price: 400,
      originalPrice: 580,
      discount: 31,
      images: ['/images/p2.jpg', '/images/p3.jpg'],
      features: [
        { icon: 'fas fa-wifi', text: 'Wireless printing from multiple devices' },
        { icon: 'fas fa-bolt', text: 'High-speed laser print technology' },
      ],
      description: 'Ideal for home and office use...',
      reviews: [
        { name: 'John Doe', rating: 5, comment: 'Amazing printer!' },
      ],
    },
    {
      id: 2,
      title: 'LaserJet Pro M15w',
      brand: 'Canon',
      price: 299,
      originalPrice: null,
      discount: 0,
      images: ['/images/p4.jpg', '/images/p5.jpg'],
      features: [
        { icon: 'fas fa-rocket', text: 'Fast laser printing' },
      ],
      description: 'High-speed printing with sharp results...',
      reviews: [
        { name: 'Jane Smith', rating: 4, comment: 'Great for the price.' },
      ],
    },
  ];
  
  export default productData;
  