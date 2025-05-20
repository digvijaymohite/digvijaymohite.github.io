/**
 * Animations for the website
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize animation observer
  initAnimations();
  
  // Update animations on scroll
  window.addEventListener('scroll', debounce(() => {
    animateOnScroll();
  }, 50));
  
  // Initial animation check
  animateOnScroll();
  
  // Initialize typing animation if applicable
  initTypingAnimation();
});

/**
 * Initialize animations
 */
function initAnimations() {
  // Add animation classes to timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    // Stagger animation delay
    const delay = 200 + (index * 100);
    item.style.transitionDelay = `${delay}ms`;
  });
  
  // Add animation to skill level bars
  const skillBars = document.querySelectorAll('.skill-level-bar');
  skillBars.forEach(bar => {
    const level = bar.getAttribute('data-level');
    bar.style.setProperty('--level', `${level}%`);
  });
}

/**
 * Animate elements when they enter the viewport
 */
function animateOnScroll() {
  // Animate elements with animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
  
  animatedElements.forEach(element => {
    if (isInViewport(element)) {
      // Add animated class
      element.classList.add('animated');
      
      // Apply animation delay if specified
      const delay = element.getAttribute('data-delay');
      if (delay) {
        element.style.animationDelay = `${delay}ms`;
      }
    }
  });
  
  // Animate timeline items
  const timelineItems = document.querySelectorAll('.timeline-item:not(.visible)');
  timelineItems.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('visible');
    }
  });
}

/**
 * Initialize typing animation
 */
function initTypingAnimation() {
  const typingElements = document.querySelectorAll('[data-typing]');
  
  typingElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    element.classList.add('typing-animation');
    
    let charIndex = 0;
    const typingSpeed = 100; // ms per character
    
    function typeChar() {
      if (charIndex < text.length) {
        element.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, typingSpeed);
      }
    }
    
    // Start typing after a delay
    setTimeout(typeChar, 500);
  });
}

/**
 * Add a parallax effect to an element
 * @param {HTMLElement} element - The element to add parallax to
 * @param {number} speed - The parallax speed factor
 */
function addParallaxEffect(element, speed = 0.5) {
  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset;
    element.style.transform = `translateY(${scrollPos * speed}px)`;
  });
}

/**
 * Add hover animation to a collection of elements
 * @param {NodeList} elements - The elements to animate
 * @param {string} animation - The animation class to add
 */
function addHoverAnimation(elements, animation) {
  elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.classList.add(animation);
    });
    
    element.addEventListener('mouseleave', () => {
      element.classList.remove(animation);
      
      // Force repaint to reset animation
      void element.offsetWidth;
    });
  });
}