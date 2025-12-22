/* =====================================
   COMMON JS – NK ENTERPRISES
   Works on ALL pages
===================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     FIX SECTION HEIGHT (HEADER + FOOTER)
  =============================== */
  function setSectionHeight() {
    const header = document.querySelector(".site-header");
    const footer = document.querySelector(".footer");
    const sections = document.querySelectorAll(".section");

    if (!header || !footer || sections.length === 0) return;

    const height =
      window.innerHeight - header.offsetHeight - footer.offsetHeight;

    sections.forEach(section => {
      section.style.minHeight = height + "px";
    });
  }

  /* RUN ON LOAD */
  setSectionHeight();

  /* RUN ON RESIZE */
  window.addEventListener("resize", setSectionHeight);

  /* ===============================
     MOBILE MENU TOGGLE
  =============================== */
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("show");
    });
  }

  /* ===============================
     CLOSE MENU ON LINK CLICK (MOBILE UX)
  =============================== */
  if (mainNav) {
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("show");
      });
    });
  }

});
