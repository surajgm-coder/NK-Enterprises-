document.addEventListener("DOMContentLoaded", () => {

  /* SECTION HEIGHT */
  function setSectionHeight() {
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const sections = document.querySelectorAll('.section');

    const height =
      window.innerHeight - header.offsetHeight - footer.offsetHeight;

    sections.forEach(section => {
      section.style.height = height + 'px';
    });
  }

  setSectionHeight();
  window.addEventListener('resize', setSectionHeight);

  /* HERO SLIDER */
  const hero = document.querySelector('.hero');
  const slides = hero.querySelectorAll('.slide');
  let index = 0;

  const dotsWrapper = document.createElement('div');
  dotsWrapper.className = 'hero-dots';

  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => showSlide(i);
    dotsWrapper.appendChild(dot);
  });

  hero.appendChild(dotsWrapper);
  const dots = dotsWrapper.querySelectorAll('.dot');

  function showSlide(i) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[i].classList.add('active');
    dots[i].classList.add('active');
    index = i;
  }

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 6000);

});
