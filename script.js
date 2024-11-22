// script.js

// Add event listener to navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
  
  // Add animation to sections on scroll
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
});
  
  // Add fade-in effect to project images
  const projectImages = document.querySelectorAll('.project img');
  window.addEventListener('load', () => {
    projectImages.forEach((image) => {
      image.classList.add('fade-in');
    });
});
  
  // Add button click effect
  document.querySelector('button').addEventListener('click', () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
});