import type { Locale } from "./locale";

/**
 * Every piece of interface chrome, localized.
 * Data-only strings; components compose dynamic parts via "{x}" placeholders.
 */
export interface UiStrings {
  langAria: string;
  navAria: string;
  headerTagline: string;
  nav: {
    atlas: string;
    meridians: string;
    science: string;
    howTo: string;
    safety: string;
    reference: string;
  };
  hero: {
    badge: string; // "{points}" "{lines}" "{meridians}" placeholders
    titleA: string;
    titleB: string;
    lead: string;
    ctaMap: string;
    ctaScience: string;
    statLines: string;
    statPoints: string;
    statMethods: string;
    figureCaption: string;
  };
  footer: {
    aboutBody: string;
    safetyTitle: string;
    safetyBody: string;
    credits: string;
  };
  atlas: {
    eyebrow: string;
    title: string;
    lead: string;
    systemAria: string;
    systemAll: string;
    systemAt: string;
    systemTcm: string;
    allLines: string;
    allSystemsBadge: string;
    allMeridiansBadge: string;
    tcmBadge: string;
    meridiansAll: string;
    tcmPointsTitle: string;
    pointsOnMeridian: string; // "{meridian}" placeholder
    viewFront: string;
    viewBack: string;
    viewAria: string;
    pointsOnLine: string; // "{line}" placeholder
    allPointsTitle: string;
    legendCaption: string;
    clearAria: string;
    protocolCta: string;
  };
  modal: {
    closeAria: string;
    whereItHurts: string;
    whatYouNotice: string;
    locate: string;
    locateSub: string;
    release: string;
    releaseSub: string;
    chipTool: string;
    chipTime: string;
    chipPressure: string;
    activationTitle: string;
    manual: string;
    manualSub: string;
    stretch: string;
    stretchSub: string;
    holdBadge: string; // "{x}" placeholder
    causes: string;
    causesSub: string;
    prevention: string;
    related: string;
    figureCaption: string; // "{view}" placeholder
  };
  /** TCM-specific labels used when the open point is an acupoint. */
  modalTcm: {
    relief: string;
    indications: string;
    locate: string;
    locateSub: string;
    release: string;
    releaseSub: string;
    activationTitle: string;
    manual: string;
    manualSub: string;
    stretch: string;
    stretchSub: string;
    causes: string;
    causesSub: string;
    related: string;
    functionsTitle: string;
    cautionsTitle: string;
  };
  lines: {
    eyebrow: string;
    title: string;
    lead: string;
    trackHeading: string;
    painHeading: string;
    family: { core: string; arm: string; functional: string; deep: string };
  };
  primer: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  assessment: {
    eyebrow: string;
    title: string;
    rulesTitle: string;
  };
  safety: {
    eyebrow: string;
    title: string;
    lead: string;
    severityLabels: { stop: string; caution: string; "see-pro": string };
    disclaimer: string;
  };
  quickref: {
    eyebrow: string;
    title: string;
    lead: string;
    searchPlaceholder: string;
    searchAria: string;
    allLines: string;
    tcmChip: string;
    viewAll: string;
    viewFront: string;
    viewBack: string;
    colPoint: string;
    colMeridian: string;
    colReferral: string;
    colTool: string;
    colView: string;
    noResults: string; // "{q}" placeholder
    clickHint: string;
  };
  figure: {
    ariaFront: string;
    ariaBack: string;
  };
  painFinder: {
    title: string;
    sub: string;
    inputAria: string;
    placeholder: string;
    locationsGroup: string;
    pointsGroup: string;
    pointsHere: string; // "{n}" "{word}" placeholders
    listTitle: string; // "{label}" placeholder
    activeAria: string;
    clearAria: string;
    noMatches: string; // "{q}" placeholder
    presetsLabel: string;
  };
  /** Localized plural word for "point(s)" — used after a number. */
  pointsWord: (n: number) => string;
}

/** Russian numeral pluralization: one / few / many. */
export function pluralRu(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

/** Replace "{key}" placeholders in a dictionary string. */
export function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => vars[k] ?? `{${k}}`);
}

const EN: UiStrings = {
  langAria: "Change language",
  navAria: "Sections",
  headerTagline: "Trigger Points × Anatomy Trains",
  nav: {
    atlas: "Body Map",
    meridians: "Meridians",
    science: "Science",
    howTo: "How-To",
    safety: "Safety",
    reference: "Quick Reference",
  },
  hero: {
    badge: "Fascia-based self-care · {points} points · {lines} lines + {meridians} channels",
    titleA: "The Fascia Atlas of",
    titleB: "Trigger Points",
    lead:
      "Where the pain starts, where it travels, and the 90-second pressure-plus-activation release that ends it — every trigger point mapped onto the Anatomy Trains myofascial meridians, now extended with the classical acupoints of Chinese medicine.",
    ctaMap: "Open the body map",
    ctaScience: "Learn the science first",
    statLines: "myofascial lines",
    statPoints: "points on the map",
    statMethods: "release methods per point",
    figureCaption: "press ✕ markers in the atlas below to reveal each pain map",
  },
  footer: {
    aboutBody:
      "An educational interactive guide uniting Travell & Simons trigger-point mapping with Thomas Myers' Anatomy Trains myofascial meridians — for self-care, teaching and clinical reference.",
    safetyTitle: "Safety reminder",
    safetyBody:
      "Not medical advice. Severe, new or spreading symptoms always need medical screening before self-treatment.",
    credits:
      "Built with the Anatomy Trains concept (T. Myers) and the trigger-point referral literature (Travell & Simons). Always respect the contraindications listed in the Safety section.",
  },
  atlas: {
    eyebrow: "Interactive Atlas",
    title: "The Body Map of Trigger Points",
    lead:
      "Pick a system — Anatomy Trains lines or Chinese-medicine channels — then press any point on the body to see where its pain travels and how to release it. All 110 points are bilateral; one side is shown for clarity.",
    systemAria: "Point system",
    systemAll: "All systems",
    systemAt: "Anatomy Trains",
    systemTcm: "Chinese medicine",
    allLines: "All lines",
    allSystemsBadge: "All 110 points",
    allMeridiansBadge: "All 12 meridians",
    tcmBadge: "Acupoints · all channels",
    meridiansAll: "All channels",
    tcmPointsTitle: "Chinese-medicine acupoints",
    pointsOnMeridian: "Acupoints on the {meridian}",
    viewFront: "front",
    viewBack: "back",
    viewAria: "Body view",
    pointsOnLine: "Trigger points on the {line}",
    allPointsTitle: "All trigger points",
    legendCaption:
      "shaded zones show where pain travels · press a point for details",
    clearAria: "Clear selection",
    protocolCta: "Full release protocol →",
  },
  modalTcm: {
    relief: "What this point relieves",
    indications: "Classic indications",
    locate: "Locate the acupoint",
    locateSub: "Confirm the tender spot before treating",
    release: "Acupressure protocol",
    releaseSub: "Sustained pressure, slow breath — then movement",
    activationTitle: "Pressure with movement",
    manual: "In professional hands",
    manualSub: "What an acupuncturist or tuina therapist adds",
    stretch: "Movement practice",
    stretchSub: "A gentle companion to the point work",
    causes: "Why the point stays blocked",
    causesSub: "Remove the cause or the point returns",
    related: "Points that pair well — work these too",
    functionsTitle: "Channel & functions",
    cautionsTitle: "Caution",
  },
  modal: {
    closeAria: "Close",
    whereItHurts: "Where it hurts",
    whatYouNotice: "What you may notice",
    locate: "Locate the trigger point",
    locateSub: "Confirm with pressure before treating",
    release: "Self-release & activation",
    releaseSub: "The 90-second protocol that switches the point off",
    chipTool: "Tool",
    chipTime: "Time",
    chipPressure: "Pressure",
    activationTitle: "Activation move",
    manual: "Professional technique",
    manualSub: "What a trained practitioner adds",
    stretch: "Stretch the line",
    stretchSub: "Finish every release with this",
    holdBadge: "hold {x}",
    causes: "What keeps it active",
    causesSub: "Remove the cause or the point returns",
    prevention: "Keep it from coming back",
    related: "Related points on this line — treat these too",
    figureCaption: "trigger point & referred pain zone ({view} view)",
  },
  lines: {
    eyebrow: "The Map",
    title: "The Twelve Myofascial Meridians",
    lead:
      "Fascia links muscles into continuous tracks. Strain — and trigger-point activity — travels along these lines. Learn the track and the distant pains start to make sense.",
    trackHeading: "The track, station by station",
    painHeading: "Pain themes on this line",
    family: {
      core: "Core line",
      arm: "Arm line",
      functional: "Functional line",
      deep: "Deep line",
    },
  },
  primer: {
    eyebrow: "First principles",
    title: "Fascia, Tensegrity & Trigger Points",
    lead: "Five minutes of background that makes the whole atlas click into place.",
  },
  assessment: {
    eyebrow: "Before you treat",
    title: "How to Find & Confirm a Trigger Point",
    rulesTitle: "The four rules of every release",
  },
  safety: {
    eyebrow: "Non-negotiable",
    title: "Contraindications & Safety",
    lead:
      "Trigger-point work is powerful self-care, but some symptoms mean something else is going on. Read this once, slowly.",
    severityLabels: {
      stop: "Emergency screening first",
      caution: "Modify & take care",
      "see-pro": "Get professional help",
    },
    disclaimer:
      "This atlas is educational, not medical advice. It maps myofascial trigger points and referred-pain patterns after Travell & Simons and the Anatomy Trains model. Referred pain can occasionally mimic serious conditions — when in doubt, get screened before treating.",
  },
  quickref: {
    eyebrow: "Cheat sheet",
    title: "Quick-Reference Card",
    lead:
      "All 110 points in one searchable table — myofascial trigger points and Chinese-medicine acupoints. Search by pain (\u201cheel\u201d, \u201cheadache\u201d, \u201ctingling\u201d), muscle or meridian.",
    searchPlaceholder: "Search pain, muscle or line…",
    searchAria: "Search trigger points",
    allLines: "All lines",
    tcmChip: "TCM acupoints",
    viewAll: "Front & back",
    viewFront: "Front body",
    viewBack: "Back body",
    colPoint: "Trigger point",
    colMeridian: "Meridian",
    colReferral: "Pain referral",
    colTool: "Release tool",
    colView: "Body view",
    noResults:
      "No points match \u201c{q}\u201d — try \u201cheadache\u201d, \u201cknee\u201d or \u201ctingling\u201d.",
    clickHint: "Click any row for the full release protocol.",
  },
  figure: {
    ariaFront: "front view of human body schematic",
    ariaBack: "back view of human body schematic",
  },
  painFinder: {
    title: "Where does it hurt?",
    sub: "Search by pain localization — point at the place where you feel the pain, and the atlas shows which trigger points send pain there.",
    inputAria: "Search by pain localization",
    placeholder: "Try “heel”, “headache”, “low back”…",
    locationsGroup: "Pain locations",
    pointsGroup: "Named points",
    pointsHere: "Pain refers here from {n} {word}",
    listTitle: "Pain refers here from: {label}",
    activeAria: "Active pain-location filter",
    clearAria: "Clear pain-location filter",
    noMatches: "No pain location matches “{q}”",
    presetsLabel: "Common:",
  },
  pointsWord: (n) => (n === 1 ? "point" : "points"),
};

const RU: UiStrings = {
  langAria: "Сменить язык",
  navAria: "Разделы",
  headerTagline: "Триггерные точки × Анатомические поезда",
  nav: {
    atlas: "Карта тела",
    meridians: "Меридианы",
    science: "Наука",
    howTo: "Методика",
    safety: "Безопасность",
    reference: "Быстрый справочник",
  },
  hero: {
    badge: "Самопомощь на основе фасций · {points} точек · {lines} линий + {meridians} каналов",
    titleA: "Фасциальный атлас",
    titleB: "триггерных точек",
    lead:
      "Где начинается боль, куда она отдает и как 90-секундный протокол «давление плюс активация» избавляет от нее — каждая триггерная точка нанесена на миофасциальные меридианы «Анатомических поездов», а теперь к ним добавились классические акупунктурные точки китайской медицины.",
    ctaMap: "Открыть карту тела",
    ctaScience: "Сначала — как это работает",
    statLines: "миофасциальных линий",
    statPoints: "точек на карте",
    statMethods: "методов проработки для каждой точки",
    figureCaption: "нажимайте на маркеры ✕ в атласе ниже, чтобы увидеть зоны боли",
  },
  footer: {
    aboutBody:
      "Образовательный интерактивный справочник, объединяющий карты триггерных точек Трэвелл и Симонс с миофасциальными меридианами «Анатомических поездов» Томаса Майерса — для самопомощи, обучения и клинической практики.",
    safetyTitle: "Напоминание о безопасности",
    safetyBody:
      "Это не медицинская рекомендация. Сильные, внезапные или распространяющиеся симптомы всегда требуют врачебной проверки до самолечения.",
    credits:
      "Создано на основе концепции «Анатомических поездов» (Т. Майерс) и литературы по отраженной боли триггерных точек (Трэвелл и Симонс). Соблюдайте противопоказания из раздела «Безопасность».",
  },
  atlas: {
    eyebrow: "Интерактивный атлас",
    title: "Карта триггерных точек тела",
    lead:
      "Выберите систему — линии «Анатомических поездов» или каналы китайской медицины, — затем нажмите на любую точку тела, чтобы увидеть, куда отдает ее боль и как ее проработать. Все 110 точек парные; для наглядности показана одна сторона.",
    systemAria: "Система точек",
    systemAll: "Все системы",
    systemAt: "Анатомические поезда",
    systemTcm: "Китайская медицина",
    allLines: "Все линии",
    allSystemsBadge: "Все 110 точек",
    allMeridiansBadge: "Все 12 меридианов",
    tcmBadge: "Акупунктурные точки · все каналы",
    meridiansAll: "Все каналы",
    tcmPointsTitle: "Акупунктурные точки китайской медицины",
    pointsOnMeridian: "Точки канала {meridian}",
    viewFront: "спереди",
    viewBack: "сзади",
    viewAria: "Вид тела",
    pointsOnLine: "Триггерные точки линии {line}",
    allPointsTitle: "Все триггерные точки",
    legendCaption:
      "затемненные зоны показывают, куда отдает боль · нажмите на точку для подробностей",
    clearAria: "Сбросить выбор",
    protocolCta: "Полный протокол проработки →",
  },
  modalTcm: {
    relief: "Что снимает эта точка",
    indications: "Классические показания",
    locate: "Найдите акупунктурную точку",
    locateSub: "Перед проработкой подтвердите точку нажатием",
    release: "Протокол акупрессуры",
    releaseSub: "Удержание давления, медленное дыхание — затем движение",
    activationTitle: "Давление с движением",
    manual: "У профессионала",
    manualSub: "Что добавляет специалист по акупунктуре или туина-массажу",
    stretch: "Движение и практика",
    stretchSub: "Мягкое дополнение к работе с точкой",
    causes: "Почему точка остается в застое",
    causesSub: "Устраните причину — иначе точка вернется",
    related: "Сопряженные точки — проработайте и их",
    functionsTitle: "Канал и действие точки",
    cautionsTitle: "Осторожно",
  },
  modal: {
    closeAria: "Закрыть",
    whereItHurts: "Где болит",
    whatYouNotice: "Что вы можете ощущать",
    locate: "Найдите триггерную точку",
    locateSub: "Перед проработкой подтвердите точку нажатием",
    release: "Самостоятельная проработка и активация",
    releaseSub: "90-секундный протокол, который выключает точку",
    chipTool: "Инструмент",
    chipTime: "Время",
    chipPressure: "Давление",
    activationTitle: "Активирующее движение",
    manual: "Профессиональная техника",
    manualSub: "Что добавляет обученный специалист",
    stretch: "Растяжка линии",
    stretchSub: "Завершайте каждую проработку этим",
    holdBadge: "удержание {x}",
    causes: "Что поддерживает точку активной",
    causesSub: "Устраните причину — иначе точка вернется",
    prevention: "Как не допустить возвращения",
    related: "Связанные точки этой линии — проработайте и их",
    figureCaption: "триггерная точка и зона отраженной боли (вид {view})",
  },
  lines: {
    eyebrow: "Карта",
    title: "Двенадцать миофасциальных меридианов",
    lead:
      "Фасция связывает мышцы в непрерывные треки. По этим линиям путешествуют перенапряжение и активность триггерных точек. Поймите трек — и отдаленные боли обретут смысл.",
    trackHeading: "Трек, станция за станцией",
    painHeading: "Болевые темы этой линии",
    family: {
      core: "Основная линия",
      arm: "Линия руки",
      functional: "Функциональная линия",
      deep: "Глубокая линия",
    },
  },
  primer: {
    eyebrow: "Базовые принципы",
    title: "Фасция, тенсегрити и триггерные точки",
    lead:
      "Пять минут теории, после которых весь атлас складывается в единую картину.",
  },
  assessment: {
    eyebrow: "Перед проработкой",
    title: "Как найти и подтвердить триггерную точку",
    rulesTitle: "Четыре правила любой проработки",
  },
  safety: {
    eyebrow: "Не подлежит обсуждению",
    title: "Противопоказания и безопасность",
    lead:
      "Работа с триггерными точками — мощная самопомощь, но некоторые симптомы означают совсем другое. Прочитайте этот раздел один раз, медленно.",
    severityLabels: {
      stop: "Сначала — экстренная проверка",
      caution: "Измените подход и будьте осторожны",
      "see-pro": "Обратитесь к специалисту",
    },
    disclaimer:
      "Этот атлас носит образовательный характер и не является медицинской рекомендацией. Он отображает миофасциальные триггерные точки и паттерны отраженной боли по данным Трэвелл и Симонс и модели «Анатомических поездов». Отраженная боль иногда имитирует серьезные состояния — при любых сомнениях сначала пройдите врачебный осмотр.",
  },
  quickref: {
    eyebrow: "Шпаргалка",
    title: "Карточка быстрого справочника",
    lead:
      "Все 110 точек в одной таблице с поиском — миофасциальные триггерные точки и акупунктурные точки китайской медицины. Ищите по боли («пятка», «голова», «покалывание»), мышце или меридиану.",
    searchPlaceholder: "Поиск по боли, мышце или линии…",
    searchAria: "Поиск триггерных точек",
    allLines: "Все линии",
    tcmChip: "ТКМ-точки",
    viewAll: "Спереди и сзади",
    viewFront: "Передняя часть",
    viewBack: "Задняя часть",
    colPoint: "Триггерная точка",
    colMeridian: "Меридиан",
    colReferral: "Отраженная боль",
    colTool: "Инструмент проработки",
    colView: "Вид тела",
    noResults:
      "Ничего не найдено по запросу «{q}» — попробуйте «пятка», «колено» или «покалывание».",
    clickHint: "Нажмите на любую строку, чтобы открыть полный протокол проработки.",
  },
  figure: {
    ariaFront: "схема человеческого тела, вид спереди",
    ariaBack: "схема человеческого тела, вид сзади",
  },
  painFinder: {
    title: "Где болит?",
    sub: "Поиск по локализации боли — укажите, где вы чувствуете боль, и атлас покажет, какие триггерные точки отдают боль в это место.",
    inputAria: "Поиск по локализации боли",
    placeholder: "Попробуйте «пятка», «головная боль», «поясница»…",
    locationsGroup: "Зоны боли",
    pointsGroup: "Точки по названию",
    pointsHere: "Сюда отдает боль: {n} {word}",
    listTitle: "Сюда отдает боль: {label}",
    activeAria: "Активный фильтр по зоне боли",
    clearAria: "Сбросить фильтр по зоне боли",
    noMatches: "Зона боли по запросу «{q}» не найдена",
    presetsLabel: "Частые жалобы:",
  },
  pointsWord: (n) => pluralRu(n, "точка", "точки", "точек"),
};

export const UI_STRINGS: Record<Locale, UiStrings> = { en: EN, ru: RU };
