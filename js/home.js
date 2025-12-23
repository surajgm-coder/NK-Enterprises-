const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");

  current = (current + 1) % slides.length;

  slides[current].classList.add("active");
  dots[current].classList.add("active");
}, 5000);
