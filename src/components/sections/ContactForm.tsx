"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icons";
import { services } from "@/data/services";

type Values = {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
};

const initial: Values = { name: "", email: "", phone: "", type: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Partial<Values>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Values> = {};
    if (values.name.trim().length < 2) next.name = "Fyll i ditt namn.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Fyll i en giltig e-postadress.";
    if (!values.type) next.type = "Välj en typ av projekt.";
    if (values.message.trim().length < 10) next.message = "Beskriv projektet med några ord.";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-green/30 bg-green/5 p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green text-white">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-ink">Tack, {values.name.split(" ")[0]}!</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-soft">
          Vi har mottagit din förfrågan om <strong>{values.type}</strong> och
          återkommer inom ett dygn. (Det här är en exempelsajt – inget mejl
          skickas på riktigt.)
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initial);
            setSent(false);
          }}
          className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-green transition-colors hover:text-green-deep"
        >
          Skicka en ny förfrågan
          <Icon name="arrow" className="h-4 w-4" />
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-mute transition-colors focus:border-green focus:outline-none focus:ring-2 focus:ring-green/15";
  const errText = "mt-1.5 text-[13px] text-red-600";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
    >
      <h3 className="text-xl font-bold tracking-tight text-ink">
        Berätta om ditt projekt
      </h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-soft">
        Fyll i formuläret så återkommer vi inom ett dygn med ett första svar.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-[14px] font-semibold text-ink">
            Namn *
          </label>
          <input
            id="cf-name"
            type="text"
            placeholder="För- och efternamn"
            value={values.name}
            onChange={set("name")}
            className={`${inputCls} ${errors.name ? "border-red-400" : "border-line"}`}
          />
          {errors.name && <p className={errText}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-[14px] font-semibold text-ink">
            E-post *
          </label>
          <input
            id="cf-email"
            type="email"
            placeholder="namn@exempel.se"
            value={values.email}
            onChange={set("email")}
            className={`${inputCls} ${errors.email ? "border-red-400" : "border-line"}`}
          />
          {errors.email && <p className={errText}>{errors.email}</p>}
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_1.2fr]">
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-[14px] font-semibold text-ink">
            Telefon (valfritt)
          </label>
          <input
            id="cf-phone"
            type="tel"
            placeholder="070-000 00 00"
            value={values.phone}
            onChange={set("phone")}
            className={`${inputCls} border-line`}
          />
        </div>
        <div>
          <label htmlFor="cf-type" className="mb-1.5 block text-[14px] font-semibold text-ink">
            Typ av projekt *
          </label>
          <select
            id="cf-type"
            value={values.type}
            onChange={set("type")}
            className={`${inputCls} ${errors.type ? "border-red-400" : "border-line"}`}
          >
            <option value="">Välj …</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Annat">Annat / osäker ännu</option>
          </select>
          {errors.type && <p className={errText}>{errors.type}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="cf-message" className="mb-1.5 block text-[14px] font-semibold text-ink">
          Beskriv projektet *
        </label>
        <textarea
          id="cf-message"
          rows={5}
          placeholder="Vad vill du göra, var ligger det och hur långt har ni kommit?"
          value={values.message}
          onChange={set("message")}
          className={`${inputCls} resize-y ${errors.message ? "border-red-400" : "border-line"}`}
        />
        {errors.message && <p className={errText}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green px-6 text-[16px] font-semibold text-white transition-colors hover:bg-green-deep"
      >
        Skicka förfrågan
        <Icon name="arrow" className="h-4 w-4" />
      </button>
      <p className="mt-3 text-center text-[12.5px] text-mute">
        Exempelsajt – förfrågan skickas inte på riktigt.
      </p>
    </form>
  );
}