"use client";

import { useMemo } from "react";
import { BodyFigure } from "@/components/atlas/BodyFigure";
import { LanguageToggle } from "@/components/i18n/LanguageToggle";
import { useI18n } from "@/i18n/locale";
import { UI_STRINGS, fill } from "@/i18n/ui";
import { LINES_BY_LOCALE, POINT_MAP_BY_LOCALE, POINTS_BY_LOCALE } from "@/data/localized";
import { TCM_MERIDIANS } from "@/data/tcm";
import type { TriggerPoint } from "@/data/types";

export function SiteHeader() {
  const { locale } = useI18n();
  const t = UI_STRINGS[locale];

  const NAV = [
    { href: "#atlas", label: t.nav.atlas },
    { href: "#meridians", label: t.nav.meridians },
    { href: "#primer", label: t.nav.science },
    { href: "#assessment", label: t.nav.howTo },
    { href: "#safety", label: t.nav.safety },
    { href: "#reference", label: t.nav.reference },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700 font-serif text-sm font-bold text-white">
            AT
          </span>
          <span className="font-serif text-lg font-bold text-slate-900">
            Fascia Atlas
            <span className="ml-2 hidden text-xs font-medium text-slate-500 sm:inline">
              {t.headerTagline}
            </span>
          </span>
        </a>
        <nav
          className="-mx-2 max-w-[55vw] overflow-x-auto px-2"
          aria-label={t.navAria}
        >
          <ul className="flex gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="whitespace-nowrap rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-teal-50 hover:text-teal-800 sm:text-sm"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}

export function Hero() {
  const { locale } = useI18n();
  const t = UI_STRINGS[locale];
  const lines = LINES_BY_LOCALE[locale];
  const points = POINTS_BY_LOCALE[locale];
  const badge = fill(t.hero.badge, {
    points: String(points.length),
    lines: String(lines.length),
    meridians: String(TCM_MERIDIANS.length),
  });

  const HERO_MARKERS = useMemo(
    () =>
      ["suboccipitals", "upper-trapezius", "pec-major-sternal", "rectus-abdominis", "tibialis-anterior"]
        .map((id) => POINT_MAP_BY_LOCALE[locale][id])
        .filter(Boolean) as TriggerPoint[],
    [locale]
  );

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:py-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1.5 text-xs font-semibold text-teal-800">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-600" />
            {badge}
          </span>
          <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl">
            {t.hero.titleA}
            <span className="block text-teal-800">{t.hero.titleB}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {t.hero.lead}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#atlas"
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-800"
            >
              {t.hero.ctaMap}
            </a>
            <a
              href="#primer"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-teal-600 hover:text-teal-800"
            >
              {t.hero.ctaScience}
            </a>
          </div>
          <dl className="mt-9 grid max-w-lg grid-cols-3 gap-4">
            {[
              [String(lines.length), t.hero.statLines],
              [String(points.length), t.hero.statPoints],
              ["4", t.hero.statMethods],
            ].map(([n, label]) => (
              <div key={label} className="rounded-xl border border-slate-200 bg-white/70 p-3.5">
                <dt className="font-serif text-2xl font-bold text-teal-800">{n}</dt>
                <dd className="mt-0.5 text-xs leading-snug text-slate-500">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto hidden max-w-sm lg:block">
          <div className="absolute inset-0 -z-10 rounded-full bg-teal-100/50 blur-3xl" />
          <BodyFigure
            view="front"
            markers={HERO_MARKERS}
            className="h-[540px] w-auto"
          />
          <p className="mt-1 text-center text-xs text-slate-500">
            {t.hero.figureCaption}
          </p>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const { locale } = useI18n();
  const t = UI_STRINGS[locale];

  return (
    <footer className="mt-auto bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row">
          <div>
            <p className="font-serif text-lg font-bold text-white">Fascia Atlas</p>
            <p className="mt-1 max-w-md text-xs leading-relaxed text-slate-400">
              {t.footer.aboutBody}
            </p>
          </div>
          <div className="text-xs text-slate-400">
            <p className="font-semibold text-slate-200">{t.footer.safetyTitle}</p>
            <p className="mt-1 max-w-sm leading-relaxed">{t.footer.safetyBody}</p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-5 text-[11px] text-slate-500">
          {t.footer.credits}
        </div>
      </div>
    </footer>
  );
}
