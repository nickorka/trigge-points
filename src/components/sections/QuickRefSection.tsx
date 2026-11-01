"use client";

import { useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { DialogContentBody } from "@/components/atlas/PointModal";
import { useI18n } from "@/i18n/locale";
import { UI_STRINGS, fill } from "@/i18n/ui";
import {
  LINES_BY_LOCALE,
  LINE_MAP_BY_LOCALE,
  POINTS_BY_LOCALE,
  POINT_MAP_BY_LOCALE,
} from "@/data/localized";
import type { LineId } from "@/data/types";
import { TCM_COLOR, TCM_MERIDIAN_MAP } from "@/data/tcm";
import { regionTerms } from "@/data/regionSearch";
import { cn } from "@/lib/utils";

type LineFilter = LineId | "tcm" | "all";

export function QuickRefSection() {
  const { locale } = useI18n();
  const t = UI_STRINGS[locale];

  const [query, setQuery] = useState("");
  const [lineFilter, setLineFilter] = useState<LineFilter>("all");
  const [viewFilter, setViewFilter] = useState<"all" | "front" | "back">("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const lines = LINES_BY_LOCALE[locale];
  const lineMap = LINE_MAP_BY_LOCALE[locale];
  const points = POINTS_BY_LOCALE[locale];
  const active = activeId ? POINT_MAP_BY_LOCALE[locale][activeId] ?? null : null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return points.filter((p) => {
      if (lineFilter !== "all" && p.lineId !== lineFilter) return false;
      if (viewFilter !== "all" && p.view !== viewFilter) return false;
      if (!q) return true;
      const tcmHay =
        p.tcm && TCM_MERIDIAN_MAP[p.tcm.meridian]
          ? `${p.tcm.pinyin} ${p.tcm.hanzi} ${TCM_MERIDIAN_MAP[p.tcm.meridian].name[locale]} ${p.tcm.functions}`
          : "";
      // localized pain-localization terms: region labels + everyday complaint phrases
      const regionHay = p.referral
        .map((id) => regionTerms(id, locale).join(" "))
        .join(" ");
      const hay = `${p.name} ${p.commonName} ${p.painSummary} ${p.symptoms} ${lineMap[p.lineId].name} ${tcmHay} ${p.referral.join(" ")} ${regionHay}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query, lineFilter, viewFilter, points, lineMap, locale]);

  return (
    <section id="reference" className="scroll-mt-20 bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            {t.quickref.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            {t.quickref.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.quickref.lead}
          </p>
        </header>

        {/* controls */}
        <div className="mb-5 space-y-3">
          <div className="relative mx-auto max-w-xl">
            <svg className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.quickref.searchPlaceholder}
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
              aria-label={t.quickref.searchAria}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <FilterChip active={lineFilter === "all"} onClick={() => setLineFilter("all")} label={t.quickref.allLines} />
            <FilterChip active={lineFilter === "tcm"} onClick={() => setLineFilter("tcm")} label={t.quickref.tcmChip} color={TCM_COLOR} />
            {lines.map((l) => (
              <FilterChip
                key={l.id}
                active={lineFilter === l.id}
                onClick={() => setLineFilter(l.id)}
                label={l.abbr}
                color={l.color}
              />
            ))}
            <span className="mx-1 hidden h-5 w-px bg-slate-300 sm:block" />
            {(["all", "front", "back"] as const).map((v) => (
              <FilterChip
                key={v}
                active={viewFilter === v}
                onClick={() => setViewFilter(v)}
                label={v === "all" ? t.quickref.viewAll : v === "front" ? t.quickref.viewFront : t.quickref.viewBack}
              />
            ))}
          </div>
        </div>

        {/* table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="max-h-[560px] overflow-y-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="sticky top-0 z-10 bg-slate-900 text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">{t.quickref.colPoint}</th>
                  <th className="px-4 py-3 font-semibold">{t.quickref.colMeridian}</th>
                  <th className="px-4 py-3 font-semibold">{t.quickref.colReferral}</th>
                  <th className="px-4 py-3 font-semibold">{t.quickref.colTool}</th>
                  <th className="px-4 py-3 font-semibold">{t.quickref.colView}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => {
                  const l = lineMap[p.lineId];
                  const isTcm = p.lineId === "tcm";
                  const m = isTcm && p.tcm ? TCM_MERIDIAN_MAP[p.tcm.meridian] : null;
                  const dotColor = isTcm ? TCM_COLOR : l.color;
                  return (
                    <tr
                      key={p.id}
                      onClick={() => setActiveId(p.id)}
                      className="cursor-pointer border-t border-slate-100 transition-colors hover:bg-teal-50/60"
                    >
                      <td className="px-4 py-3">
                        <span className="flex items-center gap-2 font-semibold text-slate-800">
                          <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: dotColor }} />
                          {p.name}
                        </span>
                        <span className="ml-4 text-xs italic text-slate-500">{p.commonName}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className="inline-block rounded-full px-2 py-0.5 text-[11px] font-bold"
                          style={{
                            backgroundColor: `${dotColor}15`,
                            color: dotColor,
                          }}
                        >
                          {m ? `${m.abbr} · ${m.hanzi}` : l.abbr}
                        </span>
                      </td>
                      <td className="max-w-[260px] px-4 py-3 text-xs leading-relaxed text-slate-600">
                        {p.painSummary.length > 130 ? p.painSummary.slice(0, 128) + "…" : p.painSummary}
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-600">{p.release.tool}</td>
                      <td className="px-4 py-3 text-xs capitalize text-slate-500">
                        {p.view === "front" ? t.atlas.viewFront : t.atlas.viewBack}
                      </td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-10 text-center text-sm text-slate-500">
                      {fill(t.quickref.noResults, { q: query })}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-slate-500">
          {t.quickref.clickHint}
        </p>
      </div>

      {/* shared dialog */}
      <Dialog.Root open={!!active} onOpenChange={(o) => !o && setActiveId(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm" />
          <Dialog.Content className="fixed inset-x-0 bottom-0 top-auto z-50 max-h-[92vh] overflow-y-auto rounded-t-2xl bg-white p-0 shadow-2xl sm:inset-0 sm:m-auto sm:h-fit sm:max-h-[88vh] sm:max-w-3xl sm:rounded-2xl">
            {active && (
              <DialogContentBody pointId={active.id} onNavigate={setActiveId} onClose={() => setActiveId(null)} />
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  label,
  color,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  color?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
        active
          ? "border-slate-900 bg-slate-900 text-white"
          : "border-slate-300 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900"
      )}
    >
      {color && (
        <span className="mr-1.5 inline-block h-2 w-2 rounded-full align-middle" style={{ backgroundColor: color }} />
      )}
      {label}
    </button>
  );
}
