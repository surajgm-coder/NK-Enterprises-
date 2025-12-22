/* =====================================
   COMMON JS – NK ENTERPRISES
   Works on ALL pages
===================================== */

/* FIX SECTION HEIGHT (HEADER + FOOTER) */
function setSectionHeight() {
  const header = document.querySelector('.header');
  const footer = document.querySelector('.footer');
  const sections = document.querySelectorAll('.section');

  if (!header || !footer) return;

  const height =
    window.innerHeight - header.offsetHeight - footer.offsetHeight;

  sections.forEach(section => {
    section.style.height = height + 'px';
  });
}

/* RUN ON LOAD */
window.addEventListener('load', setSectionHeight);

/* RUN ON RESIZE */
window.addEventListener('resize', setSectionHeight);
