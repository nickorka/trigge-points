"use client";

import { useMemo, useState } from "react";
import { BodyFigure } from "./BodyFigure";
import { PointModalTrigger } from "./PointModal";
import { PainFinder, type PainLocation } from "./PainFinder";
import { useI18n } from "@/i18n/locale";
import { UI_STRINGS, fill } from "@/i18n/ui";
import {
  LINES_BY_LOCALE,
  LINE_MAP_BY_LOCALE,
  POINTS_BY_LOCALE,
  POINT_MAP_BY_LOCALE,
} from "@/data/localized";
import { TCM_COLOR, TCM_MERIDIANS, TCM_MERIDIAN_MAP, tcmMeridianName } from "@/data/tcm";
import type { BodyView, LineId, TriggerPoint } from "@/data/types";
import { cn } from "@/lib/utils";

type PointSystem = "all" | "at" | "tcm";

export function BodyMap() {
  const { locale } = useI18n();
  const t = UI_STRINGS[locale];

  const [view, setView] = useState<BodyView>("front");
  const [system, setSystem] = useState<PointSystem>("all");
  const [line, setLine] = useState<LineId | "all">("all");
  const [meridian, setMeridian] = useState<string>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [painLoc, setPainLoc] = useState<PainLocation | null>(null);

  const lines = LINES_BY_LOCALE[locale];
  const lineMap = LINE_MAP_BY_LOCALE[locale];
  const points = POINTS_BY_LOCALE[locale];
  const selected = selectedId ? POINT_MAP_BY_LOCALE[locale][selectedId] ?? null : null;

  const visiblePoints = useMemo(() => {
    return points.filter((p) => {
      if (painLoc && !p.referral.some((r) => painLoc.regionIds.includes(r)))
        return false;
      if (p.lineId === "tcm") {
        if (system === "at") return false;
        if (system === "tcm") return meridian === "all" || p.tcm?.meridian === meridian;
        return line === "all"; // system "all": acupoints show only when no line is focused
      }
      if (system === "tcm") return false;
      return line === "all" || p.lineId === line;
    });
  }, [points, system, line, meridian, painLoc]);

  const activeRegions = useMemo(() => {
    if (selected) return selected.referral;
    // with a pain-location filter, show where the referred pain lands
    return painLoc ? painLoc.regionIds : [];
  }, [selected, painLoc]);

  /** If none of the given points sits on the current view, switch to the majority view. */
  const ensureView = (pts: TriggerPoint[]) => {
    const onCurrent = pts.filter((p) => p.view === view).length;
    if (onCurrent === 0 && pts.length > 0) {
      const frontCount = pts.filter((p) => p.view === "front").length;
      setView(frontCount >= pts.length - frontCount ? "front" : "back");
    }
  };

  const handleSelect = (id: string, pointView: BodyView) => {
    setSelectedId(id);
    setView(pointView);
  };

  const handleLineSelect = (l: LineId | "all") => {
    setLine(l);
    setSelectedId(null);
    if (system !== "tcm") {
      const pts = points.filter(
        (p) => p.lineId !== "tcm" && (l === "all" || p.lineId === l)
      );
      ensureView(pts);
    }
  };

  const handleSystemSelect = (s: PointSystem) => {
    setSystem(s);
    setSelectedId(null);
    const pts = points.filter((p) => {
      if (p.lineId === "tcm") {
        if (s === "at") return false;
        if (s === "tcm") return true;
        return line === "all";
      }
      return s !== "tcm" && (line === "all" || p.lineId === line);
    });
    ensureView(pts);
  };

  const handleMeridianSelect = (m: string) => {
    setMeridian(m);
    setSelectedId(null);
    ensureView(
      points.filter((p) => p.lineId === "tcm" && (m === "all" || p.tcm?.meridian === m))
    );
  };

  const handleLocationSelect = (loc: PainLocation) => {
    setPainLoc(loc);
    setSelectedId(null);
    ensureView(
      points.filter((p) => p.referral.some((r) => loc.regionIds.includes(r)))
    );
  };

  const handleFinderPointSelect = (id: string) => {
    const p = POINT_MAP_BY_LOCALE[locale][id];
    if (p) {
      setSelectedId(p.id);
      setView(p.view);
    }
  };

  // Badge + accent color above the figure
  let badgeColor = "#0f766e";
  let badgeText = t.atlas.allSystemsBadge;
  if (system === "tcm") {
    badgeColor = TCM_COLOR;
    badgeText = meridian === "all" ? t.atlas.tcmBadge : tcmMeridianName(meridian, locale);
  } else if (line !== "all") {
    badgeColor = lineMap[line].color;
    badgeText = lineMap[line].name;
  }

  const selectedIsTcm = selected?.lineId === "tcm";

  return (
    <section id="atlas" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            {t.atlas.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            {t.atlas.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.atlas.lead}
          </p>
        </header>

        {/* pain-localization search */}
        <div className="mx-auto mb-6 w-full max-w-xl">
          <PainFinder
            active={painLoc}
            activeCount={visiblePoints.length}
            onSelectLocation={handleLocationSelect}
            onClearLocation={() => setPainLoc(null)}
            onSelectPoint={handleFinderPointSelect}
          />
        </div>

        {/* point-system selector */}
        <div
          className="mb-3 flex justify-center"
          role="group"
          aria-label={t.atlas.systemAria}
        >
          <div className="flex rounded-xl border border-slate-300 bg-white p-1 shadow-sm">
            {(
              [
                ["all", t.atlas.systemAll],
                ["at", t.atlas.systemAt],
                ["tcm", t.atlas.systemTcm],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleSystemSelect(key)}
                aria-pressed={system === key}
                className={cn(
                  "rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors sm:text-sm",
                  system === key
                    ? key === "tcm"
                      ? "text-white"
                      : "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                )}
                style={
                  system === key && key === "tcm"
                    ? { backgroundColor: TCM_COLOR }
                    : undefined
                }
              >
                {key === "tcm" && (
                  <span
                    className="mr-1.5 inline-block h-2 w-2 rounded-full align-middle"
                    style={{ backgroundColor: system === key ? "#ffffff" : TCM_COLOR }}
                  />
                )}
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* line / meridian chips */}
        <div className="mb-6 -mx-4 overflow-x-auto px-4 pb-2">
          {system !== "tcm" ? (
            <div className="flex min-w-max gap-2">
              <button
                onClick={() => handleLineSelect("all")}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors sm:text-sm",
                  line === "all"
                    ? "border-teal-700 bg-teal-700 text-white"
                    : "border-slate-300 bg-white text-slate-600 hover:border-teal-600 hover:text-teal-700"
                )}
              >
                {t.atlas.allLines}
              </button>
              {lines.map((l) => (
                <button
                  key={l.id}
                  onClick={() => handleLineSelect(l.id as LineId)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors sm:text-sm",
                    line === l.id ? "text-white" : "bg-white text-slate-600 hover:text-slate-900"
                  )}
                  style={
                    line === l.id
                      ? { backgroundColor: l.color, borderColor: l.color }
                      : { borderColor: "#cbd5e1" }
                  }
                  title={l.name}
                >
                  <span className="mr-1.5 inline-block h-2 w-2 rounded-full align-middle" style={{ backgroundColor: line === l.id ? "#ffffff" : l.color }} />
                  {l.abbr}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex min-w-max gap-2">
              <button
                onClick={() => handleMeridianSelect("all")}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors sm:text-sm",
                  meridian === "all"
                    ? "text-white"
                    : "border-slate-300 bg-white text-slate-600 hover:border-sky-700 hover:text-sky-800"
                )}
                style={
                  meridian === "all"
                    ? { backgroundColor: TCM_COLOR, borderColor: TCM_COLOR }
                    : undefined
                }
              >
                {t.atlas.meridiansAll}
              </button>
              {TCM_MERIDIANS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleMeridianSelect(m.id)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors sm:text-sm",
                    meridian === m.id
                      ? "text-white"
                      : "border-slate-300 bg-white text-slate-600 hover:text-slate-900"
                  )}
                  style={
                    meridian === m.id
                      ? { backgroundColor: TCM_COLOR, borderColor: TCM_COLOR }
                      : { borderColor: "#cbd5e1" }
                  }
                  title={tcmMeridianName(m.id, locale)}
                >
                  <span className="mr-1.5 font-serif">{m.hanzi}</span>
                  {m.abbr}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* ---------- body figure ---------- */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex rounded-lg border border-slate-300 p-0.5" role="tablist" aria-label={t.atlas.viewAria}>
                {(["front", "back"] as BodyView[]).map((v) => (
                  <button
                    key={v}
                    role="tab"
                    aria-selected={view === v}
                    onClick={() => setView(v)}
                    className={cn(
                      "rounded-md px-3.5 py-1.5 text-xs font-semibold capitalize transition-colors sm:text-sm",
                      view === v
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {v === "front" ? t.atlas.viewFront : t.atlas.viewBack}
                  </button>
                ))}
              </div>
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: `${badgeColor}14`, color: badgeColor }}
              >
                {badgeText}
              </span>
            </div>

            <div className="flex justify-center">
              <BodyFigure
                view={view}
                markers={visiblePoints}
                selectedId={selectedId}
                hoveredId={hovered}
                activeRegions={activeRegions}
                onMarkerClick={(id) => {
                  const p = POINT_MAP_BY_LOCALE[locale][id];
                  if (p) setSelectedId(p.id);
                }}
                onMarkerHover={setHovered}
                className="h-[520px] w-auto max-w-full sm:h-[600px]"
              />
            </div>

            <p className="mt-2 text-center text-xs text-slate-500">
              <span className="mr-1 inline-block h-2.5 w-2.5 rounded-full bg-red-500/60 align-middle" />
              {t.atlas.legendCaption}
            </p>
          </div>

          {/* ---------- point list + preview ---------- */}
          <div className="flex flex-col gap-4">
            {selected && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span
                      className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide"
                      style={{
                        backgroundColor: `${lineMap[selected.lineId].color}18`,
                        color: lineMap[selected.lineId].color,
                      }}
                    >
                      {selectedIsTcm && selected.tcm
                        ? `${selected.tcm.hanzi} · ${tcmMeridianName(selected.tcm.meridian, locale)}`
                        : `${lineMap[selected.lineId].abbr} · ${lineMap[selected.lineId].name}`}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-bold text-slate-900">
                      {selected.name}
                    </h3>
                    <p className="text-sm italic text-teal-700">{selected.commonName}</p>
                  </div>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                    aria-label={t.atlas.clearAria}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
                  </button>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{selected.painSummary}</p>
                <PointModalTrigger key={selected.id} point={selected} label={t.atlas.protocolCta} />
              </div>
            )}

            <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">
                  {painLoc
                    ? fill(t.painFinder.listTitle, { label: painLoc.label[locale] })
                    : system === "tcm"
                    ? meridian === "all"
                      ? t.atlas.tcmPointsTitle
                      : fill(t.atlas.pointsOnMeridian, { meridian: tcmMeridianName(meridian, locale) })
                    : line === "all"
                      ? t.atlas.allPointsTitle
                      : fill(t.atlas.pointsOnLine, { line: lineMap[line].name })}
                </h3>
                <span className="text-xs font-medium text-slate-500">
                  {visiblePoints.length} {t.pointsWord(visiblePoints.length)}
                </span>
              </div>
              <div className="grid max-h-[420px] gap-2 overflow-y-auto pr-1 sm:grid-cols-2 lg:max-h-[520px]">
                {visiblePoints.map((p) => {
                  const isTcm = p.lineId === "tcm";
                  const m = isTcm && p.tcm ? TCM_MERIDIAN_MAP[p.tcm.meridian] : null;
                  const dotColor = isTcm ? TCM_COLOR : lineMap[p.lineId].color;
                  const sub = isTcm && m ? `${m.abbr} · ${p.commonName}` : `${lineMap[p.lineId].abbr} · ${p.commonName}`;
                  const isSel = selectedId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleSelect(p.id, p.view)}
                      onMouseEnter={() => setHovered(p.id)}
                      onMouseLeave={() => setHovered(null)}
                      className={cn(
                        "group flex items-center gap-2.5 rounded-xl border p-2.5 text-left transition-all",
                        isSel
                          ? isTcm
                            ? "border-sky-700 bg-sky-50 shadow-sm"
                            : "border-teal-600 bg-teal-50 shadow-sm"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                      )}
                    >
                      <span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                        style={{ backgroundColor: dotColor }}
                      >
                        ✕
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-slate-800">
                          {p.name}
                        </span>
                        <span className="block truncate text-xs text-slate-500">
                          {sub}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
