/* ============================================================
   form.js – offertformuläret. Frontend-only:
   validering, förifyllning av tjänst från ?type= och ett
   tydligt demo-meddelande. Inget skickas någonstans.
   ============================================================ */
(function () {
  "use strict";

  var form = document.getElementById("offer-form");
  var S = window.SERVICES || [];

  if (!form) return;

  var name = form.querySelector("#f-name");
  var phone = form.querySelector("#f-phone");
  var email = form.querySelector("#f-email");
  var msg = form.querySelector("#f-msg");
  var service = form.querySelector("#f-service");

  /* ---------- Tjänster i droppdown ---------- */
  function buildServiceOptions() {
    if (!service) return;
    var current = service.value;
    service.innerHTML = '<option value="" selected>Välj tjänst (valfritt)</option>';
    S.forEach(function (s) {
      var opt = document.createElement("option");
      opt.value = s.slug;
      opt.textContent = s.title;
      service.appendChild(opt);
    });
    if (current) service.value = current;
  }

  /* ---------- Förifyll från #offert?type=slug ---------- */
  function prefillFromHash() {
    var hash = window.location.hash || "";
    var qIndex = hash.indexOf("?");
    if (qIndex === -1) return;
    var query = hash.slice(qIndex + 1);
    var params = new URLSearchParams(query);
    var type = params.get("type");
    if (type && service) {
      var match = S.find(function (s) { return s.slug === type; });
      if (match) service.value = match.slug;
      /* Fokusera eventuellt på formuläret efter scroll */
    }
  }

  /* ---------- Validering ---------- */
  function markError(input, show) {
    input.classList.toggle("field-error", show);
  }

  function validate() {
    var ok = true;

    if (!name.value.trim()) { markError(name, true); ok = false; } else markError(name, false);

    if (!phone.value.trim() || !/^[+0-9\s()-]{6,}$/.test(phone.value.trim())) {
      markError(phone, true); ok = false;
    } else markError(phone, false);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) {
      markError(email, true); ok = false;
    } else markError(email, false);

    if (msg.value.trim().length < 5) {
      markError(msg, true);
      var err = document.getElementById("f-msg-error");
      if (err) err.classList.add("is-shown");
      ok = false;
    } else {
      markError(msg, false);
      var err2 = document.getElementById("f-msg-error");
      if (err2) err2.classList.remove("is-shown");
    }

    return ok;
  }

  /* ---------- Demo-simulering av skickat formulär ---------- */
  function showSuccess() {
    form.innerHTML =
      '<div class="form__success">' +
      '<span class="check"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg></span>' +
      "<h3>Tack, din förfrågan är mottagen!</h3>" +
      "<p>Vi återkommer vanligtvis inom en arbetsdag. " +
      "(Det här är en demosajt – inget mejl skickades.)</p>" +
      "</div>";
    window.scrollTo({ top: form.getBoundingClientRect().top + window.scrollY - 140, behavior: "smooth" });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validate()) showSuccess();
  });

  /* Rensa felmeddelanden när användaren skriver */
  [name, phone, email, msg].forEach(function (input) {
    input.addEventListener("input", function () {
      input.classList.remove("field-error");
      var err = msg && document.getElementById("f-msg-error");
      if (err) err.classList.remove("is-shown");
    });
  });

  buildServiceOptions();
  prefillFromHash();
})();