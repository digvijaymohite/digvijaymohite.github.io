/**
 * Skills section functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Render skills
  renderSkills();
  
  // Animate skill bars when visible
  window.addEventListener('scroll', debounce(() => {
    animateSkillBars();
  }, 100));
  
  // Initial animation check
  animateSkillBars();
});

/**
 * Renders the skills section
 */
function renderSkills() {
  const skillsContainer = document.getElementById('skills-container');
  
  if (!skillsContainer) return;
  
  // Clear container
  skillsContainer.innerHTML = '';
  
  // Add skills
  skillsData.forEach(skill => {
    const skillCard = createElement('div', {
      classes: ['skill-card', 'animate-on-scroll'],
      attributes: {
        'data-animation': 'fade-up',
        'data-category': skill.category
      }
    });
    
    const skillIcon = createElement('div', {
      classes: ['skill-icon'],
      content: `<i class="${skill.icon}"></i>`
    });
    
    const skillName = createElement('h3', {
      classes: ['skill-name'],
      content: skill.name
    });
    
    const skillLevel = createElement('div', {
      classes: ['skill-level']
    });
    
    const skillLevelBar = createElement('div', {
      classes: ['skill-level-bar'],
      attributes: {
        'data-level': skill.level
      }
    });
    
    skillLevel.appendChild(skillLevelBar);
    skillCard.appendChild(skillIcon);
    skillCard.appendChild(skillName);
    skillCard.appendChild(skillLevel);
    
    skillsContainer.appendChild(skillCard);
  });
}

/**
 * Animates the skill level bars when they come into view
 */
function animateSkillBars() {
  const skillCards = document.querySelectorAll('.skill-card');
  
  skillCards.forEach(card => {
    if (isInViewport(card)) {
      const skillBar = card.querySelector('.skill-level-bar');
      const level = skillBar.getAttribute('data-level');
      
      skillBar.style.width = `${level}%`;
    }
  });
}