"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icons";
import { company, navItems } from "@/data/company";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onToggle = () => setOpen(false);
    document.body.addEventListener("keydown", onToggle);
    return () => document.body.removeEventListener("keydown", onToggle);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[300] bg-warm transition-shadow duration-300 ${
        scrolled || open ? "shadow-[0_1px_0_0_var(--color-line)]" : ""
      }`}
    >
      <div className="hidden border-b border-line/70 md:block">
        <div className="u-container flex items-center gap-6 py-2 text-[13px] text-soft">
          <span className="flex items-center gap-1.5">
            <Icon name="phone" className="h-3.5 w-3.5 text-ochre-deep" />
            {company.phoneDisplay}
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="mail" className="h-3.5 w-3.5 text-ochre-deep" />
            {company.email}
          </span>
          <span className="hidden items-center gap-1.5 lg:flex">
            <Icon name="clock" className="h-3.5 w-3.5 text-ochre-deep" />
            {company.hours}
          </span>
          <span className="ml-auto hidden items-center gap-1.5 sm:flex">
            <Icon name="pin" className="h-3.5 w-3.5 text-ochre-deep" />
            {company.area}
          </span>
        </div>
      </div>

      <div className="u-container flex items-center justify-between py-3.5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5"
          aria-label={`${company.name} – startsida`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green text-white transition-colors group-hover:bg-green-deep">
            <Icon name="hammer" className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-[17px] font-bold tracking-tight text-ink">
              {company.shortName}
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-mute">
              Gävle & omnejd
            </span>
          </span>
        </Link>

        <nav aria-label="Huvudmeny" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors ${
                    active === item.href
                      ? "bg-surface-2 text-green"
                      : "text-soft hover:bg-surface hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.phoneHref}
            className="hidden h-10 items-center gap-2 rounded-full px-4 text-[15px] font-semibold text-green transition-colors hover:bg-surface sm:flex"
          >
            <Icon name="phone" className="h-4 w-4" />
            {company.phoneDisplay}
          </a>
          <a
            href="#kontakt"
            className="hidden h-10 items-center rounded-full bg-green px-5 text-[15px] font-semibold text-white transition-colors hover:bg-green-deep md:inline-flex"
          >
            Be om en offert
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Stäng menyn" : "Öppna menyn"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="u-container border-t border-line py-4">
            <nav aria-label="Mobilmeny">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-lg font-medium text-ink transition-colors hover:bg-surface"
                    >
                      {item.label}
                      <Icon name="arrow" className="h-4 w-4 text-mute" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4 space-y-2">
              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl border border-line py-3 font-semibold text-green"
              >
                <Icon name="phone" className="h-4 w-4" />
                {company.phoneDisplay}
              </a>
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-xl bg-green py-3 font-semibold text-white"
              >
                Be om en offert
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}