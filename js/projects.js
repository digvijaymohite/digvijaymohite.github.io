/**
 * Projects section functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Render projects
  renderProjects();

  // Setup read more functionality
  setupReadMore();
});

/**
 * Renders the projects grid
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

    const projectLinks = createElement('div', {
      classes: ['project-links']
    });

    const readMore = createElement('span', {
      classes: ['read-more'],
      content: 'Read More'
    });

    projectLinks.appendChild(readMore);

    // Add URL if present
    if (project.url) {
      const projectUrl = createElement('a', {
        classes: ['project-url'],
        content: '<i class="fas fa-external-link-alt"></i> View Project',
        attributes: {
          href: project.url,
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      });
      projectLinks.appendChild(projectUrl);
    }

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
    projectContent.appendChild(projectLinks);
    projectContent.appendChild(projectTech);

    projectCard.appendChild(projectContent);

    projectsGrid.appendChild(projectCard);

    // Check if content overflows and show/hide read more accordingly
    setTimeout(() => {
      if (projectDesc.scrollHeight <= projectDesc.clientHeight) {
        readMore.style.display = 'none';
      }
    }, 0);
  });
}

/**
 * Sets up read more functionality for project descriptions
 */
function setupReadMore() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('read-more')) {
      const desc = e.target.closest('.project-content').querySelector('.project-desc');
      desc.classList.toggle('expanded');
      e.target.textContent = desc.classList.contains('expanded') ? 'Read Less' : 'Read More';
    }
  });

  // Reset expanded state when mouse leaves card
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseleave', () => {
      const desc = card.querySelector('.project-desc');
      const readMore = card.querySelector('.read-more');
      if (desc && desc.classList.contains('expanded')) {
        desc.classList.remove('expanded');
        if (readMore) {
          readMore.textContent = 'Read More';
        }
      }
    });
  });
}
