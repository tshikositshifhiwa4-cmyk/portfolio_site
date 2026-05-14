// Scroll reveal animation with IntersectionObserver
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// Skill bar animation
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar__fill').forEach(fill => {
        fill.classList.add('animate');
        fill.style.transform = `scaleX(${fill.style.getPropertyValue('--w') || 1})`;
      });
      skillObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
const skillList = document.getElementById('skillList');
if (skillList) skillObserver.observe(skillList);

// Sticky navbar shadow on scroll
window.addEventListener('scroll', () => {
  document.getElementById('nav').style.boxShadow =
    window.scrollY > 40 ? '0 4px 32px rgba(0,0,0,0.45)' : 'none';
});

// Stagger card reveals
document.querySelectorAll('.caps__grid .cap-card, .projects__grid .proj-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.08}s`;
});

