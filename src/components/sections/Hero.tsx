import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";
import { services } from "@/data/services";

export function Hero() {
  return (
    <section id="inledning" className="pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="u-container grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div>
          <Reveal>
            <span className="u-eyebrow">Bygg & renovering · {company.area}</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Vi bygger, renoverar och{" "}
              <span className="relative whitespace-nowrap text-green">
                snickrar
                <span className="absolute inset-x-0 -bottom-1 h-2 bg-ochre/25" aria-hidden />
              </span>{" "}
              i Gävle med omnejd
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">
              {company.shortName} är ett litet gäng hantverkare. Du får en
              skriftlig offert, ett fast pris och pratar direkt med den som gör
              jobbet – från kök och badrum till altan och fasadunderhåll.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-green px-6 text-[16px] font-semibold text-white transition-colors hover:bg-green-deep"
              >
                Be om en offert
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a
                href="#projekt"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-white px-6 text-[16px] font-semibold text-ink transition-colors hover:bg-surface"
              >
                Se våra projekt
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-mute">
              {services.slice(0, 4).map((s) => (
                <li key={s.slug} className="flex items-center gap-1.5">
                  <Icon name="check" className="h-3.5 w-3.5 text-ochre-deep" />
                  {s.title}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-4">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-[0_24px_60px_-20px_rgba(35,36,31,0.35)]">
              <Image
                src="/images/hero/hero.jpg"
                alt="Renoverad byggnad med ny fasad"
                width={4240}
                height={2832}
                sizes="(min-width:1024px) 48vw, 100vw"
                priority
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              />
            </div>
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 shadow-lg sm:left-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ochre/15 text-ochre-deep">
                <Icon name="clock" className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-[15px] font-semibold text-ink">{company.hours}</p>
                <p className="text-[13px] text-soft">{company.hoursExtra}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}