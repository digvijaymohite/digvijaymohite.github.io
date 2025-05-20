/**
 * Services section functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Render services
  renderServices();
});

/**
 * Renders the services grid
 */
function renderServices() {
  const servicesGrid = document.getElementById('services-grid');
  
  if (!servicesGrid) return;
  
  // Clear container
  servicesGrid.innerHTML = '';
  
  // Add services
  servicesData.forEach((service, index) => {
    const serviceCard = createElement('div', {
      classes: ['service-card', 'card', 'animate-on-scroll'],
      attributes: {
        'data-animation': 'fade-up',
        'data-delay': `${index * 100}`
      }
    });
    
    const serviceIcon = createElement('div', {
      classes: ['service-icon'],
      content: `<i class="${service.icon}"></i>`
    });
    
    const serviceTitle = createElement('h3', {
      classes: ['service-title'],
      content: service.title
    });
    
    const serviceDesc = createElement('p', {
      classes: ['service-desc'],
      content: service.description
    });
    
    serviceCard.appendChild(serviceIcon);
    serviceCard.appendChild(serviceTitle);
    serviceCard.appendChild(serviceDesc);
    
    servicesGrid.appendChild(serviceCard);
  });
}