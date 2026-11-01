"use client";

import { useId } from "react";
import type { BodyView, TriggerPoint } from "@/data/types";
import { REGION_MAP } from "@/data/regions";
import { LINE_MAP_BY_LOCALE } from "@/data/localized";
import { useI18n } from "@/i18n/locale";
import { UI_STRINGS } from "@/i18n/ui";

/* ------------------------------------------------------------------ */
/*  Silhouette generation (Catmull-Rom smoothing)                      */
/* ------------------------------------------------------------------ */

type Pt = [number, number];

// Right half of the body from crown to inner thigh (viewBox 220 x 480, center x = 110)
const RIGHT_HALF: Pt[] = [
  [110, 6], [131, 24], [133, 44], [126, 56], [120, 63], [119, 72],
  [133, 80], [157, 88], [162, 104], [147, 112], [156, 146], [162, 190],
  [166, 218], [157, 240], [151, 212], [147, 180], [145, 152], [139, 116],
  [133, 150], [128, 194], [133, 238], [135, 296], [125, 350], [128, 390],
  [117, 438], [114, 450], [127, 460], [120, 470], [112, 472], [108, 440],
  [104, 390], [102, 350], [103, 290],
];

const FULL_OUTLINE: Pt[] = [
  ...RIGHT_HALF,
  [110, 266], // crotch notch
  ...RIGHT_HALF.slice(0, -1).map(([x, y]) => [220 - x, y] as Pt).reverse(),
];

function smoothClosedPath(pts: Pt[]): string {
  const n = pts.length;
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return `${d} Z`;
}

const BODY_PATH = smoothClosedPath(FULL_OUTLINE);

/* ------------------------------------------------------------------ */
/*  Interior anatomy hints                                             */
/* ------------------------------------------------------------------ */

function FrontHints() {
  return (
    <g stroke="#94a3b8" strokeWidth="1" fill="none" opacity="0.45" strokeLinecap="round">
      <path d="M 82,93 Q 96,86 108,90" />
      <path d="M 138,93 Q 124,86 112,90" />
      <line x1="110" y1="95" x2="110" y2="138" />
      <line x1="110" y1="144" x2="110" y2="184" opacity="0.6" />
      <circle cx="110" cy="196" r="1.8" fill="#94a3b8" stroke="none" />
      <ellipse cx="98" cy="351" rx="3.4" ry="4.8" />
      <ellipse cx="122" cy="351" rx="3.4" ry="4.8" />
    </g>
  );
}

function BackHints() {
  return (
    <g stroke="#94a3b8" strokeWidth="1" fill="none" opacity="0.45" strokeLinecap="round">
      <path d="M 110,74 Q 108,168 110,258" />
      <path d="M 116,96 Q 130,90 136,95 Q 139,112 131,135 Q 119,142 114,127 Z" />
      <path d="M 104,96 Q 90,90 84,95 Q 81,112 89,135 Q 101,142 106,127 Z" />
      <path d="M 101,242 L 119,242 L 110,270 Z" />
      <path d="M 92,272 Q 110,285 128,272" />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/*  Body figure                                                        */
/* ------------------------------------------------------------------ */

export interface BodyFigureProps {
  view: BodyView;
  activeRegions?: string[];
  markers?: TriggerPoint[];
  selectedId?: string | null;
  hoveredId?: string | null;
  onMarkerClick?: (id: string) => void;
  onMarkerHover?: (id: string | null) => void;
  className?: string;
  compact?: boolean;
}

export function BodyFigure({
  view,
  activeRegions = [],
  markers = [],
  selectedId = null,
  hoveredId = null,
  onMarkerClick,
  onMarkerHover,
  className,
  compact = false,
}: BodyFigureProps) {
  const uid = useId().replace(/[:]/g, "");
  const blurId = `blur-${uid}`;
  const { locale } = useI18n();
  const t = UI_STRINGS[locale];
  const lineMap = LINE_MAP_BY_LOCALE[locale];
  const visibleRegions = activeRegions
    .map((id) => REGION_MAP[id])
    .filter((r) => r && r.view === view);

  const visibleMarkers = markers.filter((p) => p.view === view);

  return (
    <svg
      viewBox="0 0 220 480"
      className={className}
      role="img"
      aria-label={view === "front" ? t.figure.ariaFront : t.figure.ariaBack}
    >
      <defs>
        <filter id={blurId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5.5" />
        </filter>
      </defs>

      {/* ground shadow */}
      <ellipse cx="110" cy="476" rx="42" ry="4" fill="#e2e8f0" />

      {/* referral zones (behind body fill for softness) */}
      <g>
        {visibleRegions.map((r) => (
          <ellipse
            key={`pre-${r.id}`}
            cx={r.cx}
            cy={r.cy}
            rx={r.rx + 2}
            ry={r.ry + 2}
            transform={r.rot ? `rotate(${r.rot} ${r.cx} ${r.cy})` : undefined}
            fill="#ef4444"
            opacity="0.28"
            filter={`url(#${blurId})`}
          />
        ))}
      </g>

      {/* body */}
      <path d={BODY_PATH} fill="#ffffff" stroke="#475569" strokeWidth="1.4" />
      {view === "front" ? <FrontHints /> : <BackHints />}

      {/* referral zones (on body) */}
      <g>
        {visibleRegions.map((r) => (
          <g key={r.id}>
            <ellipse
              cx={r.cx}
              cy={r.cy}
              rx={r.rx}
              ry={r.ry}
              transform={r.rot ? `rotate(${r.rot} ${r.cx} ${r.cy})` : undefined}
              fill="#ef4444"
              opacity="0.34"
              filter={`url(#${blurId})`}
            />
            <ellipse
              cx={r.cx}
              cy={r.cy}
              rx={r.rx * 0.62}
              ry={r.ry * 0.62}
              transform={r.rot ? `rotate(${r.rot} ${r.cx} ${r.cy})` : undefined}
              fill="#dc2626"
              opacity="0.28"
              filter={`url(#${blurId})`}
            />
          </g>
        ))}
      </g>

      {/* markers */}
      <g>
        {visibleMarkers.map((p) => {
          const color = lineMap[p.lineId]?.color ?? "#334155";
          const isSel = p.id === selectedId;
          const isHover = p.id === hoveredId;
          const dim = selectedId !== null && !isSel && markers.length > 1;
          const labelSide = p.marker.x >= 110 ? -1 : 1;
          return (
            <g
              key={p.id}
              className={onMarkerClick ? "cursor-pointer" : undefined}
              onClick={onMarkerClick ? () => onMarkerClick(p.id) : undefined}
              onMouseEnter={onMarkerHover ? () => onMarkerHover(p.id) : undefined}
              onMouseLeave={onMarkerHover ? () => onMarkerHover(null) : undefined}
              opacity={dim ? 0.35 : 1}
              tabIndex={onMarkerClick ? 0 : undefined}
              role={onMarkerClick ? "button" : undefined}
              aria-label={onMarkerClick ? `Trigger point: ${p.name}` : undefined}
              onKeyDown={
                onMarkerClick
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") onMarkerClick(p.id);
                    }
                  : undefined
              }
            >
              {isSel && (
                <circle
                  className="tp-pulse"
                  cx={p.marker.x}
                  cy={p.marker.y}
                  r="6.5"
                  fill="none"
                  stroke={color}
                  strokeWidth="2"
                />
              )}
              <circle
                cx={p.marker.x}
                cy={p.marker.y}
                r={isSel ? 5.4 : compact ? 3.4 : 4.2}
                fill={color}
                stroke="#ffffff"
                strokeWidth={isHover || isSel ? 2 : 1.4}
              />
              <line
                x1={p.marker.x - 2}
                y1={p.marker.y - 2}
                x2={p.marker.x + 2}
                y2={p.marker.y + 2}
                stroke="#ffffff"
                strokeWidth="1.1"
                pointerEvents="none"
              />
              <line
                x1={p.marker.x - 2}
                y1={p.marker.y + 2}
                x2={p.marker.x + 2}
                y2={p.marker.y - 2}
                stroke="#ffffff"
                strokeWidth="1.1"
                pointerEvents="none"
              />
              {(isSel || isHover) && !compact && (
                <text
                  x={p.marker.x + labelSide * 9}
                  y={p.marker.y + 3}
                  textAnchor={labelSide === 1 ? "start" : "end"}
                  fontSize="8.5"
                  fill="#1e293b"
                  fontWeight="600"
                  className="select-none"
                  pointerEvents="none"
                >
                  {p.name.length > 26 ? p.name.slice(0, 24) + "…" : p.name}
                </text>
              )}
              <title>{`${p.name} — ${lineMap[p.lineId]?.name ?? ""}`}</title>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
