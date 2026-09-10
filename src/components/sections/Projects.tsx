import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icons";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projekt" className="scroll-mt-20 border-t border-line bg-surface py-16 md:py-24">
      <div className="u-container">
        <Reveal>
          <span className="u-eyebrow">Utförda projekt</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Projekt vi är stolta över
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-green/10 px-3.5 py-1 text-[13px] font-semibold text-green">
              <Icon name="spark" className="h-4 w-4" />
              {featured.category}
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-3 flex items-center gap-1.5 text-[14px] font-medium text-mute">
              <Icon name="pin" className="h-4 w-4 text-ochre-deep" />
              {featured.location}
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-soft">
              {featured.summary}
            </p>
            <ul className="mt-5 space-y-2">
              {featured.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-[15px] text-soft">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-ochre-deep" />
                  {h}
                </li>
              ))}
            </ul>
            <Link
              href={`/projekt/${featured.slug}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-green px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-green-deep"
            >
              Se projektet
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>

          {featured.beforeAfter && (
            <BeforeAfter data={featured.beforeAfter} />
          )}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <Link
                href={`/projekt/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-[0_20px_50px_-28px_rgba(35,36,31,0.45)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={4032}
                    height={2268}
                    sizes="(min-width:1280px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold text-green backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex items-center gap-1.5 text-[13px] font-medium text-mute">
                    <Icon name="pin" className="h-3.5 w-3.5 text-ochre-deep" />
                    {p.location}
                  </p>
                  <h3 className="mt-2 text-lg font-bold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] leading-relaxed text-soft">
                    {p.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 pt-2 text-[15px] font-semibold text-green transition-colors group-hover:text-green-deep">
                    Se projektet
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}