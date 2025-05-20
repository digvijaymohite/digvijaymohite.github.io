/**
 * Contact section functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Setup contact form
  setupContactForm();
});

/**
 * Sets up the contact form submission
 */
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    // Validate inputs
    if (!nameInput.value.trim()) {
      showFormError(nameInput, 'Please enter your name');
      return;
    }
    
    if (!emailInput.value.trim()) {
      showFormError(emailInput, 'Please enter your email');
      return;
    }
    
    if (!isValidEmail(emailInput.value.trim())) {
      showFormError(emailInput, 'Please enter a valid email');
      return;
    }
    
    if (!subjectInput.value.trim()) {
      showFormError(subjectInput, 'Please enter a subject');
      return;
    }
    
    if (!messageInput.value.trim()) {
      showFormError(messageInput, 'Please enter a message');
      return;
    }
    
    // Form data
    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim()
    };
    
    // In a real implementation, we would send this data to a server
    // For demo purposes, we'll just show a success message
    console.log('Form submission:', formData);
    
    // Show success message
    showNotification('Message sent successfully! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
  });
}

/**
 * Shows an error for a form field
 * @param {HTMLElement} input - The input element
 * @param {string} message - The error message
 */
function showFormError(input, message) {
  // Get or create error element
  let errorElement = input.parentElement.querySelector('.form-error');
  
  if (!errorElement) {
    errorElement = createElement('div', {
      classes: ['form-error'],
      content: message
    });
    
    input.parentElement.appendChild(errorElement);
  } else {
    errorElement.textContent = message;
  }
  
  // Add error class to input
  input.classList.add('input-error');
  
  // Focus input
  input.focus();
  
  // Remove error after input change
  input.addEventListener('input', () => {
    errorElement.remove();
    input.classList.remove('input-error');
  }, { once: true });
}