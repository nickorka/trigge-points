import type { TriggerPoint } from "../types";

/**
 * Lateral Line — outer foot to side of neck (left & right pair).
 */
export const LL_POINTS: TriggerPoint[] = [
  {
    id: "peroneus-longus",
    name: "Peroneus (Fibularis) Longus",
    commonName: "The ankle-roller point",
    lineId: "ll",
    view: "front",
    marker: { x: 122, y: 405 },
    referral: ["lateral-ankle", "lateral-lower-leg", "top-of-foot", "lateral-knee"],
    painSummary:
      "Ache around the outer ankle bone that spreads up the outer shin and down the outer foot. Repeated ankle 'turns' often trace back to tender knots here rather than true ligament damage.",
    symptoms:
      "The ankle feels unstable on uneven ground; outer-foot pain when pushing off; tenderness pressing the muscle on the outer calf. Chronic points change how the foot lands, feeding IT-band and knee complaints up the Lateral Line.",
    causes: [
      "Old ankle sprains (protective splinting never cleared)",
      "High heels and unstable footwear",
      "Running on cambered roads",
      "Standing with weight on the outer foot edges",
    ],
    howToFind:
      "Sit and press into the muscle cord just behind and below the outer shin bone, a hand-width above the outer ankle bone. A tender rope that refers to the ankle is the point — it sits between the shin bone and the calf.",
    release: {
      tool: "Foam roller or ball",
      duration: "90 seconds per side",
      pressure: "Light to moderate — the bone sits close by",
      steps: [
        "Sit with the roller on the outer edge of the lower calf.",
        "Roll from below the knee to the ankle, 6–8 slow passes.",
        "Hold tender bands 30 seconds.",
        "Roll the ankle in circles over any sticky point.",
      ],
      activation:
        "With pressure held on the point, slowly turn the sole of the foot up and out (evert) 10 times against the roller's resistance. This precise ankle action re-lengthens the peroneals and settles the unstable-ankle feeling.",
    },
    manualTherapy:
      "Stripping between the shin bone and calf from knee to ankle, plus cross-fiber holds at the retinaculum near the ankle. Re-training balance on one leg prevents the splinting from returning.",
    stretch: {
      name: "Inverted-foot peroneal stretch",
      steps: [
        "Seated, cross the right ankle over the left knee.",
        "Hold the top of the right foot and gently turn the sole upward and inward.",
        "Feel the stretch along the outer lower leg.",
      ],
      hold: "30 seconds × 2, each side",
    },
    prevention: [
      "Single-leg balance work daily (30 seconds each side, eyes closed when ready).",
      "Rotate shoe types; avoid wearing worn-out outer soles.",
      "After any ankle sprain, treat the calf and peroneals within the first week.",
    ],
    related: ["tfl", "gluteus-minimus"],
  },
  {
    id: "tfl",
    name: "Tensor Fasciae Latae (TFL)",
    commonName: "The hip-strap tightener",
    lineId: "ll",
    view: "front",
    marker: { x: 134, y: 258 },
    referral: ["lateral-hip", "lateral-thigh", "lateral-knee", "hip-crest"],
    painSummary:
      "Deep ache at the front-outer hip that runs down the outer thigh to the knee — the classic 'IT-band pain' source. Points here make the hip strap (fascia) feel permanently tight.",
    symptoms:
      "Pain standing after long sitting, outer-hip tenderness to sleeping on that side, and a burning line down the thigh when running or hiking uphill. Stretching the IT band directly never works — the TFL and glute med above it are the real culprits.",
    causes: [
      "Walking or running with over-striding",
      "Standing with hip shifted to one side",
      "Sitting cross-legged or with legs tucked",
      "Weak gluteus maximus forcing TFL compensation",
    ],
    howToFind:
      "Stand and place a thumb just below the hip crest, slightly to the outside of the front hip point (ASIS). Contract by lifting the leg slightly out to the side — the muscle that tenses there is the TFL. Press into its belly for the tender knot.",
    release: {
      tool: "Ball against wall",
      duration: "90 seconds per side",
      pressure: "Moderate — small circles over the belly",
      steps: [
        "Stand side-on to a wall with the ball between the front-outer hip and the wall.",
        "Lean gently and make slow small circles over the muscle.",
        "Hold tender spots 30 seconds each.",
        "Avoid pressing the hip bone itself — stay on muscle.",
      ],
      activation:
        "With the ball on the tender point, slowly swing the same-side leg back and forth 8 times, then do 5 slow hip circles. Activating glute max (5 gentle buttock squeezes) afterward takes the load off the TFL permanently.",
    },
    manualTherapy:
      "Cross-fiber stripping of the TFL belly followed by sustained compression, then work down the IT band with the patient side-lying. Practitioners always strengthen glute max in the plan — TFL tightness is usually a glute weakness story.",
    stretch: {
      name: "Standing TFL stretch (crossed legs)",
      steps: [
        "Stand and cross the tight leg behind the other.",
        "Push the crossed hip toward the wall side, side-bending away.",
        "Feel the stretch at the front-outer hip.",
      ],
      hold: "30 seconds × 3, each side",
    },
    prevention: [
      "Glute bridges and side-lying leg lifts 2×/week.",
      "Stand with weight evenly on both feet; stop hip-hanging postures.",
      "Shorten stride and raise cadence in running.",
    ],
    related: ["vastus-lateralis", "gluteus-medius", "peroneus-longus"],
  },
  {
    id: "gluteus-medius",
    name: "Gluteus Medius",
    commonName: "The limping-hip point",
    lineId: "ll",
    view: "back",
    marker: { x: 133, y: 238 },
    referral: ["buttock", "hip-crest", "lateral-hip-b", "sacrum", "lowback"],
    painSummary:
      "Deep ache over the buttock and outer hip that can climb to the low back and sacrum. It is the single most common cause of low-back pain that people misread as 'spine trouble'.",
    symptoms:
      "Pain lying on that side at night, limping or waddling when tired, ache standing on one leg (like putting socks on), and tenderness just under the hip crest. Walking downhill often aggravates it.",
    causes: [
      "Standing with weight on one hip habitually",
      "Running on cambered roads or beach slopes",
      "Sitting cross-legged for hours",
      "Weak opposite-side glutes shifting load across the pelvis",
    ],
    howToFind:
      "Stand on one leg — the muscle that fires under your fingers just below the hip crest is gluteus medius. Press a thumb into the meaty area between hip crest and big hip bone (greater trochanter); the tender knot is usually the upper third.",
    release: {
      tool: "Firm ball against wall",
      duration: "2 minutes per side",
      pressure: "Firm — this muscle is thick and tolerates it",
      steps: [
        "Stand side-on to a wall, ball wedged on the outer hip meat.",
        "Lean in and roll slowly between hip crest and hip bone.",
        "Hold the most tender spot 60–90 seconds, sinking deeper gradually.",
        "Keep the knee of the treated side slightly bent.",
      ],
      activation:
        "With the ball on the tender point, do 5 slow pelvis drops and lifts (dipping the hip toward and away from the wall). Then 10 side-lying leg lifts afterward — strong glute med ends the back-pain relay.",
    },
    manualTherapy:
      "Deep sustained compression through the belly of the muscle in side-lying, plus stripping along the iliac crest attachment. Pair with Trendelenburg testing and gait retraining — the release holds only when the walking pattern changes.",
    stretch: {
      name: "Side-lying hip drop (quadratus-style stretch)",
      steps: [
        "Stand side-on to a step with the outside foot hanging off.",
        "Drop the hanging foot toward the floor keeping the torso tall.",
        "Feel the outer hip of the standing leg stretch.",
      ],
      hold: "20 seconds × 4 reps",
    },
    prevention: [
      "Train single-leg stance and side planks weekly.",
      "Balance standing weight across both feet.",
      "Break long runs on cambered paths into alternating directions.",
    ],
    related: ["gluteus-minimus", "quadratus-lumborum", "gluteus-maximus"],
  },
  {
    id: "gluteus-minimus",
    name: "Gluteus Minimus",
    commonName: "The pseudo-sciatica point",
    lineId: "ll",
    view: "back",
    marker: { x: 128, y: 248 },
    referral: ["lateral-hip-b", "lateral-thigh-b", "lateral-knee", "lateral-ankle", "buttock"],
    painSummary:
      "Pain that runs down the entire outer leg — hip to thigh to calf to ankle — uncannily mimicking sciatica, though the nerve is not involved. Some points also refer to the buttock and back of the thigh.",
    symptoms:
      "Outer-leg 'sciatica' with no back pain, numbness and tingling down the side of the leg, inability to lie on that hip, and pain crossing the legs. Sitting cross-legged or turning over in bed flares it.",
    causes: [
      "Habitual leg-crossing",
      "Prolonged side-lying on that hip",
      "Long walking on uneven ground",
      "Glute med weakness forcing minimus overload",
    ],
    howToFind:
      "It hides beneath gluteus medius. Press through the outer hip meat just behind the big hip bone, angling toward the center of the buttock depth. Deep, sharp tenderness that sends a line down the leg is the point.",
    release: {
      tool: "Firm ball against wall (precise)",
      duration: "2 minutes per side",
      pressure: "Moderate — go gradually, it is a deep muscle",
      steps: [
        "Place the ball just behind the outer hip bone against a wall.",
        "Lean in with small, slow circles — sinking through the layers.",
        "Hold the referral-producing spot 60–90 seconds.",
        "If the leg line flares strongly, ease off 30% and breathe.",
      ],
      activation:
        "With pressure held, slowly rotate the leg inward and outward 8 times (toes pointing in, then out). Then stand and do 5 slow 'fire-hydrant' leg circles to re-educate the hip stabilizers.",
    },
    manualTherapy:
      "Deep elbow or thumb compression through the glute layers with the patient side-lying, holding until the referral pattern fades. Stretching and strengthening the hip abductors afterward is essential or the point returns.",
    stretch: {
      name: "Seated cross-ankle glute stretch (deep)",
      steps: [
        "Sit tall on a chair, cross the right ankle over the left knee.",
        "Hinge forward from the hips keeping the back straight.",
        "Feel the deep outer hip release.",
      ],
      hold: "45 seconds × 2, each side",
    },
    prevention: [
      "Stop crossing the legs at the knee — switch to feet tucked or crossed at ankles.",
      "Alternate sleeping sides with a pillow between the knees.",
      "Strengthen hips: side steps with band, single-leg deadlifts.",
    ],
    related: ["gluteus-medius", "tfl", "quadratus-lumborum"],
  },
  {
    id: "vastus-lateralis",
    name: "Vastus Lateralis",
    commonName: "The IT-band's hidden engine",
    lineId: "ll",
    view: "front",
    marker: { x: 130, y: 308 },
    referral: ["lateral-thigh", "lateral-knee", "lateral-hip"],
    painSummary:
      "Deep ache along the outer thigh concentrating at the outer knee — the true source of most so-called 'IT-band syndrome'. Points anywhere along the muscle burn to the side of the knee.",
    symptoms:
      "Outer-knee pain running downhill or down stairs, the thigh feeling 'ropey' when pressed, discomfort sleeping on that side. The IT band itself has almost no trigger points — it is the quad beneath it that hurts.",
    causes: [
      "Running volume jumps and downhill running",
      "Cycling with the saddle too low",
      "Weak hip muscles letting the knee cave inward",
      "Sitting with legs crossed compressing the muscle",
    ],
    howToFind:
      "Sit and press along the outer thigh between the hip bone and knee — a broad muscle slab under the IT band. Tender knots commonly sit a hand above the outer knee and near the hip.",
    release: {
      tool: "Foam roller",
      duration: "2 minutes per side",
      pressure: "Moderate — roll the muscle, angle body to reach it",
      steps: [
        "Side-lying with the roller under the outer thigh.",
        "Roll from hip to just above the knee, 8 slow passes.",
        "Hold the tender spots 30–45 seconds each.",
        "Slightly rotate the leg to vary the fibers reached.",
      ],
      activation:
        "On the tender spot, slowly bend and straighten the knee 8 times, then do 5 slow squats to half depth with knees tracking over toes. Re-grooving knee tracking is what stops the outer-knee pain from returning.",
    },
    manualTherapy:
      "Cross-fiber stripping through the quad layers beneath the IT band, elbow or tool-assisted. Combined with hip abductor strengthening and running-form review; stretching alone gives short relief.",
    stretch: {
      name: "Couch lateral quad stretch",
      steps: [
        "Kneel with the back knee on the floor near a sofa, foot up on it.",
        "Step the front foot out wide, lean the torso slightly away from the stretching side.",
        "Feel the outer thigh lengthen.",
      ],
      hold: "40 seconds × 2, each side",
    },
    prevention: [
      "Strengthen glutes and hips (the knee-cave fix).",
      "Increase running mileage gradually; avoid crowned roads.",
      "Foam roll the outer thigh after long rides or runs.",
    ],
    related: ["tfl", "vastus-medialis", "rectus-femoris"],
  },
  {
    id: "quadratus-lumborum",
    name: "Quadratus Lumborum (QL)",
    commonName: "The hip-hiker",
    lineId: "ll",
    view: "back",
    marker: { x: 95, y: 202 },
    referral: ["lowback-side", "sacrum", "lateral-hip-b", "buttock", "groin", "lowback"],
    painSummary:
      "Deep one-sided low-back ache that grabs the sacrum, the outer hip and sometimes the groin — the classic 'I threw my back out carrying a suitcase' muscle. Coughing or sneezing can stab it.",
    symptoms:
      "Pain leaning sideways or standing up from a slouched chair, walking with a slight limp, needing to brace hands on thighs to stand. One-sided carrying and leg-crossing keep it locked.",
    causes: [
      "Carrying bags on one side habitually",
      "Sitting with the wallet in the back pocket",
      "Leg-crossing and hip-hitching postures",
      "Uneven leg length or pelvic tilt",
    ],
    howToFind:
      "Stand and side-bend — the muscle tightening just above the hip crest, beside the spine, is the QL. Press between the lowest rib and hip crest, one hand-width beside the spine; a fierce one-sided ache is the point.",
    release: {
      tool: "Ball against wall (below the ribs, beside the spine)",
      duration: "90–120 seconds per side",
      pressure: "Moderate — avoid the ribs and spine bones",
      steps: [
        "Stand with your back to a wall, ball between flank muscle and wall just above the hip crest.",
        "Lean and make small circles over the tender band.",
        "Hold 60 seconds while breathing into the area.",
        "Let the same-side arm hang and sway gently.",
      ],
      activation:
        "With the ball in place, do 5 slow hip-hikes (lift the same-side hip toward the ribs, then drop it). Then side-bend away from the wall 5 times. This pump-and-lengthen combo is the QL reset.",
    },
    manualTherapy:
      "Sustained thumb or elbow compression between rib and crest in side-lying, plus muscle-energy side-bending. Practitioners check leg-length and gait — the QL is usually compensating for something below or above it.",
    stretch: {
      name: "Side-bend stretch over a cushion",
      steps: [
        "Sit cross-legged with a cushion under one hip.",
        "Side-bend away from the raised hip, arm overhead.",
        "Feel the long stretch from rib to hip on the low side.",
      ],
      hold: "45 seconds × 2, each side",
    },
    prevention: [
      "Alternate shoulders for bags; use a backpack.",
      "Remove the wallet from the back pocket when seated.",
      "Build side-core strength: side planks, suitcase carries.",
    ],
    related: ["gluteus-medius", "multifidi", "iliopsoas"],
  },
  {
    id: "scalenes",
    name: "Scalenes",
    commonName: "The arm-tingler",
    lineId: "ll",
    view: "front",
    marker: { x: 114, y: 68 },
    referral: ["pec", "axilla", "upper-arm-front", "elbow-inner", "forearm-inner", "thumb-web"],
    painSummary:
      "Pain that starts subtly at the upper chest and pours down the inner arm to the thumb and index finger — the most common mimic of a pinched neck nerve. Points here also grip the chest with a heavy, tight feeling.",
    symptoms:
      "Arm heaviness and tingling, especially lying down or holding a phone; cold hands; a night-time ache that wakes you needing to shake the arm out. Breathing feels chest-dominant and shallow.",
    causes: [
      "Chest-dominant stress breathing (the scalenes are accessory breathers)",
      "Forward-head posture compressing the outlet",
      "Carrying shoulder bags that trap the neck side",
      "Anxiety and long phone calls cradling the phone",
    ],
    howToFind:
      "Turn the head slightly away and press gently behind the SCM strap just above the collarbone. The small stacked muscles there are the scalenes — extreme tenderness that refers down the arm confirms it. Work very gently.",
    release: {
      tool: "Fingertips only — never a ball at the front of the neck",
      duration: "60 seconds total",
      pressure: "Feather-light — this zone carries nerves and vessels",
      steps: [
        "Sit tall and drop the shoulder of the treated side.",
        "Place two fingertips just behind the SCM above the collarbone.",
        "Press gently and hold 20–30 seconds while breathing slowly out.",
        "Sweep downward toward the collarbone 5 times.",
      ],
      activation:
        "With the lightest fingertip contact, breathe in through the nose and let the belly expand (keeping chest still) for 5 breaths. Diaphragm breathing switches the scalenes off — it is the single most effective 'activation' for this point.",
    },
    manualTherapy:
      "Gentle sustained holds behind the SCM with the head supported, plus first-rib mobilization. Practitioners screen for thoracic outlet signs and coordinate with breathing retraining — dry needling here is advanced practice only.",
    stretch: {
      name: "Seated scalene stretch (anchor hand)",
      steps: [
        "Sit on your right hand to anchor the right shoulder.",
        "Tilt the head to the left and turn slightly right, chin tucked a little.",
        "Feel a draw above the collarbone on the right.",
      ],
      hold: "20 seconds × 2, each side",
    },
    prevention: [
      "Retrain to belly breathing: 5 minutes of slow nasal breaths daily.",
      "Stop cradling phones; use speaker or headset.",
      "Avoid heavy shoulder bags; use a cross-body or backpack.",
    ],
    related: ["scm", "pectoralis-minor", "upper-trapezius"],
  },
  {
    id: "iliotibial-band",
    name: "Iliotibial Band (ITB)",
    commonName: "The outer thigh cable",
    lineId: "ll",
    view: "front",
    marker: { x: 134, y: 290 },
    referral: ["lateral-thigh", "lateral-knee", "lateral-hip"],
    painSummary:
      "The thick fascial cable running from hip crest to just below the knee: when it and its anchor muscles are overloaded, the outside of the knee burns on every stride — the runner's classic, with a hot point about three fingers above the joint line.",
    symptoms:
      "A hot, stinging spot on the outer knee that arrives at the same distance into every run and sharpens on downhills and stairs; the outer thigh feels like a taut guitar string. Walking downstairs sideways and crossing the legs both protest.",
    causes: [
      "Sudden jumps in running volume or downhill routes",
      "Cambered roads and track curves always leaning the same way",
      "Weak hip abductors letting the knee drop inward on each stride",
      "Habitual standing with hips shifted onto one leg",
    ],
    howToFind:
      "Sit with the knee bent 90° and find the bony bump on the outer hip (the greater trochanter). The taut band running from above it down the outer thigh to the outer knee — tightening when you straighten the leg — is the ITB. Its most tender zone is usually the lower third, just above the knee.",
    release: {
      tool: "Foam roller, or a firm ball against the wall",
      duration: "90 seconds per side",
      pressure: "Moderate — roll the line slowly; pressing the hot knee spot itself needs a lighter touch",
      steps: [
        "Lie on your side with the roller just below the hip crest, top foot forward.",
        "Roll slowly from hip to just above the knee, pausing on each dense spot for 15 seconds.",
        "Stop short of the hottest knee point; work above and below it with the ball instead.",
        "Finish with 4 slow full-length passes, breathing steadily.",
      ],
      activation:
        "With the ball pinned on a dense spot above the knee, slowly lift and lower the straight top leg — 8 slow lifts. The band glides over the pressure point while the hip abductors wake up.",
    },
    manualTherapy:
      "Practitioners treat the whole lateral chain — TFL and gluteus maximus above, the band itself, vastus lateralis beneath it — and spend as much time strengthening the hip abductors as releasing the tissue, because a collapsing hip re-strings the cable every run.",
    stretch: {
      name: "Crossed-ankle standing lean",
      steps: [
        "Stand and cross the tight leg behind the other, both knees soft.",
        "Push the crossed hip out to the side and reach the same-side arm overhead.",
        "Lean away until the whole outer thigh draws taut, and breathe there.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Cap downhill and volume jumps at about 10% a week.",
      "Build hip abductors: side-planks, clamshells and single-leg work twice weekly.",
      "Swap cambered routes and track directions so the lean alternates.",
    ],
    related: ["vastus-lateralis", "tfl", "gluteus-medius", "gb31-fengshi"],
  },
  {
    id: "peroneus-brevis",
    name: "Peroneus Brevis",
    commonName: "The ankle stabilizer",
    lineId: "ll",
    view: "front",
    marker: { x: 125, y: 433 },
    referral: ["lateral-ankle", "top-of-foot", "lateral-lower-leg"],
    painSummary:
      "The short stabilizer behind the outer ankle bone: sprained ankles and rolled steps leave it guarding, and it answers with an ache under the ankle bone and along the outer edge of the foot toward the little toe.",
    symptoms:
      "A dull ache behind and below the outer ankle bone, sharpening on uneven ground; the outer foot edge feels tired and tender, and standing on one leg feels wobbly. Old sprains often leave this spot permanently touchy.",
    causes: [
      "Past ankle sprains, even old and 'fully healed' ones",
      "Trail running and uneven ground constantly correcting the foot",
      "Worn-out shoes letting the foot roll outward",
      "Tight calves forcing the ankle to find stability elsewhere",
    ],
    howToFind:
      "Find the outer ankle bone. Peroneus brevis sits in the hollow just behind and below it, becoming a tendon that curves forward to the base of the little toe. Press behind the bone while turning the foot outward — the band that tightens under your finger is the muscle.",
    release: {
      tool: "Thumb, or a small ball on the floor",
      duration: "45–60 seconds per side",
      pressure: "Light-moderate — the hollow behind the ankle bone is sensitive territory",
      steps: [
        "Cross the ankle over the other knee to expose the outer edge.",
        "Pin the tender spot behind the ankle bone and hold 20 seconds with slow breaths.",
        "Strip the tendon line forward toward the little toe, 8 gentle passes.",
        "Circle the ankle slowly with the thumb still holding light pressure.",
      ],
      activation:
        "Keep the thumb in the hollow and slowly turn the sole of the foot inward, then relax — 8 slow turns. The stabilizer shortens and lengthens exactly where you press.",
    },
    manualTherapy:
      "Treated together with peroneus longus: both tendons stripped behind the outer ankle and followed to their insertions, with balance retraining — single-leg stands and slow heel raises — doing the long-term work.",
    stretch: {
      name: "Inversion stretch at the wall",
      steps: [
        "Sit cross-legged and hold the outer edge of the foot with the opposite hand.",
        "Turn the sole upward until the outer ankle line draws taut.",
        "Fine-tune the angle until the stretch sits behind the ankle bone.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Do a daily 60-second single-leg stand per foot — eyes open, then closed.",
      "Replace running shoes before the outer sole wears through.",
      "After any rolled ankle, release the spot for a week, not just the day it hurts.",
    ],
    related: ["peroneus-longus", "gb41-zulinqi", "bl60-kunlun"],
  },
];
