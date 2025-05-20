/**
 * Main JavaScript file
 * Initializes all components and handles general functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('current-year').textContent = getCurrentYear();
  
  // Initialize scroll animations
  initAnimations();
  
  // Check for URL hash and scroll to section
  if (window.location.hash) {
    const targetSection = document.querySelector(window.location.hash);
    if (targetSection) {
      setTimeout(() => {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }, 500);
    }
  }
  
  // Add notification container
  addNotificationContainer();
  
  // Create style for notifications
  addNotificationStyles();
  
  // Add pulse animation to CTA button
  addPulseToCTA();
});

/**
 * Adds a notification container to the document
 */
function addNotificationContainer() {
  const notificationContainer = createElement('div', {
    classes: ['notification-container']
  });
  
  document.body.appendChild(notificationContainer);
}

/**
 * Adds notification styles to the document
 */
function addNotificationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .notification-container {
      position: fixed;
      top: 2rem;
      right: 2rem;
      z-index: 9999;
    }
    
    .notification {
      background-color: var(--color-success);
      color: white;
      padding: 1.2rem 2rem;
      margin-bottom: 1rem;
      border-radius: var(--border-radius);
      box-shadow: var(--shadow-md);
      animation: slideIn 0.3s ease-out;
      max-width: 32rem;
    }
    
    .notification-error {
      background-color: var(--color-error);
    }
    
    .notification-warning {
      background-color: var(--color-warning);
    }
    
    .notification.fade-out {
      animation: slideOut 0.3s ease-in forwards;
    }
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes slideOut {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(100%);
      }
    }
    
    .form-error {
      color: var(--color-error);
      font-size: var(--text-sm);
      margin-top: 0.4rem;
    }
    
    .input-error {
      border-color: var(--color-error) !important;
    }
    
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(0, 112, 243, 0.7);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(0, 112, 243, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(0, 112, 243, 0);
      }
    }
    
    .pulse {
      animation: pulse 2s infinite;
    }
  `;
  
  document.head.appendChild(style);
}

/**
 * Adds pulse animation to CTA button
 */
function addPulseToCTA() {
  const ctaButton = document.querySelector('.cta-section .btn-primary');
  
  if (ctaButton) {
    ctaButton.classList.add('pulse');
  }
}