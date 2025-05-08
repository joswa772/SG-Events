export function renderContact() {
  return `
    <section class="section contact" id="contact">
      <div class="contact-decoration decoration-1"></div>
      <div class="contact-decoration decoration-2"></div>
      
      <div class="container">
        <h2 class="section-title fade-in">Get In Touch</h2>
        <p class="section-description fade-in">
          Have a question or need a quote? Contact us today and our team will get back to you as soon as possible.
        </p>
        
        <div class="contact-container">
          <div class="contact-info fade-in">
            <div>
              <h3 class="contact-heading">Contact Information</h3>
              <p class="contact-subheading">Feel free to reach out to us using any of the contact methods below.</p>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <div class="contact-label">Our Location</div>
                <div class="contact-value">South Street, Illayarasenanthal, Kovilpatti Taluk, Thoothukkudi District, Tamil Nadu 627713, India</div>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div>
                <div class="contact-label">Phone Number</div>
                <div class="contact-value">
                  <a href="tel: +918220478278"> +918220478278 , 9094974655, 8825586172, 9944813641, 8220478278</a>
                </div>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <div class="contact-label">Email Address</div>
                <div class="contact-value">
                  <a href="mailto:isgaudio1986@gmail.com">sgaudio1986@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div>
                <div class="contact-label">Business Hours</div>
                <div class="contact-value">
                  Monday - Friday: 9am - 6pm<br>
                  Saturday: 10am - 4pm<br>
                  Sunday: Working Day
                </div>
              </div>
            </div>
            
            <div class="social-media">
              <a href="#" class="social-link">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <form class="contact-form fade-in" id="contactForm">
            <div class="form-group">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" id="name" class="form-control" placeholder="Your Name" required>
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" id="email" class="form-control" placeholder="mail@example.com" required>
            </div>
            
            <div class="form-group">
              <label for="phone" class="form-label">Phone Number</label>
              <input type="tel" id="phone" class="form-control" placeholder="+91 1234567891" required>
            </div>
            
            <div class="form-group">
              <label for="subject" class="form-label">Subject</label>
              <input type="text" id="subject" class="form-control" placeholder="Service: VIP Chairs " required>    
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">Your Message</label>
              <textarea id="message" class="form-control" placeholder="How can we help you?" required></textarea>
            </div>
            
            <button type="submit" class="submit-btn">Send Message</button>
            
            <div class="form-message" id="formMessage"></div>
          </form>
        </div>
      </div>
    </section>
  `;
}