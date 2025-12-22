/* =====================================
   HOME JS – NK ENTERPRISES
   HERO SLIDER + COMMON LOGIC
===================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* =====================================
     FIX SECTION HEIGHT (HEADER + FOOTER)
  ===================================== */
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

  setSectionHeight();
  window.addEventListener('resize', setSectionHeight);

  /* =====================================
     HERO SLIDER
  ===================================== */

  const hero = document.querySelector('.hero');
  if (!hero) return; // safety check

  const slides = hero.querySelectorAll('.slide');
  let currentIndex = 0;
  const slideInterval = 6000;
  let autoSlide;

  /* ---------- CREATE DOTS ---------- */
  const dotsWrapper = document.createElement('div');
  dotsWrapper.className = 'hero-dots';

  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = 'dot';
    if (index === 0) dot.classList.add('active');

    dot.addEventListener('click', () => {
      showSlide(index);
      restartAutoSlide();
    });

    dotsWrapper.appendChild(dot);
  });

  hero.appendChild(dotsWrapper);
  const dots = dotsWrapper.querySelectorAll('.dot');

  /* ---------- CREATE ARROWS ---------- */
  const prevBtn = document.createElement('button');
  prevBtn.className = 'hero-arrow prev';
  prevBtn.innerHTML = '&#10094;';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'hero-arrow next';
  nextBtn.innerHTML = '&#10095;';

  hero.appendChild(prevBtn);
  hero.appendChild(nextBtn);

  /* ---------- SLIDE FUNCTIONS ---------- */
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');

    currentIndex = index;
  }

  function nextSlide() {
    let index = currentIndex + 1;
    if (index >= slides.length) index = 0;
    showSlide(index);
  }

  function prevSlide() {
    let index = currentIndex - 1;
    if (index < 0) index = slides.length - 1;
    showSlide(index);
  }

  /* ---------- AUTO SLIDE ---------- */
  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, slideInterval);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  /* ---------- EVENTS ---------- */
  nextBtn.addEventListener('click', () => {
    nextSlide();
    restartAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    restartAutoSlide();
  });

  hero.addEventListener('mouseenter', stopAutoSlide);
  hero.addEventListener('mouseleave', startAutoSlide);

  /* ---------- INIT ---------- */
  showSlide(0);
  startAutoSlide();

});
