import type { Locale } from "@/i18n/locale";
import type { MyofascialLine } from "./types";

/**
 * Classical Chinese-medicine (acupuncture) layer of the atlas.
 *
 * Acupoints are stored as TriggerPoint entries with `lineId: "tcm"` and a
 * `tcm` metadata block. They do not belong to any Anatomy Trains line, so
 * this file provides:
 *   1. TCM_MERIDIANS / TCM_MERIDIAN_MAP — the 15 channels used by the atlas
 *      points (localized inline, EN + RU).
 *   2. TCM_LINE_BY_LOCALE — a "virtual line" that gives acupoints a color,
 *      name and badge text everywhere the existing LINE_MAP is used, without
 *      ever appearing in the Anatomy Trains list or line chips.
 */

export const TCM_COLOR = "#0369A1";

export interface TcmMeridian {
  id: string;
  /** Standard WHO alphanumeric code: GB, BL, GV ... */
  abbr: string;
  /** Chinese characters of the channel. */
  hanzi: string;
  name: Record<Locale, string>;
}

export const TCM_MERIDIANS: TcmMeridian[] = [
  { id: "gb", abbr: "GB", hanzi: "胆经", name: { en: "Gallbladder channel", ru: "Меридиан желчного пузыря" } },
  { id: "bl", abbr: "BL", hanzi: "膀胱经", name: { en: "Bladder channel", ru: "Меридиан мочевого пузыря" } },
  { id: "gv", abbr: "GV", hanzi: "督脉", name: { en: "Governing vessel (Du mai)", ru: "Заднесрединный меридиан (Ду-май)" } },
  { id: "li", abbr: "LI", hanzi: "大肠经", name: { en: "Large intestine channel", ru: "Меридиан толстой кишки" } },
  { id: "te", abbr: "TE", hanzi: "三焦经", name: { en: "Triple burner channel", ru: "Меридиан тройного обогревателя" } },
  { id: "si", abbr: "SI", hanzi: "小肠经", name: { en: "Small intestine channel", ru: "Меридиан тонкой кишки" } },
  { id: "lu", abbr: "LU", hanzi: "肺经", name: { en: "Lung channel", ru: "Меридиан легких" } },
  { id: "pc", abbr: "PC", hanzi: "心包经", name: { en: "Pericardium channel", ru: "Меридиан перикарда" } },
  { id: "ht", abbr: "HT", hanzi: "心经", name: { en: "Heart channel", ru: "Меридиан сердца" } },
  { id: "st", abbr: "ST", hanzi: "胃经", name: { en: "Stomach channel", ru: "Меридиан желудка" } },
  { id: "sp", abbr: "SP", hanzi: "脾经", name: { en: "Spleen channel", ru: "Меридиан селезенки" } },
  { id: "lr", abbr: "LR", hanzi: "肝经", name: { en: "Liver channel", ru: "Меридиан печени" } },
  { id: "ki", abbr: "KI", hanzi: "肾经", name: { en: "Kidney channel", ru: "Меридиан почек" } },
  { id: "cv", abbr: "CV", hanzi: "任脉", name: { en: "Conception vessel (Ren mai)", ru: "Переднесрединный меридиан (Жэнь-май)" } },
  { id: "extra", abbr: "EX", hanzi: "经外奇穴", name: { en: "Extra point (outside channels)", ru: "Внемеридианная точка" } },
];

export const TCM_MERIDIAN_MAP: Record<string, TcmMeridian> = Object.fromEntries(
  TCM_MERIDIANS.map((m) => [m.id, m])
);

/** Localized summaries used in meridian chips / badges. */
export const tcmMeridianName = (id: string, locale: Locale): string =>
  TCM_MERIDIAN_MAP[id]?.name[locale] ?? id.toUpperCase();

/**
 * The virtual "line" that acupoints hang from — fully localized.
 * Merged into LINE_MAP_BY_LOCALE but deliberately NOT into LINES_BY_LOCALE.
 */
const TCM_LINE_EN: MyofascialLine = {
  id: "tcm",
  abbr: "TCM",
  name: "Chinese medicine acupoints",
  color: TCM_COLOR,
  family: "functional",
  side: "Classical acupuncture map",
  summary:
    "A parallel map of the body from classical Chinese medicine: centuries of observation codified into 365 points along meridian channels. The 43 acupoints in this atlas are the classics most used for everyday pain — chosen because they are easy to locate, safe to press and pair naturally with the myofascial trigger points.",
  track: TCM_MERIDIANS.map((m) => `${m.abbr} · ${m.name.en}`),
  painThemes:
    "Acupressure on these points is traditionally used for headaches, neck and back stiffness, joint pain, calf cramps and general tension — as a complement, never a replacement, for medical care.",
  view: "both",
};

const TCM_LINE_RU: MyofascialLine = {
  ...TCM_LINE_EN,
  name: "Акупунктурные точки китайской медицины",
  side: "Классическая карта акупунктуры",
  summary:
    "Параллельная карта тела из классической китайской медицины: века наблюдений, сведенные в 365 точек вдоль меридианных каналов. 43 акупунктурные точки этого атласа — классика бытовой боли. Они выбраны потому, что их легко найти, безопасно надавливать и естественно сочетать с миофасциальными триггерными точками.",
  track: TCM_MERIDIANS.map((m) => `${m.abbr} · ${m.name.ru}`),
  painThemes:
    "Акупрессуру этих точек традиционно применяют при головной боли, скованности шеи и спины, боли в суставах, судорогах икр и общем напряжении — как дополнение, но никогда как замену медицинской помощи.",
};

export const TCM_LINE_BY_LOCALE: Record<Locale, MyofascialLine> = {
  en: TCM_LINE_EN,
  ru: TCM_LINE_RU,
};
