/* ================================
   COMMON JS – NK Enterprises
   Used on ALL pages
================================ */

// HEADER + FOOTER HEIGHT CALCULATION
function setSectionHeight() {
  const header = document.querySelector('.header');
  const footer = document.querySelector('.footer');
  const sections = document.querySelectorAll('.section');

  if (!header || !footer) return;

  const availableHeight =
    window.innerHeight - header.offsetHeight - footer.offsetHeight;

  sections.forEach(section => {
    section.style.height = `${availableHeight}px`;
  });
}

// RUN ON LOAD
window.addEventListener('load', setSectionHeight);

// RUN ON RESIZE
window.addEventListener('resize', setSectionHeight);

/* ================================
   SMOOTH SECTION SCROLL (OPTIONAL)
================================ */

let isScrolling = false;

window.addEventListener('wheel', (e) => {
  if (isScrolling) return;

  const sections = [...document.querySelectorAll('.section')];
  const currentScroll = window.scrollY;

  const currentIndex = sections.findIndex(sec =>
    sec.offsetTop >= currentScroll - 10
  );

  if (currentIndex === -1) return;

  let targetIndex = currentIndex;

  if (e.deltaY > 0 && currentIndex < sections.length - 1) {
    targetIndex++;
  } else if (e.deltaY < 0 && currentIndex > 0) {
    targetIndex--;
  }

  if (targetIndex !== currentIndex) {
    isScrolling = true;
    sections[targetIndex].scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      isScrolling = false;
    }, 800);
  }
});

/* ================================
   MOBILE SAFETY (NO SCROLL LOCK)
================================ */

if (window.innerWidth < 768) {
  isScrolling = true;
}
