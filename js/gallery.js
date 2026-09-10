/* ============================================================
   gallery.js – ljusbild (lightbox) för galleri + projektbilder.
   Anropbara via window.Lightbox.open(items, index).
   ============================================================ */
(function () {
  "use strict";

  var box = document.getElementById("lightbox");
  var boxImg = box && box.querySelector("img");
  var closeBtn = box && box.querySelector(".lightbox__close");
  var counter = document.getElementById("lightbox-counter");

  var items = [];
  var index = 0;

  function render() {
    if (!box || !items.length) return;
    boxImg.src = items[index].src;
    boxImg.alt = items[index].alt || "";
    if (counter) counter.textContent = index + 1 + " / " + items.length;
  }

  function open(list, startIndex) {
    items = list || [];
    index = Math.min(Math.max(0, startIndex || 0), Math.max(items.length - 1, 0));
    if (!items.length) return;
    render();
    if (box.hidden) box.hidden = false;
    requestAnimationFrame(function () {
      box.classList.add("is-open");
    });
    document.body.style.overflow = "hidden";
  }

  function close() {
    if (!box) return;
    box.classList.remove("is-open");
    document.body.style.overflow = "";
    /* Döljer efter fade-out */
    setTimeout(function () {
      if (!box.classList.contains("is-open")) box.hidden = true;
    }, 260);
  }

  function step(dir) {
    if (!items.length) return;
    index = (index + dir + items.length) % items.length;
    render();
  }

  if (box && closeBtn) {
    closeBtn.addEventListener("click", close);
    box.addEventListener("click", function (e) {
      if (e.target === box) close();
    });
    document.addEventListener("keydown", function (e) {
      if (box.hidden || !box.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    });
  }

  window.Lightbox = { open: open, close: close, step: step };
})();