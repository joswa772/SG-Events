export function renderHero() {
  return `
    <section class="hero" id="home">
    <video autoplay loop muted playsinline>
    <source src="assests/lv_0_20250508113751.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="hero-content">
    <!-- ...existing hero content... -->
  </div>
      <div class="container hero-content">
        <h1 class="hero-title fade-in">
          Dazzle your new Events with <span>SG Power Groups</span>
        </h1>
        <p class="hero-subtitle fade-in">
          Expert in Event Management and lighting solutions for residential, commercial, and industrial spaces.
        </p>
        <div class="hero-cta fade-in">
          <a href="#services" class="btn btn-secondary">Our Services</a>
          <a href="#contact" class="btn btn-outline">Contact Us</a>
        </div>
      </div>
      
      <div class="light-glow light-glow-1"></div>
      <div class="light-glow light-glow-2"></div>
      
      <a href="#services" class="scroll-down">
        <i class="fas fa-chevron-down"></i>
      </a>
    </section>
  `;
}