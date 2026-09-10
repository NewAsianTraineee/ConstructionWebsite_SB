import Link from "next/link";
import { Icon } from "@/components/ui/Icons";
import { company, serviceLinks } from "@/data/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="u-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green text-white">
              <Icon name="hammer" className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-[17px] font-bold tracking-tight text-ink">
                {company.shortName}
              </p>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-mute">
                Bygg & renovering
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-soft">
            {company.tagline}. Vi tar oss tid att lyssna och lämnar en skriftlig
            offert innan något startar.
          </p>
          <div className="mt-5 flex items-center gap-2 text-[13px] text-mute">
            <Icon name="spark" className="h-4 w-4 shrink-0 text-ochre-deep" />
            {company.referral}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Tjänster
          </p>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((s) => (
              <li key={s.slug}>
                <Link
                  href="/#tjanster"
                  className="text-[15px] text-soft transition-colors hover:text-green"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Kontakt
          </p>
          <ul className="mt-4 space-y-2.5 text-[15px] text-soft">
            <li>
              <a
                href={company.phoneHref}
                className="flex items-center gap-2 transition-colors hover:text-green"
              >
                <Icon name="phone" className="h-4 w-4 text-ochre-deep" />
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={company.emailHref}
                className="flex items-center gap-2 transition-colors hover:text-green"
              >
                <Icon name="mail" className="h-4 w-4 text-ochre-deep" />
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="pin" className="mt-1 h-4 w-4 shrink-0 text-ochre-deep" />
              <span>{company.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="clock" className="h-4 w-4 shrink-0 text-ochre-deep" />
              {company.hours}
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Om oss
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-soft">
            Vi är ett litet gäng hantverkare som gör färdigt det vi påbörjar –
            med tydlig plan, fast pris och rent arbetsområde.
          </p>
          <Link
            href="/#kontakt"
            className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-green transition-colors hover:text-green-deep"
          >
            Be om en offert
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="u-container flex flex-col items-start justify-between gap-2 py-5 text-[13px] text-mute sm:flex-row sm:items-center">
          <p>
            © {year} {company.name} · Org.nr {company.orgNumber}
          </p>
          <p>Exempelsajt – påhittat företag och projekt.</p>
        </div>
      </div>
    </footer>
  );
}