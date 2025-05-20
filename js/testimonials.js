/**
 * Testimonials section functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Render testimonials
  renderTestimonials();
  
  // Render client logos
  renderClientLogos();
  
  // Setup testimonial slider
  setupTestimonialSlider();
});

/**
 * Renders the testimonials slider
 */
function renderTestimonials() {
  const testimonialSlider = document.getElementById('testimonials-slider');
  
  if (!testimonialSlider) return;
  
  // Clear container
  testimonialSlider.innerHTML = '';
  
  // Add testimonials
  testimonialsData.forEach((testimonial, index) => {
    const testimonialElement = createElement('div', {
      classes: ['testimonial', index === 0 ? 'active' : ''],
      attributes: {
        'data-id': testimonial.id
      }
    });
    
    const testimonialQuote = createElement('p', {
      classes: ['testimonial-quote'],
      content: testimonial.text
    });
    
    const testimonialAuthor = createElement('h4', {
      classes: ['testimonial-author'],
      content: testimonial.author
    });
    
    const testimonialRole = createElement('div', {
      classes: ['testimonial-role'],
      content: testimonial.title
    });
    
    testimonialElement.appendChild(testimonialQuote);
    testimonialElement.appendChild(testimonialAuthor);
    testimonialElement.appendChild(testimonialRole);
    
    testimonialSlider.appendChild(testimonialElement);
  });
}

/**
 * Renders the client logos grid
 */
function renderClientLogos() {
  const clientsGrid = document.getElementById('clients-grid');
  
  if (!clientsGrid) return;
  
  // Clear container
  clientsGrid.innerHTML = '';
  
  // Add client logos
  clientsData.forEach(client => {
    const clientLogo = createElement('img', {
      classes: ['client-logo'],
      attributes: {
        src: client.logo,
        alt: client.name
      }
    });
    
    clientsGrid.appendChild(clientLogo);
  });
}

/**
 * Sets up the testimonial slider functionality
 */
function setupTestimonialSlider() {
  const prevButton = document.getElementById('prev-testimonial');
  const nextButton = document.getElementById('next-testimonial');
  const testimonials = document.querySelectorAll('.testimonial');
  
  if (!prevButton || !nextButton || testimonials.length === 0) return;
  
  let currentIndex = 0;
  
  // Show testimonial at index
  function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
      testimonial.classList.remove('active');
    });
    
    // Show current testimonial
    testimonials[index].classList.add('active');
  }
  
  // Previous button click
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });
  
  // Next button click
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });
  
  // Auto-rotate testimonials
  let testimonialInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }, 5000);
  
  // Pause rotation on hover
  const testimonialContainer = document.querySelector('.testimonials-container');
  
  testimonialContainer.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
  });
  
  testimonialContainer.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }, 5000);
  });
}