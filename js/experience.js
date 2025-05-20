/**
 * Experience section functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Render experience timeline
  renderExperience();
});

/**
 * Renders the experience timeline
 */
function renderExperience() {
  const timelineContainer = document.getElementById('experience-timeline');
  
  if (!timelineContainer) return;
  
  // Clear container
  timelineContainer.innerHTML = '';
  
  // Add experience items
  experienceData.forEach((experience, index) => {
    const timelineItem = createElement('div', {
      classes: ['timeline-item'],
      attributes: {
        'data-id': experience.id
      }
    });
    
    const timelineContent = createElement('div', {
      classes: ['timeline-content']
    });
    
    const timelineDate = createElement('div', {
      classes: ['timeline-date'],
      content: experience.period
    });
    
    const timelineRole = createElement('h3', {
      classes: ['timeline-role'],
      content: experience.role
    });
    
    const timelineCompany = createElement('div', {
      classes: ['timeline-company'],
      content: experience.company
    });
    
    const timelineDesc = createElement('p', {
      classes: ['timeline-desc'],
      content: experience.description
    });
    
    timelineContent.appendChild(timelineDate);
    timelineContent.appendChild(timelineRole);
    timelineContent.appendChild(timelineCompany);
    timelineContent.appendChild(timelineDesc);
    
    timelineItem.appendChild(timelineContent);
    
    timelineContainer.appendChild(timelineItem);
  });
}