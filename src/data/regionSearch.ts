import type { Locale } from "@/i18n/locale";
import { REGION_MAP } from "./regions";

/**
 * Pain-localization search support.
 *
 * - REGION_RU: Russian labels for every referral region (regions.ts holds EN).
 * - REGION_KEYWORDS: everyday complaint phrases per region, per locale —
 *   what a user actually types ("heel", "headache", "поясница").
 * - PAIN_PRESETS: common multi-region complaints shown as one-tap chips.
 */

export const REGION_RU: Record<string, string> = {
  // head & neck
  temple: "Висок",
  orbit: "Глаз и бровь",
  forehead: "Лоб",
  vertex: "Макушка",
  "vertex-b": "Макушка",
  occiput: "Затылок",
  jaw: "Челюсть и зубы",
  ear: "Ухо",
  "neck-side": "Боковая поверхность шеи",
  "neck-back": "Задняя поверхность шеи",
  suboccipital: "Основание черепа",
  throat: "Горло",
  // shoulder / chest / upper back
  "shoulder-front": "Плечо",
  "shoulder-back": "Плечо",
  clavicle: "Область ключицы",
  pec: "Грудь",
  "chest-central": "За грудиной",
  "upper-chest": "Верх груди",
  scapula: "Лопатка",
  "scapula-border": "Внутренний край лопатки",
  "infraspinatus-area": "Ниже ости лопатки",
  "supraspinatus-area": "Над лопаткой",
  midback: "Средняя часть спины",
  axilla: "Подмышечная впадина",
  "axilla-b": "Подмышечная впадина",
  "lateral-ribs": "Боковые ребра",
  "back-ribs": "Ребра сзади",
  "lower-ribs": "Нижние ребра",
  // abdomen / pelvis / low back
  abdomen: "Живот",
  "abdomen-side": "Бок живота",
  lowback: "Поясница",
  "lowback-side": "Поясница с одной стороны",
  sacrum: "Крестец",
  buttock: "Ягодица",
  "hip-crest": "Гребень подвздошной кости",
  groin: "Пах",
  perineum: "Тазовое дно",
  // hip / thigh
  "lateral-hip": "Боковая часть таза",
  "lateral-hip-b": "Боковая часть таза",
  "anterior-thigh": "Передняя поверхность бедра",
  "inner-thigh": "Внутренняя поверхность бедра",
  "posterior-thigh": "Задняя поверхность бедра",
  "lateral-thigh": "Наружная поверхность бедра",
  "lateral-thigh-b": "Наружная поверхность бедра",
  // knee
  "medial-knee": "Внутренняя часть колена",
  "knee-front": "Передняя часть колена",
  popliteal: "Подколенная ямка",
  "lateral-knee": "Наружная часть колена",
  // lower leg / foot
  calf: "Икра",
  achilles: "Ахиллово сухожилие",
  shin: "Голень",
  "lateral-lower-leg": "Наружная часть голени",
  "inner-lower-leg": "Внутренняя часть голени",
  "deep-calf": "Глубокая часть голени",
  "lateral-ankle": "Наружная косточка",
  "medial-ankle": "Внутренняя косточка",
  heel: "Пятка",
  sole: "Подошва",
  arch: "Свод стопы",
  "top-of-foot": "Тыльная сторона стопы",
  "big-toe": "Большой палец стопы",
  // arm
  "deltoid-area": "Дельтовидная мышца",
  "deltoid-area-b": "Дельтовидная мышца",
  "upper-arm-front": "Верхняя часть руки",
  "upper-arm-back": "Верхняя часть руки",
  "elbow-outer": "Наружная часть локтя",
  "elbow-outer-b": "Наружная часть локтя",
  "elbow-inner": "Внутренняя часть локтя",
  "forearm-inner": "Внутренняя часть предплечья",
  "forearm-outer": "Наружная часть предплечья",
  wrist: "Запястье",
  "hand-dorsal": "Тыльная сторона кисти",
  "hand-palm": "Ладонь",
  "thumb-web": "Большой палец руки",
  "ring-little-fingers": "Безымянный палец и мизинец",
};

/** Everyday complaint phrases a user types to find a region. */
export const REGION_KEYWORDS: Record<string, { en: string[]; ru: string[] }> = {
  temple: { en: ["headache", "migraine", "tension headache"], ru: ["головная боль", "мигрень", "боль в виске"] },
  orbit: { en: ["eye pain", "behind the eye", "brow ache"], ru: ["боль в глазу", "надбровье", "глаз"] },
  forehead: { en: ["headache", "forehead ache"], ru: ["головная боль", "боль во лбу"] },
  vertex: { en: ["headache", "top of head"], ru: ["головная боль", "боль в макушке"] },
  "vertex-b": { en: ["headache", "top of head"], ru: ["головная боль", "боль в макушке"] },
  occiput: { en: ["occipital headache", "headache", "back of head"], ru: ["затылочная боль", "головная боль сзади", "затылок"] },
  jaw: { en: ["jaw pain", "toothache", "teeth", "tmj", "bruxism"], ru: ["боль в челюсти", "зубная боль", "внчс", "скрежет зубами"] },
  ear: { en: ["ear ache", "tinnitus", "ear fullness"], ru: ["боль в ухе", "звон в ушах", "заложенность уха"] },
  "neck-side": { en: ["stiff neck", "side of neck", "neck pain"], ru: ["скованность шеи", "шея болит", "боль сбоку шеи"] },
  "neck-back": { en: ["stiff neck", "neck pain", "whiplash"], ru: ["боль в шее", "скованность шеи", "шея не поворачивается"] },
  suboccipital: { en: ["headache", "base of skull", "neck pain"], ru: ["головная боль", "основание черепа", "шея болит"] },
  throat: { en: ["throat", "swallowing", "lump in throat"], ru: ["горло", "глотание", "ком в горле"] },
  "shoulder-front": { en: ["frozen shoulder", "shoulder pain", "shoulder ache"], ru: ["боль в плече", "замороженное плечо", "плечо болит"] },
  "shoulder-back": { en: ["frozen shoulder", "shoulder pain", "shoulder ache"], ru: ["боль в плече", "замороженное плечо", "плечо болит"] },
  clavicle: { en: ["collarbone pain", "chest tightness"], ru: ["ключица", "боль у ключицы"] },
  pec: { en: ["chest pain", "chest ache", "pec pain"], ru: ["боль в груди", "грудная мышца"] },
  "chest-central": { en: ["chest pain", "sternum", "breathing"], ru: ["за грудиной", "дыхание", "боль в груди"] },
  "upper-chest": { en: ["upper chest", "breathing", "chest tightness"], ru: ["верх груди", "дыхание", "стеснение в груди"] },
  scapula: { en: ["shoulder blade pain", "between shoulder blades"], ru: ["боль в лопатке", "между лопаток"] },
  "scapula-border": { en: ["between shoulder blades", "inner edge pain"], ru: ["между лопаток", "внутренний край лопатки"] },
  "infraspinatus-area": { en: ["back of shoulder", "below shoulder blade"], ru: ["под лопаткой", "задняя часть плеча"] },
  "supraspinatus-area": { en: ["above shoulder blade", "shoulder pain"], ru: ["над лопаткой", "боль в плече"] },
  midback: { en: ["upper back pain", "mid back", "thoracic"], ru: ["боль в спине", "средняя часть спины", "грудной отдел"] },
  axilla: { en: ["armpit pain"], ru: ["подмышка", "боль в подмышке"] },
  "axilla-b": { en: ["armpit pain"], ru: ["подмышка", "боль в подмышке"] },
  "lateral-ribs": { en: ["side stitch", "rib pain", "intercostal"], ru: ["боль в боку", "межреберная боль", "ребра"] },
  "back-ribs": { en: ["rib pain", "back of ribs", "breathing pain"], ru: ["ребра сзади", "межреберная боль"] },
  "lower-ribs": { en: ["lower ribs", "floating rib", "rib pain"], ru: ["нижние ребра", "боль в ребрах"] },
  abdomen: { en: ["abdominal pain", "belly", "stomach ache"], ru: ["живот", "боль в животе"] },
  "abdomen-side": { en: ["flank pain", "side of abdomen"], ru: ["бок живота", "боль во фланге"] },
  lowback: { en: ["low back pain", "lower back", "backache", "lumbar", "lumbago"], ru: ["поясница", "низ спины", "боль в спине", "люмбаго"] },
  "lowback-side": { en: ["one sided back pain", "lower back"], ru: ["поясница сбоку", "низ спины"] },
  sacrum: { en: ["sacrum pain", "tailbone", "sacral ache"], ru: ["крестец", "боль в крестце"] },
  buttock: { en: ["buttock pain", "gluteal pain", "sciatica"], ru: ["ягодица", "боль в ягодице", "ишиас"] },
  "hip-crest": { en: ["hip pain", "belt line", "waist pain"], ru: ["гребень таза", "боль на уровне пояса", "талия"] },
  groin: { en: ["groin pain", "groin strain"], ru: ["пах", "паховая боль"] },
  perineum: { en: ["pelvic floor", "perineal pain"], ru: ["тазовое дно", "промежность"] },
  "lateral-hip": { en: ["hip pain", "side of hip", "trochanteric"], ru: ["тазобедренный сустав", "боль сбоку бедра", "бедро болит"] },
  "lateral-hip-b": { en: ["hip pain", "side of hip", "trochanteric"], ru: ["тазобедренный сустав", "боль сбоку бедра", "бедро болит"] },
  "anterior-thigh": { en: ["front of thigh", "quad pain", "thigh ache"], ru: ["передняя поверхность бедра", "квадрицепс", "бедро болит"] },
  "inner-thigh": { en: ["inner thigh", "groin pull", "adductor"], ru: ["внутренняя поверхность бедра", "приводящие мышцы"] },
  "posterior-thigh": { en: ["hamstring", "back of thigh", "sciatica"], ru: ["задняя поверхность бедра", "хамстринги", "бицепс бедра"] },
  "lateral-thigh": { en: ["outer thigh", "itb", "running pain"], ru: ["наружная поверхность бедра", "илиотибиальный тракт"] },
  "lateral-thigh-b": { en: ["outer thigh", "itb", "running pain"], ru: ["наружная поверхность бедра", "илиотибиальный тракт"] },
  "medial-knee": { en: ["inner knee pain", "knee ache"], ru: ["колено изнутри", "внутренняя часть колена"] },
  "knee-front": { en: ["knee pain", "kneecap", "patellar", "stairs pain"], ru: ["боль в колене", "надколенник", "колено болит"] },
  popliteal: { en: ["back of knee", "popliteal pain"], ru: ["под коленом", "подколенная ямка"] },
  "lateral-knee": { en: ["outer knee", "runner's knee", "itb"], ru: ["колено снаружи", "колено бегуна"] },
  calf: { en: ["calf pain", "calf cramp", "calf tightness"], ru: ["икра", "боль в икре", "судорога икры"] },
  achilles: { en: ["achilles pain", "achilles tendon"], ru: ["ахилл", "ахиллово сухожилие"] },
  shin: { en: ["shin splints", "shin pain"], ru: ["боль в голени", "периостит", "расколотая голень"] },
  "lateral-lower-leg": { en: ["outer shin", "lower leg pain"], ru: ["наружная часть голени"] },
  "inner-lower-leg": { en: ["inner shin", "lower leg pain"], ru: ["внутренняя часть голени"] },
  "deep-calf": { en: ["deep calf", "calf tightness", "foot pain"], ru: ["глубокие мышцы голени", "голень"] },
  "lateral-ankle": { en: ["ankle pain", "rolled ankle", "weak ankle"], ru: ["голеностоп", "наружная косточка", "подвернул ногу"] },
  "medial-ankle": { en: ["inner ankle", "ankle pain"], ru: ["внутренняя косточка", "голеностоп"] },
  heel: { en: ["heel pain", "plantar fasciitis", "heel spur"], ru: ["пятка", "подошвенный фасцит", "пяточная шпора"] },
  sole: { en: ["sole pain", "plantar fasciitis", "foot pain"], ru: ["подошва", "подошвенный фасцит", "стопа болит"] },
  arch: { en: ["arch pain", "flat feet", "foot pain"], ru: ["свод стопы", "стопа болит"] },
  "top-of-foot": { en: ["top of foot", "instep"], ru: ["тыл стопы", "стопа болит"] },
  "big-toe": { en: ["big toe", "bunion", "toe pain"], ru: ["большой палец ноги", "косточка на ноге"] },
  "deltoid-area": { en: ["shoulder pain", "deltoid ache"], ru: ["дельтовидная мышца", "плечо болит"] },
  "deltoid-area-b": { en: ["shoulder pain", "deltoid ache"], ru: ["дельтовидная мышца", "плечо болит"] },
  "upper-arm-front": { en: ["upper arm pain", "biceps ache"], ru: ["верх руки", "боль в руке", "бицепс"] },
  "upper-arm-back": { en: ["upper arm pain", "triceps ache"], ru: ["верх руки", "боль в руке", "трицепс"] },
  "elbow-outer": { en: ["tennis elbow", "outer elbow"], ru: ["локоть теннисиста", "наружная часть локтя"] },
  "elbow-outer-b": { en: ["tennis elbow", "outer elbow"], ru: ["локоть теннисиста", "наружная часть локтя"] },
  "elbow-inner": { en: ["golfer's elbow", "inner elbow"], ru: ["локоть гольфиста", "внутренняя часть локтя"] },
  "forearm-inner": { en: ["forearm pain", "grip ache"], ru: ["предплечье", "боль в предплечье"] },
  "forearm-outer": { en: ["forearm pain", "grip ache"], ru: ["предплечье", "боль в предплечье"] },
  wrist: { en: ["wrist pain", "carpal tunnel", "typing pain"], ru: ["запястье", "туннельный синдром", "кисть болит"] },
  "hand-dorsal": { en: ["back of hand", "knuckle pain", "hand pain"], ru: ["тыл кисти", "костяшки", "кисть болит"] },
  "hand-palm": { en: ["palm pain", "hand pain"], ru: ["ладонь", "кисть болит"] },
  "thumb-web": { en: ["thumb pain", "pinch grip", "texting thumb"], ru: ["большой палец руки", "щипковый хват"] },
  "ring-little-fingers": { en: ["ring finger", "little finger", "pinky", "numb fingers"], ru: ["безымянный палец", "мизинец", "немеют пальцы"] },
};

/* ------------------------------------------------------------------ */
/* Presets: common complaints that span several referral zones        */
/* ------------------------------------------------------------------ */

export interface PainPreset {
  id: string;
  key: string;
  label: Record<Locale, string>;
  regionIds: string[];
}

export const PAIN_PRESETS: PainPreset[] = [
  {
    id: "headache",
    key: "preset:headache",
    label: { en: "Headache", ru: "Головная боль" },
    regionIds: ["temple", "forehead", "vertex", "vertex-b", "orbit", "occiput", "suboccipital"],
  },
  {
    id: "jaw-face",
    key: "preset:jaw-face",
    label: { en: "Jaw & face", ru: "Челюсть и лицо" },
    regionIds: ["jaw", "ear", "throat"],
  },
  {
    id: "neck-shoulders",
    key: "preset:neck-shoulders",
    label: { en: "Neck & shoulders", ru: "Шея и плечи" },
    regionIds: [
      "neck-side", "neck-back", "suboccipital", "shoulder-front", "shoulder-back",
      "clavicle", "scapula", "supraspinatus-area", "scapula-border",
    ],
  },
  {
    id: "lowback-hips",
    key: "preset:lowback-hips",
    label: { en: "Low back & hips", ru: "Поясница и таз" },
    regionIds: [
      "lowback", "lowback-side", "sacrum", "buttock", "hip-crest", "groin",
      "perineum", "lateral-hip", "lateral-hip-b",
    ],
  },
  {
    id: "chest-breathing",
    key: "preset:chest-breathing",
    label: { en: "Chest & breathing", ru: "Грудь и дыхание" },
    regionIds: ["pec", "chest-central", "upper-chest", "lateral-ribs", "back-ribs", "lower-ribs", "axilla", "axilla-b"],
  },
  {
    id: "leg-knee",
    key: "preset:leg-knee",
    label: { en: "Leg & knee", ru: "Нога и колено" },
    regionIds: [
      "anterior-thigh", "inner-thigh", "posterior-thigh", "lateral-thigh", "lateral-thigh-b",
      "medial-knee", "knee-front", "popliteal", "lateral-knee",
      "shin", "calf", "deep-calf", "lateral-lower-leg", "inner-lower-leg", "achilles",
    ],
  },
  {
    id: "foot-ankle",
    key: "preset:foot-ankle",
    label: { en: "Foot & ankle", ru: "Стопа и лодыжка" },
    regionIds: ["heel", "sole", "arch", "top-of-foot", "big-toe", "lateral-ankle", "medial-ankle"],
  },
  {
    id: "arm-hand",
    key: "preset:arm-hand",
    label: { en: "Arm & hand", ru: "Рука и кисть" },
    regionIds: [
      "deltoid-area", "deltoid-area-b", "upper-arm-front", "upper-arm-back",
      "elbow-outer", "elbow-outer-b", "elbow-inner",
      "forearm-inner", "forearm-outer", "wrist", "hand-dorsal", "hand-palm",
      "thumb-web", "ring-little-fingers",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Accessors                                                          */
/* ------------------------------------------------------------------ */

/** Localized label for one referral region id. */
export function regionLabel(id: string, locale: Locale): string {
  if (locale === "ru") {
    const ru = REGION_RU[id];
    if (ru) return ru;
  }
  return REGION_MAP[id]?.label ?? id;
}

/** Localized labels for a set of region ids, deduplicated, order preserved. */
export function regionLabels(ids: string[], locale: Locale): string[] {
  return [...new Set(ids.map((id) => regionLabel(id, locale)))];
}

/** All searchable terms for one region id in the given locale. */
export function regionTerms(id: string, locale: Locale): string[] {
  const kw = REGION_KEYWORDS[id];
  const other: Locale = locale === "ru" ? "en" : "ru";
  return [
    regionLabel(id, locale),
    ...(kw ? kw[locale] : []),
    regionLabel(id, other), // the other language's label still matches
  ];
}

/** A pain location as offered by the search — one label covering several region ellipses. */
export interface PainLocation {
  /** Stable grouping key (locale-independent). */
  key: string;
  /** Label in every supported locale, so the chip survives live language switches. */
  label: Record<Locale, string>;
  regionIds: string[];
}

/**
 * Every distinct pain location in the atlas.
 * Regions sharing a label (front/back pairs) merge into one location.
 */
export function painLocations(locale: Locale): PainLocation[] {
  void locale; // kept for API symmetry — labels carry all locales at once
  const byLabel = new Map<string, PainLocation>();
  for (const id of Object.keys(REGION_MAP)) {
    const en = REGION_MAP[id].label ?? id;
    const existing = byLabel.get(en);
    if (existing) existing.regionIds.push(id);
    else
      byLabel.set(en, {
        key: `region:${en}`,
        label: { en, ru: REGION_RU[id] ?? en },
        regionIds: [id],
      });
  }
  return [...byLabel.values()];
}

/** Case-insensitive localization-agnostic match of a query against terms. */
export function termsMatch(terms: string[], query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return false;
  return terms.some((term) => {
    const t = term.toLowerCase();
    return t.includes(q) || (q.includes(t) && t.length >= 4);
  });
}
