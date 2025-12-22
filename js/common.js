/* =====================================
   COMMON JS – NK ENTERPRISES
   Works on ALL pages
===================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     FIX SECTION HEIGHT (HEADER + FOOTER)
     Ensures sections fit between header & footer
  =============================== */
  function setSectionHeight() {
    const header = document.querySelector(".site-header");
    const footer = document.querySelector(".site-footer");
    const sections = document.querySelectorAll(".section");

    // Safety check
    if (!header || !footer || sections.length === 0) return;

    const availableHeight =
      window.innerHeight - header.offsetHeight - footer.offsetHeight;

    sections.forEach(section => {
      section.style.minHeight = availableHeight + "px";
    });
  }

  /* RUN ON INITIAL LOAD */
  setSectionHeight();

  /* RUN ON WINDOW RESIZE */
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
     CLOSE MOBILE MENU AFTER CLICK
     (Better UX)
  =============================== */
  if (mainNav) {
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("show");
      });
    });
  }

});
