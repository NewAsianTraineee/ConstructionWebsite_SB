"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import type { BeforeAfter as BeforeAfterData } from "@/data/projects";

const imagesDim = { w: 6217, h: 4145 };

export function BeforeAfter({ data }: { data: BeforeAfterData }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const update = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    update(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging) update(e.clientX);
  };
  const onPointerUp = () => setDragging(false);
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <Reveal>
      <div className="ba-wrap">
        <div
          ref={wrapRef}
          className="ba-handle relative aspect-[16/9] select-none overflow-hidden rounded-2xl border border-line shadow-[0_24px_60px_-24px_rgba(35,36,31,0.35)]"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <Image
            src={data.after}
            alt="Efter renoveringen"
            width={imagesDim.w}
            height={imagesDim.h}
            priority
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <Image
              src={data.before}
              alt="Före renoveringen"
              width={imagesDim.w}
              height={imagesDim.h}
              priority
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 z-10 w-[3px] bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.25)]"
            style={{ left: `calc(${pos}% - 1.5px)` }}
          />
          <button
            type="button"
            aria-label="Dra för att jämföra före och efter"
            onKeyDown={onKeyDown}
            className="absolute z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-lg transition-colors hover:text-green focus-visible:outline-ochre-deep"
            style={{ left: `${pos}%`, top: "50%" }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M8 7l-5 5 5 5" />
              <path d="M16 7l5 5-5 5" />
            </svg>
          </button>

          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur">
            Före
          </span>
          <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-green/90 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur">
            Efter
          </span>
          <div className="ba-drag pointer-events-none absolute inset-x-0 bottom-0 hidden items-center justify-center gap-2 bg-gradient-to-t from-black/35 to-transparent p-4 text-[12px] font-medium text-white opacity-0 transition-opacity md:flex">
            Dra skjutreglaget för att jämföra
          </div>
        </div>
        {data.note && (
          <p className="mt-3 text-[13px] text-mute">{data.note}</p>
        )}
      </div>
    </Reveal>
  );
}