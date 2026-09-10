import Image from "next/image";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="tjanster" className="scroll-mt-20 py-16 md:py-24">
      <div className="u-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="u-eyebrow">Våra tjänster</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Allt vi gör – under samma tak
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-green transition-colors hover:text-green-deep"
            >
              Be om en offert
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 90}>
              <article
                id={`service-${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-[0_20px_50px_-28px_rgba(35,36,31,0.45)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={4288}
                    height={2848}
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold text-green backdrop-blur">
                    {service.title}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-soft">
                    {service.short}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-[14px] text-soft"
                      >
                        <Icon name="check" className="h-4 w-4 shrink-0 text-ochre-deep" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#kontakt"
                    className="mt-5 inline-flex items-center gap-2 pt-2 text-[15px] font-semibold text-green transition-colors hover:text-green-deep"
                  >
                    Fråga om {service.title}
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}