document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger');
  const navBar = document.querySelector('.navBar');
  if (hamburger && navBar) {
    hamburger.addEventListener('click', function () {
      navBar.classList.toggle('open');
      hamburger.classList.toggle('open');
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
    });
    navBar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navBar.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
});