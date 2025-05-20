/**
 * Certifications section functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Render certifications
  renderCertifications();
});

/**
 * Renders the certifications grid
 */
function renderCertifications() {
  const certificationsGrid = document.getElementById('certifications-grid');
  
  if (!certificationsGrid) return;
  
  // Clear container
  certificationsGrid.innerHTML = '';
  
  // Add certifications
  certificationsData.forEach((certification, index) => {
    const certificationCard = createElement('div', {
      classes: ['certification-card', 'animate-on-scroll'],
      attributes: {
        'data-animation': 'fade-up',
        'data-delay': `${index * 100}`
      }
    });
    
    const certificationLogo = createElement('img', {
      classes: ['certification-logo'],
      attributes: {
        src: certification.logo,
        alt: certification.name
      }
    });
    
    const certificationInfo = createElement('div', {
      classes: ['certification-info']
    });
    
    const certificationName = createElement('h3', {
      classes: ['certification-name'],
      content: certification.name
    });
    
    const certificationIssuer = createElement('div', {
      classes: ['certification-issuer'],
      content: certification.issuer
    });
    
    const certificationDate = createElement('div', {
      classes: ['certification-date'],
      content: certification.date
    });
    
    certificationInfo.appendChild(certificationName);
    certificationInfo.appendChild(certificationIssuer);
    certificationInfo.appendChild(certificationDate);
    
    certificationCard.appendChild(certificationLogo);
    certificationCard.appendChild(certificationInfo);
    
    certificationsGrid.appendChild(certificationCard);
  });
}