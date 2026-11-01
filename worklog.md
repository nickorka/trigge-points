# Worklog

---
Task ID: 1
Agent: main (Z.ai)
Task: Build interactive web app "Fascia Atlas" — trigger points mapped to the 12 Anatomy Trains myofascial meridians, with schematic locations, pain referral maps, and release/activation methods.

Work Log:
- Clarified requirements via AskUserQuestion: Web app (Next.js), self-care audience, all 12 lines, 40+ trigger points (encyclopedic), all 4 treatment modalities, vector schematic diagrams, clinical textbook style, extras: fascia primer + assessment guide + contraindications + quick-reference card.
- Loaded fullstack-dev skill, ran init script successfully.

Stage Summary:
- Plan: data layer (types/regions/lines/47 trigger points) → SVG body map components → detail modal → sections → page assembly → verify.
- 47 trigger points planned: SBL 9, SFL 7, LL 7, SPL 5, Arm Lines 12, Functional 2, DFL 5.

---
Task ID: 1 (build complete)
Agent: main (Z.ai)
Task: Implement and verify the "Fascia Atlas" interactive web app.

Work Log:
- Data layer: src/data/types.ts, regions.ts (55 referral-zone ellipses on a 220x480 body grid), lines.ts (12 meridians with tracks + pain themes), points/ (7 files, 47 fully-documented trigger points: painSummary, symptoms, causes, howToFind, self-release protocol with activation move, manual therapy, stretch, prevention, related points), content.ts (fascia primer, assessment guide, safety cards, 4 release rules).
- Components: atlas/BodyFigure.tsx (procedural SVG silhouette via Catmull-Rom smoothing, front/back interior hints, blurred referral ellipses, X markers with pulse + labels), atlas/BodyMap.tsx (line chips, view toggle, auto-view-switching, point list), atlas/PointModal.tsx (full 6-step protocol dialog + related-point navigation), sections/ LinesSection + EduSections + QuickRefSection + Chrome (header/hero/footer).
- Styling: clinical textbook (white, navy/teal, serif headings), custom scrollbar, tp-pulse keyframes, scroll-behavior smooth.
- Fixed lint errors (setState-in-effect, empty interface) and invalid related/referral ids.
- Agent Browser verification: full render, marker click → referral zones, modal open + related navigation, front/back toggle, line filters with auto view switch, quick-ref search ("headache"→4, "tingling"→2), mobile 390px layout + bottom-sheet modal, zero console/page errors, dev.log clean.

Stage Summary:
- Delivered: interactive single-route Next.js 16 app (47 points / 12 lines / 4 release methods each).
- Verified end-to-end in browser at desktop + mobile widths.

---
Task ID: 2-b
Agent: general-purpose (RU translator)
Task: Translate SFL (7) + LL (7) trigger points to Russian overlays

Work Log:
- Read worklog.md for context; read src/data/points/sfl.ts and ll.ts in full (7 points each); read src/data/i18n/ru/types.ts to confirm the RuPointText overlay contract (Pick of name/commonName/painSummary/symptoms/causes/howToFind/release/manualTherapy/stretch/prevention — all required).
- Created src/data/i18n/ru/points-sfl.ts (SFL_POINTS_RU) with 7 entries: tibialis-anterior, rectus-femoris, vastus-medialis, rectus-abdominis, pec-major-sternal, scm, masseter.
- Created src/data/i18n/ru/points-ll.ts (LL_POINTS_RU) with 7 entries: peroneus-longus, tfl, gluteus-medius, gluteus-minimus, vastus-lateralis, quadratus-lumborum, scalenes.
- Translated every field in full (same information content), kept array counts equal to source (causes 4, release.steps 4, stretch.steps 3, prevention 3 for every point), preserved all numbers/durations (30 секунд × 2, 90 секунд на каждую сторону, 60–90 секунд, 20 секунд × 4 повторения, 60 секунд, 2 подхода, etc.).
- Verification (a)–(d): project-wide `npx tsc --noEmit` shows no errors in the two new files (only pre-existing errors in examples/ and skills/); Node-based structural check confirmed 7 entries per file with ids exactly matching source order; per-point completeness check passed; automated scan found no Latin words in content except glossary abbreviations (TFL, VMO, QL) and zero «ё» letters. Both files re-read visually — valid TS, no English sentences, no placeholders.
- Temporary verification script written to tool-results/ and deleted after use. No other files modified.

Stage Summary:
- Produced: src/data/i18n/ru/points-sfl.ts (SFL_POINTS_RU, 7 points) and src/data/i18n/ru/points-ll.ts (LL_POINTS_RU, 7 points) — complete Russian text overlays keyed by exact source ids, typed as Record<string, RuPointText>.
- Terminology decisions: tibialis anterior → передняя большеберцовая мышца; rectus femoris → четырехглавая мышца бедра (прямая мышца) / квадрицепс in casual context; VMO → медиальная широкая мышца бедра (VMO, abbreviation kept); SCM → грудино-ключично-сосцевидная мышца (ГКС); scalenes → лестничные мышцы; peroneus longus → длинная малоберцовая мышца; ITB → подвздошно-большеберцовый тракт; TFL/QL kept as Latin abbreviations (common in RU self-care texts); shin splints → периостит большеберцовой кости («расколотая голень»); ASIS rendered in Russian without abbreviation (передняя верхняя подвздошная ость); "1 inch" localized as ~2,5 сантиметра; "dry needling" → метод сухой иглы; release → проработка, self-release → самостоятельная проработка.
- Style: warm expert tone, polite imperative (Сядьте…, Держите…), no «ё» anywhere, «ёлочки» quotes, em-dashes; commonNames rendered as vivid nicknames (Точка «расколотой голени», Живот-имитатор, Имитатор зубной боли, Страж голеностопа, Точка ложного ишиаса, Подниматель бедра, Мышца головокружения).
- Next actions: wire the overlays into the locale merge step (src/i18n/locale.tsx) once all line files are translated; verify merged rendering in browser.

---
Task ID: 2-a
Agent: general-purpose (RU translator)
Task: Translate SBL trigger points (9) to Russian overlay

Work Log:
- Read worklog.md for context, then src/data/points/sbl.ts in full (9 points) and src/data/i18n/ru/types.ts (RuPointText contract = Pick of 10 text fields; structural fields stay in English source).
- Created src/data/i18n/ru/points-sbl.ts exporting SBL_POINTS_RU: Record<string, RuPointText> — complete Russian translation of name, commonName, painSummary, symptoms, causes, howToFind, release (tool/duration/pressure/steps/activation), manualTherapy, stretch (name/steps/hold), prevention for all 9 points.
- Verification: npx tsc --noEmit clean for project src/ (only pre-existing unrelated errors in sandbox examples/skills dirs); 9 keys byte-identical and same order as sbl.ts ids (plantar-fascia, gastrocnemius, soleus, hamstrings-biceps, hamstrings-medial, gluteus-maximus, erector-spinae-thoracic, multifidi, suboccipitals); array counts match source for every point (causes 5/4/4/4/4/4/4/4/4, release.steps 4 each, stretch.steps 3 each, prevention 3 each); all required sub-fields present; zero «ё» characters; no English sentences left inside translated strings (temp verify script run and deleted).

Stage Summary:
- Produced: src/data/i18n/ru/points-sbl.ts — Russian text overlay for the Superficial Back Line, ready for the i18n merge step (per types.ts design: missing ids warn at runtime, missing fields fail at compile time).
- Terminology decisions: followed glossary strictly — триггерная точка, миофасциальный, зона отраженной боли, протокол проработки, сокращение–расслабление, болезненная точка, плотный напряженный тяж, ишемическая компрессия, пенный роллер, мяч для лакросса, бутылка со льдом, икроножная/камбаловидная/подошвенная фасция, мышцы задней поверхности бедра, большая ягодичная мышца, мышца, выпрямляющая позвоночник, крестцово-бугорная связка, грудопоясничная фасция (n/a in SBL texts), подзатылочные мышцы, головная боль напряжения. Glossary spellings written with «е» instead of «ё» per clinical print rule (e.g. отраженная, напряженные).
- Meridian names in prose: Поверхностная задняя линия (SBL), Глубокая передняя линия (DFL). SCM → грудино-ключично-сосцевидная мышца; hip thrust → хип-траст; sit bone/ischial tuberosity → седалищный бугор; "one inch" kept literally as «один дюйм» to preserve numbers. commonName rendered as vivid nicknames («Якорь пяточного сухожилия», «Трос осанки», «Точка «сорванной спины»», «Переключатель головной боли напряжения» etc.). All durations/counts preserved exactly (30 секунд × 3 подхода; 90 секунд на каждую стопу; 20% усилия; 10°; 90°).

---
Task ID: 2-c
Agent: general-purpose (RU translator)
Task: Translate Arm Lines trigger points (12) to Russian overlay

Work Log:
- Read worklog.md for context; read src/data/points/arms.ts in full (12 points across sbal/dbal/sfal/dfal) and src/data/i18n/ru/types.ts (found existing RuPointText overlay contract — structural fields stay in English source).
- Created src/data/i18n/ru/points-arms.ts exporting ARM_POINTS_RU: Record<string, RuPointText> with 12 entries keyed by exact source ids: upper-trapezius, deltoid, triceps, wrist-extensors, levator-scapulae, supraspinatus, infraspinatus, subscapularis, brachialis, wrist-flexors, pectoralis-minor, biceps-brachii.
- Translated every text field completely (name, commonName, painSummary, symptoms, causes, howToFind, release{tool, duration, pressure, steps, activation}, manualTherapy, stretch{name, steps, hold}, prevention); array counts equal source (causes 4, release.steps 4, stretch.steps 3, prevention 3 per point).
- Verified programmatically: id lists match source verbatim (12/12), all fields present, array counts correct, zero «ё» letters, no leftover English prose; strict tsc type-check of src/data/** passed clean (exit 0).

Stage Summary:
- Produced: full Russian text overlay for all four Arm Lines — 12 points × 10 fields, ready for the i18n merge step.
- Terminology decisions: followed the project glossary (триггерная точка, миофасциальный, отраженная боль, зона отраженной боли, плотный напряжённый тяж → «плотный напряженный тяж», ишемическая компрессия, «сокращение–расслабление», пенный роллер, мяч для лакросса/теннисный мяч, специалист, «локоть теннисиста», «локоть гольфиста», синдром запястного канала, синдром выхода из грудной клетки, «замороженное плечо», покалывание/онемение); muscle names per glossary (трехглавая/двуглавая мышца плеча, плечевая мышца, вращательная манжета, надостная/подостная/подлопаточная, мышца, поднимающая лопатку, большая/малая грудная). Added idiomatic equivalents: "stripping" → стриппинг, "pincer compression" → пинцетное сжатие, "cross-fiber" → поперечноволокнистый/поперечные удержания, "painful arc" → болезненная дуга. Style: polite вы-imperative instructions, «ёлочки» quotes, em-dash, all numbers/durations preserved exactly («90 секунд на каждую сторону», «30 секунд × 3 подхода», усилие 10%, 45°, 90°, 2 раза в неделю), standard clinical print style with е instead of ё throughout.
---
Task ID: 2-d
Agent: general-purpose (RU translator)
Task: Translate SPL (5) + functional/deep (7) trigger points to Russian overlays
Work Log:
- Read worklog.md, source files src/data/points/spl.ts (5 points) and src/data/points/deep.ts (7 points), and the overlay contract src/data/i18n/ru/types.ts (RuPointText).
- Created src/data/i18n/ru/points-spl.ts (SPL_POINTS_RU: splenius-capitis, rhomboids, serratus-anterior, external-oblique, sartorius) and src/data/i18n/ru/points-deep.ts (DEEP_POINTS_RU: latissimus-dorsi, adductor-longus, tibialis-posterior, adductor-magnus, iliopsoas, diaphragm, pelvic-floor); id keys copied verbatim from sources, same order.
- Translated every overlay field completely (name, commonName, painSummary, symptoms, causes, howToFind, release{tool,duration,pressure,steps,activation}, manualTherapy, stretch{name,steps,hold}, prevention); per-point array counts match source exactly (causes 4, release.steps 4, stretch.steps 3, prevention 3).
- Verified with a throwaway node+typescript script (in-memory transpile + compare against sources): 5+7 entries, id sets identical, all counts equal, no «ё», no leftover English in values. npx tsc --noEmit: zero diagnostics for both overlay files (only pre-existing errors in examples/ and skills/, unrelated). Removed the throwaway script afterward.

Stage Summary:
- Delivered complete Russian overlays for the Spiral Line and the Functional/Deep Front Line points, merge-ready (keys = exact source ids; only text fields, no id/lineId/view/marker/referral/related).
- Terminology per glossary: ременная мышца головы, ромбовидные, передняя зубчатая, наружная косая мышца живота, портняжная, широчайшая мышца спины, длинная/большая приводящая, задняя большеберцовая, подвздошно-поясничная/поясничная, диафрагма, мышцы тазового дна, пенный роллер, сокращение–расслабление, отраженная боль. Decisions: pes anserinus → «гусиная лапка»; ASIS → «верхняя передняя подвздошная ость»; shin splints → «боли в голени» (шинсплинтс); hamstring → «хамстринг»; DFL → «глубокая фронтальная линия»; levator ani → «группа леваторов».
- Nicknames rendered vividly and concisely: «Точка давления на макушке», «Узел между лопатками», «Мышца, колющая в боку», «Страж скручиваний корпуса», «Жало портного», «Мышечная перевязь широчайших», «Точка пахового растяжения», «Глубокая пружина свода», «Четвертый хамстринг», «Мышца сидения», «Якорь дыхания», «Фундамент глубокой линии».
- Style: no «ё», «ёлочки» quotes, em-dashes, polite imperatives; all numbers preserved verbatim (60–90 секунд на каждую сторону, 30 секунд × 3, 30–45 секунд, усилие 10%/5%, дыхание 4-6, 10 × 3 подхода, 2 раза в неделю).


---
Task ID: 3
Agent: main (Z.ai)
Task: Add Russian language support with a locale switcher in the same top-right position across every view.

Work Log:
- Architecture: EN base untouched; RU lives as typed overlays in src/data/i18n/ru/ (points-sbl/sfl/ll/spl/arms/deep.ts, lines.ts, content.ts, types.ts). Merge layer src/data/localized.ts builds POINTS/LINES/CONTENT_BY_LOCALE at module load with warn+EN-fallback for gaps.
- 4 parallel translator agents produced all 47 trigger-point overlays (Task 2-a..2-d, IDs verified byte-identical, array counts equal).
- I translated 11 myofascial lines (official RU names per the Myers Russian edition) + fascia primer / assessment / safety / release rules.
- src/i18n/locale.tsx: Locale type, I18nProvider using useSyncExternalStore over localStorage (fa-locale) — passes react-hooks/set-state-in-effect lint, updates <html lang>.
- src/i18n/ui.ts: full UiStrings dictionary (en+ru) covering every hardcoded UI string incl. Russian numeral pluralization (точка/точки/точек) + fill() template helper.
- Components (Chrome, BodyMap, PointModal, LinesSection, EduSections, QuickRefSection, BodyFigure) now read locale-aware data; selection/navigation is id-based so switching locale updates open views in place.
- LanguageToggle (EN | РУС segmented pill) placed in the sticky site header AND the point-protocol modal header — same top-right spot in every view; persists via localStorage.
- Fonts: added Inter + PT Serif (cyrillic subsets) via next/font; globals.css font stacks fall back per-glyph for Cyrillic.
- Validation: bun run lint clean; scripts/validate-ru.js → 47/47 points, arrays match, no EN leftovers, 11 lines, content structure OK.
- Agent Browser E2E: EN default → RU switch re-renders whole page; modal open with toggle inside; live switch EN⇄RU while modal open; localStorage persisted across reload; <html lang> updates; RU quick-ref search («пятка»→1, «покалывание»→2); RU plural "47 точек"; mobile 390px toggle visible top-right; zero console errors, zero [i18n] fallback warnings. Screenshots scripts/verify-{ru-hero,en-hero,ru-mobile,ru-atlas}.png.

Stage Summary:
- Delivered: full EN/RU bilingual Fascia Atlas. Switcher always in the same place (sticky header + modal header). Default EN, choice persisted; translations cover 47 points × 6-step protocols, 11 lines, all educational content and all interface chrome.

---
Task ID: 4-a
Agent: general-purpose (RU translator TCM-A)
Task: Translate TCM acupoints part A (10) to Russian overlay
Work Log:
- Read worklog.md for conventions; read src/data/points/tcm-points-a.ts in full (10 points) and src/data/i18n/ru/types.ts (RuTcmPointText = RuPointText + full tcm Pick with pinyin/hanzi/meridian/functions/cautions).
- Created src/data/i18n/ru/points-tcm-a.ts exporting TCM_POINTS_A_RU: Record<string, RuTcmPointText> with 10 entries keyed by exact source ids in source order: gb20-fengchi, bl10-tianzhu, gv20-baihui, gb21-jianjing, bl23-shenshu, bl40-weizhong, bl57-chengshan, gb30-huantiao, li4-hegu, te5-waiguan.
- name fields: pinyin replaced with Cyrillic transliteration, hanzi + point code kept (Фэнчи · 风池 (GB20) … Вайгуань · 外关 (TE5)); tcm.pinyin/hanzi/meridian copied verbatim; only functions/cautions translated (cautions included and translated for gb21, bl40, li4 — the three points that have them; omitted elsewhere).
- Translated every overlay field in full; array counts match source for all 10 points (causes 4, release.steps 4, stretch.steps 3, prevention 3); all numbers/durations/percentages preserved exactly (60–90 секунд, 20–30 секунд, 30 секунд × 3, 8–10 циклов, 5–6, 45–60 секунд, усилие 10–20%, 90 градусов, 2–3 раза etc.).
- Verification: (a) full-project npx tsc --noEmit output is byte-identical with and without the new file (move-out A/B test) — ZERO diagnostics from points-tcm-a.ts; remaining 6 errors are the 4 pre-existing examples/skills sandbox errors + the expected missing aggregator module './i18n/ru/points-tcm' (parallel agent) + pre-existing src/data/tcm.ts LineId error, all unrelated. Scoped tsconfig check of the new file + its deps: exit 0. (b) Temp node+ts transpile script confirmed 10 keys in exact source order, all fields present, counts match, pinyin/hanzi/meridian verbatim, cautions policy correct, digits multisets identical on translatable text. (c) Automated scan: zero «ё» characters, no English prose in any value (Latin only in point codes GB20/BL23/GB21/C7/LI4/LR3/PC6/TE5). Temp script and scoped tsconfig deleted after use.
Stage Summary:
- Produced: src/data/i18n/ru/points-tcm-a.ts — complete merge-ready Russian overlay for the 10 TCM part-A acupoints (neck/back/buttock/headache/spine/hip/hand classics), typed against RuTcmPointText so missing fields fail at compile time.
- Terminology: ветер / «ветер» as pathogen (ветер-холод, ветер-сырость), ци, ян-ци, подъем ян, акупунктурная точка/акупрессура, проработка/протокол, прижигание (мокса) через слой соли, туина, гуаша, стриппинг, иглоукалывание; меридианы: Меридиан желчного пузыря (в прозе у GB21), Ян-связующий сосуд (Ян-Вэй-май) для Yang Linking vessel (TE5); «Четыре врата» для Four Gates; шу-точка для back-shu; большой вертел, грушевидная мышца, хамстринги, крампи/судороги. Pregnancy cautions (GB21, LI4) and popliteal-vessel caution (BL40) translated with full medical meaning intact («пропустите точку или касайтесь лишь едва заметно», «никогда не используйте твердый инструмент»).
- commonNames rendered as vivid nicknames per brief: Ворота головной боли, Небесный столб, Сто встреч на макушке, Колодец плеча, Шу-точка почек на спине, Скрытый выключатель поясницы, Опора горы, Прыжковая петля, Долина встречи — командный пункт лица и челюсти, Внешний проход.
- Style: polite вы-imperative, warm expert tone, «ёлочки» quotes, em-dashes, zero «ё» (print rule: отраженная, трех, еще → all written with е); Figure-4 kept as «цифрой 4» to preserve the digit. No component/code changes; next: points-tcm-b + points-tcm aggregator from the parallel agent will close the remaining missing-module error.

---
Task ID: 4-b
Agent: general-purpose (RU translator TCM-B)
Task: Translate TCM acupoints part B (9) to Russian overlay

Work Log:
- Read worklog.md for prior conventions; read src/data/points/tcm-points-b.ts in full (9 points) and src/data/i18n/ru/types.ts (RuTcmPointText = RuPointText + tcm: Pick<TcmPointInfo, "pinyin"|"hanzi"|"meridian"|"functions"|"cautions">); confirmed in src/data/types.ts that ReleaseProtocol/StretchProtocol shapes and optional cautions match the contract.
- Created src/data/i18n/ru/points-tcm-b.ts exporting TCM_POINTS_B_RU: Record<string, RuTcmPointText> with entries in exact source order: si3-houxi, lu7-lieque, pc6-neiguan, yintang, st36-zusanli, gb34-yanglingquan, sp6-sanyinjiao, lr3-taichong, ki1-yongquan.
- Translated every field completely (name, commonName, painSummary, symptoms, causes, howToFind, release{tool,duration,pressure,steps,activation}, manualTherapy, stretch{name,steps,hold}, prevention) plus the full tcm block: pinyin/hanzi/meridian copied verbatim from EN; functions translated; cautions translated for exactly the 4 points that have them in EN (lu7 radial-artery, gb34 peroneal-nerve, sp6 pregnancy, ki1 diabetes/neuropathy) and omitted elsewhere.
- Verification: (a) npx tsc --noEmit → 0 diagnostics from points-tcm-b.ts (only pre-existing errors in examples/ and skills/, the expected missing-module error for ./i18n/ru/points-tcm aggregator, and an unrelated src/data/tcm.ts LineId error from the parallel TCM work stream); (b) temp node+ts check: 9 keys byte-identical to source ids in order, all fields present, counts 4/4/3/3 per point, digit-token multisets equal EN vs RU per point (all numbers/ranges/percentages preserved), pinyin/hanzi/meridian verbatim; (c) automated scan: zero «ё» characters in the raw file, zero Latin prose (only allowed point codes SI3/LU7/PC6/EX/ST36/GB34/GB30/GB20/SP6/LR3/KI1/TE5/LI4/KI6). One fix during verification: "figure-4" rendered as «фигура-4» to keep digit parity. Temp script deleted.

Stage Summary:
- Produced: src/data/i18n/ru/points-tcm-b.ts — complete Russian overlay for the 9 part-B TCM acupoints, merge-ready for the future ./i18n/ru/points-tcm aggregator (parallel agent owns points-tcm-a + aggregator).
- Names per given transliterations: Хоуси, Люэке, Нэйгуань, Иньтан, Цзусяли, Янлинцюань, Саньиньцзяо, Тайчун, Юнцюань (hanzi + codes SI3/LU7/PC6/EX/ST36/GB34/SP6/LR3/KI1 kept). Nicknames: «Руль для позвоночника», «Прерванная последовательность — командный пункт шеи», «Внутренний проход — якорь спокойствия», «Зал печатей (точка «третьего глаза»)», «Три лишние мили — точка долголетия», «Хозяин всех сухожилий», «Перекресток трех инь», «Великий прилив — клапан стресса», «Бьющий родник — точка заземления».
- Terminology: Заднесрединный меридиан (Ду-май) / Переднесрединный меридиан (Жэнь-май); меридианы тонкой кишки, легких, перикарда, желудка, желчного пузыря, селезенки, печени, почек; вне-меридианная точка → meridian code "extra"; ветер / ветер-холод, ци, подъем ян печени, застой ци печени, «Четыре ворот» (сы гуань), точка-источник, тонизация, прижигание (мокса), туина, гуаша, «дэ-ци», браслет от укачивания, рефлексотерапия ступни, акупрессура/акупунктура, ТКМ = традиционная китайская медицина; плюсневые кости, межкостные мышцы, головка малоберцовой кости, общий малоберцовый нерв, лучевая артерия, тыльное сгибание стопы, надколенник, «глаз» колена, положение «фигура-4».
- Style: polite вы-imperative, «ёлочки» quotes, em-dashes, е instead of ё everywhere; all durations/counts preserved exactly (60 секунд на каждую руку/ногу/стопу, 45–60 секунд на каждое запястье, 60–90 секунд, 20–30 секунд, 15–20 секунд, 8–10 раз/циклов, 5–6 раз/ведений, 30 секунд × 2, 20 секунд × 3, 6 дыханий × 3, 6 ведений × 2, 10% в неделю, 5 минут, 3 секунды).
- Next actions: aggregator agent (points-tcm-a + ./i18n/ru/points-tcm merge of A+B) wires these overlays into src/data/localized.ts; then browser-verify RU rendering of the tcm block (functions/cautions) in the point modal.

---
Task ID: 5
Agent: main (Z.ai)
Task: Add Chinese-medicine trigger points (acupoints) with the ability to filter them.

Work Log:
- Data layer: src/data/types.ts extended with TcmPointInfo (pinyin/hanzi/meridian/functions/cautions?) and TriggerPoint.lineId widened to LineId | "tcm"; MyofascialLine.id likewise. New src/data/tcm.ts — registry of 13 meridians (EN+RU names inline, hanzi, WHO abbrs), TCM_COLOR #0369A1, and TCM_LINE_BY_LOCALE (a virtual localized "line" merged into LINE_MAP_BY_LOCALE but NOT into LINES_BY_LOCALE, so line chips/LinesSection stay untouched).
- 19 acupoints in src/data/points/tcm-points-a.ts (10: gb20, bl10, gv20, gb21, bl23, bl40, bl57, gb30, li4, te5) and tcm-points-b.ts (9: si3, lu7, pc6, yintang, st36, gb34, sp6, lr3, ki1) — each with the full 6-step structure (painSummary, indications, TCM patterns, cun-based howToFind, acupressure protocol + pressure-with-movement activation, professional technique, movement practice, prevention, cross-system related ids). 7 points carry safety cautions (LI4/SP6/GB21 pregnancy, BL40 popliteal vessels, LU7 radial artery, GB34 peroneal nerve, KI1 neuropathy). One new referral region (inner-lower-leg). Marker coordinates collision-checked against all 47 existing ones.
- Filtering: BodyMap gained a 3-way system segmented control (All systems / Anatomy Trains / Chinese medicine) + contextual second chip row (line chips for AT; 13 meridian chips with hanzi for TCM). ensureView() auto-switches front/back when a filter leaves the current view empty; selection is id-based so filters + locale compose cleanly.
- PointModal: TCM-aware labels (relief/indications/locate/acupressure protocol/pressure-with-movement/in professional hands/movement practice), sky "Channel & functions" box (pinyin + hanzi + localized meridian name + TCM functions) and amber "Caution" box; cross-system related-point navigation works in both directions. QuickRef: TCM chip, meridian-abbr badges with hanzi, search haystack now includes pinyin/hanzi/meridian/functions. Chrome hero: dynamic badge via fill() ("66 points · 11 lines + 13 channels") and data-driven stat.
- Content: 4th primer section "The Chinese-medicine layer" (EN+RU) and an acupressure-cautions item in the safety card (EN+RU).
- i18n: ui.ts extended (systemAria/systemAll/systemAt/systemTcm/allSystemsBadge/tcmBadge/meridiansAll/tcmPointsTitle/pointsOnMeridian + full modalTcm block + quickref.tcmChip, EN+RU); ru/types.ts gained RuTcmPointText; two parallel translator agents produced points-tcm-a/b RU overlays (verified: 19/19 ids in order, array counts equal, digits preserved, zero «ё», cautions 7/7); aggregator src/data/i18n/ru/points-tcm.ts merged into localized.ts.
- Fixed: MyofascialLine.id type rejected "tcm" (widened); LineId cast at the line-chip call site; eslint ignores for scripts/** and tool-results/**.
- Validation: npx tsc --noEmit clean for src/; bun run lint clean; scripts/validate-tcm.js → 15/15 (counts 66/47/19, zero marker collisions, referral+related ids valid, RU complete). Agent Browser E2E: TCM filter → 19 points; GB chip → 4; modal sections EN+RU; caution box (LI4 pregnancy); cross-system navigation; quickref TCM rows + RU search «печени»→2; live EN⇄RU switch while modal open; RU plural «4 точки»; mobile 390px; zero console errors. Screenshots scripts/verify-tcm-filter.png, verify-tcm-mobile.png.

Stage Summary:
- Delivered: 19 classical Chinese-medicine acupoints (Fengchi, Tianzhu, Baihui, Jianjing, Shenshu, Weizhong, Chengshan, Huantiao, Hegu, Waiguan, Houxi, Lieque, Neiguan, Yintang, Zusanli, Yanglingquan, Sanyinjiao, Taichong, Yongquan) fully integrated into the bilingual atlas — 66 points total, filterable by system (All / Anatomy Trains / Chinese medicine) and by 13 meridian channels, with cross-system related-point links and full EN/RU content.

---
Task ID: 6-b
Agent: general-purpose (RU translator, western batch 2)
Task: Translate 6 NEW western trigger points (3 tail entries of points/deep.ts + 3 tail entries of points/arms.ts) to Russian overlays, APPEND to existing per-line RU files

Work Log:
- Read worklog.md (conventions from Task 2-c/2-d), src/data/i18n/ru/types.ts (RuPointText contract), and the tails of both EN sources: src/data/points/deep.ts ids piriformis, pectineus, flexor-hallucis-longus; src/data/points/arms.ts ids pronator-teres, supinator, first-dorsal-interosseous.
- APPENDED 3 entries to src/data/i18n/ru/points-deep.ts (DEEP_POINTS_RU, now 10 keys) and 3 entries to src/data/i18n/ru/points-arms.ts (ARM_POINTS_RU, now 15 keys), keyed by exact EN ids in source order; no existing entries or comments touched (git numstat: 135 insertions, 0 deletions per file — purely additive).
- Translated every overlay field in full (name, commonName, painSummary, symptoms, causes, howToFind, release{tool, duration, pressure, steps, activation}, manualTherapy, stretch{name, steps, hold}, prevention); per-point array counts exactly match EN (causes 4, release.steps 4, stretch.steps 3, prevention 3).
- Verification (a): npx tsc --noEmit | grep "points-(deep|arms).ts" → zero diagnostics (grep exit 1, no output). (b) Throwaway node+ts script in tool-results/ verified: 6 ids present, all fields present, counts 4/4/3/3 equal EN, per-point digit multisets EN == RU (collected over all translatable text), zero structural fields leaked, existing probes (pelvic-floor, biceps-brachii) intact; script deleted after run. (c) rg for [ёЁ] in both files → zero matches. Latin-token scan: only TS keywords/keys/ids, no English prose.
- Numeric parity preserved verbatim: piriformis (90 секунд, «фигура-4» ×3, 6–8 проходов, 20 секунд, 20%, 5 секунд × 5, 60 секунд, 10 наклонов, 30 минут); pectineus (45–60 секунд, 15–20 секунд, 2–3 точки, 5 подъемов, 2 сантиметра, 8 подъемов, 2–3 сантиметра, 45 секунд × 2); flexor-hallucis-longus (60–90 секунд, 8–10 проходов, 15–20 секунд, 10 циклов, 30 секунд × 3, 60 секунд); pronator-teres (90°, 60 секунд, 8–10 проходов, 15–20 секунд, 8 ротаций, 30 секунд × 2); supinator (60 секунд, 8 проходов, 15–20 секунд, 8 переворотов, 90°, 30 секунд × 2); first-dorsal-interosseous (45–60 секунд, 15–20 секунд, 5 раз, 10 сжатий, 20 секунд × 4).

Stage Summary:
- Produced: merge-ready Russian overlays for the 6 new western points — DEEP_POINTS_RU += piriformis, pectineus, flexor-hallucis-longus; ARM_POINTS_RU += pronator-teres, supinator, first-dorsal-interosseous. Files remain additive-only; TCM cross-references (gb30-huantiao, pc6-neiguan, li11-quchi, li4-hegu) untouched in related arrays and NOT translated.
- Muscle names: Piriformis & Deep Hip Rotators → грушевидная мышца и глубокие вращатели бедра; Pectineus → гребешковая мышца; Flexor Hallucis Longus → длинный сгибатель большого пальца стопы; Pronator Teres → круглый пронатор (incl. «синдром круглого пронатора» for pronator syndrome); Supinator → супинатор; First Dorsal Interosseous → первая тыльная межкостная мышца.
- commonName nicknames: «Самозванец ишиаса», «Самозваный пах», «Трос большого пальца», «Двойник запястного канала», «Близнец «локтя теннисиста»» (nesting mirrors existing triceps entry), «Мышца писчей хватки» (no English, replaces suggested writers-костяшка).
- Terminology decisions: figure-4 → «фигура-4» (digit kept, per 2-b precedent); contract–relax → сокращение–расслабление; greater trochanter → большой вертел; "deep six" → «глубокая шестерка» вращателей; adductor canal → приводящий канал; pincer grip → пинцетный защип (per 2-c «пинцетное сжатие»); cross-fiber → поперечноволокнистый; counterforce brace → бандаж-контрфорс; "the ball of the foot" → подушечка стопы; retromalleolar groove / deep posterior compartment → борозда позади внутренней лодыжки / глубокий задний футляр голени; sliding tackles → подкаты; "dancer's heel" → «пятка танцора»; toe box → просторный носок (обуви); hip-hinge → наклоны от бедер. Line names in prose not needed in these 6 texts (EN sources don't mention them); established renderings confirmed from ru/lines.ts (Поверхностная/Глубокая передняя линия руки etc.).
- Style: polite вы-imperative, «ёлочки», em-dashes, zero «ё» (трех/еще written with е), warm expert tone matching existing overlays.
- Next actions: none for this batch; aggregator (src/data/localized.ts) already merges by key, so the 6 new points pick up RU automatically.

---
Task ID: 6-a
Agent: general-purpose (RU translator, western batch 1)
Task: Translate 6 NEW western trigger points (SBL 3, SFL 2, SPL 1) and APPEND overlays to the existing RU files

Work Log:
- Read worklog.md (2-a/4-a conventions), the EN sources (end sections of src/data/points/sbl.ts, sfl.ts, spl.ts) and src/data/i18n/ru/types.ts (RuPointText contract).
- Appended 3 entries to src/data/i18n/ru/points-sbl.ts (SBL_POINTS_RU): "semispinalis-capitis", "serratus-posterior-inferior", popliteus; 2 entries to points-sfl.ts (SFL_POINTS_RU): temporalis, intercostals; 1 entry to points-spl.ts (SPL_POINTS_RU): gracilis — keys are exact EN ids in source order, only the 10 text fields, no structural fields.
- All array counts match EN per point: causes 4, release.steps 4, stretch.steps 3, prevention 3; release carries tool/duration/pressure/steps/activation, stretch carries name/steps/hold.
- Verification: (a) `npx tsc --noEmit | grep points-(sbl|sfl|spl)` → zero output; (b) throwaway node+ts.transpileModule script (tool-results/verify-6a.js, deleted after run) asserted all 6 ids present, per-point counts equal, field completeness, no leaked structural fields, digit multisets identical EN vs RU (incl. the "7" from C7), plus full key coverage in exact EN id order (12/12 sbl, 9/9 sfl, 6/6 spl); (c) grep «ё» in the three files → 0 matches. `git diff --numstat` shows pure appends (137/0, 90/0, 45/0) — existing entries byte-identical.

Stage Summary:
- Produced: merge-ready RU overlays for the 6 new western points, appended without touching existing entries or any other file.
- Terminology decisions: Semispinalis Capitis → полуостистая мышца головы; Serratus Posterior Inferior → нижняя задняя зубчатая мышца; Popliteus → подколенная мышца (shin bone → большеберцовая кость); Temporalis → височная мышца (fan → веер, cheekbone → скуловая кость, night guard → ночная капа, bruxism → бруксизм); Intercostals → межреберные мышцы (rib gap → межреберный промежуток, side stitch → колика в боку, chest wall → грудная стенка); Gracilis → тонкая мышца (pes anserinus → «гусиная лапка» per 2-d, horse stance → стойка всадника, clamshells → «ракушки», cross-legged → по-турецки). Glossary used as established: плотный напряженный тяж, ишемическая компрессия (popliteus manual therapy), «сокращение–расслабление» (gracilis activation), квадратная мышца поясницы (serratus posterior inferior + QL), мяч/роллер per EN tool, C7 kept verbatim. Degrees as digits with ° (90°, 30°, 20°) per 2-a precedent; "two finger-widths" rendered as word «два пальца» to keep digit parity; "10% a week" → «10% в неделю», "20% effort" → «усилие 20%».
- commonName nicknames: «Шлем на голове», «Поясной ремень», «Тормоз спуска», «Тиски висков», «Стежки между ребер», «Внутренний шов».
- Style: polite вы-imperative, «ёлочки», em-dashes, zero «ё» (print rule), line names in prose per convention (not referenced in these 6 EN texts). Next actions: batch 2 of the new western points (parallel agent), then aggregator re-validation of localized.ts.


---
Task ID: 6-c
Agent: general-purpose (RU translator TCM-C)
Task: Translate TCM acupoints part C (12) to Russian overlay

Work Log:
- Read worklog.md for conventions (Task 4-a/4-b as template); read src/data/points/tcm-points-c.ts in full (12 points) and src/data/i18n/ru/types.ts (RuTcmPointText = RuPointText + full tcm Pick with pinyin/hanzi/meridian/functions/cautions; tcm block replaces the whole object on merge).
- Created src/data/i18n/ru/points-tcm-c.ts exporting TCM_POINTS_C_RU: Record<string, RuTcmPointText> with 12 entries keyed by exact source ids in source order: li11-quchi, li10-shousanli, gv14-dazhui, gv3-yaoyangguan, bl32-ciliao, bl43-gaohuang, st35-dubi, sp9-yinlingquan, gb39-xuanzhong, gb41-zulinqi, ki3-taixi, ex-taiyang.
- Translated every overlay field in full (name, commonName, painSummary, symptoms, causes 4, howToFind, release{tool,duration,pressure,steps 4,activation}, manualTherapy, stretch{name,steps 3,hold}, prevention 3 per point); tcm.pinyin/hanzi/meridian copied verbatim; functions translated.
- IMPORTANT DEVIATION FROM BRIEF: the brief stated cautions exist on exactly 2 points (st35-dubi, ex-taiyang), but the EN source actually carries cautions on THREE points: gv14-dazhui, st35-dubi, ex-taiyang (verified by grep and by the structural script). Since the tcm block replaces the whole object on merge, omitting gv14's cautions would silently DROP a safety warning (deep pressure on the spinous process; fever advice) from the Russian UI. All 3 cautions are therefore translated; the other 9 points have none.
- Updated aggregator src/data/i18n/ru/points-tcm.ts: added import of TCM_POINTS_C_RU, spread ...TCM_POINTS_C_RU into TCM_POINTS_RU, doc comment now says three batches (A: neck/back/hip/hand, B: forearm/face/leg/foot, C: elbow/spine/knee/ankle). Nothing else changed in that file.
- Verification: (a) npx tsc --noEmit | grep points-tcm → ZERO output (only pre-existing unrelated examples/skills errors remain, filtered out); (b) throwaway node+ts transpile script in tool-results/ asserted: 12 keys byte-identical to source ids in exact order, all fields present, counts 4/4/3/3 for all 12 points, pinyin/hanzi/meridian verbatim, cautions presence matches EN per point (3/3), digit-token multisets equal EN vs RU for every point (60–90 секунд, 20–30 секунд, 90°, 8 циклов, 10 проходов/подъемов, 4 пальца выше, 2 круга/больших пальца, 20 секунд × 3, 8 медленных поворотов/полных поворотов, 30 секунд × 2, 45 секунд, правило 20-20-20 + 20 минут/20 футов/20 секунд, 10 секунд etc.); script deleted after use. (c) grep for «ё|Ё» in points-tcm-c.ts → zero matches; extra scan found no English prose in values (Latin only in point codes and structural tokens).

Stage Summary:
- Produced: src/data/i18n/ru/points-tcm-c.ts — complete merge-ready Russian overlay for the 12 part-C acupoints (elbow/spine/knee/ankle batch), typed against RuTcmPointText; aggregator points-tcm.ts now merges A+B+C (31 TCM points with RU overlays total).
- Names per established transliterations: Цючи, Шоусаньли, Дачжуй, Яояньгуань, Циляо, Гаохуан (EN pinyin Gaohuangshu kept verbatim in tcm.pinyin), Дуби, Иньлинцюань, Сюаньчжун, Цзулиньци, Тайси, Тайян (hanzi + codes LI11/LI10/GV14/GV3/BL32/BL43/ST35/SP9/GB39/GB41/KI3/EX-HN5 kept).
- Terminology decisions: командная точка (commanding point), очищает жар (clears heat), ветер-сырость / холодно-сырой (wind-damp), опоясывающий сосуд (Дай-май) (girdling vessel), мастер-точка (master point; Хэгу as мастер-точка, Цзулиньци как мастер-точка Дай-май), точка-источник + юань-точка (точка-источник) (source/yuan), место встречи костного мозга (классически — встреча мозга) (marrow meeting), встреча всех ян-меридианов (yang channels meet), нижний обогреватель (lower burner — checked points-tcm-a/b: term not used there before, so batch C fixes it), «рассеивание сырости» (resolve dampness), остистый отросток, собственная связка надколенника, крестцово-подвздошные суставы, многораздельные мышцы (per points-sbl.ts), ахиллово сухожилие, наружная/внутренняя косточка лодыжки (per points-deep.ts), Нэйсиянь (EX-LE4) — внутренний «глаз» колена, стриппинг, прижигание (мокса), туина, «дэ-ци» n/a here, «локоть теннисиста» (per arm-lines glossary), Меридиан толстой кишки (LI), Заднесрединный меридиан (Ду-май) (GV), Меридиан мочевого пузыря (BL), Меридиан желудка (ST), Меридиан селезенки (SP), Меридиан желчного пузыря (GB), Меридиан почек (KI), вне-меридианная точка (extra).
- commonName nicknames used: Излучина-пруд (LI11), Три мили руки (LI10), Большой позвонок (GV14), Врата ян поясницы (GV3), Вторая расщелина (BL32), Скрытые жизненные сокровища (BL43), Нос теленка (ST35), Родник у холма инь (SP9), Подвешенный колокол (GB39), Слезы у брода (GB41), Великая расщелина (KI3), Верховное солнце (EX-HN5).
- Style: polite вы-imperative, «ёлочки» quotes, em-dashes, zero «ё» (print rule); all durations/counts/percentages preserved exactly; related/referral arrays untouched (EN source only).
- Next actions: none for this batch — aggregator is already wired into src/data/localized.ts, so RU rendering of the 31 TCM points can be browser-verified by the integrator.

---
Task ID: 6
Agent: main (Z.ai)
Task: Find and add more trigger points for fascia (Anatomy Trains) and Chinese medicine — expanding both datasets with the filter system.

Work Log:
- Added 12 western/fascia trigger points at the ends of their line files: sbl.ts +3 (semispinalis-capitis "helmet band", serratus-posterior-inferior "waistband ache", popliteus "downhill brake"), sfl.ts +2 (temporalis "temple clamp", intercostals "rib-gap stitches"), spl.ts +1 (gracilis "inner seam"), deep.ts +3 (piriformis "sciatica impostor", pectineus "groin misread", flexor-hallucis-longus "big-toe cable"), arms.ts +3 (pronator-teres "carpal-tunnel copycat", supinator "tennis-elbow twin", first-dorsal-interosseous "pen-gripper"). All with the full 6-step protocol structure (causes 4 / release.steps 4 / stretch.steps 3 / prevention 3) and cross-system related ids.
- Added 12 TCM acupoints in new src/data/points/tcm-points-c.ts: li11-quchi, li10-shousanli, gv14-dazhui, gv3-yaoyangguan, bl32-ciliao, bl43-gaohuang, st35-dubi, sp9-yinlingquan, gb39-xuanzhong, gb41-zulinqi, ki3-taixi, ex-taiyang — registered in points/index.ts. 3 carry safety cautions (GV14 spinous process/fever, ST35 patellar tendon, Taiyang temple artery).
- regions.ts: one new referral region "medial-ankle" (KI3). All other referrals reuse existing regions.
- RU translations via 3 parallel translator agents (Task 6-a/6-b western appends to points-sbl/sfl/spl/deep/arms.ts; Task 6-c new points-tcm-c.ts + aggregator points-tcm.ts spread). All verified per convention: exact ids in order, counts 4/4/3/3, digit multisets equal, zero «ё», cautions 3/3 translated (6-c correctly caught that GV14 has a caution beyond the brief's 2).
- Count text updates: tcm.ts virtual-line summary 19→31 (EN+RU), content.ts primer "The 31 acupoints" + ru/content.ts "31 акупунктурная точка", layout.tsx meta "59 myofascial trigger points", ui.ts 6 stale "66"→"90" strings (intro, allSystemsBadge, quickref sub ×2 locales).
- validate-tcm.js extended for the new totals; one marker collision found (intercostals↔pronator-teres 8.9px) and fixed by nudging intercostals to (137,160).
- Validation: npx tsc --noEmit clean for src/; bun run lint clean; node scripts/validate-tcm.js → 16/16 passed (90 points, 59 AT, 31 TCM, 0 collisions, referral+related ids valid, RU complete for all 90, 31 RU tcm blocks, cautions EN=RU=10).
- Agent Browser E2E: hero badge "90 points · 11 lines + 13 channels"; TCM filter → 31 точки; GB chip → 6 (2 new GB points + 4 existing); AT+DFL → 10, SBL section "12 точек"; piriformis modal full 6-step sections + figure-4 + related → GB30 Huantiao cross-system navigation; live EN⇄RU switch inside open modal; RU piriformis modal (Грушевидная мышца / Самозванец ишиаса / 10 RU section headings); RU quick-ref search «височн»→3, «Тайян»→1; zero console errors and zero [i18n] fallback warnings; mobile 390px verified. Screenshots scripts/verify-tcm-31-points.png, verify-tcm-mobile.png.

Stage Summary:
- Delivered: atlas expanded from 66 to 90 points — 59 myofascial trigger points across the 12 Anatomy Trains lines plus 31 classical Chinese-medicine acupoints across the 13 channels. Both systems fully bilingual (EN/RU), filterable by system → line/meridian, with cross-system related-point links; all counts throughout the UI are data-driven or updated to match.

---
Task ID: 7-a
Agent: general-purpose (RU translator, western batch 3)
Task: Translate 8 NEW western/fascia trigger points (occipitalis; extensor-digitorum-longus; iliotibial-band + peroneus-brevis; brachioradialis + coracobrachialis; teres-major + obturator-internus) and APPEND overlays to the existing RU files

Work Log:
- Read worklog.md (conventions from 2-a/4-a/6-a/6-b), src/data/i18n/ru/types.ts (RuPointText contract) and the tail point objects of the five EN sources; confirmed per-point array contract 4/4/3/3 in both EN and RU.
- APPENDED entries keyed by exact EN ids in EN source order: points-sbl.ts += occipitalis (13 keys), points-sfl.ts += extensor-digitorum-longus (10 keys), points-ll.ts += iliotibial-band then peroneus-brevis (9 keys), points-arms.ts += brachioradialis then coracobrachialis (17 keys), points-deep.ts += teres-major then obturator-internus (12 keys). Only the 10 text fields per entry; no structural fields; existing entries/comments untouched (git numstat: 46/0, 45/0, 92/0, 92/0, 92/0 — insertions only, zero deletions).
- Line references: occipitalis manualTherapy names the whole line in EN prose → rendered as Поверхностная задняя линия per ru/lines.ts; extensor-digitorum-longus manualTherapy keeps "SFL" verbatim; ITB kept as ITB (name «Подвздошно-большеберцовый тракт (ITB)») and TFL kept as TFL per points-ll.ts precedent.
- Verification: (a) npx tsc --noEmit | grep "points-(sbl|sfl|ll|arms|deep)" → zero output (grep exit 1). (b) Throwaway node+ts.transpileModule script (tool-results/verify-7a.js, deleted after run) asserted: all 8 ids present in RU and appended as the last keys in EN order, all 10 text fields non-empty, per-point counts 4/4/3/3, per-point digit-token multisets identical EN vs RU (occipitalis 4,4,8,10,20,20,60; EDL 2,8,10,15,20,30,30,60; ITB 2,4,8,10,15,30,90,90; brevis 2,8,8,20,30,45,60,60; brachioradialis 2,8,8,20,20,30,30,60,90; coracobrachialis 2,6,8,8,10,20,30,45,60; teres 2,8,8,20,30,30,60; obturator 2,4,5,8,8,20,30,30,60 — the 4 in obturator is «фигура-4»), zero leaked structural fields, whole-file key coverage complete, pre-existing probes (piriformis «Самозванец ишиаса», biceps-brachii) intact. (c) rg [ёЁ] over points-*.ts → zero matches; Latin in values limited to ITB/TFL/SFL tokens.

Stage Summary:
- Produced: merge-ready Russian overlays for the 8 new western points, appended without touching any other file; src/data/localized.ts picks them up automatically by key.
- Muscle names: Occipitalis & frontalis → затылочная и лобная мышцы (galea aponeurotica → сухожильный шлем); Extensor Digitorum Longus → длинный разгибатель пальцев стопы; Iliotibial Band → подвздошно-большеберцовый тракт; Peroneus Brevis → короткая малоберцовая мышца (peroneus-longus entry already establishes длинная малоберцовая); Brachioradialis → плечелучевая мышца; Coracobrachialis → клювовидно-плечевая мышца; Teres Major → большая круглая мышца; Obturator Internus → внутренняя запирательная мышца.
- commonName nicknames: «Шнурок скальпа», «Подниматель пальцев», «Трос наружного бедра», «Стабилизатор голеностопа» (longus keeps «Страж голеностопа»), «Мышца рукопожатия», «Глубокая струна передней линии руки» (echoes Глубокая передняя линия руки), «Маленький помощник широчайшей», «Глубокий вращатель».
- Terminology decisions: сухожильный шлем for galea aponeurotica (no Latin kept); скальп per ru/lines.ts; "scalp drawstring" → шнурок; большой вертел, гребень подвздошной кости, отводящие мышцы бедра, «ракушки», боковые планки, дороги с поперечным уклоном (all per established ll-file glossary); «10% в неделю» for 10%-a-week; наружная косточка голеностопа for lateral malleolus; подвороты for rolled ankles; «локтя теннисиста» nested quotes mirrored from the supinator entry («близнец «локтя теннисиста»»); мертвая хватка, бандаж terminology reused; сосудисто-нервный пучок for neurovascular bundle; защитное напряжение for guarding; снижение тонуса тазового дна for pelvic-floor downtraining; седалищный бугор for sitting bone/ischial tuberosity; «фигура-4» for figure-4 (digit kept, per 6-b precedent); "two-count" → «на два счета» (word, EN also has no digit there).
- Style: polite вы-imperative, «ёлочки» (nested «» mirror existing entries), em-dashes, zero «ё» (трех/еще written with е), warm expert tone matching existing overlays.
- Next actions: none for this batch — aggregator merges by key; integrator can browser-verify the 8 new points in RU.

---
Task ID: 7-b
Agent: general-purpose (RU translator TCM-D)
Task: Translate TCM acupoints part D (12) to Russian overlay and wire it into the aggregator

Work Log:
- Read worklog.md for conventions (Task 4-a/4-b/6-c as template); read src/data/points/tcm-points-d.ts in full (12 points) and src/data/i18n/ru/types.ts (RuTcmPointText = RuPointText + full tcm Pick with pinyin/hanzi/meridian/functions/cautions; tcm block replaces the whole object on merge).
- Created src/data/i18n/ru/points-tcm-d.ts exporting TCM_POINTS_D_RU: Record<string, RuTcmPointText> with 12 entries keyed by exact source ids in source order: li15-jianyu, te3-zhongzhu, te17-yifeng, bl60-kunlun, bl2-zanzhu, sp10-xuehai, cv17-shanzhong, cv12-zhongwan, ht7-shenmen, lu5-chize, gb31-fengshi, st44-neiting.
- Translated every overlay field in full (name, commonName, painSummary, symptoms, causes 4, howToFind, release{tool,duration,pressure,steps 4,activation}, manualTherapy, stretch{name,steps 3,hold}, prevention 3 per point); tcm.pinyin/hanzi/meridian copied verbatim; functions translated.
- Cautions: the brief stated exactly 2 exist (bl60-kunlun pregnancy + vessels; cv12-zhongwan full stomach / pregnancy / medical investigation) — verified against the EN source by grep and by the structural script, both agree; both translated, the other 10 points carry none (and none is silently dropped, since cautions presence EN vs RU matched 2/2 in the script).
- Updated aggregator src/data/i18n/ru/points-tcm.ts: added import of TCM_POINTS_D_RU, spread ...TCM_POINTS_D_RU into TCM_POINTS_RU, doc comment now says four batches (A: neck/back/hip/hand, B: forearm/face/leg/foot, C: elbow/spine/knee/ankle, D: shoulder/hand/ear/ankle/brow/knee/chest/abdomen). Nothing else changed in that file (git diff: +import, +spread, comment rewrite only).
- Verification: (a) npx tsc --noEmit | grep points-tcm → zero output (pre-existing examples/ and skills/ errors filtered out; grep exit 1). (b) Throwaway node+ts transpile script (tool-results/verify-7b.js, deleted after run) asserted: 12 keys byte-identical to source ids in exact order, all fields present, counts 4/4/3/3 for all 12 points, pinyin/hanzi/meridian verbatim, cautions presence matches EN per point (2/2: bl60-kunlun, cv12-zhongwan), digit-token multisets equal EN vs RU for every point (60 секунд ×2, 20–30, 45–60, 60–90, 30–45, 15–20 секунд, 90°, 8 кругов/циклов/подъемов/проходов... 6 проходов, 8 раз, 10 секунд, 5 циклов, 25 секунд, правило 20-20-20 + 20 минут/20 футов/20 секунд, 6 метров, 2 минуты, 4-секундные выдохи, 20 секунд × 2/3, 30 секунд × 2, 3 ведения, 6 дыханий, 36/34/30/21/20/17/15/12/11/10/9/7/6/5/4/3/2 codes LI15/TE3/TE17/BL60/BL2/SP10/CV17/CV12/HT7/LU5/GB31/ST44 + cross-refs GB21/LI11/GB20/SP6/SP9/PC6/LV3/LU7/GB30/GB34/ST36 kept verbatim). (c) grep for ё/Ё in points-tcm-d.ts → zero matches; Latin-token scan found only point codes, meridian ids and pinyin — no English prose.
- Digit-parity note: EN bl2-zanzhu prevention keeps "20 feet" (правило 20-20-20 … 20 футов) while the stretch step already uses "6 meters" → «не ближе 6 метров»; spelled-out EN words (two seconds, ten times, twice) rendered as words (две секунды, десять раз, дважды) to keep multisets equal.

Stage Summary:
- Produced: src/data/i18n/ru/points-tcm-d.ts — complete merge-ready Russian overlay for the 12 part-D acupoints (shoulder/hand/ear/ankle/brow/knee/chest/abdomen batch), typed against RuTcmPointText; aggregator points-tcm.ts now merges A+B+C+D (43 TCM points with RU overlays total, matching the 43 in tcm.ts).
- Names per standard Palladius transliteration: Цзяньюй, Чжунчжу, Ифэн, Куньлунь, Цзаньчжу, Сюэхай, Шаньчжун, Чжунвань, Шэньмэнь, Чицзе (EN pinyin Chize kept verbatim in tcm.pinyin), Фэнши, Нэйтин (hanzi + codes LI15/TE3/TE17/BL60/BL2/SP10/CV17/CV12/HT7/LU5/GB31/ST44 kept).
- Terminology decisions: five-shu labels — точка-поток (шу) for shu-stream (TE3), точка-река (цзин) for jing-river (BL60), точка-море (хэ) for he-sea (LU5), точка-родник (ин) for ying-spring (ST44) (ни один из этих ярлыков ранее не встречался в партиях A–C); точка-источник + «врата духа» (HT7); врата встречи (LI15 meeting gate); меридиан тройного обогревателя (TE) per tcm.ts; Переднесрединный меридиан (Жэнь-май) (CV), Меридиан мочевого пузыря (BL), Меридиан толстой кишки (LI), Меридиан селезенки (SP), Меридиан сердца (HT), Меридиан легких (LU), Меридиан желчного пузыря (GB), Меридиан желудка (ST); очищает жар / клапан выпуска жара, огонь желудка, ветер-сырость, «осушая море»/«осушают» (drain the sea/pond), прижигание (мокса), туина, стриппинг, иглорефлексотерапевты, челюстной шарнир, жевательная мышца (masseter), подвздошно-большеберцовый тракт, «замороженное» плечо, флоссинг перепонок (toe-web floss), правило 20-20-20.
- commonName nicknames: Передние врата плеча (LI15), Остров в потоке (TE3), Заслон от ветра за ухом (TE17), Горный перевал (BL60), Собранная бамбуком бровь (BL2), Море крови (SP10), Море в центре груди (CV17), Встреча у печи желудка (CV12), Врата духа (HT7), Болотный пруд (LU5), Рынок ветра (GB31), Внутренний двор (ST44).
- Style: polite вы-imperative, «ёлочки» quotes, em-dashes, zero «ё» (print rule); all durations/counts preserved exactly; related/referral/view/marker arrays untouched (EN source only).
- Next actions: none for this batch — aggregator already wired into src/data/localized.ts; integrator can browser-verify all 43 TCM points in RU (caution boxes on bl60-kunlun and cv12-zhongwan render from the RU tcm block).

---
Task ID: 7
Agent: main (Z.ai)
Task: "Add new points" — second expansion round: 8 new western/fascia trigger points + 12 new TCM acupoints (batch D), bilingual EN/RU with filters.

Work Log:
- Added 8 western points as file-end appends: sbl.ts +1 (occipitalis "the scalp drawstring" — galea aponeurotica, SBL crown), sfl.ts +1 (extensor-digitorum-longus "the toe lifter"), ll.ts +2 (iliotibial-band "the outer thigh cable", peroneus-brevis "the ankle stabilizer"), arms.ts +2 (brachioradialis "the handshake muscle" SBAL, coracobrachialis "the deep front-arm wire" DFAL), deep.ts +2 (teres-major "lat's little helper" — first BFL addition giving BFL 2 points, obturator-internus "the deep turner" DFL). Full 6-step protocols (4/4/3/3 counts) + cross-system related ids.
- Created src/data/points/tcm-points-d.ts with 12 acupoints: li15-jianyu, te3-zhongzhu, te17-yifeng, bl60-kunlun, bl2-zanzhu, sp10-xuehai, cv17-shanzhong, cv12-zhongwan, ht7-shenmen, lu5-chize, gb31-fengshi, st44-neiting. Cautions on exactly 2 (BL60 pregnancy/vessels, CV12 full stomach/pregnancy/medical investigation). Registered in points/index.ts.
- tcm.ts: added 2 new meridians to the registry — "ht" (心经 Heart channel / Меридиан сердца) and "cv" (任脉 Conception vessel / Переднесрединный меридиан (Жэнь-май)) — now 15 channels; TCM virtual-line summaries updated 31→43 (EN+RU).
- RU translations via 2 parallel agents: 7-a appended 8 overlays to points-sbl/sfl/ll/arms/deep RU files (digit multisets verified, pure appends 46/0 45/0 92/0 92/0 92/0); 7-b created points-tcm-d.ts (Palladius transliterations Цзяньюй…Нэйтин, cautions 2/2) + wired aggregator points-tcm.ts to four batches. Both verified 4/4/3/3 counts, zero «ё», tsc clean.
- Count updates: ui.ts 6 strings "90"→"110" (EN+RU); content.ts + ru/content.ts primer "31"→"43 acupoints"; tcm.ts summaries; layout.tsx meta → "110 pressure points — 67 myofascial + 43 classical Chinese acupoints".
- validate-tcm.js extended: pointFiles + d, totals 110/67/43, tcm-d block count 12, meridian list + ht/cv, RU files + points-tcm-d, tcm blocks 43, registry 15.
- One marker collision found & fixed: lu5-chize (144,160) vs intercostals (137,160) 7px → moved LU5 to (148,165).
- Validation: npx tsc --noEmit clean for src/ (only pre-existing examples/skills errors); bun run lint clean; node scripts/validate-tcm.js → 17/17 passed (110 points, 67 AT, 43 TCM, 0 collisions, referral+related valid, RU complete 110/110, 43 RU tcm blocks, cautions EN=RU=12, 15 meridians).
- Browser E2E: hero badge "110 points · 11 lines + 15 channels"; TCM filter → "43 points" + 15 meridian chips incl. new HT/CV; CV12 modal (EN+RU) with 9 TCM sections, caution, Conception vessel block; live EN⇄РУС switch inside open modal; RU quick-ref search «Шнурок»→occipitalis, «Шэньмэнь»→HT7, «трос»→ITB; RU obturator-internus modal (9 western RU headings) → cross-system nav to Циляо (BL32); zero console errors; mobile 390px clean. Screenshots scripts/verify-tcm-43-points.png, verify-ru-obturator-bl32-modal.png, verify-110-mobile.png.

Stage Summary:
- Delivered: atlas expanded from 90 to 110 points — 67 myofascial trigger points across the 12 Anatomy Trains lines (SBL 13, SFL 10, LL 9, SPL 6, arms 17, deep 12) plus 43 classical Chinese acupoints across 15 channels (13 named meridians + CV/HT vessels now both populated). Both systems fully bilingual, filterable, cross-linked.

---
Task ID: 8
Agent: main (Z.ai)
Task: "Add search of trigger points by pain localization" — pain-localization search across the bilingual (EN/RU) 110-point atlas.

Work Log:
- Created src/data/regionSearch.ts: REGION_RU (Russian labels for all 76 referral regions), REGION_KEYWORDS (everyday complaint phrases per region, EN+RU — "headache", "поясница", "tennis elbow", "plantar fasciitis"…), PAIN_PRESETS (8 multi-region common complaints: Headache, Jaw & face, Neck & shoulders, Low back & hips, Chest & breathing, Leg & knee, Foot & ankle, Arm & hand), plus accessors regionLabel/regionLabels/regionTerms/painLocations/termsMatch. PainLocation carries a Record<Locale,string> label + stable key so the active-filter chip survives live language switches (front/back region pairs merge into one location, grouped by canonical EN label).
- Created src/components/atlas/PainFinder.tsx: "Where does it hurt?" combobox search at the top of the atlas — dropdown with two groups (Pain locations with point counts / Named points), keyboard navigation (arrows/Enter/Escape), click-outside close, ARIA combobox/listbox wiring, 8 one-tap preset chips, dismissible active-filter chip showing the count. React-Compiler-lint clean (no setState-in-effect; clamped cursor index).
- BodyMap.tsx: new painLoc state intersects visiblePoints with referral-region membership (ANDs with existing system/line/meridian filters), activeRegions falls back to the filter's region ids so all matching red referral zones glow on the figure, ensureView auto-switches front/back on pick, point-list header shows "Pain refers here from: {label}", named-point results select + switch view directly.
- QuickRefSection.tsx: search haystack extended with localized region labels + complaint keywords per point referral (regionTerms), so "heel"/«между лопаток»/«поясница» now match in the quick-reference table too.
- PointModal.tsx: "Where it hurts" section now renders deduplicated localized region chips (red pills) under the pain summary — visible in both locales and on mobile.
- i18n: painFinder block (12 strings) added to UiStrings + EN + RU dictionaries.
- Verification: npx tsc --noEmit clean (src/), bun run lint clean (incl. react-hooks/preserve-manual-memoization), node scripts/validate-tcm.js 17/17. Browser E2E (agent-browser): EN "heel" → Heel 6 points (4 western + KI1/BL60 TCM), auto view switch to back, red heel zones highlighted; Headache preset → 20 points + 6 red ellipses; RU «поясница» → "Поясница 15 точек" incl. Шэньшу BL23/Вэйчжун BL40/Циляо BL32 with Russian list title; RU quickref «между лопаток» → 5 rows (Ромбовидные first); BL23 modal shows region chips Поясница/Крестец (RU) and Low back/Low back (one side)/Sacrum (EN); live EN⇄RU switch re-localizes the active chip (Heel→Пятка); zero console errors, zero [i18n] fallbacks; mobile 390px clean. Screenshots scripts/verify-painfinder-{heel,heel-map,heel-zones,ru-lowback,dropdown,mobile3}.png.

Stage Summary:
- Delivered: pain-localization search — users can now find trigger points by where it hurts (typed autocomplete over 70+ localized pain locations with counts, 8 common-complaint presets, named-point search), with the matching referral zones highlighted on the body schematic and the same localization terms wired into the quick-reference search. Fully bilingual EN/RU with live-switch safety.
---
Task ID: 9-c
Agent: general-purpose (proofreader EN tcm-points-a/b)
Task: Grammar & spelling proofread of EN prose in points/tcm-points-a.ts, tcm-points-b.ts

Work Log:
- Read worklog.md conventions; read both target files in full (tcm-points-a.ts 597 lines / 8 points, tcm-points-b.ts 539 lines / 8 points). Mechanical scans (rg): zero doubled words, zero double spaces, zero space-before-punctuation, zero it's/its' errors; en-dash ranges and single-quote scare quotes consistent; TCM register (qi/meridian/channel codes/pinyin) left lowercase/verbatim as required.
- 7 corrections applied (3 in file A, 4 in file B), all surgical one-line edits: 2 subject–verb agreement, 1 ditransitive-verb construction, 1 noun-subject garble, 1 nonstandard verb inflection, 1 distributive plural, 1 hyphenation disambiguation. No digits touched on any changed line (verified via git diff -U0 grep [0-9] on changed lines: digit-bearing line only altered in letters). ids/keys/array lengths/order untouched; pinyin/hanzi/meridian fields untouched (diff-confirmed).
- Verification: npx tsc --noEmit | grep "tcm-points-(a|b).ts" → empty (grep exit 1); git numstat 3/3 and 4/4, only the two assigned files modified.

Stage Summary:
- tcm-points-a.ts (3 fixes): bl10-tianzhu release.steps[3] "treat the tighter side one extra round" → "give the tighter side one extra round" (aligns with gb21/bl57 phrasing); bl23-shenshu activation "ten gentle sweeps each direction re-lubricates" → "re-lubricate" (plural subject); gb30-huantiao release.pressure "refer down the leg means back off" → "referral down the leg means back off" (bare verb used as noun subject).
- tcm-points-b.ts (4 fixes): si3-houxi release.tool "the edge of a table edge-press" → "the edge-of-a-table edge-press" (hyphenated compound removes garbled parse); lu7-lieque prevention "Scarve the nape" → "Scarf the nape" (scarve is not a word); yintang activation "two or three rounds ... erases" → "erase" (plural subject); lr3-taichong howToFind "between the big and second toe" → "toes" (distributive plural, matches dataset style).
- Deliberately left unchanged (suspicious/borderline): si3 "Du mai" capitalization and "De-Qi" (verbatim pinyin register); bl10 "re-setting" and bl57 "dorsi-flex" vs st36 "dorsiflex" (acceptable variants, cross-file not same-list); gv20 causes "qi and blood ungenerated" (rare but parseable); bl57 "dorsi-flex"/gb20 "Hold 20–30 seconds..., ease off" imperative comma chain; pc6 "the quease" (informal coinage); sp6 "Long standing shifts" (adding hyphen would flip meaning to long-standing); si3 "point the palms' pinky edges together" (odd verb choice but grammatical); "most researched" vs "most-studied" hyphen split across different points.
---
Task ID: 9-b
Agent: general-purpose (proofreader EN arms/deep)
Task: Grammar & spelling proofread of EN prose in points/arms.ts, points/deep.ts

Work Log:
- Read worklog.md conventions, then full scans of src/data/points/arms.ts (17 points) and src/data/points/deep.ts (12 points): all prose fields (name, commonName, painSummary, symptoms, causes, howToFind, release{tool,duration,pressure,steps,activation}, manualTherapy, stretch{name,steps,hold}, prevention).
- Mechanical scans clean: no doubled words (perl backreference scan), no double spaces, no space-before-punctuation, no it's/its, then/than, to/too errors; list punctuation consistent within every list (steps/prevention sentence-periods, causes bare — house pattern); acronym/TCM codes untouched.
- 5 corrections applied (3 arms.ts, 2 deep.ts), all minimal single-line edits; git numstat 3/3 and 2/2; zero digits, ids, keys, array lengths or order changed.
- Verification: npx tsc --noEmit | grep "points/(arms|deep)\.ts" → zero output (grep exit 1 = clean).

Stage Summary:
- arms.ts · levator-scapulae · stretch.steps[1]: "for light guide" → "for light guidance" (missing word form/article).
- arms.ts · brachialis · stretch.steps[1]: "add gentle downward turn" → "add a gentle downward turn" (missing article before count noun).
- arms.ts · pronator-teres · painSummary: "tingling into the thumb, index and middle finger" → "…middle fingers" (plural agreement in coordinated list).
- deep.ts · tibialis-posterior · symptoms: "The arch collapses feeling when tired" → "The arch-collapse feeling when tired" (ungrammatical subject+verb used attributively; matches "the collapse feeling" used in the same point's activation).
- deep.ts · latissimus-dorsi · manualTherapy: "with the patient side-lying arm overhead" → "with the patient side-lying, arm overhead" (missing comma caused misparse; matches subscapularis "with the patient side-lying," style).
- Deliberately left unchanged (register/idiom calls, not objective errors): "The lats sling" (compound-noun reading), "links arm to pelvis" (paired X-to-Y idiom), "Keyboard elbows bent over 90°" ("over" = beyond), "ache carrying tension in the shoulders" (terse symptom list style), "Strip slowly across the direction of the forearm" (cross-fiber description), "Switch the child- and bag-carrying hip daily" (correct suspended hyphen), "Often co-tight with jaw clenching" (established coinage), "4-6 breathing" (technique name, hyphen by convention), "door frame"/"doorframe" spelling variance across separate lists, "Supination … aches" (grammatical intransitive).
---
Task ID: 9-d
Agent: general-purpose (proofreader EN tcm-points-c/d)
Task: Grammar & spelling proofread of EN prose in points/tcm-points-c.ts, tcm-points-d.ts

Work Log:
- Read worklog.md tail for conventions, then read both files in full (tcm-points-c.ts 714 lines / 12 points li11→ex-taiyang; tcm-points-d.ts 713 lines / 12 points li15→st44). All prose fields scanned: name/commonName/painSummary/symptoms/causes/howToFind/release{tool,duration,pressure,steps,activation}/manualTherapy/stretch{name,steps,hold}/prevention + tcm.functions/cautions.
- Automated scans (both files clean): doubled words (PCRE2 backreference), double spaces, space before punctuation, a/an misuse, its/it's, then/than, common misspellings list. TCM register verified intact ("clears heat", "wind-damp", "master point", "commanding point", channel codes LI11/BL32/ST35/SP9/GB39/KI3/LI15/TE3/BL60/SP10/CV17/CV12/HT7/LU5/GB31/ST44, pinyin names); pinyin/hanzi/meridian fields untouched (diff confirms).
- Corrections: 2 in tcm-points-c.ts, 4 in tcm-points-d.ts (6 lines total, word-only edits).
  · c · ex-taiyang · causes: "unupdated prescriptions" → "outdated prescriptions" (nonstandard word, standard collocation for eyeglass prescriptions).
  · c · gv3-yaoyangguan · release.activation: "tilt the pelvis gently back and forward" → "back and forth" (fixed idiom; ll.ts already uses "back and forth").
  · d · li15/causes + gb31/manualTherapy + gb31/prevention: "air conditioning" → "air-conditioning" ×3 (project-wide EN convention: tcm-points-a ×2, tcm-points-b, tcm-points-c all hyphenated; M-W standard).
  · d · st44-neiting · release.tool: "Thumb nail edge" → "Thumbnail edge" (closed compound).
- Verification: (a) npx tsc --noEmit | grep "tcm-points-(c|d)" → zero output; (b) git numstat 2/2 + 4/4, diff reviewed line-by-line — no ids/keys/imports/field names/array lengths/order touched; (c) digit-token multiset (incl. °, –, - ranges) md5-identical to git HEAD for both files.

Stage Summary:
- 6 objective fixes across the two batches (C: 2, D: 4); no stylistic rewrites, no structural or digit changes, tcm pinyin/hanzi/meridian verbatim.
- Deliberately left unchanged (borderline, judged intentional/grammatical): c·li11·symptoms "a stressed week" (defensible as "a week that stressed you"); c·bl32·release.steps "let the pelvis weight sink" (acceptable noun-noun compound); c·bl43·functions emphatic "THE point"; c·st35·prevention "long sittings" (dictionaries allow plural "sittings" = seated sessions); c·sp9·release.steps elliptical "treat the … side an extra round" (cf. "run it an extra mile"); c·gb41·howToFind parenthetical "just beyond (toward the ankle) that tendon"; te3/te17 "stiff, dragged side/feeling" (attested participle choice); d·bl2·manualTherapy fragment "Also the classical point pressed…"; d·cv12·cautions "skip entirely over inflammation, ulcers or if a doctor is already investigating" (loose but parseable mixed parallelism); d·te3/d·te3·prevention "opening-closing" compounds (kept as-is, used twice as a deliberate pattern).
---
Task ID: 9-h
Agent: general-purpose (proofreader UI + infra, EN+RU)
Task: Грамматика и орфография: i18n/ui.ts (EN+RU), content.ts, lines.ts, regions.ts, tcm.ts, regionSearch.ts, layout.tsx

Work Log:
- Прочитан worklog.md (конвенции: вежливое «вы», «ёлочки», ноль «ё», никаких цифр-изменений). Вычитаны все 7 файлов из зоны ответственности; проверены плейсхолдеры {points}/{lines}/{meridians}/{x}/{n}/{word}/{q}/{label}/{view}/{meridian}/{line} — все целы и совпадают в EN/RU; цифры (110, 67, 43, 365, 12, 90-секундный) не тронуты.
- Скриптом (bun, удален после) посчитаны точки на каждую pain-location: подтверждено, что n=1 реально встречается (Throat и Inner ankle — по 1 точке), т.е. старый шаблон pointsHere давал на экране «1 point refer pain here» / «1 точка отдают боль сюда» — объективное нарушение согласования, а не гипотетика.
- Исправления: ui.ts 2 правки (EN+RU pointsHere — согласование при n=1/n%10=1); content.ts 1 правка (belly aches → bellyaches, закрытое написание в ряду headaches/toothaches); regions.ts 1 правка (Hip crest → Iliac crest — несуществующий термин, выровнен с RU «Гребень подвздошной кости»); regionSearch.ts 8 токенов «ё» → «е» (Боковые/Нижние ребра, Ребра сзади, межреберная боль ×2, ребра, боль в ребрах) по печатной конвенции ноль «ё» и глоссарию «межреберный промежуток» из точечных файлов. lines.ts, tcm.ts, layout.tsx — ошибок не найдено, не менялись.
- Вне зоны (заметено, НЕ трогал): src/data/i18n/ru/lines.ts и ru/content.ts содержат «ё» (Четырёхглавая, Межрёберные, трёхглавую, мёртвой) — это файлы других агентов; конвенция ноль «ё» там не соблюдена.
- Проверка: rg "[ёЁ]" по моим 7 файлам → 0; npx tsc --noEmit | grep "i18n/ui|data/(content|lines|regions|tcm|regionSearch)|app/layout" → пусто; rg по устаревшим строкам (refer pain here, отдают боль сюда, Hip crest, belly aches) → 0.

Stage Summary:
- 4 файла, 12 исправлений: согласование в painFinder.pointsHere EN+RU (шаблон теперь грамматичен для любых n: «Pain refers here from {n} {word}» / «Сюда отдает боль: {n} {word}»), bellyaches, Iliac crest, ноль «ё» в regionSearch.ts. Остальное (lines.ts, tcm.ts, layout.tsx, основной массив ui.ts) вычитано — чисто: пунктуация, «-тся/-ться», управление и плейсхолдеры в порядке.
---
Task ID: 9-a
Agent: general-purpose (proofreader EN western sbl/sfl/ll/spl)
Task: Grammar & spelling proofread of EN prose in points/sbl.ts, sfl.ts, ll.ts, spl.ts

Work Log:
- Read worklog tail for conventions, then read all 4 EN files in full (sbl 13 points, sfl 10, ll 9, spl 6 — 38 points, all prose fields: name/commonName/painSummary/symptoms/causes/howToFind/release{tool,duration,pressure,steps,activation}/manualTherapy/stretch{name,steps,hold}/prevention).
- Mechanical scans (rg): doubled words (PCRE2 backreference) — 0; double spaces inside strings — 0; space before ,/;/. — 0; it's/its' misuse — 0; then/than — all correct; a/an — all correct ("an uncovered/odd/evening"); common-misspelling list — clean. Step-list punctuation consistent (sentences end with periods; causes fragments consistently period-free).
- 7 objective fixes applied via surgical Edit/MultiEdit (4/1/1/1 per file); git diff --numstat confirms only these 4 files touched by me, 1–4 line pairs each, prose-only; zero digits/counts/units changed (none of the 7 edited strings contains a digit except spl activation where "5%…5 seconds…6 reps" preserved verbatim).
- Verification: npx tsc --noEmit 2>&1 | grep -E "points/(sbl|sfl|ll|spl)\.ts" → empty (grep exit 1).

Stage Summary:
- sbl.ts (4): header comment "Travell & Simsons" → "Travell & Simons" (proper-name misspelling, only occurrence in src/); gastrocnemius release step "Angled slightly side-to-side…" → imperative "Angle slightly side-to-side…" (fragment vs imperative list); suboccipitals howToFind "a fierce tender, ropey fullness" → "a fierce, tender, ropey fullness" (comma series, matches "a fierce, local tenderness" house pattern); semispinalis-capitis howToFind "head ache" → "headache" (spelled solid 5+ times elsewhere in file).
- sfl.ts (1): SCM painSummary "the back of the head at the same side" → "on the same side" (wrong preposition; sbl uses "on the same side").
- ll.ts (1): TFL prevention "Stand weight evenly on both feet" → "Stand with weight evenly on both feet" (missing preposition).
- spl.ts (1): splenius-capitis activation "(looking up 5% effort)" → "(looking up at 5% effort)" (missing preposition, digit untouched).
- Deliberately left unchanged (borderline, flagged for medical/style owners): sbl occipitalis "so brushing hair or resting against a headboard protests" (zeugma, matches ll "Walking downstairs sideways and crossing the legs both protest"); spl splenius "Turn the head opposite to feel it contract" (elliptical coaching register; sfl spells it out as "to the opposite side"); sbl mixed "90/20 degrees" vs "90°/10°" within file (stylistic consistency, not grammar); ll "side-planks" vs "side planks" hyphen variants; ll peroneus-brevis "rolled steps" (intentional coinage?); sfl "shoe lace line" (variant spelling of shoelace); various elliptical manualTherapy closers ("Paired with upper-back strengthening…") — house fragment style, kept.
---
Task ID: 9-e
Agent: general-purpose (proofreader RU sbl/sfl/ll/spl + content + lines)
Task: Грамматика и орфография: ru/points-sbl/sfl/ll/spl.ts, ru/content.ts, ru/lines.ts

Work Log:
- Proofread all 6 assigned RU files line-by-line against project conventions (worklog 2-a…7-b; canonical line names from ru/lines.ts; zero-ё print rule; «ёлочки»; em-dash). 17 changed lines total, all inside string values (git: 17+/17-, structure/keys/counts untouched): points-sbl.ts 3, points-sfl.ts 2, points-ll.ts 2, points-spl.ts 1, content.ts 2, lines.ts 7.
- Grammar: sbl/hamstrings-medial «пока не натянет внутренняя поверхность бедра» → «натянется» (-тся/-ться); sbl/popliteus painSummary «не может полностью выпрямиться или подогнется» → «подогнуться» (форма после «может»); sbl/popliteus prevention «а не с коленом, «запертым»» → «а не за счет колена, «запертого»» (разнотипное управление в противопоставлении «за счет… / с…», EN: "with hips and quads, not with the knee locked").
- Punctuation (тире между подлежащим и сказуемым-существительным): sfl/rectus-abdominis «точки брюшной стенки это диагноз исключения» → «точки брюшной стенки — диагноз исключения» (без «это», чтобы не плодить второе тире после «лечить, —»); ll/tfl «настоящие виновники это TFL…» → «настоящие виновники — TFL…» (та же логика); ll/peroneus-brevis «впадина … чувствительная территория» → «впадина … — чувствительная территория»; spl/rhomboids «узелок лишь симптом…» → «узелок — лишь симптом…». sfl/pec-major stretch step «пока грудь не раскроется, ребра остаются опущенными» → точка с запятой (снимает ложное прочтение «пока…» на вторую часть). content.ts safety «— например головку малоберцовой кости» → «— например, головку…» (запятая после вводного).
- Typography/consistency: 8 нормализаций «ё»→«е» по нулевой печатной конвенции проекта — lines.ts «Четырёхглавая», «Межрёберные», «трёхглавую/трёхглавой» ×4, «мёртвой руки»; content.ts «всё остальное» → «все». Это также уравнивает термины с собственными файлами скоупа (points-sfl.ts уже «Четырехглавая», «Межреберные»; points-arms.ts уже «трехглавой»).
- Автопроверки: rg «[ёЁ]» по 6 файлам → 0; rg двойных пробелов внутри строк → 0; rg прямых кавычек внутри строк → 0; rg ' – '/' - ' (дефис/короткое тире как тире) → 0; словарный прогон -тся/-ться (все рефлексивы корректны, включая «обозначятся», «сотрется», «льется»); сверен EN-источник по сомнительным местам (multifidi "only centimeters deep", hamstrings "with the knee supported", suboccipitals "5 each", masseter "tinnitus-like ear fullness", rectus-femoris "front of the back thigh" — соответствия точные).
- Verification: npx tsc --noEmit | grep "i18n/ru/(points-(sbl|sfl|ll|spl)|content|lines)" → пусто (exit 1, т.е. ни одной ошибки в шести файлах).

Stage Summary:
- 17 строковых правок в 6 файлах: 3 грамматические (вид/залог глагола, разнотипное управление), 5 пунктуационных (4 тире между подлежащим и сказуемым + точка с запятой против ложного «пока», запятая при «например»), 8 нормализаций «ё»→«е» (lines.ts + content.ts) к нулевой печатной конвенции и к написанию тех же терминов в points-sfl/points-arms. Цифры, единицы, коды точек, ключи и структуры не тронуты; tsc по шести файлам чист.
---
Task ID: 9-g
Agent: general-purpose (proofreader RU tcm a/b/c/d)
Task: Грамматика и орфография: ru/points-tcm-a/b/c/d.ts

Work Log:
- Полностью прочитаны все 4 файла (a: 533, b: 487, c: 653, d: 651 строк); внесено 18 хирургических правок инструментом Edit/MultiEdit (a: 3, b: 2, c: 7, d: 6), по одной строке каждая; id/ключи/структура/массивы/цифры/pinyin/hanzi/meridian не тронуты (git numstat 3/3, 2/2, 7/7, 6/6).
- Системная находка: несклоняемое употребление «туина» — 7 раз «В туина …» (a·gb20, c·li11, c·gv3, c·gb39, d·te3, d·bl60, d·lu5) → «В туине …», плюс 3 несогласованных определения «точка туина»/«специалисты туина» (c·gv14 «Специалисты туины», c·bl32 «и туины», d·sp10 «точка туины», d·gb31 «точка туины») → родительный падеж по образцу «специалисты иглоукалывания»; форма «Любимица и туины» (a·gb21) подтверждает склоняемость.
- Падежи/согласование: a·te5 functions «при … и запястье» → «и запястьи» (препозитив после «при»); a·te5 howToFind «два ширины» → «две ширины» (род числительного); c·ki3 «усталость жизни на последних силам» → «на последних силах»; d·cv12 «желудочном эхо» → «желудочном эхе» (склоняемое «эхо»); b·lr3 «с сжатыми челюстями» → «со сжатыми» (со перед с+согл.); b·lr3 «перед тем, где кости соединяются» → «перед местом, где» (грамматический стык).
- Типографика: c·gb39 «линия шея-голеностоп» → «шея–голеностоп» (тире-консистентно с «шея–плечо», «голова–шея», «шея–ухо»).
- Механические сканы чисты: 0 «ё/Ё», 0 двойных пробелов, 0 пробелов перед знаками, кавычки-ёлочки сбалансированы (a 41/41, b 41/41, c 27/27, d 36/36), «в течение» везде верно.
- Верификация: npx tsc --noEmit | grep "i18n/ru/points-tcm-(a|b|c|d)" → пусто.

Stage Summary:
- 18 объективных исправлений (склонение «туина» ×10, падежи/согласование ×6, эхо ×1, тире ×1); стилистических переписываний нет, терминология/палладиевские транслитерации/цифры сохранены.
- Сознательно не тронуты: «перед тем, где» → исправлено, но пограничные калечки оставлены: «ноющие от ветра-сырости» кальки («заведенное», «закусывает», «кабелем связана»), «Растяжка ягодицы «цифрой 4»» (a·gb30) vs «фигура-4» (b·gb34) — межфайловая вариативность метафоры figure-4, «спустя…» эллипсисы «никогда резко/никогда резкая» без тире, «прислушиваясь, когда ломота дотянется», «акупунктеры» (b·pc6) vs «иглорефлексотерапевты», «в срок» «по собственной подсказке» (b·si3).
---
Task ID: 9-f
Agent: general-purpose (proofreader RU arms/deep)
Task: Грамматика и орфография: ru/points-arms.ts, ru/points-deep.ts

Work Log:
- Read worklog.md conventions and both files in full; full-text proofread of all prose fields (name, commonName, painSummary, symptoms, causes, howToFind, release{tool,duration,pressure,steps,activation}, manualTherapy, stretch, prevention) for both orthography/grammar/punctuation and project typography.
- Mechanical scan (Grep + throwaway node script, deleted after run): zero «ё», zero straight quotes/apostrophes inside strings, zero double spaces, zero space-before-punctuation, zero unbalanced «» per line, all "в течение" forms correct, no digit-multiset changes (only a hyphen→en-dash swap). Latin limited to ids/codes.
- points-arms.ts — 6 edits: wrist-extensors painSummary "(который обычно является триггерными точками…)" → "триггерной точкой" (согласование сказуемого при ед.ч. подлежащего); wrist-extensors activation "на болезненном тяжеле" → "на болезненном тяже" (предл. падеж от «тяж»); pectoralis-minor manualTherapy "с нижними пучками трапециевидной и передней зубчатой мышцами" → "…трапециевидной мышцы и передней зубчатой мышцей" (разрушенное управление у «пучками»); coracobrachialis howToFind "Скольжите" → "Скользите" (императив от «скользить»); 2× hold "30 секунд × 2 на каждую сторону" → "× 2, на каждую сторону" (brachioradialis, coracobrachialis — унификация с преобладающим вариантом файла).
- points-deep.ts — 7 edits: diaphragm activation "дыхания 4-6" → "4–6" (тире в числовом диапазоне, цифры не тронуты; EN "4-6 breathing"); pelvic-floor symptoms "(два конца глубокой фронтальной линии)" → "глубокой передней линии" (каноничное имя DFL из ru/lines.ts, как в points-sbl.ts); pectineus prevention "подкратами" → "подкатами" (опечатка; ср. «Подкаты…» в causes той же точки); teres-major painSummary "«заклинивает» на верхней точке" → "в верхней точке" (предлог); obturator-internus manualTherapy "при положении клиента" → "пациента" (унификация: «пациент» ×2 в файле); 2× hold comma (teres-major, obturator-internus).
- Verification: npx tsc --noEmit | grep "i18n/ru/points-(arms|deep).ts" → empty (grep exit 1); git diff --stat: arms 6+/6-, deep 7+/7-, только эти два файла; ключи/структура/массивы/цифры не тронуты.

Stage Summary:
- 13 орфографико-грамматических правок (arms 6, deep 7), все минимальные Edit-правки без стилистических переписываний.
- Сознательно не тронуты (сомнительные места): «лодыжковая кость» (FHL ×2) vs «косточка лодыжки» (tibialis-posterior) — счёт 2:1 в пользу первого, а «лодыжковая кость» неоднозначна (можно прочесть как talus); «бумажник» (piriformis ×3) vs «кошелек» (obturator ×2) — ничья 3:2 по вхождениям, оба варианта естественны; устойчивые кальки-метафоры («закусывание» подъёма, «яростная болезненность», «в духе…», «прядь», «вымешивание теста») и принятый в файле паттерн «запятая+тире» перед счётом повторений — оставлены как стиль.
---
Task ID: 9
Agent: main (Z.ai)
Task: "Проверь грамматику и орфографию для обоих языков" — full EN+RU proofread of the atlas.

Work Log:
- Inventoried all user-visible text (~12.7k lines): EN/RU point data (110 points), i18n/ui.ts (both dicts), content/lines/regions/tcm/regionSearch, ru/content + ru/lines overlays.
- Launched 8 parallel proofreading agents (9-a…9-h) on disjoint file sets; ~85 surgical corrections total, zero structural/numeric changes (validate-tcm.js 17/17 after).
- EN (29 fixes): "Travell & Simsons"→Simons; a/an + agreement fixes (brachialis, levator-scapulae, pronator-teres fingers); noun-form errors (GB30 "refer down the leg"→"referral", lu7 "Scarve"→"Scarf", taiyang "unupdated"→"outdated prescriptions"); "back and forward"→"back and forth"; air-conditioning hyphenation ×3; Thumbnail.
- RU (56 fixes): систематическое «в туина»→«в туине» (10 мест), «на последних силам»→«силах», «две ширины», «со сжатыми», «подкратами»→«подкатами», «Скольжите»→«Скользите», «тяжеле»→«тяже», DFL «фронтальной»→«передней»; тире вместо «это» ×4; ё→е нормализация (ru/lines.ts ×7, regionSearch.ts ×8); пунктуация списков.
- UI (2): painFinder.pointsHere грамматика числа — EN "…{n} {word} refer pain here"→"Pain refers here from {n} {word}", RU "…отдают боль сюда"→"Сюда отдает боль: {n} {word}" (старый шаблон давал "1 point refer" / «1 точка отдают»); regions.ts "Hip crest"→"Iliac crest".
- Verification: tsc clean (src/), eslint clean, validate-tcm.js 17/17, rg sweeps: 0 «ё», 0 двойных пробелов, 0 прямых кавычек в RU-строках.
- Browser E2E: PainFinder "throat" → "Pain refers here from 1 point" (EN) / «Сюда отдает боль: 1 точка» (RU, живое переключение); модалка GB20 Фэнчи → «В туине точку разминают…»; 0 ошибок консоли. Screenshot scripts/verify-proofread-ru-modal.png.

Stage Summary:
- Both languages proofread end-to-end: ~85 objective corrections (EN 29, RU 56, UI/infra 12), data integrity 17/17, zero console errors. Established glossary and zero-«ё» convention now consistent across all files.
