export type BeforeAfter = {
  before: string;
  after: string;
  note: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  description: string;
  highlights: string[];
  image: string;
  gallery: string[];
  beforeAfter?: BeforeAfter;
};

export const galleryImages: { src: string; alt: string }[] = [
  { src: "/images/gallery/scaffolding.jpg", alt: "Byggnadsställning kring en fasad" },
  { src: "/images/gallery/facade-workers.jpg", alt: "Hantverkare vid en fasad på ställning" },
  { src: "/images/gallery/woodwork.jpg", alt: "Snickeri i verkstad – arbete med trä" },
  { src: "/images/gallery/circular-saw.jpg", alt: "Cirkelsåg som kapar en bräda" },
  { src: "/images/gallery/bathtub.jpg", alt: "Nytt badrum med fristående badkar" },
  { src: "/images/projects/altan-och-uteplats.jpg", alt: "Nybyggd altan med möbler" },
];

export const projects: Project[] = [
  {
    slug: "koksrenovering",
    title: "Köksrenovering – villa i Gävle",
    category: "Kök & badrum",
    location: "Brynäs, Gävle",
    summary:
      "Rivning av gammalt kök, ny planlösning med köksö, byte av skåp, bänkskiva och ytskikt samt ny belysning.",
    description:
      "Vi rev ut ett äldre kök och öppnade upp rummet med en köksö. Elplaneringen gjordes om för att passa ny belysning och vitvaror. Snickeri, kakel och målning utfördes av egna hantverkare på löpande tid.",
    highlights: ["Stambyte i köksdel", "Köksö med bänkskiva i ek", "Målade skåpsfronter"],
    image: "/images/projects/koksrenovering.jpg",
    gallery: ["/images/gallery/circular-saw.jpg", "/images/gallery/woodwork.jpg"],
    beforeAfter: {
      before: "/images/projects/koksrenovering.jpg",
      after: "/images/services/kok-badrum.jpg",
      note: "Bilder: köket under rivning (före) jämfört med färdigt kök (efter).",
    },
  },
  {
    slug: "badrumsrenovering",
    title: "Badrumsrenovering – lägenhet",
    category: "Kök & badrum",
    location: "Stadsparken, Sandviken",
    summary:
      "Totalt nytt badrum med inredning, väggmonterad kommod, större dusch samt nytt golv och kakel med golvvärme.",
    description:
      "Badrummet plockades ner till stommen och byggdes upp med ny tätning och kakel på golv och väggar. All VVS samordnades med auktoriserad installatör och slutresultatet blev ett luftigt badrum med modern inredning.",
    highlights: ["Golvvärme", "Större duschparti", "Nya tätskikt & kakel"],
    image: "/images/projects/badrumsrenovering.jpg",
    gallery: ["/images/gallery/bathtub.jpg"],
  },
  {
    slug: "altan-och-uteplats",
    title: "Altan & uteplats – villatomt",
    category: "Altan & uteplats",
    location: "Hillsta, Gävle",
    summary:
      "Ny 40 m² altan i tryckbehandlat virke med inbyggd bänk, utetrappa och räcke. Planerad så att solen fångas från eftermiddagen.",
    description:
      "Underlaget schaktades om och grundlades med plintar. Altanen byggdes i tryckbehandlat virke med räcke och utetrappa, och vi byggde även en inbyggd bänk längs kanten. Altantak kan läggas till i ett senare skede.",
    highlights: ["Inbyggd bänk", "Räcke & utetrappa", "Tryckbehandlat virke"],
    image: "/images/projects/altan-och-uteplats.jpg",
    gallery: ["/images/services/altan-uteplats.jpg"],
  },
  {
    slug: "tillbyggnad",
    title: "Tillbyggnad – nytt vardagsrum",
    category: "Tillbyggnad",
    location: "Södra Bomhus, Gävle",
    summary:
      "Utbyggnad om ca 25 m² med stora fönsterpartier, underhållsfri fasad och uppvärmning anpassad till resterande hus.",
    description:
      "Projektet startades med bygglovshandlingar och grundläggning, följt av stomme, tak, fönster och inredning. Fasad liggande panel med underhållsfri behandling som matchar befintligt hus.",
    highlights: ["25 m² ny yta", "Stora fönsterpartier", "Bygglov & ritningar"],
    image: "/images/projects/tillbyggnad.jpg",
    gallery: ["/images/services/tillbyggnad.jpg"],
  },
  {
    slug: "fasad-malning",
    title: "Fasad & målning – tvåplansvilla",
    category: "Fasad & underhåll",
    location: "Sätra, Gävle",
    summary:
      "Byte av rötskadade brädor, tvåstrykningsmålning av hela fasaden samt målning av fönsterfoder och vindskivor.",
    description:
      "Vi inventerade fasaden ihop med ägaren och bytte ut skadade brädor innan målning. Fasaderna tvåstrykningsmålades med diffusionsöppen kulör och fönsterfoder samt vindskivor målades om för hand.",
    highlights: ["Byte av rötskadat virke", "Tvåstrykningsmålning", "Fönster & vindskivor"],
    image: "/images/projects/fasad-malning.jpg",
    gallery: ["/images/gallery/facade-workers.jpg"],
  },
  {
    slug: "flerbostadshus-fasad",
    title: "Fasads underhåll – flerbostadshus",
    category: "Fasad & underhåll",
    location: "Sund, Gävle",
    summary:
      "Underhåll av tegelfasad med fogrenovering, nystickning av enskilda stenar och byte av karmar på entréparti.",
    description:
      "I samarbete med fastighetsförvaltaren utfördes fogrenovering och enskilda tegelstenar byttes. Entrépartiet byttes ut till nytt miljövänligt och säkert system med lång livslängd.",
    highlights: ["Fogrenovering", "Byte av tegelstenar", "Nytt entréparti"],
    image: "/images/projects/flerbostadshus-fasad.jpg",
    gallery: ["/images/gallery/scaffolding.jpg"],
  },
];