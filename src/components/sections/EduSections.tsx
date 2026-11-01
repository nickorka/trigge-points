"use client";

import { useI18n } from "@/i18n/locale";
import { UI_STRINGS } from "@/i18n/ui";
import { CONTENT_BY_LOCALE } from "@/data/localized";
import { cn } from "@/lib/utils";

/* ------------------------------ Fascia primer ------------------------------ */

export function PrimerSection() {
  const { locale } = useI18n();
  const t = UI_STRINGS[locale];
  const { primer } = CONTENT_BY_LOCALE[locale];

  return (
    <section id="primer" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <header className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            {t.primer.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            {t.primer.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.primer.lead}
          </p>
        </header>

        <div className="space-y-10">
          {primer.map((s, idx) => (
            <article key={idx}>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                <span className="mr-2 text-teal-700">{String(idx + 1).padStart(2, "0")}</span>
                {s.title}
              </h3>
              <div className="mt-3 space-y-3">
                {s.body.map((p, i) => (
                  <p
                    key={i}
                    className={cn(
                      "text-[15px] leading-[1.8] text-slate-700",
                      i === 0 && "first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-teal-800"
                    )}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Assessment + rules ---------------------------- */

export function AssessmentSection() {
  const { locale } = useI18n();
  const t = UI_STRINGS[locale];
  const { assessment, rules } = CONTENT_BY_LOCALE[locale];

  return (
    <section id="assessment" className="scroll-mt-20 bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            {t.assessment.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            {t.assessment.title}
          </h2>
        </header>

        <div className="grid gap-4 lg:grid-cols-3">
          {assessment.map((s, idx) => (
            <article key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 font-serif text-base font-bold text-white">
                {idx + 1}
              </span>
              <h3 className="mt-3 font-serif text-lg font-bold text-slate-900">{s.title}</h3>
              <div className="mt-2 space-y-2.5">
                {s.body.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-slate-700">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <h3 className="mb-5 mt-12 text-center font-serif text-2xl font-bold text-slate-900">
          {t.assessment.rulesTitle}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {rules.map((r, i) => (
            <article key={i} className="rounded-2xl border border-teal-200 bg-teal-50/60 p-5">
              <h4 className="flex items-center gap-2 text-sm font-bold text-teal-900">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-teal-700 text-xs font-bold text-white">
                  {i + 1}
                </span>
                {r.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Safety ------------------------------------ */

const SEVERITY_STYLE: Record<string, { ring: string; head: string; icon: string }> = {
  stop: {
    ring: "border-red-300 bg-red-50",
    head: "text-red-800",
    icon: "bg-red-600",
  },
  caution: {
    ring: "border-amber-300 bg-amber-50",
    head: "text-amber-800",
    icon: "bg-amber-500",
  },
  "see-pro": {
    ring: "border-sky-300 bg-sky-50",
    head: "text-sky-800",
    icon: "bg-sky-600",
  },
};

export function SafetySection() {
  const { locale } = useI18n();
  const t = UI_STRINGS[locale];
  const { safety } = CONTENT_BY_LOCALE[locale];

  return (
    <section id="safety" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            {t.safety.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            {t.safety.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.safety.lead}
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-3">
          {safety.map((c) => {
            const st = SEVERITY_STYLE[c.severity];
            return (
              <article key={c.severity} className={cn("rounded-2xl border p-6", st.ring)}>
                <div className="flex items-center gap-2.5">
                  <span className={cn("flex h-8 w-8 items-center justify-center rounded-full text-white", st.icon)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 9v4M12 17h.01" /><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>
                  </span>
                  <div>
                    <h3 className={cn("font-serif text-lg font-bold", st.head)}>{c.title}</h3>
                    <p className="text-xs font-medium text-slate-500">
                      {t.safety.severityLabels[c.severity]}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {c.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                      <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", st.icon)} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-3xl rounded-xl bg-slate-100 p-4 text-center text-xs leading-relaxed text-slate-600">
          {t.safety.disclaimer}
        </p>
      </div>
    </section>
  );
}
