import Link from "next/link";
import { Icon } from "@/components/ui/Icons";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-24">
      <div className="u-container max-w-2xl text-center">
        <p className="text-[15px] font-bold uppercase tracking-[0.18em] text-green">
          Sidan 404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">
          Här finns inget bygge
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-soft">
          Sidan du letade efter finns inte eller har flyttats. Kanske vill du
          titta på våra tjänster eller projekt istället?
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-green px-6 font-semibold text-white transition-colors hover:bg-green-deep"
          >
            Till startsidan
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <a
            href="#kontakt"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-white px-6 font-semibold text-ink transition-colors hover:bg-surface"
          >
            Be om en offert
          </a>
        </div>
        <div className="mt-12 grid gap-3 text-left sm:grid-cols-2">
          <Link href="/#tjanster" className="rounded-2xl border border-line bg-white p-5 transition-colors hover:bg-surface">
            <p className="flex items-center gap-2 font-semibold text-ink">
              <Icon name="hammer" className="h-4 w-4 text-ochre-deep" />
              Tjänster
            </p>
            <p className="mt-1 text-[13.5px] text-soft">
              {services.length} tjänster under samma tak.
            </p>
          </Link>
          <Link href="/#projekt" className="rounded-2xl border border-line bg-white p-5 transition-colors hover:bg-surface">
            <p className="flex items-center gap-2 font-semibold text-ink">
              <Icon name="spark" className="h-4 w-4 text-ochre-deep" />
              Projekt
            </p>
            <p className="mt-1 text-[13.5px] text-soft">
              {projects.length} utförda projekt du kan se.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}