/* ============================================================
   projects.js – renderar tjänster, projekt, galleri och före/efter
   på startsidan (index.html) samt projekt-detailsidan (project.html).

   Användande: project.html?slug=koksrenovering
   ============================================================ */
(function () {
  "use strict";

  var S = window.SERVICES || [];
  var P = window.PROJECTS || [];
  var G = window.GALLERY || [];
  var C = window.COMPANY || {};
  var el = window.Utils ? window.Utils.el : function (s) { return document.querySelector(s); };

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ============ Förstasidan: tjänster ============ */
  function renderServices() {
    var grid = el("#services-grid");
    if (!grid) return;

    grid.innerHTML = S.map(function (s, i) {
      return (
        '<article class="service-card">' +
        '<div class="service-card__media">' +
        '<img src="' + esc(s.image) + '" alt="' + esc(s.title) + ': ' + esc(s.short) + '" loading="lazy" />' +
        "</div>" +
        '<div class="service-card__body">' +
        '<span class="service-card__num">' + String(i + 1).padStart(2, "0") + "</span>" +
        "<h3>" + esc(s.title) + "</h3>" +
        "<p>" + esc(s.short) + "</p>" +
        '<a class="service-card__link" href="#offert?type=' + encodeURIComponent(s.slug) + '">' +
        "Be om offert" +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>' +
        "</a>" +
        "</div>" +
        "</article>"
      );
    }).join("");
  }

  /* ============ Förstasidan: projektkort ============ */
  function renderProjects() {
    var grid = el("#projects-grid");
    if (!grid) return;

    grid.innerHTML = P.map(function (p) {
      return (
        '<a class="project-card" href="project.html?slug=' + encodeURIComponent(p.slug) + '">' +
        '<div class="project-card__media">' +
        '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy" />' +
        '<span class="project-card__tag">' + esc(p.category) + "</span>" +
        "</div>" +
        '<div class="project-card__body">' +
        "<h3>" + esc(p.title) + "</h3>" +
        '<span class="project-card__loc">' + esc(p.location) + "</span>" +
        "<p>" + esc(p.summary) + "</p>" +
        '<span class="project-card__link">Se projektet' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>' +
        "</span>" +
        "</div>" +
        "</a>"
      );
    }).join("");
  }

  /* ============ Förstasidan: galleri ============ */
  function renderGallery() {
    var grid = el("#gallery-grid");
    if (!grid || !window.Lightbox) return;

    grid.innerHTML = G.map(function (img, i) {
      return (
        '<button type="button" class="gallery__item" data-index="' + i + '" aria-label="Förstora: ' + esc(img.alt) + '">' +
        '<img src="' + esc(img.src) + '" alt="' + esc(img.alt) + '" loading="lazy" />' +
        "</button>"
      );
    }).join("");

    grid.addEventListener("click", function (e) {
      var btn = e.target.closest(".gallery__item");
      if (btn) window.Lightbox.open(G, Number(btn.dataset.index));
    });
  }

  /* ============ Före / efter-slider ============ */
  function initBeforeAfter(config) {
    var ba = el("#ba-slider");
    var range = el("#ba-range");
    if (!ba || !range || !window.COMPANY) return;

    var beforeImg = ba.querySelector(".ba__img");
    var afterImg = ba.querySelector(".ba__after img");
    var note = el("#ba-note");
    var baTitle = document.getElementById("ba-title");

    function setPos(pct) {
      pct = Math.max(0, Math.min(100, pct));
      ba.style.setProperty("--pos", pct + "%");
      range.value = String(Math.round(pct));
    }

    range.addEventListener("input", function () {
      ba.style.setProperty("--pos", range.value + "%");
    });

    function fromPointer(e) {
      var r = ba.getBoundingClientRect();
      var x = e.clientX - r.left;
      setPos((x / r.width) * 100);
    }

    var dragging = false;

    ba.addEventListener("pointerdown", function (e) {
      dragging = true;
      ba.setPointerCapture(e.pointerId);
      fromPointer(e);
      e.preventDefault();
    });

    ba.addEventListener("pointermove", function (e) {
      if (dragging) fromPointer(e);
    });

    ba.addEventListener("pointerup", function () {
      dragging = false;
    });

    ba.addEventListener("pointercancel", function () {
      dragging = false;
    });

    /* Första projektet som har före/efter-bilder visas här */
    var feature = P.find(function (p) { return p && p.beforeAfter; });
    if (!feature) return;

    if (baTitle) baTitle.textContent = feature.beforeAfter.title || "Före & efter";
    beforeImg.src = feature.beforeAfter.before;
    beforeImg.alt = "Bilden av arbete i före-skedet: " + feature.title;
    afterImg.src = feature.beforeAfter.after;
    afterImg.alt = "Den färdiga lösningen: " + feature.title;
    if (note) note.textContent = feature.beforeAfter.note || "";

    setPos(50);
  }

  /* ============ Detaljsida: projekt ============ */
  function renderProjectPage() {
    var root = el("#project-root");
    if (!root) return;

    var params = new URLSearchParams(window.location.search);
    var slug = params.get("slug");
    var project = P.find(function (p) { return p.slug === slug; });

    if (!project) {
      root.innerHTML =
        '<section class="not-found container" style="padding-top:2rem">' +
        "<h1>Projektet hittades inte</h1>" +
        "<p>Projektet kanske är borttaget, eller så finns det inte längre.</p>" +
        '<a class="btn btn--solid" href="index.html#projekt">Tillbaka till projekten</a>' +
        "</section>";
      document.title = "Projektet hittades inte – Storvik Bygg";
      return;
    }

    /* Meta */
    document.title = project.title + " – Storvik Bygg";
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", project.summary);
    var ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", project.image);

    /* Galleribilder: huvudbild + extra */
    var slides = [{ src: project.image, alt: project.title }].concat(
      (project.gallery || []).map(function (src, i) {
        return { src: src, alt: "Bild " + (i + 1) + " från " + project.title };
      })
    );

    var media =
      '<div class="project-detail__media">' +
      '<img src="' + esc(project.image) + '" alt="' + esc(project.title) + '" width="1200" height="750" />' +
      "</div>";

    var body =
      '<div class="project-detail__body">' +
      "<h2>Om projektet</h2>" +
      "<p>" + esc(project.description) + "</p>" +
      "<h2>Det här ingick</h2>" +
      '<ul class="project-detail__highlights">' +
      (project.highlights || []).map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") +
      "</ul>" +
      "</div>";

    var galleryHtml = project.gallery && project.gallery.length
      ? '<div class="project-detail__gallery">' +
        project.gallery
          .map(function (src, i) {
            return (
              '<img src="' + esc(src) + '" alt="Bild ' + (i + 1) + " från " + esc(project.title) + '" loading="lazy" data-slide-index="' + (i + 1) + '" />'
            );
          })
          .join("") +
        "</div>"
      : "";

    var facts =
      '<div class="project-detail__facts">' +
      "<h3>Projektfakta</h3>" +
      '<div class="facts__row"><span class="k">Projekttyp</span><span class="v">' + esc(project.category) + "</span></div>" +
      '<div class="facts__row"><span class="k">Plats</span><span class="v">' + esc(project.location) + "</span></div>" +
      '<a class="btn btn--accent btn--block" href="index.html#offert?type=renovering">Påbörja liknande projekt</a>' +
      '<a class="btn btn--ghost btn--block" href="tel:' + esc(C.phoneHref || "") + '" style="margin-top:.6rem">Ring ' + esc(C.phoneDisplay || "") + "</a>" +
      "</div>";

    root.innerHTML =
      '<section class="page-hero">' +
      '<div class="container">' +
      '<a class="page-hero__back" href="index.html#projekt">&larr; Tillbaka till projekt</a>' +
      '<p class="page-hero__kicker">' + esc(project.category) + "</p>" +
      "<h1>" + esc(project.title) + "</h1>" +
      '<div class="page-hero__meta">' +
      "<span><strong>Plats:</strong> " + esc(project.location) + "</span>" +
      "<span><strong>Typ:</strong> " + esc(project.category) + "</span>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="project-detail">' +
      '<div class="container project-detail__grid">' +
      '<div>' + media + body + galleryHtml + "</div>" +
      facts +
      "</div>" +
      "</section>";

    if (project.beforeAfter) {
      root.innerHTML +=
        '<section class="before-after">' +
        '<div class="container">' +
        '<div class="section-head section-head--center">' +
        '<p class="section-head__kicker">Före &amp; efter</p>' +
        '<h2>' + esc(project.beforeAfter.title || "Före & efter") + "</h2>" +
        "</div>" +
        '<div class="ba" id="ba-slider">' +
        '<img class="ba__img" src="' + esc(project.beforeAfter.before) + '" alt="Före: ' + esc(project.title) + '" />' +
        '<div class="ba__after"><img src="' + esc(project.beforeAfter.after) + '" alt="Efter: ' + esc(project.title) + '" /></div>' +
        '<div class="ba__divider" aria-hidden="true"><span class="ba__grip">' +
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l-6 6 6 6" /><path d="M15 6l6 6-6 6" /></svg>' +
        "</span></div>" +
        '<span class="ba__label ba__label--before">Före</span>' +
        '<span class="ba__label ba__label--after">Efter</span>' +
        "</div>" +
        '<label for="ba-range" class="visually-hidden">Dra för att jämföra före och efter</label>' +
        '<input class="ba__control" id="ba-range" type="range" min="0" max="100" value="50" aria-label="Jämför före och efter" style="margin-top:1.1rem;width:100%" />' +
        '<p class="ba__note">' + esc(project.beforeAfter.note || "") + "</p>" +
        "</div>" +
        "</section>";
      bindBeforeAfterOnPage();
    }

    root.innerHTML +=
      '<section class="project-cta">' +
      '<div class="container">' +
      "<h2>" + ((project.beforeAfter && "Vill du göra något liknande?") || "Påbörja ett liknande projekt") + "</h2>" +
      "<p>Berätta om ditt projekt så hjälper vi dig vidare – utan kostnad och utan förpliktelser.</p>" +
      '<div class="btn-wrap">' +
      '<a class="btn btn--accent" href="index.html#offert?type=renovering">Be om en offert</a>' +
      '<a class="btn btn--solid" href="tel:' + esc(C.phoneHref || "") + '">Ring ' + esc(C.phoneDisplay || "") + "</a>" +
      "</div>" +
      "</div>" +
      "</section>";

    /* Klickbara galleribilder öppnar ljusbilden */
    root.addEventListener("click", function (e) {
      var img = e.target.closest("img[data-slide-index]");
      if (img && window.Lightbox) {
        window.Lightbox.open(slides, Number(img.dataset.slideIndex));
      }
    });
  }

  /* Före/efter-slider på detaljsidan */
  function bindBeforeAfterOnPage() {
    var ba = el("#ba-slider");
    var range = el("#ba-range");
    if (!ba || !range) return;

    setPos(50);
    function setPos(pct) {
      pct = Math.max(0, Math.min(100, pct));
      ba.style.setProperty("--pos", pct + "%");
      range.value = String(Math.round(pct));
    }
    range.addEventListener("input", function () {
      ba.style.setProperty("--pos", range.value + "%");
    });
    var dragging = false;
    ba.addEventListener("pointerdown", function (e) {
      dragging = true;
      ba.setPointerCapture(e.pointerId);
      move(e);
    });
    ba.addEventListener("pointermove", function (e) {
      if (dragging) move(e);
    });
    ["pointerup", "pointercancel"].forEach(function (evt) {
      ba.addEventListener(evt, function () { dragging = false; });
    });
    function move(e) {
      var r = ba.getBoundingClientRect();
      setPos(((e.clientX - r.left) / r.width) * 100);
    }
  }

  /* ============ Init ============ */
  document.addEventListener("DOMContentLoaded", function () {
    renderServices();
    renderProjects();
    renderGallery();
    initBeforeAfter();
    renderProjectPage();
  });
})();