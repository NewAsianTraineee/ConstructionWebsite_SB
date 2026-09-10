import { Icon } from "@/components/ui/Icons";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-20 border-t border-line py-16 md:py-24">
      <div className="u-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="u-eyebrow">Kontakt</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Få ett svar inom ett dygn
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-[17px] leading-relaxed text-soft">
              {company.referral}. Ring eller mejla oss direkt, eller fyll i
              formuläret så hör vi av oss.
            </p>
          </Reveal>

          <div className="mt-8 space-y-3">
            {[
              { icon: "phone" as const, label: "Telefon", value: company.phoneDisplay, href: company.phoneHref },
              { icon: "mail" as const, label: "E-post", value: company.email, href: company.emailHref },
              { icon: "pin" as const, label: "Adress", value: company.address, href: null },
              { icon: "clock" as const, label: "Öppettider", value: company.hours, href: null },
            ].map((row) => (
              <Reveal key={row.label} delay={80}>
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
                    <Icon name={row.icon} className="h-5 w-5" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-mute">
                      {row.label}
                    </p>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="text-[16px] font-semibold text-ink transition-colors hover:text-green"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="text-[16px] font-semibold text-ink">{row.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-6 rounded-2xl bg-ochre/10 p-5 text-[14px] leading-relaxed text-soft">
              <strong className="text-ink">Område:</strong> {company.area}. För
              projekt utanför området tar vi en titt och återkommer med besked.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}