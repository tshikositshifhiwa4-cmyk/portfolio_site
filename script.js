// Carousel functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.project-card'));
const dotsContainer = document.querySelector('.carousel-dots');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentSlide = 0;

// Create dots
function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
}

// Update dots
function updateDots() {
  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

// Go to slide
function goToSlide(n) {
  currentSlide = (n + slides.length) % slides.length;
  const offset = currentSlide * (100 + 2); // 100% width + 2rem gap
  track.style.transform = `translateX(-${offset}%)`;
  updateDots();
}

// Next slide
function nextSlide() {
  goToSlide(currentSlide + 1);
}

// Previous slide
function prevSlide() {
  goToSlide(currentSlide - 1);
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// Auto-advance slides every 8 seconds
setInterval(nextSlide, 8000);

// Initialize
createDots();

// Smooth scroll on nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
