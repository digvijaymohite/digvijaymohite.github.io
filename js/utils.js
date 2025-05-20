/**
 * Utility functions for the website
 */

/**
 * Creates an HTML element with specified attributes and classes
 * @param {string} tag - The HTML tag to create
 * @param {Object} options - Options for the element
 * @param {string[]} [options.classes] - CSS classes to add
 * @param {Object} [options.attributes] - HTML attributes to add
 * @param {string|HTMLElement} [options.content] - Content to append
 * @param {function} [options.eventListener] - Event listener to add
 * @returns {HTMLElement} The created element
 */
function createElement(tag, options = {}) {
  const element = document.createElement(tag);
  
  // Add classes
  if (options.classes) {
    options.classes.filter(cls => cls).forEach(cls => element.classList.add(cls));
  }
  
  // Add attributes
  if (options.attributes) {
    Object.entries(options.attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }
  
  // Add content
  if (options.content) {
    if (typeof options.content === 'string') {
      element.innerHTML = options.content;
    } else {
      element.appendChild(options.content);
    }
  }
  
  // Add event listener
  if (options.eventListener) {
    const { event, callback } = options.eventListener;
    element.addEventListener(event, callback);
  }
  
  return element;
}

/**
 * Gets elements by selector
 * @param {string} selector - The CSS selector
 * @param {boolean} all - Whether to get all elements or just one
 * @returns {HTMLElement|HTMLElement[]} The selected element(s)
 */
function $(selector, all = false) {
  return all ? 
    document.querySelectorAll(selector) : 
    document.querySelector(selector);
}

/**
 * Debounce function to limit function calls
 * @param {Function} func - The function to debounce
 * @param {number} wait - The time to wait in milliseconds
 * @returns {Function} The debounced function
 */
function debounce(func, wait) {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Checks if an element is in the viewport
 * @param {HTMLElement} element - The element to check
 * @param {number} offset - Offset to trigger earlier
 * @returns {boolean} Whether the element is in the viewport
 */
function isInViewport(element, offset = 150) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight - offset || document.documentElement.clientHeight - offset) &&
    rect.bottom >= offset
  );
}

/**
 * Gets current year for copyright
 * @returns {number} Current year
 */
function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Formats a date string
 * @param {string} dateStr - The date string to format
 * @returns {string} The formatted date
 */
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Validates an email address
 * @param {string} email - The email to validate
 * @returns {boolean} Whether the email is valid
 */
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/**
 * Displays a notification message
 * @param {string} message - The message to display
 * @param {string} type - The type of notification
 */
function showNotification(message, type = 'success') {
  // Check if notification container exists, create if not
  let notificationContainer = $('.notification-container');
  
  if (!notificationContainer) {
    notificationContainer = createElement('div', {
      classes: ['notification-container']
    });
    document.body.appendChild(notificationContainer);
  }
  
  // Create notification element
  const notification = createElement('div', {
    classes: ['notification', `notification-${type}`],
    content: message
  });
  
  // Add to container
  notificationContainer.appendChild(notification);
  
  // Remove after delay
  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}