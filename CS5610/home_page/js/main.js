// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Active navigation link updating
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop - 100 &&
      window.scrollY < sectionTop + sectionHeight - 100
    ) {
      navLinks.forEach((link) => {
        if (link.getAttribute('href').includes(section.id)) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
});
