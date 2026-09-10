# Storvik Bygg & Renovering AB

Exempelsajt för en bygg- och renoveringsfirma i Gävle. Byggd med **Next.js**,
**React** och **Tailwind CSS** – samma stack som AKARI-projektet.

- Allt innehåll (företag, tjänster, projekt, bilder) kan ändras i `src/data/*.ts`.
- Bilderna ligger i `public/images/` och refereras med `/images/...`.

## Kom igång

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Deploy (Vercel)

Importera repot på https://vercel.com/new – Next.js känns igen automatiskt.

- Startsida: `/`
- Projektsidor: `/projekt/{slug}` (genereras från `src/data/projects.ts`)
- `sitemap.xml` och `robots.txt` genereras automatiskt.