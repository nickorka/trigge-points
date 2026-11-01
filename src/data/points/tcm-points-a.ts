import type { TriggerPoint } from "../types";

/**
 * Classical Chinese-medicine acupoints — part A (neck, back, buttock, hand).
 * Headache / spine / hip classics chosen for self-care acupressure.
 * `lineId: "tcm"` + `tcm` metadata; referral zones show the point's main
 * areas of influence rather than myofascial pain referral.
 */
export const TCM_POINTS_A: TriggerPoint[] = [
  {
    id: "gb20-fengchi",
    name: "Fengchi · 风池 (GB20)",
    commonName: "The headache gate",
    lineId: "tcm",
    tcm: {
      pinyin: "Fengchi",
      hanzi: "风池",
      meridian: "gb",
      functions:
        "Expels wind, relaxes the exterior and clears the head and eyes — the first point reached for in headache, stiff neck, eye fatigue and the first shivers of a cold.",
    },
    view: "back",
    marker: { x: 97, y: 52 },
    referral: ["occiput", "neck-back", "suboccipital"],
    painSummary:
      "The classic headache gate: two soft hollows at the base of the skull, just outside the big neck muscles. Pressure here melts occipital headaches, screen-day eye strain and the stiff band that climbs from the shoulders over the back of the head toward the eyes.",
    symptoms:
      "A headache that starts at the skull base and rolls over the crown to behind the eyes; neck that resists turning; eyes that tire fast at a monitor. In Chinese terms this is where 'wind' — the pathogen of sudden stiffness and headaches — likes to sneak in, which is why drafts so often precede a stiff neck.",
    causes: [
      "Drafts and air-conditioning blowing straight at the bare neck",
      "Forward-head screen posture overloading the skull base",
      "Stress clenching the suboccipital muscles for hours",
      "Reading or phone sessions without breaks",
    ],
    howToFind:
      "Slide both thumbs up the back of the neck until they touch the skull just below its lower edge. Walk them outward about two finger-widths from the spine into the soft hollows between the two cord-like neck muscles. Press gently upward against the skull edge — the familiar headache ache should bloom within seconds.",
    release: {
      tool: "Both thumbs, seated with elbows on a table",
      duration: "60–90 seconds",
      pressure: "Firm, directed up into the skull edge — spreading ache, never a wince",
      steps: [
        "Sit at a table, elbows resting on it, and brace both thumb tips in the hollows below the skull.",
        "Press slowly upward and slightly inward until a loosening ache spreads toward the temples or eyes.",
        "Hold 20–30 seconds while breathing low into the belly, ease off for a few breaths, then repeat 2–3 times.",
        "Finish with slow small nods of the head under light thumb pressure.",
      ],
      activation:
        "Keep the pressure on and draw slow circles with the tip of your nose. The deep neck muscles shorten and lengthen under your thumbs — this movement under load quiets the point far faster than static pressing.",
    },
    manualTherapy:
      "Acupuncturists needle the hollows with a shallow, carefully angled technique (always upward and outward, never toward the spine) and often add warmth for 'wind-cold' headaches. In tuina massage the point is kneaded with sustained thumb pressure while the practitioner slowly rotates the neck.",
    stretch: {
      name: "Skull-base chin-tuck release",
      steps: [
        "Sit tall and cradle the back of the head with interlaced fingers, without pulling.",
        "Let the weight of the arms draw the chin gently down and in until the skull base lengthens.",
        "Breathe slowly and let the shoulders sink away from the ears.",
      ],
      hold: "30 seconds × 3",
    },
    prevention: [
      "Keep drafts and air-conditioning off the bare neck — a scarf is the classic shield against 'wind'.",
      "Every 30 minutes of screen work, press the hollows for 10 seconds and roll the shoulders.",
      "Choose a pillow that keeps the neck level with the spine through the night.",
    ],
    related: ["suboccipitals", "splenius-capitis", "bl10-tianzhu"],
  },
  {
    id: "bl10-tianzhu",
    name: "Tianzhu · 天柱 (BL10)",
    commonName: "The celestial pillar",
    lineId: "tcm",
    tcm: {
      pinyin: "Tianzhu",
      hanzi: "天柱",
      meridian: "bl",
      functions:
        "Dispels wind, relaxes the sinews and brightens the eyes — the classic point for a neck that refuses to turn and the headache that hangs off it.",
    },
    view: "back",
    marker: { x: 98, y: 63 },
    referral: ["neck-back", "occiput"],
    painSummary:
      "The 'pillar' holding the head up: a firm muscular edge two finger-widths outside the spine, at the hairline. It is the go-to acupressure point for the morning neck that will not turn and for tension headaches rooted in the upper neck.",
    symptoms:
      "Waking with the neck locked slightly to one side; a stiff aching column up the neck into the skull; pain when checking the blind side while driving. The point itself often feels like a tender rope under the fingertip.",
    causes: [
      "Long drives and flights with the head turned or cradled",
      "Stomach-sleeping or a stack of too-tall pillows",
      "Carrying a bag on one shoulder day after day",
      "Cold wind on a sweaty neck after exercise",
    ],
    howToFind:
      "Drop two fingers onto the back of the neck at hairline level, just outside the spine, and feel for the firm outer edge of the trapezius. It is more medial and more muscular than the hollow of Fengchi (GB20) — press toward the spine against that edge and the familiar neck ache will confirm it.",
    release: {
      tool: "Thumb or knuckle",
      duration: "60 seconds per side",
      pressure: "Moderate-firm, pressing inward against the muscle edge",
      steps: [
        "Hook the thumb of the opposite hand onto the tender edge at the hairline.",
        "Press inward and make slow, small circles across the fibers for 20–30 seconds.",
        "Tilt the head slightly toward the treated side to lengthen the muscle under the pressure.",
        "Repeat on the other side and compare — give the tighter side one extra round.",
      ],
      activation:
        "Keep the pressure on and slowly rotate the head toward the tender side and back — 5 small arcs. The edge of the trapezius slides under your thumb, re-setting its resting length.",
    },
    manualTherapy:
      "Practitioners needle the point superficially along the muscle edge and often follow with gua sha scraping down the neck-shoulder gutter to clear 'wind' after a cold. Gentle sustained pressure with slow head rotations is the manual-therapy standard.",
    stretch: {
      name: "Seated side-bending neck stretch",
      steps: [
        "Sit tall; rest one hand on the chair seat to anchor the shoulder down.",
        "Let the opposite ear drift toward the opposite shoulder — no pulling at first.",
        "Add a fingertip of light assist only when the stretch is already felt.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Set the car headrest to cradle the skull, not the neck.",
      "Sleep on your back with a single, lower pillow.",
      "Warm the hairline in a hot shower after cold or windy exposure.",
    ],
    related: ["gb20-fengchi", "upper-trapezius", "levator-scapulae"],
  },
  {
    id: "gv20-baihui",
    name: "Baihui · 百会 (GV20)",
    commonName: "Hundred meetings at the crown",
    lineId: "tcm",
    tcm: {
      pinyin: "Baihui",
      hanzi: "百会",
      meridian: "gv",
      functions:
        "Raises yang qi, calms the spirit and clears the senses — the meeting point of all yang channels, used for vertex headache, mental fog, dizziness and low mood.",
    },
    view: "back",
    marker: { x: 110, y: 14 },
    referral: ["vertex-b", "vertex"],
    painSummary:
      "The crown point where 'a hundred channels meet'. Gentle rhythmic pressure here settles a heavy, foggy head, eases pain right on top of the skull and — paired with slow breathing — down-shifts an overloaded nervous system within a minute.",
    symptoms:
      "A tight pressing sensation on the very top of the head; the dizzy, woolly feeling of exhaustion; sinking mood and scattered focus at the end of an overworked day. TCM reads crown pressure and 'sinking' energy as the same story.",
    causes: [
      "Overwork and mental strain draining yang qi",
      "Prolonged worry and rumination",
      "Skipped meals leaving qi and blood ungenerated",
      "Slumped posture collapsing the crown downward",
    ],
    howToFind:
      "Draw an imaginary line from the top of one ear over the crown to the other; the point sits at the midpoint, usually a subtle hollow beside the hair whorl. Light pressure there often feels oddly satisfying or faintly tender — both confirm you are on it.",
    release: {
      tool: "Fingertip (or a soft scalp brush)",
      duration: "60 seconds",
      pressure: "Light-to-moderate rhythmic presses — soothing, never painful",
      steps: [
        "Place the middle fingertip on the crown hollow and find the tender spot with small circles.",
        "Press rhythmically: sink for 2 seconds on an inhale, release on the exhale.",
        "Keep the rhythm slow and even for a full minute.",
        "Finish with one long hold and an intentional exhale through the shoulders.",
      ],
      activation:
        "While the finger rests on the point, gently draw the crown upward against it — lengthening the whole neck — then let go. Ten slow 'lift-and-settle' cycles lift energy the way TCM describes raising yang.",
    },
    manualTherapy:
      "Classically this point receives reinforcing needling or salt-separated moxa when energy is depleted, and calming techniques when the head races. Scalp massage traditions across Asia mobilize the whole crown zone around it.",
    stretch: {
      name: "Crown-lift neck lengthening",
      steps: [
        "Sit or stand tall; imagine a string lifting the crown to the ceiling.",
        "Let the chin stay level as the neck visibly lengthens.",
        "Hold the lift while taking 6 slow breaths, then settle and repeat.",
      ],
      hold: "60 seconds of slow breathing",
    },
    prevention: [
      "Keep regular sleep and wake times — the fastest way to restore qi.",
      "Eat a warm breakfast instead of running on coffee fumes.",
      "Each hour, stand and lift the crown upward for five slow breaths.",
    ],
    related: ["suboccipitals", "yintang", "lr3-taichong"],
  },
  {
    id: "gb21-jianjing",
    name: "Jianjing · 肩井 (GB21)",
    commonName: "The shoulder well",
    lineId: "tcm",
    tcm: {
      pinyin: "Jianjing",
      hanzi: "肩井",
      meridian: "gb",
      functions:
        "Relaxes the sinews and unbinds the shoulder — the classic point for shoulders 'up to the ears', tension headache and the neck-shoulder gutter of the Gallbladder channel.",
      cautions:
        "Firm, prolonged stimulation is traditionally avoided in pregnancy — this point is classically used to promote labor. If pregnant, skip or use only feather-light touch.",
    },
    view: "back",
    marker: { x: 138, y: 85 },
    referral: ["shoulder-back", "neck-back"],
    painSummary:
      "The stress-knot point halfway between neck and shoulder — the highest part of the trapezius. Squeezing the 'well' drains the day's accumulated tension: shoulders drop, the jaw unclenches, and the band-type tension headache often fades with it.",
    symptoms:
      "Shoulders riding up toward the ears; an aching cord between neck and shoulder; headache arriving by the end of every workday; a flinch when someone squeezes the trapezius — the universal 'stress pinch' spot.",
    causes: [
      "Screen work with shoulders unconsciously raised",
      "Bracing against stress all day (background shoulder-guarding)",
      "Heavy bags and one-strap backpacks",
      "Cold drafts across the shoulders in offices and cars",
    ],
    howToFind:
      "Draw a line from the bony bump at the base of the neck (C7) to the outer tip of the shoulder (acromion). Jianjing sits at the midpoint, on the highest belly of the trapezius. Pinch the muscle between fingers and thumb — a distinct tender cord confirms the point.",
    release: {
      tool: "Opposite-hand pinch grip, or a ball against a wall",
      duration: "60–90 seconds per side",
      pressure: "Moderate pinch — a satisfying squeeze-ache, not a cringe",
      steps: [
        "Drape the opposite hand over the far shoulder and pinch the trapezius belly between fingers underneath and thumb on top.",
        "Squeeze and hold the most tender cord for 20–30 seconds while breathing out slowly.",
        "Knead along the muscle from neck to shoulder in 5–6 slow pinches.",
        "Swap sides, compare, and give the tighter side one extra round.",
      ],
      activation:
        "While pinching, slowly shrug the shoulder up against your own grip (10–20% effort), hold 3 seconds, then let it drop dead-weight. Two or three contract-relax cycles unlock the trapezius faster than any kneading.",
    },
    manualTherapy:
      "A favorite of tuina and Swedish massage alike: sustained pinch-and-hold with slow neck side-bends. Acupuncturists needle it superficially and obliquely (never vertically deep toward the lung), often pairing it with GB20 for the full tension-headache chain.",
    stretch: {
      name: "Ear-to-shoulder with crown reach",
      steps: [
        "Sit tall; reach the crown of the head up first, then side-bend the ear toward the shoulder.",
        "Let the opposite hand lightly anchor the far shoulder down.",
        "Rotate the nose slightly up toward the ceiling to deepen the front-edge stretch.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Attach a cue to your phone buzzes: buzz = shoulders down and jaw soft.",
      "Keep bags light and swap shoulders every few minutes.",
      "Wear a shawl or scarf in over-chilled offices and meeting rooms.",
    ],
    related: ["upper-trapezius", "levator-scapulae", "gb20-fengchi"],
  },
  {
    id: "bl23-shenshu",
    name: "Shenshu · 肾俞 (BL23)",
    commonName: "The kidney's back-shu",
    lineId: "tcm",
    tcm: {
      pinyin: "Shenshu",
      hanzi: "肾俞",
      meridian: "bl",
      functions:
        "Tonifies kidney qi and strengthens the low back — the back-shu point of the kidney, used for chronic lumbar ache, weakness and cold in the waist.",
    },
    view: "back",
    marker: { x: 104, y: 207 },
    referral: ["lowback", "lowback-side", "sacrum"],
    painSummary:
      "The deep-lumbar ache point at waist level, two finger-widths from the spine. In Chinese medicine it is the 'back door' of the kidneys — and the traditional target of the warming palm-rub your grandmother probably did: rub until the waist glows warm.",
    symptoms:
      "A dull, deep low-back ache that worsens with fatigue, cold weather and long sitting, and eases with warmth and rest; a feeling that the back needs a hand to prop it up; weakness more than sharp pain.",
    causes: [
      "Long sitting and driving with a collapsed lumbar curve",
      "Overwork and short sleep (TCM: draining kidney essence)",
      "Cold exposure — bare lower backs in cold weather",
      "A deconditioned core quietly offloading to the spine",
    ],
    howToFind:
      "Stand with hands on your waist and thumbs pointing back. The point sits at the level of your belt line — roughly level with the navel — two finger-widths outside the spine, on the long column of back muscles. Rubbing there usually feels immediately warm and 'right'.",
    release: {
      tool: "Tennis ball between back and wall, or both fists",
      duration: "90 seconds",
      pressure: "Moderate and sustained — a deep muscular ache that breathes",
      steps: [
        "Stand with your back to a wall and trap the ball between lower back and wall, two finger-widths from the spine at waist level.",
        "Gently load and micro-roll up and down over the long back muscles.",
        "Pause on tender spots 20–30 seconds each, breathing slowly.",
        "Finish by rubbing both palms hard over the area until it glows — the classic 'warming the kidney shu'.",
      ],
      activation:
        "With the ball pinned, slowly sway the hips side to side so the lumbar muscles glide under the pressure — ten gentle sweeps each direction re-lubricate the stuck layers.",
    },
    manualTherapy:
      "The textbook moxa point: practitioners warm it with moxa cones or heat lamps for the cold, weak back, needle it with reinforcing technique, or cup the adjacent gutter. Tuina adds deep kneading along both columns of back muscles.",
    stretch: {
      name: "Supported cat-cow for the waist",
      steps: [
        "On hands and knees, round the back slowly up toward the ceiling while exhaling.",
        "Let the belly sink and the sitting bones spread on the inhale.",
        "Move at the pace of the breath — small range, zero forcing.",
      ],
      hold: "8–10 slow cycles × 2",
    },
    prevention: [
      "Stand and move for two minutes every 45 minutes of sitting.",
      "Keep the lower back covered and warm — a non-negotiable in Chinese medicine.",
      "Build core endurance (bird-dog, dead-bug) twice a week.",
    ],
    related: ["multifidi", "quadratus-lumborum", "bl40-weizhong"],
  },
  {
    id: "bl40-weizhong",
    name: "Weizhong · 委中 (BL40)",
    commonName: "The low-back's hidden switch",
    lineId: "tcm",
    tcm: {
      pinyin: "Weizhong",
      hanzi: "委中",
      meridian: "bl",
      functions:
        "Relaxes the sinews and opens the lower back — the command point enshrined in the classic verse: 'for the low back, seek Weizhong'.",
      cautions:
        "Press gently: the popliteal vessels and nerves run through this hollow. Never use a hard tool or deep sustained load behind the knee.",
    },
    view: "back",
    marker: { x: 110, y: 350 },
    referral: ["popliteal", "lowback", "calf"],
    painSummary:
      "The soft hollow dead-center at the back of the knee. The classic verse says: for low-back pain, seek Weizhong — and indeed gentle work here often loosens an aching back within a minute, while also easing a stiff, congested back of the knee.",
    symptoms:
      "A tight, 'full' feeling behind the knee; hamstrings that never quite stretch out; a low back that feels briefly younger after leg stretches — a sign the reflex points here are involved.",
    causes: [
      "Long driving with the knees bent past 90 degrees",
      "Sitting with heels tucked under the chair",
      "Hamstring overload from running, hiking or cycling",
      "A locked low back sending strain down the same chain",
    ],
    howToFind:
      "Sit with the knee softly bent and find the exact center of the crease behind the knee — the hollow between the inner and outer hamstring tendons. Light contact there usually feels tender in a strange, faraway way (often up in the back).",
    release: {
      tool: "Fingertips only — never a ball or hard tool",
      duration: "30–45 seconds per side",
      pressure: "Light-to-moderate, always painless",
      steps: [
        "Sit on a chair edge with one foot on a low stool so the knee stays softly bent.",
        "Rest the fingertips of both hands in the hollow and make slow, gentle circles for 15 seconds until the tissue softens.",
        "Sweep lightly upward from the hollow toward the hamstring bellies 5–6 times.",
        "Stand and test the low back — it usually gives immediately.",
      ],
      activation:
        "While pressing lightly, slowly straighten and bend the knee 5–6 times so the hamstring tendons slide through the hollow under your fingers.",
    },
    manualTherapy:
      "Acupuncture here is a classic for acute low-back spasm (historically even with a light bloodletting technique — strictly practitioner territory). Manual therapists prefer gentle sustained holds plus active knee movement, never deep pinching of the hollow.",
    stretch: {
      name: "Hamstring hinge stretch",
      steps: [
        "Place one heel on a low step, knee nearly straight, hands on the standing leg.",
        "Hinge the chest toward the thigh with a long spine until the hamstring stretches.",
        "Keep the toes relaxed and breathe into the back of the leg.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Uncross the legs — long crossing congests exactly this hollow.",
      "Break long drives with a knee-straightening walk every hour.",
      "Keep hamstrings supple with two or three stretch sessions weekly.",
    ],
    related: ["bl23-shenshu", "gluteus-maximus", "hamstrings-biceps"],
  },
  {
    id: "bl57-chengshan",
    name: "Chengshan · 承山 (BL57)",
    commonName: "Support of the mountain",
    lineId: "tcm",
    tcm: {
      pinyin: "Chengshan",
      hanzi: "承山",
      meridian: "bl",
      functions:
        "Relaxes the sinews and lifts stagnation from the lower leg — the classic point for calf spasm, night cramps and heavy, aching legs.",
    },
    view: "back",
    marker: { x: 121, y: 395 },
    referral: ["calf", "sole", "achilles"],
    painSummary:
      "In the lower calf, where the two muscle bellies meet and drop toward the Achilles tendon. It is the anti-cramp point: night cramps, post-stand 'concrete legs' and heel-pulling fascia tension all ease under patient pressure here.",
    symptoms:
      "Cramps threatening when you point the toes in bed; calves hot and heavy after a full day standing; the arch or heel feeling tugged from above. In TCM the calf is where 'damp' stagnates after long standing.",
    causes: [
      "Standing or walking on hard floors all day",
      "Hill running, jumping or sudden sprint volume",
      "High heels or boots that shorten the calf for hours",
      "Dehydration and mineral loss through sweat",
    ],
    howToFind:
      "Rise onto the toes: the two calf bellies pop out and meet in a V. Chengshan sits at the bottom of that V, a hand-width below the knee crease, where the muscle hands over to the tendon. Pressing there reproduces the deep calf ache.",
    release: {
      tool: "Foam roller or firm ball",
      duration: "90 seconds per side",
      pressure: "Moderate, slow sweeps across the fibers",
      steps: [
        "Sit with the roller under the calf and hands behind for support.",
        "Sweep slowly from the knee toward the Achilles, crossing the fibers at an angle.",
        "Park 20–30 seconds on the tender V-junction spot and breathe.",
        "Finish with 5 slow full-range ankle rolls to flush the muscle.",
      ],
      activation:
        "With the ball or roller pinned on the tender spot, slowly pump the ankle through its full range 8–10 times — dorsi-flex up, point down. The calf re-lengthens under the pressure and the cramp reflex fades.",
    },
    manualTherapy:
      "Practitioners strip the calf from heel to knee and needle Chengshan shallowly for spasm; sports therapists add eccentric calf loading once the point quiets down.",
    stretch: {
      name: "Bent-knee calf stretch (soleus bias)",
      steps: [
        "Face a wall, one foot back, and let the back knee bend while the heel stays down.",
        "Sink until the deep lower calf (not the upper belly) stretches.",
        "Turn the back toe slightly inward to bias the deeper layers.",
      ],
      hold: "30–45 seconds × 2 per side",
    },
    prevention: [
      "Hydrate and keep magnesium-rich foods in rotation if cramps recur.",
      "Ramp hill and sprint volume up gradually.",
      "End the day with long stroking massage toward the knee.",
    ],
    related: ["gastrocnemius", "soleus", "plantar-fascia"],
  },
  {
    id: "gb30-huantiao",
    name: "Huantiao · 环跳 (GB30)",
    commonName: "The jumping circle",
    lineId: "tcm",
    tcm: {
      pinyin: "Huantiao",
      hanzi: "环跳",
      meridian: "gb",
      functions:
        "Dispels wind-damp and unblocks the channel through the deepest hip — the premier buttock point for 'sciatic' patterns and a hip that has forgotten how to move freely.",
    },
    view: "back",
    marker: { x: 133, y: 258 },
    referral: ["buttock", "posterior-thigh", "lateral-thigh-b"],
    painSummary:
      "The great deep-hip point, lying in the meat of the buttock over the sciatic pathway. Its name — 'jumping circle' — promises exactly what freeing it delivers: a hip that swings and springs again. Deep gluteal ache that streaks down the back of the leg lives here.",
    symptoms:
      "A deep one-sided buttock ache that may shoot an electric thread down the hamstring; pain when sitting on hard chairs, relief when standing and walking; the leg feeling 'shorter' or guarded on that side.",
    causes: [
      "Sitting on a wallet or phone in the back pocket",
      "Piriformis and deep rotator overload from running on cambered roads",
      "Long hours in a car seat with the hip creased",
      "Cold and damp — sitting on cold stone or metal benches",
    ],
    howToFind:
      "Feel the knob of bone at the side of the hip (greater trochanter) and the tip of the tailbone. Divide the line between them: the point sits at the junction of the outer third and inner two-thirds. Deep pressure there hits the signature tender spot in the buttock meat.",
    release: {
      tool: "Firm ball on a chair seat (the chair controls the depth)",
      duration: "90 seconds per side",
      pressure: "Moderate, deep, built up gradually — referral down the leg means back off",
      steps: [
        "Sit on a firm chair and place the ball under the outer-middle buttock, near the trochanter.",
        "Lean in slowly until a deep spreading ache appears; if it streaks sharply down the leg, ease off until it stays local.",
        "Small slow circles, parking 20–30 seconds on each tender zone.",
        "Finish standing: swing the treated leg in a gentle arc a few times and walk it in.",
      ],
      activation:
        "With the ball in place, slowly roll the treated knee inward and outward so the deep rotators contract and release under the pressure — 8–10 unhurried cycles.",
    },
    manualTherapy:
      "Practitioners needle Huantiao deep to reach the hip's rotator bed — one of the most effective clinical points for sciatic-type pain. Manual therapists pair sustained pressure with slow hip rotations, and cupping often follows along the channel.",
    stretch: {
      name: "Figure-4 glute stretch",
      steps: [
        "Lie on your back, ankle of one leg crossed over the opposite thigh.",
        "Thread the hands behind the supporting thigh and draw it toward the chest.",
        "Keep the tailbone heavy so the stretch lands in the buttock, not the low back.",
      ],
      hold: "45–60 seconds per side",
    },
    prevention: [
      "Never sit on a wallet or phone — the classic one-sided hip wrecker.",
      "Stand up every 45 minutes of desk or couch time.",
      "Keep buttocks warm; skip the cold stone bench.",
    ],
    related: ["gluteus-minimus", "hamstrings-biceps", "bl40-weizhong"],
  },
  {
    id: "li4-hegu",
    name: "Hegu · 合谷 (LI4)",
    commonName: "Joining valley — face & jaw command",
    lineId: "tcm",
    tcm: {
      pinyin: "Hegu",
      hanzi: "合谷",
      meridian: "li",
      functions:
        "Expels wind, releases the exterior and commands the face and head — the verse says: 'face and mouth, collect at Hegu'. Half of the famous 'Four Gates' calming pair with LR3.",
      cautions:
        "Firm, prolonged stimulation is traditionally avoided in pregnancy (the point is used to promote labor). If pregnant, skip it or press only feather-light.",
    },
    view: "front",
    marker: { x: 153, y: 217 },
    referral: ["thumb-web", "jaw", "temple", "forehead"],
    painSummary:
      "The master hand point for the whole face and head: headaches, jaw clench, toothache and sinus pressure all answer pressure in this muscular web between thumb and index finger — often startlingly fast, on the opposite side of the face from the pain.",
    symptoms:
      "A band-type tension headache; jaws that ache after a clenched workday or a night of grinding; a throbbing tooth with the dentist fully booked; general facial tension. The point itself is usually impressively tender — spicy in a useful way.",
    causes: [
      "Jaw clenching and night grinding",
      "Screen-time headaches and shallow mouth-breathing stress",
      "Sinus pressure swings with weather and allergies",
      "Overall stress load (the point is a barometer of tension)",
    ],
    howToFind:
      "Squeeze the thumb against the index finger: the web muscle bulges into a mound. Hegu sits at the peak of that mound. Pinch it from both sides and press toward the index-finger bone — a radiating 'spicy' ache toward the jaw or temple confirms it.",
    release: {
      tool: "Opposite thumb and index finger (pinch grip)",
      duration: "60 seconds per hand",
      pressure: "Firm cross-fiber pinch — radiating to the face is the goal",
      steps: [
        "Pinch the web muscle with the thumb on top and index finger in the palm.",
        "Press toward the index-metacarpal bone and make slow circles — find the spot that sends ache toward jaw or temple.",
        "Hold the best spot 20–30 seconds, then switch hands; treat the more tender hand longer.",
        "Finish by holding pressure while slowly opening and closing the mouth.",
      ],
      activation:
        "Keep the pinch on and slowly clench the teeth, then release — 5 gentle cycles. Linking jaw movement to the hand point is the traditional way to reach facial pain patterns.",
    },
    manualTherapy:
      "Hegu is the most-studied analgesia point in acupuncture history — historically used alongside dental procedures. It is almost always combined with LR3 (the other 'gate'), needled bilaterally as the 'Four Gates' to move qi and calm the system.",
    stretch: {
      name: "Web-spread stretch",
      steps: [
        "Splay thumb and index finger of one hand as wide as they will go.",
        "Loop the thumb-index web of the other hand around it and gently widen further.",
        "Hold the stretch at the first barrier, not through pain.",
      ],
      hold: "20 seconds × 5",
    },
    prevention: [
      "Ask about a night guard if you wake with a tired jaw.",
      "Break screen marathons: shake out the hands and face for 20 seconds.",
      "Stay hydrated — sinus and tooth ache both worsen when dry.",
    ],
    related: ["scm", "masseter", "gv20-baihui"],
  },
  {
    id: "te5-waiguan",
    name: "Waiguan · 外关 (TE5)",
    commonName: "Outer pass",
    lineId: "tcm",
    tcm: {
      pinyin: "Waiguan",
      hanzi: "外关",
      meridian: "te",
      functions:
        "Expels wind and releases the exterior, opens the Yang Linking vessel — the classic point for one-sided headache, ear fullness, stiff neck and a wrist that has typed too long.",
    },
    view: "back",
    marker: { x: 71, y: 193 },
    referral: ["forearm-outer", "wrist", "elbow-outer-b"],
    painSummary:
      "The 'outer pass' gateway on the back of the forearm, between the two long bones two thumb-widths above the wrist. It links three complaints that rarely seem related: a stiff wrist, a blocked ear and a one-sided headache with a stiff neck.",
    symptoms:
      "A wrist that resists bending back after a typing day; forearm tension that feels like a rope; one-sided headache with ear pressure or ringing. Pressing the point often reproduces the faraway head feeling instantly.",
    causes: [
      "Long mouse and keyboard sessions with a bent-back wrist",
      "Phone cradled between ear and shoulder",
      "Cold wind straight onto the forearm",
      "Unvaried wrist position hour after hour",
    ],
    howToFind:
      "Turn the palm down and measure two thumb-widths up from the back wrist crease. Press between the two forearm bones (toward the ulna side of the middle) — a channel of tenderness between radius and ulna marks the point.",
    release: {
      tool: "Thumb (or a soft-tipped pen cap)",
      duration: "60 seconds per arm",
      pressure: "Moderate, sinking between the bones",
      steps: [
        "Support the forearm in the other hand and set the thumb between the two bones.",
        "Press inward and make slow cross-wise circles across the tender channel.",
        "Hold the best spot 20–30 seconds, feeling for the ache to reach wrist or head.",
        "Repeat on the other arm and compare tenderness.",
      ],
      activation:
        "While pressing, slowly flex, extend and circle the wrist — the interosseous tissues glide past the point and the 'pass' reopens. 8–10 slow cycles.",
    },
    manualTherapy:
      "Acupuncturists pair TE5 with its internally-externally linked partner PC6 and use it for the lateral head-neck-ear chain. Tuina adds stripping strokes between the forearm bones with the thumb stacked on thumb.",
    stretch: {
      name: "Wrist extensor stretch",
      steps: [
        "Extend one arm, palm down, and flex the wrist so the fingers point to the floor.",
        "Add light over-pressure with the other hand across the back of the palm.",
        "Keep the elbow soft — the stretch should stay in the forearm.",
      ],
      hold: "20–30 seconds × 2 per arm",
    },
    prevention: [
      "Keep the mouse close and the wrist neutral, not bent back.",
      "Every hour of typing, circle the wrists 10 times each way.",
      "Keep forearms warm — cold stiffens the pass.",
    ],
    related: ["wrist-extensors", "scalenes", "gb20-fengchi"],
  },
];
