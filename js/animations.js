/* ============================================================
   animations.js – skonsamma scroll-reveals med IntersectionObserver.
   Respekterar prefers-reduced-motion (faller tillbaka på CSS).
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var items = document.querySelectorAll("[data-reveal]");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach(function (el2) {
      el2.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach(function (el2) {
    /* Försöker undvika reveal för element som redan är i vy */
    observer.observe(el2);
  });
})();