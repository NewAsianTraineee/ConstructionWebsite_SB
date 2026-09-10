# Storvik Bygg &amp; Renovering AB – byggfirmasajt (demo)

En statisk hemsida för ett lokalt bygg- och renoveringsföretag i Gävle med omnejd.
Byggd med **ren HTML + CSS + JavaScript** – inga ramverk, inga byggsteg.

> Det här är en **demosajt**. Företagsnamnet, telefonnumret, e-postadressen, org.nr och
> projektbeskrivningarna är påhittade exempel – byt ut dem innan sajten publiceras på riktigt.

---

## Innehåll

- **Förstasidan** (`index.html`) – hero, förtroende, tjänster, projekt, före/efter-slider,
  om oss, arbetssätt, FAQ, galleri och offertformulär.
- **Projektdetaljer** (`project.html`) – öppnas via `project.html?slug=koksrenovering`
  (klicka på ett projektkort). Innehåll renderas från `data/projects.js`.
- **Kontakt & offert** – formulär med validering (skickar inget, se nedan).

## Mappstruktur

```
Construction/
├── index.html          # Förstasidan
├── project.html        # Projektdetaljsida (slug i URL:en)
├── robots.txt          # Instruktioner till sökmotorer
├── sitemap.xml         # Sidkarta för sökmotorer
├── README.md
├── css/
│   ├── style.css        # All design (färger, typografi, komponenter)
│   └── responsive.css   # Anpassar för mobil och surfplatta
├── js/
│   ├── main.js          # Gemensamma funktioner (förtroende, process, FAQ, kontakt, sidfot)
│   ├── navigation.js    # Mobilmeny + aktiv länk vid scroll
│   ├── animations.js    # Skonsamma scroll-effekter
│   ├── gallery.js       # Ljusbild (lightbox)
│   ├── projects.js      # Tjänster, projektkort, galleri, före/efter + detaljsida
│   └── form.js          # Offertformuläret (validering + demo)
├── data/
│   ├── company.js       # Företagsuppgifter, arbetssätt, FAQ
│   ├── services.js      # Tjänsterna
│   └── projects.js      # Projekten + galleribilder
└── public/
    └── images/          # Alla bilder
        ├── hero/        # Storbild
        ├── services/    # Tjänstebilder
        ├── projects/    # Projektbilder
        ├── about/       # Om oss
        ├── before-after # Före/efter par
        └── gallery/     # Galleri
```

## Så fungerar det

1. `data/company.js` – byt företagsnamn, telefon, e-post, öppettider, arbetssätt och FAQ
   här. Uppgifterna dyker upp automatiskt på hela sajten.
2. `data/services.js` – lägg till eller ändra tjänster.
3. `data/projects.js` – projekten visas som kort på förstasidan. Varje projekt har en
   `slug` som används i adressen (`project.html?slug=koksrenovering`). Lägg till fler
   objekt för fler projekt.
4. **Före/efter-slidern** på förstasidan visar automatiskt det första projektet som har
   `beforeAfter` (drag med mus eller tumme, eller använd reglaget under bilden).

## Kom igång lokalt

Öppna bara `index.html` i webbläsaren – sajten fungerar även via `file://`
(inga byggverktyg behövs). Vill du servera den med lokal webbserver (rekommenderas):

```bash
# Python 3
python -m http.server 8080

# eller PHP
php -S localhost:8080
```

Öppna sedan `http://localhost:8080`.

## Formuläret skickar inget

Offertformuläret är **frontend-only**. Det validerar fälten och visar ett tack-meddelande,
men skickar ingen data någonstans. För att skicka på riktigt kopplar du det till exempel
till Formspree, Getform eller en server.

## Bilder & rättigheter

Bilderna är laddade från **Unsplash** (Unsplash License – fria att använda kommersiellt
utan attribution). Innan riktig publicering bör du verkligen byta ut alla bilder mot egna
fotografier från faktiska projekt.

## Design

Bas: varmvit, off-white, konkretgrå och djupgrönt. Ockra används sparsamt som accent.
Tydlig typografi (Inter) och återhållsamma animationer – ingen custom cursor.
Sajten respekterar `prefers-reduced-motion`.

## Publicera senare

När sajten ska leva: ladda upp till GitHub, importera i exempelvis Vercel/Netlify
(välj "Other / Static", ingen build-step) och peka domänen till `https://<ditt>.vercel.app`
eller egen domän. Kom ihåg att uppdatera domänen i `sitemap.xml`, `robots.txt`,
`index.html` (canonical + Open Graph) och i `company.js`.