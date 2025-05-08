export function renderServices() {
  const services = [
    {
      icon: "fa-solid fa-lightbulb",
      title: 'LED Lighting',
      description: 'From vibrant LED lighting and crystal-clear sound to full-scale event coordination.',
      link: '#contact'
    },
    {
      icon: "fa-solid fa-volume-high",
      title: 'Sound Systems',
      description: 'Delivering immersive sound experiences with high-end audio equipment.',
      link: '#contact'
    },
    {
      icon: "fa-solid fa-couch",
      title: 'VIP Chairs',
      description: 'Keep the energy alive with our professional DJ setups and curated playlists.',
      link: '#contact'
    },
    {
      icon: "fa-solid fa-house",
      title: 'House Warming Events',
      description: 'Celebrate your new beginning with elegance and ease with our event works.',
      link: '#contact'
    },
    {
      icon: "fa-solid fa-champagne-glasses",
      title: 'DJ Works',
      description: 'Keep the energy alive with our professional DJ setups and curated playlists.',
      link: '#contact'
    },
    {
      icon: "fa-solid fa-van-shuttle",
      title: 'Transportation',
      description: 'Reliable and timely transport for guests, materials, and equipment.',
      link: '#contact'
    },
    {
      icon: "fa-solid fa-calendar-days",
      title: 'Marriage Events',
      description: 'From intimate weddings to grand celebrations — we do it all.',
      link: '#contact'
    }
    
  ];

  const serviceCards = services.map(service => `
    <div class="service-card fade-in">
      <div class="service-icon">
        <i class="${service.icon}"></i>
      </div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-description">${service.description}</p>
      <a href="${service.link}" class="service-link">
        Book Now <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  `).join('');

  return `
    <section class="section services" id="services">
      <div class="container">
        <h2 class="section-title fade-in">Our Services</h2>
        <p class="section-description fade-in">
          We offer a comprehensive range of solutions to transform every space with the perfect ambiance.
        </p>
        
        <div class="services-grid">
          ${serviceCards}
        </div>
      </div>
    </section>
  `;
}