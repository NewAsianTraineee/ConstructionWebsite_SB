"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-16 md:py-24">
      <div className="u-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="u-eyebrow">Vanliga frågor</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Svar innan du ens behöver fråga
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-[17px] leading-relaxed text-soft">
              Har du en fråga som inte finns här? Ring eller mejla – vi svarar
              snabbt och rakt.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a
              href={company.emailHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-surface"
            >
              <Icon name="mail" className="h-4 w-4 text-ochre-deep" />
              {company.email}
            </a>
          </Reveal>
        </div>

        <div className="space-y-3">
          {company.faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen ? "border-green/30 bg-white" : "border-line bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span
                      className={`text-[16px] font-semibold ${isOpen ? "text-green" : "text-ink"}`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 border-green/30 bg-green/10 text-green"
                          : "border-line text-mute"
                      }`}
                    >
                      <Icon name="chevron" className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[15px] leading-relaxed text-soft">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}