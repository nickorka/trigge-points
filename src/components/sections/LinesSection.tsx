"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/locale";
import { UI_STRINGS } from "@/i18n/ui";
import { LINES_BY_LOCALE } from "@/data/localized";
import { pointsByLineFor } from "@/data/localized";
import { cn } from "@/lib/utils";

export function LinesSection() {
  const { locale } = useI18n();
  const t = UI_STRINGS[locale];
  const [openId, setOpenId] = useState<string | null>("sbl");

  return (
    <section id="meridians" className="scroll-mt-20 bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            {t.lines.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            {t.lines.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.lines.lead}
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 md:items-start">
          {LINES_BY_LOCALE[locale].map((l) => {
            const open = openId === l.id;
            const pts = pointsByLineFor(locale, l.id);
            return (
              <article
                key={l.id}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow",
                  open ? "border-slate-300 shadow-md" : "border-slate-200"
                )}
              >
                <button
                  onClick={() => setOpenId(open ? null : l.id)}
                  className="flex w-full items-center gap-3 px-5 py-4 text-left"
                  aria-expanded={open}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold text-white"
                    style={{ backgroundColor: l.color }}
                  >
                    {l.abbr}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-serif text-lg font-bold text-slate-900">
                      {l.name}
                    </span>
                    <span className="block text-xs text-slate-500">
                      {t.lines.family[l.family]} · {l.side} · {pts.length} {t.pointsWord(pts.length)}
                    </span>
                  </span>
                  <svg
                    className={cn("h-4 w-4 shrink-0 text-slate-400 transition-transform", open && "rotate-180")}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {open && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                    <p className="text-sm leading-relaxed text-slate-700">{l.summary}</p>

                    <h4 className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                      {t.lines.trackHeading}
                    </h4>
                    <ol className="mt-2 flex flex-wrap items-center gap-1.5">
                      {l.track.map((track, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span
                            className="rounded-lg px-2 py-1 text-xs font-medium"
                            style={{ backgroundColor: `${l.color}12`, color: l.color }}
                          >
                            {track}
                          </span>
                          {i < l.track.length - 1 && (
                            <svg className="h-3 w-3 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                          )}
                        </li>
                      ))}
                    </ol>

                    <h4 className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                      {t.lines.painHeading}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">{l.painThemes}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
