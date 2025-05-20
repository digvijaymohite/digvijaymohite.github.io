/**
 * Projects section functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Render projects
  renderProjects();
});

/**
 * Renders the projects section
 */
function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  
  if (!projectsGrid) return;
  
  // Clear container
  projectsGrid.innerHTML = '';
  
  // Add projects
  projectsData.forEach((project, index) => {
    const projectCard = createElement('div', {
      classes: ['project-card', 'animate-on-scroll'],
      attributes: {
        'data-animation': 'fade-up',
        'data-delay': `${index * 100}`,
        'data-category': project.category
      }
    });
    
    const projectContent = createElement('div', {
      classes: ['project-content']
    });
    
    const projectTitle = createElement('h3', {
      classes: ['project-title'],
      content: project.title
    });
    
    const projectDesc = createElement('p', {
      classes: ['project-desc'],
      content: project.description
    });
    
    const projectTech = createElement('div', {
      classes: ['project-tech']
    });
    
    // Add technology tags
    project.technologies.forEach(tech => {
      const techTag = createElement('span', {
        classes: ['tech-tag'],
        content: tech
      });
      
      projectTech.appendChild(techTag);
    });
    
    projectContent.appendChild(projectTitle);
    projectContent.appendChild(projectDesc);
    projectContent.appendChild(projectTech);
    
    projectCard.appendChild(projectContent);
    
    projectsGrid.appendChild(projectCard);
  });
}