/**
 * Navigation functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Get navigation elements
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  
  // Toggle navigation menu
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close nav menu when clicking outside
  document.addEventListener('click', (e) => {
    const isClickInside = navToggle.contains(e.target) || navLinks.contains(e.target);
    
    if (!isClickInside && navLinks.classList.contains('active')) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
  
  // Close nav menu when link is clicked
  const navigationLinks = document.querySelectorAll('.nav-link');
  navigationLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // Add scroll event for navigation highlighting
  window.addEventListener('scroll', debounce(highlightNavOnScroll, 100));
  
  // Initial highlight
  highlightNavOnScroll();
});

/**
 * Highlights the navigation link for the current section
 */
function highlightNavOnScroll() {
  // Get all sections
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Get current scroll position
  const scrollY = window.pageYOffset;
  
  // Find current section
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Remove active class from all links
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      
      // Add active class to current link
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
  
  // Handle special case for the top of the page
  if (scrollY < 100) {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    const homeLink = document.querySelector('.nav-link[href="#hero"]');
    if (homeLink) {
      homeLink.classList.add('active');
    }
  }
}