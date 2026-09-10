/* ============================================================
   main.js – gemensamma hämtningar: ikoner, kontaktuppgifter,
   sidfot, år och delade beteenden.
   ============================================================ */
(function () {
  "use strict";

  var C = window.COMPANY || {};
  var S = window.SERVICES || [];

  function el(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  /* Ikoner (24x24, stroke) som används i förtroendepunkterna */
  var ICONS = {
    doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9 13h6" /><path d="M9 17h6" />',
    pen: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />',
    broom: '<path d="m13 2 3 7" /><path d="M17.5 4.5 14 12" /><path d="M4.5 21.5 8 14l4.5 3.5Z" /><path d="M4 22l4-3 3 4-2.5-1.5Z" />',
  };

  function svgIconPath(name) {
    return (
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (ICONS[name] || ICONS.doc) +
      "</svg>"
    );
  }

  /* ---------- Förtroendepunkter (renders) ---------- */
  function renderTrust() {
    var grid = el("#trust-grid");
    if (!grid || !C.trust) return;
    grid.innerHTML = C.trust
      .map(function (item, i) {
        return (
          '<article class="trust__item" style="transition-delay:' +
          i * 60 +
          'ms">' +
          '<span class="trust__icon">' +
          svgIconPath(item.icon) +
          "</span>" +
          "<h3>" +
          item.title +
          "</h3>" +
          "<p>" +
          item.text +
          "</p></article>"
        );
      })
      .join("");
  }

  /* ---------- Om oss-punkter ---------- */
  function renderAboutBullets() {
    var list = el("#about-bullets");
    if (!list) return;
    list.innerHTML = [
      "Ingen förskottsbetalning innan avtal och plan är klara.",
      "Tydlig kravspec – vad som görs, med vilka material och till när.",
      "Samma hantverkare genom hela projektet, aldrig en växel.",
      "Vi lämnar arbetsplatsen städad och tar med oss rivningsmaterialet.",
    ]
      .map(function (t) {
        return "<li>" + t + "</li>";
      })
      .join("");
  }

  /* ---------- Processsteg ---------- */
  function renderProcess() {
    var wrap = el("#process-steps");
    if (!wrap || !C.process) return;
    wrap.innerHTML = C.process
      .map(function (step, i) {
        var arrow =
          i < C.process.length - 1
            ? '<span class="step__arrow" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>'
            : "";
        return (
          '<div class="step">' +
          arrow +
          '<span class="step__num">' +
          (i + 1) +
          "</span>" +
          "<h3>" +
          step.title +
          "</h3>" +
          "<p>" +
          step.text +
          "</p></div>"
        );
      })
      .join("");
  }

  /* ---------- FAQ ---------- */
  function renderFaq() {
    var wrap = el("#faq-list");
    if (!wrap || !C.faq) return;

    var items = C.faq
      .map(function (item) {
        return (
          '<details class="faq__item">' +
          "<summary>" +
          item.q +
          "</summary>" +
          '<p class="faq__answer">' +
          item.a +
          "</p></details>"
        );
      })
      .join("");

    wrap.innerHTML = items;

    /* Bara en öppen i taget */
    wrap.querySelectorAll("details").forEach(function (d) {
      d.addEventListener("toggle", function () {
        if (d.open) {
          wrap.querySelectorAll("details[open]").forEach(function (other) {
            if (other !== d) other.removeAttribute("open");
          });
        }
      });
    });
  }

  /* ---------- Kontaktuppgifter (från data/company.js) ---------- */
  function initContact() {
    var phone = el("#contact-phone");
    var email = el("#contact-email");
    var area = el("#contact-area");
    var hours = el("#contact-hours");

    if (C.phoneDisplay && phone) {
      phone.textContent = C.phoneDisplay;
      phone.href = C.phoneHref || phone.href;
    }
    if (C.email && email) {
      email.textContent = C.email;
      email.href = C.emailHref || email.href;
    }
    if (C.area && area) area.textContent = C.area;
    if (C.hours && hours) hours.textContent = C.hours;
  }

  /* ---------- Sidfot: tjänster + år ---------- */
  function initFooter() {
    var list = el("#footer-services");
    if (list && S.length) {
      list.innerHTML = S.map(function (s) {
        return '<li><a href="index.html#tjanster">' + s.title + "</a></li>";
      }).join("");
    }

    var year = el("#footer-year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* Exponera delade hjälpmedel */
  window.Utils = {
    el: el,
    svgIconPath: svgIconPath,
  };

  document.addEventListener("DOMContentLoaded", function () {
    renderTrust();
    renderAboutBullets();
    renderProcess();
    renderFaq();
    initContact();
    initFooter();
  });
})();