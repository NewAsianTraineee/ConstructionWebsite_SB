"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { Icon } from "@/components/ui/Icons";

type LightboxImage = { src: string; alt: string };

export function Lightbox({
  images,
  index,
  onIndex,
  onClose,
}: {
  images: LightboxImage[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const goPrev = useCallback(
    () => onIndex((index - 1 + images.length) % images.length),
    [index, images.length, onIndex]
  );
  const goNext = useCallback(
    () => onIndex((index + 1) % images.length),
    [index, images.length, onIndex]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [goPrev, goNext, onClose]);

  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[400] flex flex-col bg-ink/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
      onClick={onClose}
    >
      <div className="flex items-center justify-between p-4">
        <p className="text-sm text-white/70">
          {index + 1} / {images.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Stäng"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
        >
          <Icon name="close" className="h-5 w-5" />
        </button>
      </div>

      <div
        className="relative mx-auto flex w-full max-w-5xl flex-1 items-center justify-center px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={4785}
          height={3235}
          sizes="90vw"
          className="max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl"
        />
        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-white/80">
          {img.alt}
        </p>
        <button
          type="button"
          onClick={goPrev}
          aria-label="Föregående bild"
          className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-ink/40 text-white transition-colors hover:bg-white/10"
        >
          <Icon name="chevron" className="h-5 w-5 rotate-90" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Nästa bild"
          className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-ink/40 text-white transition-colors hover:bg-white/10"
        >
          <Icon name="chevron" className="h-5 w-5 -rotate-90" />
        </button>
      </div>
    </div>
  );
}