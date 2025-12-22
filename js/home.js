/* =========================
   HERO SLIDER – NK ENTERPRISES
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dots .dot");
  const nextBtn = document.querySelector(".hero-arrow.next");
  const prevBtn = document.querySelector(".hero-arrow.prev");

  let currentIndex = 0;
  const intervalTime = 6000;
  let autoSlide;

  // Show slide
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
  }

  // Next slide
  function nextSlide() {
    let index = currentIndex + 1;
    if (index >= slides.length) index = 0;
    showSlide(index);
  }

  // Previous slide
  function prevSlide() {
    let index = currentIndex - 1;
    if (index < 0) index = slides.length - 1;
    showSlide(index);
  }

  // Auto slide
  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, intervalTime);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  // Arrow events
  nextBtn.addEventListener("click", () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      stopAutoSlide();
      startAutoSlide();
    });
  });

  // Init
  showSlide(0);
  startAutoSlide();

});
