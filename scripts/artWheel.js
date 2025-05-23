document.addEventListener("DOMContentLoaded", function () {
  const wheel = document.getElementById("artWheel");
  if (!wheel) return;
  const inner = wheel.querySelector('.leftColumnInner');
  const figures = Array.from(inner.children);
  const imgCount = figures.length;

  // Duplicate images = seamless scroll
  figures.forEach(fig => {
    inner.appendChild(fig.cloneNode(true));
  });

  let pos = 0;
  const imgHeight = figures[0].offsetHeight;
  const totalHeight = imgHeight * imgCount;

  let paused = false;

  function animate() {
    if (!paused) {
      pos += 1; // px / frame
      if (pos >= totalHeight) {
        pos = 0;
      }
      inner.style.transform = `translateY(-${pos}px)`;
    }
    requestAnimationFrame(animate);
  }

  wheel.addEventListener('mouseenter', () => { paused = true; });
  wheel.addEventListener('mouseleave', () => { paused = false; });

  animate();
});