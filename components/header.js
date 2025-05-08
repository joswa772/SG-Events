export function renderHeader() {
  return `
    <header class="header" id="header">
      <div class="container header-container">
        <a href="#" class="logo">
          <img src="assests/Screenshot 2025-05-07 104532.png" alt="SG Power Groups Logo" class="logo-img">
          <span>SG</span> Power Groups
        </a>
        
        <button class="mobile-menu-btn" id="mobileMenuBtn">
          <i class="fas fa-bars"></i>
        </button>
        
        <nav class="nav">
          <ul class="nav-list" id="navList">
            <button class="mobile-close hidden-desktop" id="mobileClose">
              <i class="fas fa-times"></i>
            </button>
            <li><a href="#home" class="nav-link active" data-scroll="home">Home</a></li>
            <li><a href="#about" class="nav-link" data-scroll="about">About</a></li>
            <li><a href="#services" class="nav-link" data-scroll="services">Services</a></li>
            <li><a href="#projects" class="nav-link" data-scroll="projects">Projects</a></li>
            <li><a href="#testimonials" class="nav-link" data-scroll="testimonials">Testimonials</a></li>
            <li><a href="#contact" class="nav-link" data-scroll="contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <style>
      @media (min-width: 768px) {
        .hidden-desktop {
          display: none;
        }
      }
    </style>
  `;
}