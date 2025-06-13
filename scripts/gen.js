const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (modeToggle) modeToggle.checked = true;
  };

window.addEventListener("DOMContentLoaded", () => {
const toTopBtn = document.getElementById("toTopBtn");
const modeToggle = document.getElementById("modeToggle");

if (toTopBtn) {
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
           toTopBtn.style.display = "block";
        } else {
            toTopBtn.style.display = "none";
        }
    };

    toTopBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}



if (modeToggle) {
  modeToggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
}
});

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