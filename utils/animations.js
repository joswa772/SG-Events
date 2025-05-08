export function initializeAnimations() {
  // Handle fade-in animations
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  fadeElements.forEach(element => {
    fadeInObserver.observe(element);
  });
  
  // Header scroll effect
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileClose = document.getElementById('mobileClose');
  const navList = document.getElementById('navList');
  
  if (mobileMenuBtn && mobileClose && navList) {
    mobileMenuBtn.addEventListener('click', () => {
      navList.classList.add('active');
    });
    
    mobileClose.addEventListener('click', () => {
      navList.classList.remove('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
      });
    });
  }
  
  // Testimonial carousel
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const indicators = document.querySelectorAll('.indicator');
  
  if (testimonialSlides.length && prevBtn && nextBtn) {
    let currentSlide = 0;
    
    const showSlide = (n) => {
      testimonialSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (indicators[i]) indicators[i].classList.remove('active');
      });
      
      testimonialSlides[n].classList.add('active');
      if (indicators[n]) indicators[n].classList.add('active');
    };
    
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % testimonialSlides.length;
      showSlide(currentSlide);
    };
    
    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
      showSlide(currentSlide);
    };
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });
    
    // Auto slide
    setInterval(nextSlide, 5000);
  }
  
  // Project filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Contact form
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  
  if (contactForm && formMessage) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate form submission
      formMessage.textContent = 'Your message has been sent successfully! We will contact you soon.';
      formMessage.classList.add('success');
      
      // Reset form
      contactForm.reset();
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        formMessage.textContent = '';
        formMessage.classList.remove('success');
      }, 5000);
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Scroll down button
  const scrollDownBtn = document.querySelector('.scroll-down');
  
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', () => {
      const servicesSection = document.getElementById('services');
      
      if (servicesSection) {
        window.scrollTo({
          top: servicesSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  }
}