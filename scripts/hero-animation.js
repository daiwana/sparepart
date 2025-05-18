const heroSection = document.querySelector('.hero-section');
const overlay = document.querySelector('.overlay');
const title = overlay.querySelector('h1');
const subtitle = overlay.querySelector('p');
const button = overlay.querySelector('a');

// Initial styles for animation
overlay.style.opacity = 0;
title.style.transform = 'translateY(-50px)';
subtitle.style.transform = 'translateY(-50px)';
button.style.transform = 'translateY(50px)';
heroSection.classList.remove('bg-animate'); // Pastikan animasi bisa diulang jika perlu

// Function to animate the hero section
function animateHeroSection() {
  // Tambahkan animasi background
  heroSection.classList.add('bg-animate');

  overlay.style.transition = 'opacity 1s ease, transform 0.5s ease';
  overlay.style.opacity = 1;

  setTimeout(() => {
    title.style.transform = 'translateY(0)';
    subtitle.style.transform = 'translateY(0)';
    button.style.transform = 'translateY(0)';
  }, 100); // Delay for title and subtitle animation
}

// Trigger the animation on page load
window.addEventListener('load', animateHeroSection);