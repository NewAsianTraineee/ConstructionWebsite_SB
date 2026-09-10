/* ============================================================
   navigation.js – mobilmeny, stäng vid klick/esc och aktiv länk.
   ============================================================ */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav__toggle");
  var nav = document.getElementById("primary-nav");

  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Stäng menyn" : "Öppna menyn");
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });

  /* Stäng menyn när en länk klickas (mobil) */
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  /* Scrollspy för aktiva sektioner (endast startsidan) */
  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  if (!links.length) return;

  var sections = links
    .map(function (a) {
      return document.getElementById(a.getAttribute("href").slice(1));
    })
    .filter(Boolean);

  if (!sections.length) return;

  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var pos = window.scrollY + 120;
      var current = null;
      sections.forEach(function (sec) {
        if (sec.offsetTop <= pos) current = sec;
      });
      links.forEach(function (a) {
        var id = a.getAttribute("href").slice(1);
        a.classList.toggle("is-active", current && id === current.id);
      });
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();