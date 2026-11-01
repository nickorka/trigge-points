import type { TriggerPoint } from "../types";

/**
 * Classical Chinese-medicine acupoints — part B (spine gateway, forearm,
 * face, legs and feet). Same conventions as part A.
 */
export const TCM_POINTS_B: TriggerPoint[] = [
  {
    id: "si3-houxi",
    name: "Houxi · 后溪 (SI3)",
    commonName: "The spine's handlebar",
    lineId: "tcm",
    tcm: {
      pinyin: "Houxi",
      hanzi: "后溪",
      meridian: "si",
      functions:
        "Opens the Governing Vessel (Du mai) — making it the master point for the whole spine: morning stiff neck, mid-back lock and lumbar tension, reached from a spot on the edge of the hand.",
    },
    view: "back",
    marker: { x: 148, y: 213 },
    referral: ["ring-little-fingers", "neck-back", "occiput", "lowback"],
    painSummary:
      "On the outer edge of the palm, just past the little-finger knuckle — an unremarkable spot with a remarkable reach: through the Governing Vessel it commands the entire spine. Press it and a stiff neck will often unlock before your eyes.",
    symptoms:
      "Waking with the neck welded straight; mid-back stiffness after a long desk day; the low back 'rusty' on the first bends of the morning. The point also answers ulnar-side wrist ache from typing or push-ups.",
    causes: [
      "Long typing sessions with wrists resting on hard edges",
      "Sleeping positions that pin the neck all night",
      "Hours without rotating or extending the spine",
      "Screen slouch that closes the chest and rounds the back",
    ],
    howToFind:
      "Make a loose fist and look at the crease that starts beside the little finger's knuckle. Houxi sits at the outer end of that skin crease, on the red-pale border of the palm edge. Pressing toward the knuckle finds a distinct tender spot.",
    release: {
      tool: "Opposite thumb, or the edge-of-a-table edge-press",
      duration: "60 seconds per hand",
      pressure: "Moderate-firm — sharp local tenderness is normal",
      steps: [
        "Rest the loose fist on your thigh and set the thumb tip at the palm-edge crease point.",
        "Press toward the knuckle with slow circles for 20–30 seconds.",
        "Keep pressing while very slowly turning the head left and right — expect the neck to loosen live.",
        "Switch hands and repeat; many people treat both sides for good measure.",
      ],
      activation:
        "While the thumb holds pressure, slowly open and close the fist and add a few gentle head rotations — hand and neck movement together is exactly how this point is classically activated.",
    },
    manualTherapy:
      "Because it opens the Du mai, practitioners reach for Houxi with De-Qi stimulation for the whole spinal column, almost always pairing it with the bladder-channel points of the area of complaint. Acupressure along the palm edge is safe to repeat often.",
    stretch: {
      name: "Wrist-and-spine unfurl",
      steps: [
        "Extend both arms and gently point the palms' pinky edges together in front of you.",
        "As you inhale, open the chest and look up; exhale, release.",
        "Let the hands stay soft — the spine unfurls on its own cue.",
      ],
      hold: "6 breaths × 3",
    },
    prevention: [
      "Pad hard desk edges or float the wrists while typing.",
      "Each morning, press Houxi while slowly rotating the neck.",
      "Stand and extend the spine backward once an hour.",
    ],
    related: ["suboccipitals", "upper-trapezius", "wrist-extensors"],
  },
  {
    id: "lu7-lieque",
    name: "Lieque · 列缺 (LU7)",
    commonName: "Broken sequence — neck command",
    lineId: "tcm",
    tcm: {
      pinyin: "Lieque",
      hanzi: "列缺",
      meridian: "lu",
      functions:
        "Opens the Conception Vessel and commands the head and nape — the verse: 'for head and neck, seek Lieque'. Also the lung channel's gateway for cough and sinus congestion.",
      cautions:
        "Sits right beside the radial artery — you can feel the pulse. Use moderate thumb pressure only; never a hard tool on this point.",
    },
    view: "front",
    marker: { x: 75, y: 200 },
    referral: ["neck-side", "forehead", "thumb-web"],
    painSummary:
      "Above the wrist crease on the thumb side, in the gap between the two tendons. 'Broken sequence' refers to the artery seemingly splitting around it — and to its knack for breaking the sequence of a headache that starts in the stiff nape and climbs behind the eye.",
    symptoms:
      "Nape stiffness joined by forehead or behind-the-eye ache; headaches that arrive with a scratchy throat or a cold; sinus congestion that clouds the brow. A one-point home base for the head-neck pair.",
    causes: [
      "Cold wind on the neck and shoulders ('wind-cold' invasion)",
      "Seasonal colds starting with nape stiffness",
      "Long phone sessions with the chin leading",
      "Desk posture that closes the chest and loads the nape",
    ],
    howToFind:
      "Interlace the fingers of both hands behind the opposite wrist — the classic 'crooking the gap' method: the index fingertip lands in the groove just above the wrist crease, between the two thumb-side tendons, near the pulse. Tender? That is the point.",
    release: {
      tool: "Opposite index fingertip (soft contact)",
      duration: "45–60 seconds per wrist",
      pressure: "Light-to-moderate — beside the artery, so stay gentle",
      steps: [
        "Support the forearm and place the fingertip in the tendon groove above the wrist crease.",
        "Press gently toward the bone between the tendons with slow circles.",
        "Hold the tender spot 15–20 seconds and feel the nape respond.",
        "Repeat on the other wrist; the more tender side gets an extra round.",
      ],
      activation:
        "While holding the point, slowly bend the wrist toward the little finger and back — the two tendons scissor past your fingertip — and add a few slow neck rotations.",
    },
    manualTherapy:
      "A fundamental point in acupuncture for exterior 'wind' conditions: paired with its partner kidney point KI6, it opens the chest and head. Practitioners needle it obliquely along the channel; self-care stays with gentle thumb work.",
    stretch: {
      name: "Nape-and-chest opener",
      steps: [
        "Interlace fingers behind the back and draw the shoulder blades gently together.",
        "Lift the crown tall and glide the chin slightly back.",
        "Breathe wide into the chest for the length of the hold.",
      ],
      hold: "30 seconds × 2",
    },
    prevention: [
      "Scarf the nape in wind and air-conditioning.",
      "At first sign of a cold, warm the neck and press the point early.",
      "Chin-level screen height to spare the nape.",
    ],
    related: ["scalenes", "scm", "wrist-flexors"],
  },
  {
    id: "pc6-neiguan",
    name: "Neiguan · 内关 (PC6)",
    commonName: "Inner pass — the calm anchor",
    lineId: "tcm",
    tcm: {
      pinyin: "Neiguan",
      hanzi: "内关",
      meridian: "pc",
      functions:
        "Opens the chest, calms the heart and settles nausea — the most-studied anti-nausea point in the world, and the classical anchor for chest tightness and anxious 'butterflies'.",
    },
    view: "front",
    marker: { x: 149, y: 198 },
    referral: ["forearm-inner", "chest-central"],
    painSummary:
      "Two thumb-widths above the inner wrist crease, between the flexor cords. The world's most researched anti-nausea point also loosens a tight chest, calms a racing heart feeling and eases the inner-forearm ache of mouse work.",
    symptoms:
      "Queasy stomach on winding roads or boats; chest and throat tightness with stress; inner-forearm ache after typing; the shallow-breath 'can't settle' feeling. Gentle pressure here usually brings an exhale you didn't know you were holding.",
    causes: [
      "Motion sickness and travel nerves",
      "Anxiety with shallow chest breathing",
      "Heavy late meals and digestive overload",
      "Wrist-flexor overload at keyboard and mouse",
    ],
    howToFind:
      "Turn the palm up and place three fingers of the other hand across the wrist, index finger at the crease. Neiguan sits under the tendon cords, level with the far edge of the three fingers, between the two central cords. A deep, oddly soothing ache marks it.",
    release: {
      tool: "Opposite thumb",
      duration: "45–60 seconds per wrist",
      pressure: "Moderate — deep but comfortable, toward the bones",
      steps: [
        "Support the forearm and set the thumb between the two flexor cords.",
        "Press inward with slow circles until the chest or stomach seems to 'drop and settle'.",
        "Hold 20–30 seconds while lengthening each exhale.",
        "Repeat on the other wrist; for travel, switch wrists every few minutes.",
      ],
      activation:
        "While pressing, slowly flex and extend the wrist so the cords glide under the thumb — and breathe out long: the movement-plus-breath is what 'opens the pass' inward.",
    },
    manualTherapy:
      "Clinically paired with TE5 across the forearm; acupuncturists use it for nausea, hiccups, chest oppression and anxiety patterns. Sea-band style acupressure straps sit exactly here — evidence-supported for motion sickness.",
    stretch: {
      name: "Wrist flexor stretch, palm up",
      steps: [
        "Extend one arm palm-up and let the hand hang back gently.",
        "Add light over-pressure with the other hand across the palm.",
        "Keep the shoulders down and the neck long.",
      ],
      hold: "20–30 seconds × 2 per arm",
    },
    prevention: [
      "On travel days, press the point before boarding, not after the quease.",
      "Eat lighter, earlier dinners when mornings feel tight-chested.",
      "Stretch the wrist flexors once an hour at the desk.",
    ],
    related: ["diaphragm", "wrist-flexors", "pec-major-sternal"],
  },
  {
    id: "yintang",
    name: "Yintang · 印堂 (EX)",
    commonName: "The hall of impression",
    lineId: "tcm",
    tcm: {
      pinyin: "Yintang",
      hanzi: "印堂",
      meridian: "extra",
      functions:
        "Calms the spirit and clears the head — the 'third eye' point used for frontal headache, sinus pressure, insomnia and a mind that will not stop talking.",
    },
    view: "front",
    marker: { x: 110, y: 26 },
    referral: ["forehead", "orbit"],
    painSummary:
      "The smooth spot between the eyebrows. A few seconds of slow pressure here relaxes the forehead's knit brow, softens frontal headache and sinus pressure, and is the traditional on-ramp into a good night's sleep.",
    symptoms:
      "A furrowed, aching brow after concentrated screen work; pressure across the forehead with a blocked nose; the wired-but-tired state where thoughts replay on a loop.",
    causes: [
      "Frowning at screens (the micro-clench nobody notices)",
      "Sinus congestion from allergies or a cold",
      "Evening overstimulation — screens and doom-scrolling",
      "Worry that 'lives between the eyebrows'",
    ],
    howToFind:
      "Exactly midway between the inner ends of the eyebrows, on the flat of the forehead. If you frown, you can often feel a tender micro-knot just under the skin there.",
    release: {
      tool: "Fingertip (middle finger or both index fingertips)",
      duration: "45–60 seconds",
      pressure: "Light — this point responds to gentle, slow contact",
      steps: [
        "Rest a fingertip between the brows, eyes closed.",
        "Press feather-light and draw slow, small circles following the exhale.",
        "Hold steady 20–30 seconds while the brow muscle lets go.",
        "Finish by sweeping both thumbs outward along the brows 5–6 times.",
      ],
      activation:
        "Frown gently against the fingertip for 3 seconds, then release completely — two or three rounds of that tiny contract-relax erase the furrow pattern for hours.",
    },
    manualTherapy:
      "Classically needled or simply massaged for insomnia and sinus blockage; facial acupuncture and gua sha routines almost always begin here. Warm palm pressure with slow breathing is the low-tech version.",
    stretch: {
      name: "Brow-smoothing sweep",
      steps: [
        "Place both index fingertips at the center of the brow.",
        "Sweep slowly outward along the eyebrows to the temples.",
        "Keep the pressure light enough to leave the skin unwrinkled.",
      ],
      hold: "6 sweeps × 2",
    },
    prevention: [
      "Soften the gaze every few minutes — brow unclenched, eyes unfocused.",
      "Dim screens an hour before bed and press the point as part of winding down.",
      "Treat the sinus story early: steam and brow sweeps at first stuffiness.",
    ],
    related: ["gv20-baihui", "lr3-taichong", "scm"],
  },
  {
    id: "st36-zusanli",
    name: "Zusanli · 足三里 (ST36)",
    commonName: "Leg three miles — the longevity point",
    lineId: "tcm",
    tcm: {
      pinyin: "Zusanli",
      hanzi: "足三里",
      meridian: "st",
      functions:
        "Tonifies qi and blood and strengthens the whole body — 'the point of a hundred illnesses': fatigue, weak digestion and aching legs after long walks all pass through here.",
    },
    view: "front",
    marker: { x: 118, y: 333 },
    referral: ["knee-front", "shin", "abdomen"],
    painSummary:
      "Below the outer eye of the knee, one finger-width outside the shin bone. Its name promises three more miles of walking — this is the point that revives tired legs, steadies digestion and, pressed daily, has been the folk tonic of Chinese longevity culture for centuries.",
    symptoms:
      "Legs that feel leaden after ordinary walks; a wobbly, tired knee on stairs; bloated, sluggish digestion under stress; general end-of-day depletion with no single cause.",
    causes: [
      "More walking or standing than the body is trained for",
      "Erratic meals and stress-shut digestion",
      "Recovery debt from illness or poor sleep",
      "Quadriceps load without aftercare",
    ],
    howToFind:
      "Find the bump just outside the lower edge of the kneecap (the 'eye' of the knee). Drop one hand-width straight down, then feel one finger-width outside the crest of the shin bone, in the muscle groove. A deep, spreading, almost pleasant ache confirms it.",
    release: {
      tool: "Knuckle, thumbs, or a small firm ball",
      duration: "60 seconds per leg",
      pressure: "Moderate-deep into the groove — 'ooh that's the spot' ache",
      steps: [
        "Seated, set the knuckle or ball in the groove outside the shin, below the knee.",
        "Press in slowly and make small circles, feeling the ache spread slightly down the shin.",
        "Hold 20–30 seconds, release, repeat 2–3 times per side.",
        "Finish by tapping along the shin channel downward 5–6 times.",
      ],
      activation:
        "While pressing, slowly dorsiflex the foot (pull the toes up) 8–10 times — the tibialis muscle pumps under the pressure and the groove visibly wakes up.",
    },
    manualTherapy:
      "The flagship tonification point: practitioners needle or warm it with moxa for fatigue, digestive weakness and recovery, and it is the first point in most 'building' formulas. Self-care with daily thumb pressure follows the same logic.",
    stretch: {
      name: "Knee-to-wall quad/ankle wake-up",
      steps: [
        "Kneel and place one foot forward, shin vertical.",
        "Gently drive the front knee toward the wall over the toes to load the shin muscles.",
        "Rock back and ease off; alternate slow rounds.",
      ],
      hold: "20 seconds × 3 per side",
    },
    prevention: [
      "Walk regularly and finish with 30 seconds of tapping down the shin channel.",
      "Eat on a schedule — the stomach channel rewards rhythm.",
      "Ramp walking/running distance by no more than 10% weekly.",
    ],
    related: ["tibialis-anterior", "rectus-femoris", "diaphragm"],
  },
  {
    id: "gb34-yanglingquan",
    name: "Yanglingquan · 阳陵泉 (GB34)",
    commonName: "Influential point of all sinews",
    lineId: "tcm",
    tcm: {
      pinyin: "Yanglingquan",
      hanzi: "阳陵泉",
      meridian: "gb",
      functions:
        "The influential meeting point of every sinew and tendon in the body — cramped calves, stiff tendons, a clicked hip or a sulking knee: all sinew problems route through here.",
      cautions:
        "The common peroneal nerve curls around the fibula head just above this point — stop if pressure sends electric tingling into the foot, and stay below the head of the bone.",
    },
    view: "front",
    marker: { x: 130, y: 340 },
    referral: ["lateral-knee", "lateral-lower-leg"],
    painSummary:
      "In the hollow just in front of and below the head of the outer shin bone. TCM crowns it the master of every tendon in the body: one point with a cable run to tight calves, cranky knees, hip clicks and stiff necks alike.",
    symptoms:
      "Lateral knee ache that flares on stairs; a hip that 'clicks and catches'; random muscle cramps; tendons that feel dry and ungreased everywhere after a heavy training block.",
    causes: [
      "Sudden jumps in training load tightening the whole fascial web",
      "Lateral hip and knee overload from running or cycling",
      "Sitting cross-legged for long stretches",
      "Cold after sweaty exercise on the lower leg",
    ],
    howToFind:
      "Feel the round head of the fibula just below the outer knee. Slide one finger-width down and forward into the hollow in front of it. That distinct, deep tendon-ache — without electric tingling — is the point.",
    release: {
      tool: "Thumb or a small firm ball",
      duration: "60 seconds per leg",
      pressure: "Moderate-deep into the hollow, angled slightly forward",
      steps: [
        "Seated, set the thumb in the hollow below the fibula head.",
        "Press in and make slow circles, feeling for the deep sinew ache (never tingling).",
        "Hold 20–30 seconds, release, repeat 2–3 rounds.",
        "Compare sides and give the stiffer leg an extra round.",
      ],
      activation:
        "While pressing, slowly rotate the foot in circles and flex the toes up and down — every sinew of the lower leg pulls on its 'influential point' from the inside.",
    },
    manualTherapy:
      "The standard acupuncture partner for any sinew injury of the same limb, and classically paired with its far-off colleagues on the same channel (GB30, GB20) to run the whole lateral line. Tuina adds cross-fiber friction in the hollow.",
    stretch: {
      name: "Peroneal and outer-hip chain stretch",
      steps: [
        "Cross one ankle over the other knee (figure-4).",
        "Grasp the crossed foot and gently turn the sole toward the ceiling to stretch the outer shin.",
        "Add a gentle lean toward the opposite side to lengthen the outer hip line.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Warm up the lateral chain before running and cycling blocks.",
      "Avoid long cross-legged sitting; swap positions often.",
      "After sweaty sessions, keep the lower legs warm while cooling down.",
    ],
    related: ["peroneus-longus", "vastus-lateralis", "tfl"],
  },
  {
    id: "sp6-sanyinjiao",
    name: "Sanyinjiao · 三阴交 (SP6)",
    commonName: "Three yin crossing",
    lineId: "tcm",
    tcm: {
      pinyin: "Sanyinjiao",
      hanzi: "三阴交",
      meridian: "sp",
      functions:
        "Where the spleen, liver and kidney channels cross — a deep balancing point for inner-leg ache, fluid retention and the stress-tension cycle of the lower body.",
      cautions:
        "Traditionally avoided during pregnancy — like LI4, it is classically used to promote labor. Skip firm work here if pregnant.",
    },
    view: "front",
    marker: { x: 102, y: 375 },
    referral: ["inner-lower-leg", "inner-thigh"],
    painSummary:
      "On the inner edge of the shin, a hand-width above the inner ankle bone — the meeting of three yin channels. It eases tight inner-leg tissue, the 'heavy waterlogged' feeling of the lower legs and the tired-wired cycle that keeps the whole system tense.",
    symptoms:
      "Aching along the inner shin after long days; ankles and lower legs that swell toward evening; deep fatigue with tension that neither rest nor stretching alone seems to touch.",
    causes: [
      "Long standing shifts and heat (fluid stagnation)",
      "Hormonal-cycle tension days",
      "Overthinking and overwork (TCM: spleen depletion)",
      "Inner-thigh and calf work without recovery",
    ],
    howToFind:
      "Find the inner ankle bone and measure four finger-widths straight up the back edge of the shin bone. Press just behind the bone — a deep tender groove between bone and calf marks the crossing.",
    release: {
      tool: "Thumb, or heels crossed while seated",
      duration: "60 seconds per leg",
      pressure: "Moderate, angled gently behind the shin bone",
      steps: [
        "Seated, hook the thumb behind the shin edge four finger-widths above the ankle bone.",
        "Press toward the bone and make slow circles for 20–30 seconds.",
        "Move slightly up and down along the groove to treat the whole crossing.",
        "Swap legs and compare; finish with a slow sweep up the inner shin.",
      ],
      activation:
        "While pressing, slowly flex and point the foot — the deep calf and tibialis tissues glide past the thumb and the groove visibly softens. 8–10 cycles.",
    },
    manualTherapy:
      "A cornerstone point in gynecological and fluid-balance acupuncture, always used with care around pregnancy. Manual therapists combine it with gentle stripping of the deep calf line and warm foot soaks.",
    stretch: {
      name: "Kneeling ankle stretch with inner-line sweep",
      steps: [
        "Kneel sitting back on the heels with toes tucked.",
        "Ease the weight back until the ankles and shins stretch.",
        "Between holds, sweep the thumb up the inner shin line 5 times.",
      ],
      hold: "20 seconds × 3",
    },
    prevention: [
      "Elevate the legs for 5 minutes in the evening to drain the day's stagnation.",
      "Keep salt-heavy late meals rare when legs swell.",
      "Warm foot soaks twice a week keep the 'three yins' moving.",
    ],
    related: ["tibialis-posterior", "adductor-longus", "adductor-magnus"],
  },
  {
    id: "lr3-taichong",
    name: "Taichong · 太冲 (LR3)",
    commonName: "Great rushing — the stress valve",
    lineId: "tcm",
    tcm: {
      pinyin: "Taichong",
      hanzi: "太冲",
      meridian: "lr",
      functions:
        "Source point of the liver channel — soothes 'rising liver yang': stress headaches, eye strain and short-fuse irritability. Pairs with LI4 as the second of the 'Four Gates'.",
    },
    view: "front",
    marker: { x: 118, y: 453 },
    referral: ["top-of-foot", "big-toe", "orbit", "forehead"],
    painSummary:
      "On the top of the foot in the gap between the first and second metatarsals. The liver channel's source point — in TCM the drain valve for stress that 'rises' into headaches, red eyes and irritability. Press it and something visibly unwinds.",
    symptoms:
      "Stress headaches that throb at the temples or behind the eyes; jaw-tight irritability after a hard day; top-of-foot ache from tight shoes; that 'wound too tight' feeling with no valve to release it.",
    causes: [
      "Chronic stress and frustration (TCM: constrained liver qi)",
      "Alcohol, spicy food and late nights that 'heat' the liver",
      "Narrow or tight footwear squeezing the forefoot",
      "Long screen days straining the eyes (liver opens to the eyes)",
    ],
    howToFind:
      "Slide a finger up from the web between the big and second toes. The point sits in the depression just before the two metatarsal bones join — press toward the foot's center-line for a distinctly tender, almost angry ache.",
    release: {
      tool: "Thumb, or the heel of the opposite foot",
      duration: "60 seconds per foot",
      pressure: "Firm — this point likes honest, steady pressure",
      steps: [
        "Support the foot and set the thumb in the metatarsal gap above the toe web.",
        "Press toward the center-line and make slow circles until the tender spot flares.",
        "Hold 20–30 seconds with long exhales — expect an odd full-body ease.",
        "Finish by sweeping the whole top-of-foot channel from toes toward ankle 5–6 times.",
      ],
      activation:
        "While holding pressure, slowly flex and fan the toes — the interosseous muscles work the point from within — and let the exhales grow longer each round.",
    },
    manualTherapy:
      "The classic partner to LI4: needling both as the 'Four Gates' (si guan) moves qi through the whole torso and calms the nervous system — one of the most researched point combinations in acupuncture.",
    stretch: {
      name: "Toe-splay and foot fan",
      steps: [
        "Sit and grip the base of the big toe, gently pulling it away from the second toe.",
        "Fan all toes apart and hold the stretch across the forefoot.",
        "Repeat with a small upward flex of the toes.",
      ],
      hold: "20 seconds × 3 per foot",
    },
    prevention: [
      "Shake out tension before it climbs: 30 seconds of foot pressing after work.",
      "Trade the tightest pair of shoes for a wider toe box.",
      "On stressed days, walk barefoot on grass — foot-level grounding the TCM way.",
    ],
    related: ["yintang", "li4-hegu", "tibialis-anterior"],
  },
  {
    id: "ki1-yongquan",
    name: "Yongquan · 涌泉 (KI1)",
    commonName: "Gushing spring — the grounding point",
    lineId: "tcm",
    tcm: {
      pinyin: "Yongquan",
      hanzi: "涌泉",
      meridian: "ki",
      functions:
        "The lowest point of the body and wellspring of the kidney channel — draws over-rising energy down: plantar ache, restlessness, hot sleepless feet.",
      cautions:
        "Sole skin is thin and sensitive — moderate pressure only. With diabetes-related neuropathy or any loss of foot sensation, check with a clinician before self-treating the feet.",
    },
    view: "back",
    marker: { x: 110, y: 466 },
    referral: ["sole", "heel"],
    painSummary:
      "On the sole, in the hollow about a third of the way down from the toes — the 'gushing spring'. Pressing it grounds a scattered mind, eases aching soles and, in the evening ritual tradition, draws the day's heat out of the head toward sleep.",
    symptoms:
      "Sore soles after barefoot or hard-floor days; feet that feel hot or restless in bed while the mind refuses to settle; a 'buzzing' tiredness that floats somewhere between eyes and brain.",
    causes: [
      "Standing and walking on hard, unyielding floors",
      "Evening overstimulation — screens, late work, late coffee",
      "Thin-soled or unsupportive footwear",
      "Load that rises (tension headaches, racing mind) without a down-path",
    ],
    howToFind:
      "Curl the toes: a hollow forms on the sole about a third down from the base of the toes, in line with the second and third metatarsals. Un-curl — that hollow is the spring. It often feels tender and strangely satisfying at once.",
    release: {
      tool: "Thumb, knuckle, or a small ball underfoot",
      duration: "60–90 seconds per foot",
      pressure: "Moderate — deep enough to melt, light enough to relax",
      steps: [
        "Seated, cross the ankle over the opposite knee or park a small ball under the sole.",
        "Press the hollow and circle slowly, letting the ache spread through the arch.",
        "Park 20–30 seconds on the best spot, breathing out long.",
        "Finish with slow thumb sweeps from toes to heel — down is the direction.",
      ],
      activation:
        "While pressing, slowly cup and spread the sole: curl the toes against the thumb, then release — ten gentle pumps wake the arch and send the ache 'down and out'.",
    },
    manualTherapy:
      "The classic first point of foot-reflexology traditions and a staple of evening moxa and oil-massage rituals across East Asia. Practitioners use it to 'subdue wind' in patterns of dizziness and restlessness.",
    stretch: {
      name: "Sole cup-and-spread",
      steps: [
        "Grip the heel with one hand and the toes with the other.",
        "Cup the sole upward, then spread and lengthen it like a fan.",
        "Add gentle toe pulls back toward the shin at the end.",
      ],
      hold: "30 seconds per foot",
    },
    prevention: [
      "A 60-second ball roll under each foot before bed — the classic wind-down.",
      "Supportive house shoes on tile and concrete.",
      "Feet slightly cool, head slightly cool: the old recipe for fast sleep.",
    ],
    related: ["plantar-fascia", "soleus", "bl57-chengshan"],
  },
];
