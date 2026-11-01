"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/i18n/locale";
import { UI_STRINGS, fill } from "@/i18n/ui";
import { POINTS_BY_LOCALE, LINE_MAP_BY_LOCALE } from "@/data/localized";
import { TCM_COLOR, TCM_MERIDIAN_MAP } from "@/data/tcm";
import {
  PAIN_PRESETS,
  REGION_KEYWORDS,
  painLocations,
  regionTerms,
  termsMatch,
  type PainLocation,
} from "@/data/regionSearch";

export type { PainLocation } from "@/data/regionSearch";
import { cn } from "@/lib/utils";

/**
 * "Where does it hurt?" — pain-localization search.
 * Users type where they feel pain; the dropdown offers matching pain
 * locations (referral zones) and named points. Picking a location filters
 * the body map to every point that sends pain there.
 */

export interface PainFinderProps {
  active: PainLocation | null;
  activeCount: number;
  onSelectLocation: (loc: PainLocation) => void;
  onClearLocation: () => void;
  onSelectPoint: (id: string) => void;
}

interface DropdownItem {
  key: string;
  kind: "location" | "point";
  label: string;
  sub?: string;
  sub2?: string;
  count?: number;
  color: string;
  location?: PainLocation;
  pointId?: string;
}

export function PainFinder({
  active,
  activeCount,
  onSelectLocation,
  onClearLocation,
  onSelectPoint,
}: PainFinderProps) {
  const { locale } = useI18n();
  const t = UI_STRINGS[locale];
  const lineMap = LINE_MAP_BY_LOCALE[locale];
  const points = POINTS_BY_LOCALE[locale];

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* ---------- searchable location index ---------- */
  const locations = useMemo(() => painLocations(locale), [locale]);

  const matchedLocations = useMemo(() => {
    const q = query.trim();
    if (!q) return [];
    return locations.filter((loc) =>
      termsMatch(
        [
          loc.label[locale],
          ...new Set(
            loc.regionIds.flatMap((id) => REGION_KEYWORDS[id]?.[locale] ?? [])
          ),
        ],
        q
      )
    );
  }, [query, locations, locale]);

  const matchedPoints = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return points
      .filter((p) =>
        `${p.name} ${p.commonName} ${p.tcm?.pinyin ?? ""}`
          .toLowerCase()
          .includes(q)
      )
      .slice(0, 6);
  }, [query, points]);

  const items: DropdownItem[] = useMemo(() => {
    const locs: DropdownItem[] = matchedLocations.slice(0, 8).map((loc) => {
      const count = points.filter((p) =>
        p.referral.some((r) => loc.regionIds.includes(r))
      ).length;
      return {
        key: `loc-${loc.key}`,
        kind: "location",
        label: loc.label[locale],
        count,
        color: "#ef4444",
        location: loc,
      };
    });
    const pts: DropdownItem[] = matchedPoints.map((p) => {
      const isTcm = p.lineId === "tcm";
      const m = isTcm && p.tcm ? TCM_MERIDIAN_MAP[p.tcm.meridian] : null;
      return {
        key: `pt-${p.id}`,
        kind: "point" as const,
        label: p.name,
        sub: p.commonName,
        sub2: m ? `${m.abbr} · ${m.hanzi}` : lineMap[p.lineId].abbr,
        color: isTcm ? TCM_COLOR : lineMap[p.lineId].color,
        pointId: p.id,
      };
    });
    return [...locs, ...pts];
  }, [matchedLocations, matchedPoints, points, lineMap, locale]);

  /* reset cursor whenever the list changes */
  const cursorIndex = Math.min(cursor, Math.max(items.length - 1, 0));

  /* click-outside closes the dropdown */
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const pick = (item: DropdownItem) => {
    setOpen(false);
    setQuery("");
    inputRef.current?.blur();
    if (item.kind === "location" && item.location) onSelectLocation(item.location);
    if (item.kind === "point" && item.pointId) onSelectPoint(item.pointId);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setCursor(Math.min(cursorIndex + 1, items.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor(Math.max(cursorIndex - 1, 0));
    } else if (e.key === "Enter" && open && items[cursorIndex]) {
      e.preventDefault();
      pick(items[cursorIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const q = query.trim();
  const showDropdown = open && q.length >= 2;

  return (
    <div ref={rootRef} className="relative">
      {/* title + active chip */}
      <div className="mb-1.5 flex min-h-[28px] flex-wrap items-center justify-between gap-2">
        <div className="flex items-baseline gap-2">
          <h3 className="text-sm font-bold text-slate-900">{t.painFinder.title}</h3>
          <span className="hidden text-xs text-slate-500 sm:inline">{t.painFinder.presetsLabel}</span>
        </div>
        {active && (
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 py-1 pl-2.5 pr-1 text-xs font-semibold text-red-700"
            aria-label={t.painFinder.activeAria}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 21s-7-5.1-7-11a7 7 0 0 1 14 0c0 5.9-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
            {active.label[locale]}
            <span className="font-normal text-red-500">
              · {fill(t.painFinder.pointsHere, { n: String(activeCount), word: t.pointsWord(activeCount) })}
            </span>
            <button
              onClick={() => {
                onClearLocation();
                inputRef.current?.focus();
              }}
              className="rounded-full p-0.5 hover:bg-red-100"
              aria-label={t.painFinder.clearAria}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </span>
        )}
      </div>

      {/* input */}
      <div className="relative">
        <svg className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
        <input
          ref={inputRef}
          type="search"
          role="combobox"
          aria-expanded={showDropdown}
          aria-controls="painfinder-listbox"
          aria-label={t.painFinder.inputAria}
          aria-autocomplete="list"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCursor(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={t.painFinder.placeholder}
          className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-800 shadow-sm placeholder:text-slate-400 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/20"
        />
      </div>

      {/* preset chips */}
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        {PAIN_PRESETS.map((preset) => {
          const isActive = active?.key === preset.key;
          return (
            <button
              key={preset.id}
              onClick={() => {
                setOpen(false);
                setQuery("");
                onSelectLocation({ key: preset.key, label: preset.label, regionIds: preset.regionIds });
              }}
              className={cn(
                "rounded-full border px-2.5 py-1 text-[11px] font-semibold transition-colors",
                isActive
                  ? "border-red-500 bg-red-500 text-white"
                  : "border-slate-300 bg-white text-slate-600 hover:border-red-400 hover:text-red-700"
              )}
            >
              {preset.label[locale]}
            </button>
          );
        })}
      </div>

      {/* dropdown */}
      {showDropdown && (
        <div
          id="painfinder-listbox"
          role="listbox"
          aria-label={t.painFinder.inputAria}
          className="absolute inset-x-0 top-full z-30 mt-1.5 max-h-[340px] overflow-y-auto rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl"
        >
          {items.length === 0 && (
            <p className="px-3 py-3 text-sm text-slate-500">
              {fill(t.painFinder.noMatches, { q: query.trim() })}
            </p>
          )}

          {items.some((i) => i.kind === "location") && (
            <p className="px-2.5 pb-1 pt-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-400">
              {t.painFinder.locationsGroup}
            </p>
          )}
          {items.map((item, i) =>
            item.kind === "location" ? (
              <button
                key={item.key}
                role="option"
                aria-selected={cursorIndex === i}
                onMouseDown={(e) => {
                  e.preventDefault();
                  pick(item);
                }}
                onMouseEnter={() => setCursor(i)}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors",
                  cursorIndex === i ? "bg-red-50" : "hover:bg-slate-50"
                )}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-600">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 21s-7-5.1-7-11a7 7 0 0 1 14 0c0 5.9-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-800">
                  {item.label}
                </span>
                <span className="shrink-0 text-xs text-slate-500">
                  {fill(t.painFinder.pointsHere, {
                    n: String(item.count ?? 0),
                    word: t.pointsWord(item.count ?? 0),
                  })}
                </span>
              </button>
            ) : null
          )}

          {items.some((i) => i.kind === "point") && (
            <p className="px-2.5 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">
              {t.painFinder.pointsGroup}
            </p>
          )}
          {items.map((item, i) =>
            item.kind === "point" ? (
              <button
                key={item.key}
                role="option"
                aria-selected={cursorIndex === i}
                onMouseDown={(e) => {
                  e.preventDefault();
                  pick(item);
                }}
                onMouseEnter={() => setCursor(i)}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors",
                  cursorIndex === i ? "bg-teal-50" : "hover:bg-slate-50"
                )}
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  style={{ backgroundColor: item.color }}
                >
                  ✕
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-800">
                  {item.label}
                  <span className="ml-2 text-xs font-normal italic text-slate-500">{item.sub}</span>
                </span>
                <span className="shrink-0 text-xs text-slate-400">{item.sub2}</span>
              </button>
            ) : null
          )}
        </div>
      )}

      {/* helper sub-line */}
      <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{t.painFinder.sub}</p>
    </div>
  );
}
