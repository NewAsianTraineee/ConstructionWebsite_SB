import Image from "next/image";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

const values = [
  {
    title: "Lokala hantverkare",
    text: "Vi bor och verkar i Gävleområdet. Korta avstånd, känd kvalitet och någon som kan komma förbi direkt.",
  },
  {
    title: "Fast pris på förhand",
    text: "Offert innan byggstart, kravspec och tidsplan tillsammans. Inga överraskningar på fakturan.",
  },
  {
    title: "Vi gör klart jobbet",
    text: "Eget snickeri, snickare och målare i teamet. Vi slutför det vi påbörjar – och städar efter oss.",
  },
];

export function About() {
  return (
    <section id="om-oss" className="scroll-mt-20 py-16 md:py-24">
      <div className="u-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="lg:pr-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/about/team.jpg"
                alt="Hantverkare från Storvik Bygg vid arbete"
                width={4000}
                height={6000}
                sizes="(min-width:1024px) 40vw, 100vw"
                className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[560px]"
              />
            </div>
            <div className="absolute -bottom-5 hidden items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 shadow-lg sm:flex">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green text-white">
                <Icon name="hammer" className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-[15px] font-semibold text-ink">
                  {company.shortName}
                </p>
                <p className="text-[13px] text-soft">{company.orgNumber}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="u-eyebrow">Om oss</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Ett litet, noggrant team i Gävle
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg leading-relaxed text-soft">
              {company.shortName} grundades av hantverkare med lång erfarenhet
              av bygg och renovering i Gävle med omnejd. Vi är ett litet team –
              och det är precis så vi vill ha det. Du pratar med den som gör
              jobbet, får ordentlig planering och ett pris som håller.
            </p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ochre/15 text-ochre-deep">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-soft">
                      {v.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={240}>
            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-green transition-colors hover:text-green-deep"
            >
              Lär känna oss – be om en offert
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}