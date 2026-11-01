import type { Locale } from "@/i18n/locale";
import type { MyofascialLine, TriggerPoint } from "./types";
import { TRIGGER_POINTS } from "./points";
import { LINES } from "./lines";
import {
  ASSESSMENT_SECTIONS,
  FASCIA_PRIMER,
  RELEASE_RULES,
  SAFETY_CARDS,
  type ContentSection,
  type SafetyCard,
} from "./content";
import { SBL_POINTS_RU } from "./i18n/ru/points-sbl";
import { SFL_POINTS_RU } from "./i18n/ru/points-sfl";
import { LL_POINTS_RU } from "./i18n/ru/points-ll";
import { SPL_POINTS_RU } from "./i18n/ru/points-spl";
import { ARM_POINTS_RU } from "./i18n/ru/points-arms";
import { DEEP_POINTS_RU } from "./i18n/ru/points-deep";
import { TCM_POINTS_RU } from "./i18n/ru/points-tcm";
import { LINES_RU } from "./i18n/ru/lines";
import {
  ASSESSMENT_SECTIONS_RU,
  FASCIA_PRIMER_RU,
  RELEASE_RULES_RU,
  SAFETY_CARDS_RU,
} from "./i18n/ru/content";
import type { RuPointText } from "./i18n/ru/types";
import { TCM_LINE_BY_LOCALE } from "./tcm";

/* ------------------------------------------------------------------ */
/* Trigger points                                                      */
/* ------------------------------------------------------------------ */

const RU_POINT_OVERLAYS: Record<string, RuPointText> = {
  ...SBL_POINTS_RU,
  ...SFL_POINTS_RU,
  ...LL_POINTS_RU,
  ...SPL_POINTS_RU,
  ...ARM_POINTS_RU,
  ...DEEP_POINTS_RU,
  ...TCM_POINTS_RU,
};

const warned = new Set<string>();
function warnOnce(msg: string) {
  if (!warned.has(msg)) {
    warned.add(msg);
    if (process.env.NODE_ENV !== "production") console.warn(msg);
  }
}

export const POINTS_BY_LOCALE: Record<Locale, TriggerPoint[]> = {
  en: TRIGGER_POINTS,
  ru: TRIGGER_POINTS.map((p) => {
    const ru = RU_POINT_OVERLAYS[p.id];
    if (!ru) {
      warnOnce(`[i18n] no RU translation for trigger point "${p.id}" — falling back to EN`);
      return p;
    }
    return { ...p, ...ru };
  }),
};

export const POINT_MAP_BY_LOCALE: Record<Locale, Record<string, TriggerPoint>> = {
  en: Object.fromEntries(POINTS_BY_LOCALE.en.map((p) => [p.id, p])),
  ru: Object.fromEntries(POINTS_BY_LOCALE.ru.map((p) => [p.id, p])),
};

/* ------------------------------------------------------------------ */
/* Myofascial lines                                                    */
/* ------------------------------------------------------------------ */

export const LINES_BY_LOCALE: Record<Locale, MyofascialLine[]> = {
  en: LINES,
  ru: LINES.map((l) => {
    const ru = LINES_RU[l.id];
    if (!ru) {
      warnOnce(`[i18n] no RU translation for line "${l.id}" — falling back to EN`);
      return l;
    }
    return { ...l, ...ru };
  }),
};

export const LINE_MAP_BY_LOCALE: Record<Locale, Record<string, MyofascialLine>> = {
  en: Object.fromEntries(
    [...LINES_BY_LOCALE.en, TCM_LINE_BY_LOCALE.en].map((l) => [l.id, l])
  ),
  ru: Object.fromEntries(
    [...LINES_BY_LOCALE.ru, TCM_LINE_BY_LOCALE.ru].map((l) => [l.id, l])
  ),
};

/* ------------------------------------------------------------------ */
/* Educational content                                                 */
/* ------------------------------------------------------------------ */

export interface LocalizedContent {
  primer: ContentSection[];
  assessment: ContentSection[];
  safety: SafetyCard[];
  rules: { title: string; body: string }[];
}

export const CONTENT_BY_LOCALE: Record<Locale, LocalizedContent> = {
  en: {
    primer: FASCIA_PRIMER,
    assessment: ASSESSMENT_SECTIONS,
    safety: SAFETY_CARDS,
    rules: RELEASE_RULES,
  },
  ru: {
    primer: FASCIA_PRIMER_RU,
    assessment: ASSESSMENT_SECTIONS_RU,
    safety: SAFETY_CARDS_RU,
    rules: RELEASE_RULES_RU,
  },
};

/* ------------------------------------------------------------------ */
/* Convenience accessors                                               */
/* ------------------------------------------------------------------ */

export const pointsByLineFor = (locale: Locale, lineId: string): TriggerPoint[] =>
  POINTS_BY_LOCALE[locale].filter((p) => p.lineId === lineId);
