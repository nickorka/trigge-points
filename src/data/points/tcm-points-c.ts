import type { TriggerPoint } from "../types";

/**
 * Classical Chinese-medicine acupoints — part C (elbow, spine, knee, ankle).
 * Twelve further self-care classics: Quichi, Shousanli, Dazhui, Yaoyangguan,
 * Ciliao, Gaohuangshu, Dubi, Yinlingquan, Xuanzhong, Zulinqi, Taixi, Taiyang.
 * `lineId: "tcm"` + `tcm` metadata; referral zones show the point's main
 * areas of influence rather than myofascial pain referral.
 */
export const TCM_POINTS_C: TriggerPoint[] = [
  {
    id: "li11-quchi",
    name: "Quchi · 曲池 (LI11)",
    commonName: "The pool at the bend",
    lineId: "tcm",
    tcm: {
      pinyin: "Quchi",
      hanzi: "曲池",
      meridian: "li",
      functions:
        "Clears heat and wind and unblocks the large-intestine channel at the elbow — the commanding point for outer-elbow pain, 'tennis elbow' and a hot, restless, irritable state.",
    },
    view: "front",
    marker: { x: 158, y: 158 },
    referral: ["elbow-outer", "forearm-inner"],
    painSummary:
      "The commanding point at the outer end of the elbow crease: acupressure here cools the hot, aching elbow that grips and turns badly, and — in Chinese terms — vents the internal heat that shows up as irritability and flushed skin.",
    symptoms:
      "Outer-elbow pain on lifting a full kettle or turning a jar; the crease feels like a dry, hot pool under the fingertip. Classic usage also lists feverish heat, red skin eruptions and that keyed-up feeling that comes with a stressed week.",
    causes: [
      "Repetitive gripping and turning: tools, kitchen work, racquet sports",
      "A tense week with the jaw and arms never quite releasing",
      "Carrying heavy bags with a straight, locked elbow",
      "Hot, dry weather or overheated rooms feeding 'heat' patterns",
    ],
    howToFind:
      "Bend the elbow to 90°. Run a finger along the outer end of the crease toward the bone — Quchi sits in the hollow just outside the crease, on the thumb side when the palm faces the legs. The tender, slightly warm hollow is the point.",
    release: {
      tool: "Thumb of the opposite hand",
      duration: "60 seconds per side",
      pressure: "Firm, directed into the hollow — spreading ache toward the forearm",
      steps: [
        "Bend the elbow and brace the thumb tip into the hollow at the outer crease end.",
        "Press for 20–30 seconds with slow breaths, feeling the ache spread down the forearm.",
        "Make 8 small circles, then release and compare with the other elbow.",
        "Repeat 2 rounds, treating the more tender side last.",
      ],
      activation:
        "Keep the thumb pressed in and slowly turn the palm up and down — 8 rotations. The channel opens and closes under the pressure while the deep elbow muscles spiral against it.",
    },
    manualTherapy:
      "Acupuncturists use Quchi constantly for elbow and heat conditions, often paired with the master point Hegu (LI4) below. In tuina the point is kneaded with sustained thumb pressure while the forearm is passively turned.",
    stretch: {
      name: "Palm-down turn with straight elbow",
      steps: [
        "Extend the arm with the palm down and the elbow locked soft.",
        "Rotate the whole arm so the palm faces the floor and slightly back.",
        "Cup the back of the hand with the other palm and deepen the turn gently.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Lift kettles and tools with a bent elbow and a braced wrist.",
      "On stressed days, press the hollow for 10 seconds as a built-in cool-down cue.",
      "Alternate heavy-carry days with grip-strength work.",
    ],
    related: ["supinator", "wrist-extensors", "li10-shousanli"],
  },
  {
    id: "li10-shousanli",
    name: "Shousanli · 手三里 (LI10)",
    commonName: "Arm three miles",
    lineId: "tcm",
    tcm: {
      pinyin: "Shousanli",
      hanzi: "手三里",
      meridian: "li",
      functions:
        "Unblocks the large-intestine channel along the forearm and revives tired grip — the worker's endurance point, named like the leg's famous 'three miles' of Zusanli (ST36) for its stamina effect.",
    },
    view: "front",
    marker: { x: 159, y: 180 },
    referral: ["forearm-inner", "elbow-outer", "thumb-web"],
    painSummary:
      "Two finger-widths below the elbow crease on the outer forearm: the endurance point for a forearm that aches after work, typing or tool days. Pressure here both relieves the elbow above and wakes up a tired grip below.",
    symptoms:
      "A deep sore spot that protests on every lift; the whole outer forearm feels heavy and slow to recover. Classic texts reach for it when the arm 'will not lift heavy things' — the same ache modern desks and DIY weekends produce.",
    causes: [
      "Long typing, tool and kitchen days with the same grip",
      "Carrying and lifting with the forearm pinned palm-down",
      "Tennis-elbow strain leaving the whole channel fatigued",
      "Cold weather working into stiff, tired forearms",
    ],
    howToFind:
      "Bend the elbow 90° and measure two thumb-widths below the outer end of the crease, on the muscle ridge toward the thumb side. Press — a deep, satisfying soreness that echoes both up to the elbow and down to the thumb is the point.",
    release: {
      tool: "Thumb or a small firm ball against a table edge",
      duration: "60 seconds per side",
      pressure: "Moderate-firm — deep muscle soreness that eases as you breathe",
      steps: [
        "Rest the forearm palm-down and pin the point with the thumb.",
        "Press for 20 seconds, then strip slowly toward the wrist, 8 passes.",
        "Return to the spot for a final 20-second hold with slow exhales.",
        "Turn the palm up and repeat — the second layer of the same channel.",
      ],
      activation:
        "With the thumb pressed on the point, slowly lift and lower a light object (or just the hand) — 8 slow lifts. The channel contracts and releases under the pressure, flushing the fatigue out.",
    },
    manualTherapy:
      "A staple of tuina forearm work: stripped from Quchi toward the wrist to reset the whole large-intestine channel, usually with LI11 above and LI4 below treated in the same pass.",
    stretch: {
      name: "Palm-up wrist-and-finger stretch",
      steps: [
        "Extend the arm palm-up and cup the fingers with the other hand.",
        "Draw the fingers back and down until the outer forearm wakes up.",
        "Add a slow turn of the palm toward the floor to shift the stretch.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Press the point for 10 seconds mid-morning on heavy typing days.",
      "Finish tool and kitchen sessions with the palm-up stretch above.",
      "Alternate grip-heavy tasks with light forearm shakes and opening-closing fists.",
    ],
    related: ["li11-quchi", "pronator-teres", "li4-hegu"],
  },
  {
    id: "gv14-dazhui",
    name: "Dazhui · 大椎 (GV14)",
    commonName: "The great vertebra",
    lineId: "tcm",
    tcm: {
      pinyin: "Dazhui",
      hanzi: "大椎",
      meridian: "gv",
      functions:
        "Where all yang channels meet the spine: clears wind and heat, frees the whole neck and upper back — the classic first-chill point, and the midline anchor behind a stiff, heavy head.",
      cautions:
        "Work on the tissues beside the bone, never with deep pressure straight onto the spinous process; keep it light during an active fever and check with a doctor if neck stiffness comes with a high temperature.",
    },
    view: "back",
    marker: { x: 108, y: 73 },
    referral: ["neck-back", "suboccipital", "shoulder-back"],
    painSummary:
      "The big bump at the base of the neck (C7): the meeting hub of every yang channel. Warm pressure here releases a locked neck, the heavy head of screen fatigue and — tradition says — the first shiver of a cold caught in a draft.",
    symptoms:
      "A neck that will not nod or turn without the whole upper back joining in; a chill feeling across the shoulders that no sweater settles. The bump itself often feels tender and slightly cool to the touch before a cold arrives.",
    causes: [
      "Drafts and air-conditioning straight onto the bare neck",
      "Hours of forward-head screen posture stacking onto C7",
      "Getting chilled while sweaty after exercise",
      "Long drives with the head pushed forward into the collar",
    ],
    howToFind:
      "Drop the chin and feel down the midline of the neck for the bump that moves least when you nod — that is C7, the Great Vertebra. Dazhui sits in the dip just below it. Warm the area first with a palm; tenderness and coolness confirm it.",
    release: {
      tool: "Warm palm and fingertips (never a hard tool here)",
      duration: "60–90 seconds",
      pressure: "Gentle-to-moderate on the muscles beside the bone — spreading warmth, never bone pressure",
      steps: [
        "Rub both palms together until hot, then cup the base of the neck for 15 seconds.",
        "Press the fingertips into the tissues either side of the dip below C7, 20–30 seconds.",
        "Make slow half-circles outward toward both shoulders, 6 rounds.",
        "Finish with 5 slow chin-nods while the warmth is still in the skin.",
      ],
      activation:
        "With the fingertips resting in the dip, nod the chin slowly down and up — 8 gentle arcs. The whole cervical spine articulates around the warmed hub, resetting the neck's midline.",
    },
    manualTherapy:
      "A flagship point of classical acupuncture: warmed with moxa for 'wind-cold' onset, needled shallowly to vent heat. Tuina practitioners work the muscles beside it with kneading strokes down into the shoulder blades.",
    stretch: {
      name: "Midline chin-tuck and open",
      steps: [
        "Interlace fingers behind the head without pulling.",
        "Nod the chin down and in, keeping the gaze level.",
        "Then open the elbows wide to fold the shoulder blades together.",
      ],
      hold: "20 seconds × 3",
    },
    prevention: [
      "Keep a scarf or collar up in drafts and air-conditioning — the classic shield.",
      "Warm the neck base with a hot shower after cold or sweaty exposure.",
      "Stack screens so the head never hangs forward onto the great vertebra.",
    ],
    related: ["gb20-fengchi", "bl10-tianzhu", "upper-trapezius"],
  },
  {
    id: "gv3-yaoyangguan",
    name: "Yaoyangguan · 腰阳关 (GV3)",
    commonName: "The lumbar yang gate",
    lineId: "tcm",
    tcm: {
      pinyin: "Yaoyangguan",
      hanzi: "腰阳关",
      meridian: "gv",
      functions:
        "Gates the yang of the lower spine: warms a cold, stiff low back, restores the spring of the midline after long sitting, and anchors the whole governing vessel where it swings through the waist.",
    },
    view: "back",
    marker: { x: 110, y: 224 },
    referral: ["lowback", "sacrum"],
    painSummary:
      "The midline dip at the level of the belt (L3–L4): a gate for deep low-back stiffness that eases with warmth and movement but locks again with cold, damp weather and long chairs.",
    symptoms:
      "The back needs a few minutes to 'switch on' in the morning; cold seats and drafts go straight into the waistline. Bending back feels jammed at one midline point, while the muscles either side knot up to protect it.",
    causes: [
      "Long sitting on cold or hard surfaces",
      "Cold-damp weather and sweaty backs chilled in the wind",
      "Heavy lifting done with the waist cold and unprepared",
      "A pelvis that tucks and flattens the natural lumbar curve",
    ],
    howToFind:
      "Stand and feel the midline of the low back at belt level: find the dip between the two prominent vertebral knobs (about L3–L4). Press gently — a deep, comfortable ache that spreads across the waist is the gate.",
    release: {
      tool: "Warm palms, knuckles or two tennis balls in a sock",
      duration: "90 seconds",
      pressure: "Moderate, sustained warmth — the tissue should melt, not guard",
      steps: [
        "Rub the palms hot and press them stacked on the dip for 20 seconds.",
        "Then press the knuckles gently into the dip and make slow horizontal sweeps across the waist.",
        "With balls in a sock behind you, lean against a wall on either side of the midline, 20 seconds each.",
        "Finish with 5 slow hip circles in each direction.",
      ],
      activation:
        "With knuckles resting in the dip, rock the pelvis forward and back — 8 slow waves. The lumbar spine mobilizes right over the warmed gate, and the deep multifidi relearn their spring.",
    },
    manualTherapy:
      "Warmed with moxa in the classics for 'cold' low backs; treated in tuina with pressing, rubbing and lumbar rotations. Pairs with Shenshu (BL23) just above and Ciliao (BL32) below for a full sacro-lumbar reset.",
    stretch: {
      name: "Pelvic wave in a wide stance",
      steps: [
        "Stand with feet hip-width, knees soft, hands on the waist.",
        "Draw slow circles with the pelvis, keeping the chest quiet.",
        "Reverse direction halfway through the hold.",
      ],
      hold: "45 seconds each direction",
    },
    prevention: [
      "Keep the low back warm in cold weather — a waist layer is the old remedy and a good one.",
      "Stand and do 5 pelvic waves every 30 minutes of desk time.",
      "Warm the waist before lifting anything heavy on cold mornings.",
    ],
    related: ["bl23-shenshu", "bl32-ciliao", "multifidi"],
  },
  {
    id: "bl32-ciliao",
    name: "Ciliao · 次髎 (BL32)",
    commonName: "The second crevice",
    lineId: "tcm",
    tcm: {
      pinyin: "Ciliao",
      hanzi: "次髎",
      meridian: "bl",
      functions:
        "Opens the sacral gate and regulates the lower burner — the classic sacrum point for deep pelvic tension, low-back ache that sits at the very base, and stiffness that spreads from the sacrum into the hips.",
    },
    view: "back",
    marker: { x: 106, y: 246 },
    referral: ["sacrum", "lowback", "posterior-thigh"],
    painSummary:
      "The second of the eight sacral hollows: pressure here reaches deep tension at the base of the spine — the ache that sits right where you sit, and often travels a thread down the back of the thigh.",
    symptoms:
      "Sitting on hard chairs concentrates the ache in the sacrum; standing up takes a beat of unfolding. The hollow itself is distinctly tender to a fingertip. Classic usage also lists pelvic-floor and menstrual complaints — signs of how central this gate is.",
    causes: [
      "Hours of sitting with the pelvis tipped back",
      "Heavy lifting and deadlifting days loading the sacrum",
      "Cold seats and drafts on the lower back",
      "Deep pelvic guarding after stress, cycling or childbirth",
    ],
    howToFind:
      "Find the two dimples where the sacrum meets the small of the back, then slide one thumb-width down and slightly in: a row of four small hollows runs there — take the second from the top. A deep, radiating tenderness marks Ciliao.",
    release: {
      tool: "Knuckles or a small firm ball (lying on the back)",
      duration: "60–90 seconds per side",
      pressure: "Moderate, sustained — deep pelvic warmth, never sharp bone pain",
      steps: [
        "Place the knuckles on the second hollows and breathe into the sacrum for 20 seconds.",
        "Make slow inward circles toward the spine, 8 rounds.",
        "Or lie on your back with the small ball tucked beside the sacrum edge and let the pelvis weight sink.",
        "Finish with 5 slow pelvic tilts, pressing the sacrum flat and releasing.",
      ],
      activation:
        "With the knuckles or ball holding the hollow, tilt the pelvis gently back and forth — 8 slow tilts. The sacroiliac joints glide around the pressure and the deep pelvic tension drains out.",
    },
    manualTherapy:
      "A cornerstone sacral point in acupuncture and tuina, often warmed with moxa and paired with Yaoyangguan (GV3) above. Practitioners circle the hollows with progressively deeper thumb pressure while the patient breathes low.",
    stretch: {
      name: "Knees-to-chest sacral rock",
      steps: [
        "Lie on your back and draw both knees to the chest, hands behind the thighs.",
        "Rock side to side, massaging the sacrum against the floor.",
        "Let the tailbone sink fully between rocks.",
      ],
      hold: "45 seconds",
    },
    prevention: [
      "Sit on a wedge or with the hips higher than the knees to un-tuck the pelvis.",
      "End every heavy-lifting session with the sacral rock above.",
      "Keep the sacrum covered in cold weather — drafts find it first.",
    ],
    related: ["bl23-shenshu", "gv3-yaoyangguan", "gluteus-maximus"],
  },
  {
    id: "bl43-gaohuang",
    name: "Gaohuangshu · 膏肓 (BL43)",
    commonName: "The hidden vitals",
    lineId: "tcm",
    tcm: {
      pinyin: "Gaohuangshu",
      hanzi: "膏肓",
      meridian: "bl",
      functions:
        "The legendary point 'beyond the reach of ordinary medicine' for stubborn chronic complaints — in everyday bodywork, THE point for deep upper-back tightness tucked between the shoulder blades, found by folding the chest forward.",
    },
    view: "back",
    marker: { x: 97, y: 128 },
    referral: ["scapula-border", "midback", "scapula"],
    painSummary:
      "The deep spot on the inner border of the shoulder blade at heart level: the classic answer to upper-back tension that massage never quite reaches, eased by folding the chest forward so the blades open apart.",
    symptoms:
      "An itch-like deep ache between the blades that you cannot quite press with a ball against a wall; rolling the shoulders gives seconds of relief, then it returns. Leaning forward over a desk and letting the chest sink often — paradoxically — feels comforting.",
    causes: [
      "Years of desk rounding that glue the blades to the rib cage",
      "Chronic coughs and old respiratory trouble (the classics bind this point to the lungs)",
      "Carrying emotional load as literal weight between the shoulders",
      "Weak mid-back muscles leaving the area permanently braced",
    ],
    howToFind:
      "Sit and fold the chest forward, elbows hanging, so the shoulder blades slide apart. Feel the inner border of the nearer blade at heart level: a tender pocket appears a thumb-width beside the spine. Tenderness that vanishes when you sit tall is the signature.",
    release: {
      tool: "Two tennis balls in a sock, or a partner's thumbs",
      duration: "90 seconds per side",
      pressure: "Moderate, found by folding deeper or shallower — deep relief, not spine pressure",
      steps: [
        "Place the two balls side by side a thumb-width either side of the spine at heart level.",
        "Fold forward over them until the blades spread and the pressure settles into the pockets.",
        "Breathe 5 slow breaths, letting the chest melt toward the floor.",
        "Micro-roll the balls up and down beside the spine, 6 passes.",
      ],
      activation:
        "Folded over the balls, take 6 slow breaths and on each exhale let the shoulder blades drift further apart. Then add tiny chest rotations left and right — the deep rotators glide over the pressure and finally let go.",
    },
    manualTherapy:
      "Practitioners treat it with the patient hugging their own elbows so the blades wing apart, needling or pressing beside T4–T7 — the classical entry to 'incurable' chronic back tension. Mid-back strengthening and thoracic extension work make it hold.",
    stretch: {
      name: "Elbow-hug chest fold",
      steps: [
        "Sit tall and wrap the arms around yourself, hugging the elbows.",
        "Fold the chest forward over the hugged arms, head hanging.",
        "Breathe into the back of the rib cage for the hold.",
      ],
      hold: "30 seconds × 3",
    },
    prevention: [
      "Strengthen the mid-back weekly: rows and T-raises beat any amount of releasing.",
      "Break desk rounding with 10 elbow-hug folds per hour of sitting.",
      "Treat lingering coughs seriously — the classics link this pocket to the lungs.",
    ],
    related: ["rhomboids", "erector-spinae-thoracic", "bl23-shenshu"],
  },
  {
    id: "st35-dubi",
    name: "Dubi · 犊鼻 (ST35)",
    commonName: "The calf's nose",
    lineId: "tcm",
    tcm: {
      pinyin: "Dubi",
      hanzi: "犊鼻",
      meridian: "st",
      functions:
        "The outer 'eye' below the kneecap: moves wind-damp out of the knee, eases swelling and stiffness, and is the classic point warmed with moxa for weather-sensitive, achy knees.",
      cautions:
        "Press beside the patellar tendon, not onto it, and keep pressure light if the joint is hot, swollen or recently injured.",
    },
    view: "front",
    marker: { x: 116, y: 352 },
    referral: ["knee-front", "lateral-knee"],
    painSummary:
      "The soft hollow just outside the patellar tendon below the kneecap — the knee's 'eye'. Warm acupressure here settles stiff, achy knees that grumble with weather, stairs and long sitting.",
    symptoms:
      "The knee feels full and slow on the first steps after standing; stairs ask for the handrail. The hollow is tender and may feel slightly puffy. Cold, damp days deepen the ache — the textbook 'wind-damp' knee.",
    causes: [
      "Years of stairs, squats and kneeling loads",
      "Damp-cold weather and cold floors under bare knees",
      "Long sitting with the knee fully bent (cinema, flights)",
      "Quad weakness leaving the kneecap tracking rough",
    ],
    howToFind:
      "Sit with the knee bent to 90°. Below the kneecap, the patellar tendon stands out like a strap; either side of it lie two soft hollows — the knee's 'eyes'. Take the outer hollow and press gently upward into it.",
    release: {
      tool: "Warm fingertips, or a warm palm with moxa-style heat",
      duration: "60 seconds per knee",
      pressure: "Gentle-moderate, upward into the hollow — comfortable fullness, never into the tendon",
      steps: [
        "Warm the knee with both palms until the skin glows, 15 seconds.",
        "Press the outer hollow upward-inward for 20–30 seconds with slow breaths.",
        "Circle gently 8 times, then switch to the inner hollow for balance.",
        "Finish by sweeping the palm around the kneecap 8 times, both directions.",
      ],
      activation:
        "With fingertips holding the hollow, slowly straighten and bend the knee — 8 cycles seated, foot just off the floor. The kneecap glides over the warmed point and the joint drinks in the movement.",
    },
    manualTherapy:
      "A standard knee point in acupuncture, classically moxa-warmed for cold-damp knees; tuina pairs it with circling mobilizations of the patella and the knee's other eye (Neixiyan, EX-LE4) on the inner side.",
    stretch: {
      name: "Heel-slide knee glide",
      steps: [
        "Sit or lie with the legs long and the quadriceps soft.",
        "Slide one heel slowly toward the buttock, bending as far as comfort allows.",
        "Let the heel return, feeling the kneecap glide.",
      ],
      hold: "8 slow slides per knee",
    },
    prevention: [
      "Build quads gently (sit-to-stands) so the kneecap tracks cleanly.",
      "Keep knees warm on cold floors and damp days — old wisdom, good biology.",
      "Unfold from long sittings slowly: 5 heel slides before standing.",
    ],
    related: ["gb34-yanglingquan", "st36-zusanli", "sp9-yinlingquan"],
  },
  {
    id: "sp9-yinlingquan",
    name: "Yinlingquan · 阴陵泉 (SP9)",
    commonName: "The yin mound spring",
    lineId: "tcm",
    tcm: {
      pinyin: "Yinlingquan",
      hanzi: "阴陵泉",
      meridian: "sp",
      functions:
        "The spleen channel's drainage valve: transforms 'dampness' — the heavy, swollen, weather-sensitive feeling in knees and legs — and frees the inner knee where the channel rounds the bone.",
    },
    view: "front",
    marker: { x: 95, y: 357 },
    referral: ["medial-knee", "inner-lower-leg"],
    painSummary:
      "The spring in the hollow below the inner knee: the spleen's valve for heavy, puffy, damp-weather legs. Acupressure here decongests the inner knee and the whole lower leg's sluggishness.",
    symptoms:
      "The inner knee aches with a dull fullness; socks leave rings on the shin by evening; humid weather makes everything heavier. Pressing the hollow finds a distinct, almost bruised tenderness that 'opens' the congestion.",
    causes: [
      "Humid climates and damp-cold seasons weighing on the joints",
      "Long days standing or sitting that pool fluid in the legs",
      "Heavy, salty, late meals the classics would call damp-forming",
      "Inner-knee overuse from horse stance, skating or pivoting",
    ],
    howToFind:
      "Run a thumb along the top of the inner shin bone from just below the knee: where the bone's crest rounds over into a soft hollow (about a thumb-width below the knee crease) sits the spring. The tender spot that radiates along the shin is it.",
    release: {
      tool: "Thumb of the opposite hand",
      duration: "60 seconds per side",
      pressure: "Moderate, pressing in-and-back against the bone edge — draining ache down the shin",
      steps: [
        "Brace the thumb in the hollow below the inner knee and press for 20–30 seconds.",
        "Strip slowly down the inner shin along the bone, 8 passes.",
        "Return and circle 8 times, feeling the tissue soften.",
        "Compare legs and treat the fuller, more tender side an extra round.",
      ],
      activation:
        "With the thumb pressed in, slowly flex and extend the ankle — 10 cycles. The calf pump runs over the drained valve and carries the heaviness out with the circulation.",
    },
    manualTherapy:
      "The classic 'resolve dampness' point, needled or pressed whenever joints feel puffy and weather-bound; tuina follows it with upward stripping of the calf to send fluid back toward the heart.",
    stretch: {
      name: "Kneeling ankle-and-knee fold",
      steps: [
        "Kneel sitting back on the heels with the toes tucked under.",
        "Lean gently forward, hands on the floor, until the front of the ankle and inner knee stretch.",
        "Breathe into the opening — never bounce.",
      ],
      hold: "30 seconds × 2",
    },
    prevention: [
      "Elevate the legs for 5 minutes after long standing days.",
      "Favor warm, cooked foods on damp-heavy weeks — the dietary half of the spleen rule.",
      "Press the valve 10 seconds on humid mornings as a weather check.",
    ],
    related: ["sp6-sanyinjiao", "st36-zusanli", "vastus-medialis"],
  },
  {
    id: "gb39-xuanzhong",
    name: "Xuanzhong · 悬钟 (GB39)",
    commonName: "The suspended bell",
    lineId: "tcm",
    tcm: {
      pinyin: "Xuanzhong",
      hanzi: "悬钟",
      meridian: "gb",
      functions:
        "Meeting point of the marrow, hung like a bell beside the shin bone: the famous point for a neck that will not turn, and for the whole gallbladder line running from ankle to temple.",
    },
    view: "front",
    marker: { x: 122, y: 419 },
    referral: ["lateral-lower-leg", "lateral-ankle", "neck-side"],
    painSummary:
      "Three finger-widths above the outer ankle bone, beside the shin: press here for a locked neck — a classical trick that still surprises — and to free the whole lateral line of the body from ankle to head.",
    symptoms:
      "A neck that resists turning while the lower leg shows a tender, wiry spot by the bone — the classic far-from-where-it-hurts pairing. The outer ankle feels weak; the lateral calf stays tight through every stretch you throw at it.",
    causes: [
      "Waking with the neck locked after a drafty night",
      "Long screen sessions stacking the neck-ankle line into one knot",
      "Ankle sprains that left the outer channel guarded for years",
      "Side-sleeping habits that shorten the whole lateral line",
    ],
    howToFind:
      "Measure four finger-widths up from the tip of the outer ankle bone, to the front edge of the shin bone. Press — a sharp, unmistakable tenderness right against the bone edge is the suspended bell.",
    release: {
      tool: "Thumb braced against the bone edge",
      duration: "60 seconds per side",
      pressure: "Moderate-firm against the bone edge — sharp but clearing; ease off if it radiates numbly",
      steps: [
        "Seated, brace the thumb on the spot four finger-widths above the outer ankle.",
        "Press for 20–30 seconds while slowly turning the head left and right.",
        "Strip up the bone edge toward the knee, 8 short passes.",
        "Finish with 5 slow neck rotations, feeling them easier than before.",
      ],
      activation:
        "With the thumb pressed on the point, slowly turn the head side to side — 8 full turns. The distant neck unlocks while its channel partner works under your thumb: pressure at one end frees the other.",
    },
    manualTherapy:
      "A celebrated distal point in acupuncture: the neck is treated from the ankle, often bilaterally with GB20 at the skull. In tuina it is pressed while the practitioner gently rotates the patient's head.",
    stretch: {
      name: "Lateral-line ankle-to-hip opener",
      steps: [
        "Stand side-on to a wall, outer ankle crossed behind the other foot.",
        "Push the outer hip toward the wall until the whole lateral line stretches.",
        "Let the head lean gently away to complete the line to the temple.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "On stiff-neck mornings, press the bell before stretching the neck itself.",
      "Stretch the lateral line (wall push above) after every side-sleeping night.",
      "Strengthen ankles after sprains so the outer channel stops guarding.",
    ],
    related: ["gb20-fengchi", "gb34-yanglingquan", "peroneus-longus"],
  },
  {
    id: "gb41-zulinqi",
    name: "Zulinqi · 足临泣 (GB41)",
    commonName: "Foot overlooking tears",
    lineId: "tcm",
    tcm: {
      pinyin: "Zulinqi",
      hanzi: "足临泣",
      meridian: "gb",
      functions:
        "Master point of the girdling vessel that belts the whole waist: frees the side body — hip, flank, ribs and outer foot — and quiets the one-sided headaches the gallbladder channel is famous for.",
    },
    view: "front",
    marker: { x: 127, y: 451 },
    referral: ["lateral-ankle", "top-of-foot", "lateral-hip"],
    painSummary:
      "In the hollow past the outer edge of the tendon that runs to the little toe: the master switch for the body's side line. One-sided headaches, hip-hitch tension and a locked waist all loosen from this small foot point.",
    symptoms:
      "One-sided temple headaches with a stiff waist that won't side-bend; the outer foot aches in shoes that push the little toe in. Pressing the hollow sends a distinct ache shooting along the top of the foot — the channel announcing itself.",
    causes: [
      "Carrying everything on one hip and one shoulder",
      "Tight, tapering shoe boxes squeezing the outer toes",
      "Side-dominant sports and one-sided desk twists",
      "The classic one: stress winding up the gallbladder channel end to end",
    ],
    howToFind:
      "On the top of the foot, find the tendon of the little toe's long extensor. Zulinqi sits in the hollow just beyond (toward the ankle) that tendon, in the gap before the fourth and fifth metatarsals. The radiating tenderness confirms it.",
    release: {
      tool: "Thumb, or a small firm ball under the foot",
      duration: "60 seconds per side",
      pressure: "Moderate — a clear channel ache along the foot, never grinding bone",
      steps: [
        "Brace the thumb in the hollow beyond the little-toe tendon and press 20–30 seconds.",
        "Strip slowly from the toes toward the ankle in the channel groove, 8 passes.",
        "Then slowly side-bend the standing body left and right, 8 waves, feeling the waist free up.",
        "Repeat on the other foot and compare which side released more.",
      ],
      activation:
        "With the thumb holding the hollow, slowly fan the fourth and fifth toes up and down — 10 cycles. The channel's foot-end moves under the pressure while the waistline (its girdle) unwinds above.",
    },
    manualTherapy:
      "Used as the opening point of the girdling vessel in acupuncture styles that pair channel masters with couple points; tuina follows it with broad side-body sweeps from hip to ribs to send the release up the line.",
    stretch: {
      name: "Standing side-body C-curve",
      steps: [
        "Stand tall, feet rooted, one arm overhead.",
        "Draw a C with the torso toward the overhead arm, waist long.",
        "Breathe into the stretched flank for the hold, then switch sides.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Alternate carrying sides and set loads down through the legs, not the waist.",
      "Give the little toe room: wide toe boxes keep the channel's exit open.",
      "On one-sided-headache days, press the foot point first — it often settles the head.",
    ],
    related: ["lr3-taichong", "gb34-yanglingquan", "tfl"],
  },
  {
    id: "ki3-taixi",
    name: "Taixi · 太溪 (KI3)",
    commonName: "The great ravine",
    lineId: "tcm",
    tcm: {
      pinyin: "Taixi",
      hanzi: "太溪",
      meridian: "ki",
      functions:
        "Source point of the kidney channel, in the deep ravine behind the inner ankle: nourishes the reserves — aching heels, tired low backs and the hollow fatigue of running on empty.",
    },
    view: "front",
    marker: { x: 99, y: 432 },
    referral: ["medial-ankle", "inner-lower-leg", "top-of-foot"],
    painSummary:
      "The deep hollow between the inner ankle bone and the Achilles tendon: the kidney's source point. Pressure here grounds aching heels, a tired low back and that deep, unshakable end-of-day fatigue.",
    symptoms:
      "Heels that ache on first standing; a low back that tires by afternoon; fatigue that sleep does not fully clear. The ravine itself feels hollow and tender, and the pulse of the channel can be felt faintly within it.",
    causes: [
      "Long standing, walking and running on hard surfaces",
      "Overwork and short sleep draining the reserves the classics guard",
      "Fear and stress held as literal tension in the heels (the kidney's emotion)",
      "Flat or worn footwear letting the heel strike unguarded",
    ],
    howToFind:
      "Sit and find the tip of the inner ankle bone. Slide a fingertip into the hollow halfway between that tip and the front edge of the Achilles tendon. Press gently toward the bone — a deep, spreading ache with a faint pulse is the great ravine.",
    release: {
      tool: "Fingertip or knuckle of the opposite hand",
      duration: "60 seconds per side",
      pressure: "Gentle-moderate, sustained — a settling, grounding ache",
      steps: [
        "Sink the fingertip into the hollow and hold 30 seconds with long, slow exhales.",
        "Circle gently 8 times, feeling for the faint channel pulse.",
        "Strip briefly from the hollow down toward the heel, 6 passes.",
        "Rest a warm palm over the whole inner ankle for 15 seconds to finish.",
      ],
      activation:
        "With the fingertip resting in the hollow, slowly rock the heel up and down — 10 gentle pumps. The channel's source flows around the pressure while the heel tendon rehydrates.",
    },
    manualTherapy:
      "The kidney's yuan-source point: warmed and pressed in the classics for deep depletion, heel pain and lower-back weariness. Tuina finishes foot work here with the palm cradling the whole medial ankle.",
    stretch: {
      name: "Kneeling toe-and-heel opener",
      steps: [
        "Kneel with the toes tucked, sitting toward the heels.",
        "Shift the weight back until the heel and sole stretch.",
        "Lean side to side to reach the inner heel where the ravine lives.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "End the day with 30 seconds of pressure in each ravine — a built-in off switch.",
      "Guard sleep and recovery like the classics guard the kidney reserves.",
      "Choose heels with real cushioning after long standing days.",
    ],
    related: ["ki1-yongquan", "sp6-sanyinjiao", "bl57-chengshan"],
  },
  {
    id: "ex-taiyang",
    name: "Taiyang · 太阳 (EX-HN5)",
    commonName: "The supreme sun",
    lineId: "tcm",
    tcm: {
      pinyin: "Taiyang",
      hanzi: "太阳",
      meridian: "extra",
      functions:
        "The unofficial headache classic in the hollow behind the temple: clears wind and brightens the eyes — first aid for one-sided temple throbs, screen-day eye strain and head pressure that presses from the sides.",
      cautions:
        "The temple artery runs here: press gently and avoid strong pressure on any spot that visibly throbs or pulsates.",
    },
    view: "front",
    marker: { x: 123, y: 28 },
    referral: ["temple", "orbit", "forehead"],
    painSummary:
      "The hollow between the outer end of the eyebrow and the corner of the eye: the most famous 'unofficial' acupoint of all. Gentle circles here melt temple headaches, eye strain and the side-pressure of a long screen day.",
    symptoms:
      "A one-sided temple throb that tightens with squinting; eyes that burn after hours of focus; a band of pressure around the sides of the head. The hollow is often subtly tender and fuller on the headache side.",
    causes: [
      "Squinting at screens and bright light for hours",
      "The temple clamp of clenching and jaw tension feeding in from below",
      "Eye fatigue and outdated prescriptions",
      "Wind and bright sun on bare temples — the classical 'wind' entry",
    ],
    howToFind:
      "Look straight ahead: the hollow sits midway between the outer corner of the eye and the hairline, just behind the outer end of the brow. Rest a fingertip there — the tender, slightly concave spot under the skin is the supreme sun.",
    release: {
      tool: "Fingertips of both hands (mirror both sides)",
      duration: "60–90 seconds",
      pressure: "Light — this is the most delicate work on the atlas; think 'melting', not 'pressing'",
      steps: [
        "Rest both middle fingertips in the hollows and simply hold for 15 seconds.",
        "Draw slow, small backward circles toward the ear — 10 rounds.",
        "Let the eyes close and breathe out slowly through each circle.",
        "Finish by sweeping the fingertips back over the ear to drain the temple line.",
      ],
      activation:
        "With the fingertips resting in the hollows, slowly open and close the eyes — 10 gentle blinks — then look far left and far right. The eye muscles work against the calming pressure and the strain behind them drains away.",
    },
    manualTherapy:
      "Ubiquitous in Asian massage traditions — the point people find on their own temples without ever being taught it. Practitioners pair it with brow sweeping and skull-base work (Fengchi, GB20) for the full headache circuit.",
    stretch: {
      name: "Temple-line sweep with warm palms",
      steps: [
        "Rub the palms hot and lay the heels of the hands on the temples.",
        "Sweep slowly back over the ears and down the sides of the neck.",
        "Repeat the sweep with the eyes closed for the full hold.",
      ],
      hold: "8 slow sweeps",
    },
    prevention: [
      "Follow the 20-20-20 rule: every 20 minutes, look 20 feet away for 20 seconds.",
      "Dim harsh overhead light and warm the temples on windy days.",
      "At the first temple throb, circles here plus slow exhales often end it early.",
    ],
    related: ["gb20-fengchi", "temporalis", "yintang"],
  },
];
