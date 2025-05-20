/**
 * Smooth scrolling functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Get all links with hash
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  // Add click event to each link
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Prevent default behavior
      e.preventDefault();
      
      // Get the target section
      const targetId = link.getAttribute('href');
      
      // Skip empty links or just #
      if (!targetId || targetId === '#') return;
      
      const targetSection = document.querySelector(targetId);
      
      // If target exists
      if (targetSection) {
        // Close mobile menu if open
        const navLinks = document.getElementById('nav-links');
        const navToggle = document.getElementById('nav-toggle');
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          navToggle.classList.remove('active');
        }
        
        // Calculate scroll position
        const headerOffset = 0;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        // Perform smooth scroll
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL hash
        history.pushState(null, null, targetId);
        
        // Update active link
        updateActiveLink(targetId);
      }
    });
  });
  
  // Update active link on scroll
  window.addEventListener('scroll', debounce(() => {
    updateActiveNavOnScroll();
  }, 100));
  
  // Initial active link update
  updateActiveNavOnScroll();
});

/**
 * Updates the active link based on scroll position
 */
function updateActiveNavOnScroll() {
  const sections = document.querySelectorAll('section');
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= (sectionTop - 200)) {
      currentSection = '#' + section.getAttribute('id');
    }
  });
  
  if (currentSection !== '') {
    updateActiveLink(currentSection);
  }
}

/**
 * Updates the active navigation link
 * @param {string} sectionId - The ID of the active section
 */
function updateActiveLink(sectionId) {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === sectionId) {
      link.classList.add('active');
    }
  });
}