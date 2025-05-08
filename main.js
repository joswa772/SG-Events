import { renderHeader } from './components/header.js';
import { renderHero } from './components/hero.js';
import { renderServices } from './components/services.js';
import { renderProjects } from './components/projects.js';
import { renderTestimonials } from './components/testimonials.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';
import { initializeAnimations } from './utils/animations.js';
import { setupScrollSpy } from './utils/scrollspy.js';
import { renderAbout } from './components/about.js';



document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  
  // Render all sections
  app.innerHTML = `
    ${renderHeader()}
    <main>
      ${renderHero()}
      ${renderAbout()}
      ${renderServices()}
      ${renderProjects()}
      ${renderTestimonials()}
      ${renderContact()}
    </main>
    ${renderFooter()}
  `;
  
  // Initialize animations and interactive elements
  initializeAnimations();
  setupScrollSpy();
});