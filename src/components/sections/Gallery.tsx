"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { galleryImages } from "@/data/projects";

export function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);

  return (
    <section id="galleri" className="scroll-mt-20 border-t border-line bg-surface py-16 md:py-24">
      <div className="u-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="u-eyebrow">Galleri</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Från byggplatsen
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-sm text-[15px] leading-relaxed text-soft">
              Ett urval av bilder från våra pågående och färdiga projekt.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setIdx(i)}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-white text-left focus-visible:outline-ochre-deep"
                aria-label={`Öppna bild: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={4785}
                  height={3235}
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/45 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-sm font-medium text-white">{img.alt}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/90 text-ink">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden>
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                    </svg>
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {idx !== null && (
        <Lightbox
          images={galleryImages}
          index={idx}
          onIndex={setIdx}
          onClose={() => setIdx(null)}
        />
      )}
    </section>
  );
}