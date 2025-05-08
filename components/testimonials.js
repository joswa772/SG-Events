export function renderTestimonials() {
  const testimonials = [
    {
      quote: "SK Groups transformed our home with their innovative lighting solutions. Their attention to detail and commitment to quality is unmatched in the industry.",
      name: "James Wilson",
      position: "Homeowner",
      avatar: "/assets/images/testimonials/james-wilson.jpg"
    },
    {
      quote: "As a boutique owner, I needed lighting that would enhance my products without overwhelming the space. SK Groups delivered exactly what I needed and more.",
      name: "Sarah Johnson",
      position: "Retail Store Owner",
      avatar: "/assets/images/testimonials/sarah-johnson.jpg"
    },
    {
      quote: "The outdoor lighting system SK Groups installed has completely transformed our commercial property. The LED solutions they provided have also significantly reduced our energy costs.",
      name: "Michael Chen",
      position: "Property Manager",
      avatar: "/assets/images/testimonials/michael-chen.jpg"
    }
  ];

  const testimonialSlides = testimonials.map((testimonials, index) => `
    <div class="testimonial-slide ${index === 0 ? 'active' : ''}">
      <p class="testimonial-quote">
        ${testimonials.quote}
      </p>
      
      <div class="testimonial-author">
        <img src="${testimonials.avatar}" alt="${testimonials.name}" class="author-avatar">
        <h4 class="author-name">${testimonials.name}</h4>
        <p class="author-position">${testimonials.position}</p>
      </div>
    </div>
  `).join('');

  const indicators = testimonials.map((_, index) => `
    <div class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
  `).join('');

  return `
    <section class="section testimonials" id="testimonials">
      <div class="container">
        <h2 class="section-title fade-in">What Our Clients Say</h2>
        <p class="section-description fade-in">
          Read testimonials from our satisfied customers who experienced our exceptional lighting services.
        </p>
        
        <div class="testimonial-carousel fade-in">
          <div class="testimonial-slides">
            ${testimonialSlides}
          </div>
          
          <div class="carousel-controls">
            <button class="carousel-btn" id="prevBtn">
              <i class="fas fa-arrow-left"></i>
            </button>
            <button class="carousel-btn" id="nextBtn">
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
          
          <div class="carousel-indicators">
            ${indicators}
          </div>
        </div>
      </div>
    </section>
  `;
}