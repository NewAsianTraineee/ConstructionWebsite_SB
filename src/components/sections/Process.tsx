import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-line bg-surface py-16 md:py-24">
      <div className="u-container">
        <div className="max-w-2xl">
          <Reveal>
            <span className="u-eyebrow">Så går det till</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Ett enkelt projektflöde – du vet var du är hela tiden
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-[17px] leading-relaxed text-soft">
              Från första kontakt till färdigt resultat i fem tydliga steg.
              Inget startar förrän du godkänner offerten.
            </p>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {company.process.map((step, i) => (
            <Reveal key={step.title} delay={i * 80} as="li">
              <div className="relative h-full rounded-2xl border border-line bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green text-[15px] font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-[16px] font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-soft">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}