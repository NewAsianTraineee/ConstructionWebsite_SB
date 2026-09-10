import { Icon } from "@/components/ui/Icons";
import { company } from "@/data/company";

export function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[290] border-t border-line bg-white/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-px bg-line">
        <a
          href={company.phoneHref}
          className="flex items-center justify-center gap-2 bg-white py-3.5 text-[15px] font-semibold text-green active:bg-surface"
        >
          <Icon name="phone" className="h-4 w-4" />
          Ring oss
        </a>
        <a
          href="#kontakt"
          className="flex items-center justify-center gap-2 bg-green py-3.5 text-[15px] font-semibold text-white active:bg-green-deep"
        >
          Be om en offert
          <Icon name="arrow" className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}