export function renderProjects() {
  const projects = [
    {
      image: 'assests/B542E62C-0FA2-40FC-9C0B-C9DFF09FC47A.jpeg',
      category: 'LED Lighting',
      title: 'LED Lighting for Events and homes',
      description: 'From vibrant LED lighting and crystal-clear sound to full-scale event coordination.',
      link: '#'
    },
    {
      image: 'assests/IMG-20180129-WA0024-e1700418509993.jpg',
      category: 'Ceremony',
      title: 'House Warming ceremony',
      description: 'Celebrate your new beginning with elegance and ease with our event works.',
      link: '#'
    },
    {
      image: 'assests/Sound system, PA System on rent in Delhi, Noida.jpg',
      category: 'Speakers',
      title: 'Sound systems',
      description: 'Delivering immersive sound experiences with high-end audio equipment.',
      link: '#'
    },
    {
      image: 'assests/pexels-mohd-hidayat-hideki-465932306-30584407.jpg',
      category: 'Vip Chairs and Tables',
      title: 'VIP CHAIRS',
      description: 'Keep the energy alive with our professional DJ setups and curated playlists.',
      link: '#'
    },
    {
      image: 'assests/pexels-tima-miroshnichenko-6169051.jpg',
      category: 'Transportation',
      title: 'Transportation',
      description: 'Reliable and timely transport for guests, materials, and equipment.',
      link: '#'
    },
    {
      image: 'assests/become-dj.jpg',
      category: 'Events',
      title: 'DJ Events',
      description: 'Keep the energy alive with our professional DJ setups and curated playlists.',
      link: '#'
    },
    {
      image: 'assests/wedding9.webp',
      category: 'Events',
      title: 'Wedding Events',
      description: 'From intimate weddings to grand celebrations — we do it all.',
      link: '#'
    },
  ];

  const projectCards = projects.map(project => `
    <div class="project-card fade-in" data-category="${project.category.toLowerCase()}">
      <img src="${project.image}" alt="${project.title}" class="project-image">
      <div class="project-overlay">
        <span class="project-category">${project.category}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <a href="#contact " class="project-link">Book Yours now <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  `).join('');

  return `
    <section class="section projects" id="projects">
      <div class="container">
        <h2 class="section-title fade-in">Our Projects</h2>
        <p class="section-description fade-in">
          Explore our portfolio of Events that showcase our expertise and attention to detail.
        </p>
        
        <div class="project-filter fade-in">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="events">Events</button>
          <button class="filter-btn" data-filter="ceremony">Ceremony</button>
          <button class="filter-btn" data-filter="transportation">Transportation</button>
          <button class="filter-btn" data-filter="speakers">Speakers</button>
          <button class="filter-btn" data-filter="smart lighting">Smart Lighting</button>
        </div>
        
        <div class="projects-grid">
          ${projectCards}
        </div>
      </div>
      
      <div class="project-modal" id="projectModal">
        <div class="modal-content">
          <button class="modal-close" id="modalClose">
            <i class="fas fa-times"></i>
          </button>
          <img src="" alt="" class="modal-image" id="modalImage">
          <div class="modal-details">
            <span class="modal-category" id="modalCategory"></span>
            <h3 class="modal-title" id="modalTitle"></h3>
            <p class="modal-description" id="modalDescription"></p>
            <div class="modal-specs">
              <div class="spec-item">
                <span class="spec-label">Client</span>
                <span class="spec-value" id="modalClient"></span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Completion Date</span>
                <span class="spec-value" id="modalDate"></span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Services</span>
                <span class="spec-value" id="modalServices"></span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Location</span>
                <span class="spec-value" id="modalLocation"></span>
              </div>
            </div>
            <a href="#" class="btn btn-primary" id="modalLink">View Project</a>
          </div>
        </div>
      </div>
    </section>
  `;
}