export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "renovering",
    title: "Renovering",
    short: "Totalrenovering av lägenhet och villa – allt under samma tak, rum för rum.",
    description:
      "Från enstaka rum till hela bostäder. Vi river, bygger nytt och slutför allt från golv till tak med eget snickeri. Du får en plan, ett pris och en kontaktperson – ingen sluttande kostnad.",
    image: "/images/services/renovering.jpg",
    bullets: ["Rum för rum eller hela bostaden", "Eget snickeri & träarbete", "Tydlig plan före start"],
  },
  {
    slug: "tillbyggnad",
    title: "Tillbyggnad",
    short: "Vi bygger ut bostaden – för nya rum, entréer eller utökad planlösning.",
    description:
      "Vill du ha ett nytt rum, en utbyggnad eller förändra planlösningen? Vi tar fram förslag, hjälper till med bygglov och bygger klart hela vägen.",
    image: "/images/services/tillbyggnad.jpg",
    bullets: ["Bygglov & ritningar", "Markarbete & grund", "Golv till tak"],
  },
  {
    slug: "snickeri",
    title: "Snickeri",
    short: "Dörrar, lister, kök, inredning och allt i trä – tillverkat på plats.",
    description:
      "Vi bygger och monterar fast inredning, dörrar, fönsterfoder, lister och specialsnickerier. Allt görs med omsorg och passas på plats – inget köpes från hyllan bara för att.",
    image: "/images/services/snickeri.jpg",
    bullets: ["Specialsnickerier", "Dörrar, lister & inredning", "Träarbeten på plats"],
  },
  {
    slug: "kok-badrum",
    title: "Kök & badrum",
    short: "Funktionella kök och badrum som håller i många år – planerat i detalj.",
    description:
      "Kök och badrum kräver ordning på vatten, eldragningar och fukt. Vi planerar arbetet i detalj, samordnar hantverk och byter bland annat ytskikt, skåp och inredning.",
    image: "/images/services/kok-badrum.jpg",
    bullets: ["Planering & ritning", "Flytt av väggar och ytskikt", "Komplett installation"],
  },
  {
    slug: "altan-uteplats",
    title: "Altan & uteplats",
    short: "Altaner, trädäck och utemiljöer i tryckbehandlat eller underhållsfritt trä.",
    description:
      "Vi bygger altaner, trädäck, trappor och utetrappor – plane, färdigbyggda och klara att använda. Vi berättar också ärligt om träslagens skillnad i underhåll och livslängd.",
    image: "/images/services/altan-uteplats.jpg",
    bullets: ["Underhållsfria alternativ", "Trappor & räcken", "Färdigställt för användning"],
  },
  {
    slug: "fasad-underhall",
    title: "Fasad & underhåll",
    short: "Fasadmålning, rötskador, fönster och utvändigt underhåll av huset.",
    description:
      "Vi byter trasiga brädor, lagar rötskador, målar om fasader och sköter utvändigt underhåll så att huset håller och ser snyggt ut. Förebyggande åtgärder är alltid billigast i längden.",
    image: "/images/services/fasad-underhall.jpg",
    bullets: ["Rötskador & byte av virke", "Fasadmålning", "Fönster & tätning"],
  },
];