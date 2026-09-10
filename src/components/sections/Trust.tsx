import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

export function Trust() {
  return (
    <section className="border-y border-line bg-surface py-16 md:py-20">
      <div className="u-container">
        <Reveal>
          <span className="u-eyebrow">Så jobbar vi</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Ett tryggt bygge – från första samtal till färdigt resultat
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {company.trust.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="h-full rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-[0_16px_40px_-24px_rgba(35,36,31,0.4)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/10 text-green">
                  <Icon name={item.icon as "doc"} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[17px] font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-soft">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}