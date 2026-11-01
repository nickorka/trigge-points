import type { TriggerPoint } from "../types";

/**
 * Functional Lines (front & back) + Deep Front Line.
 */
export const DEEP_POINTS: TriggerPoint[] = [
  // ---------- Back Functional Line ----------
  {
    id: "latissimus-dorsi",
    name: "Latissimus Dorsi",
    commonName: "The lats sling",
    lineId: "bfl",
    view: "back",
    marker: { x: 84, y: 140 },
    referral: ["axilla-b", "scapula", "lowback-side", "abdomen-side", "elbow-inner", "upper-arm-back"],
    painSummary:
      "A constant dull ache under the shoulder blade and in the armpit that can run down the inner arm to the inner elbow and hand, plus a band around the lower-back side. Known as the 'side-stitch' muscle in swimmers.",
    symptoms:
      "Ache reaching overhead, side-stab when breathing deeply, discomfort lying flat, and inner-arm pain that no elbow treatment fixes. The lat is the biggest muscle of the back and links arm to pelvis.",
    causes: [
      "Swimming, climbing and pulling volume",
      "Golf, tennis and chopping swings",
      "Heavy raking, digging and rowing",
      "Sitting with arms hooked behind chair backs",
    ],
    howToFind:
      "Reach the opposite hand into the armpit and slide to the back wall of the pit — the broad sheet you find running down the side is the lat. Press along the side of the trunk below the armpit; tenderness that refers to the inner arm confirms it.",
    release: {
      tool: "Foam roller (side-lying) or ball on wall",
      duration: "2 minutes per side",
      pressure: "Moderate — long slow strokes",
      steps: [
        "Lie on your side with the roller under the armpit-to-ribs line, arm overhead.",
        "Roll slowly from the armpit to the lower ribs, 6–8 passes.",
        "Hold tender bands 30–45 seconds while breathing.",
        "Reach the overhead arm further to lengthen during holds.",
      ],
      activation:
        "With the roller pinned on a tender spot, slowly slide the overhead arm up and down (like a windshield wiper) 6 times. Then do 5 slow lat pull-down mimics standing — the muscle's own pull action resets it.",
    },
    manualTherapy:
      "Long stripping from the pelvis to the armpit with the patient side-lying, arm overhead, plus sustained holds on the referral-producing knots. Practitioners integrate the thoracolumbar fascia and glute connection to treat the whole sling.",
    stretch: {
      name: "Overhead side-bend lat stretch",
      steps: [
        "Stand tall holding a door frame or pole with one hand at hip height.",
        "Hip-hinge and side-bend away, letting the lat lengthen.",
        "Rotate the chest slightly upward to deepen.",
      ],
      hold: "40 seconds × 2, each side",
    },
    prevention: [
      "Warm up pulling chains before swim/climb sessions.",
      "Avoid hooking arms behind chair backs when seated.",
      "Train eccentric pull strength (slow lowers) weekly.",
    ],
    related: ["pec-major-sternal", "gluteus-maximus", "serratus-anterior"],
  },
  // ---------- Front Functional Line ----------
  {
    id: "adductor-longus",
    name: "Adductor Longus",
    commonName: "The groin-strain point",
    lineId: "ffl",
    view: "front",
    marker: { x: 103, y: 258 },
    referral: ["groin", "inner-thigh", "knee-front"],
    painSummary:
      "Sharp pain deep in the groin fold spreading down the inner thigh — the classic groin strain that isn't a tear. Deep points can refer up into the pelvis and even mimic bladder discomfort (screened medically).",
    symptoms:
      "Pain swinging the leg across the body, discomfort kicking, tenderness at the groin crease, and ache sitting with legs apart. Sudden sharp 'catches' when slipping into a split.",
    causes: [
      "Soccer, hockey and skating direction changes",
      "Sitting cross-legged for hours",
      "Slipping on ice or sudden split positions",
      "Weak glutes and poor hip control",
    ],
    howToFind:
      "Sit and squeeze a ball between the knees — the cord that pops in the groin crease is the adductor longus. Follow it from the pubic bone down the inner thigh; the tender knot is usually upper third.",
    release: {
      tool: "Foam roller or ball (inner thigh)",
      duration: "90 seconds per side",
      pressure: "Moderate — the inner thigh is sensitive, approach gradually",
      steps: [
        "Kneel in a wide stance with the roller under the inner thigh of one leg.",
        "Rock slowly from groin to above the knee, 6–8 passes.",
        "Hold tender spots 30 seconds.",
        "Bend and straighten the knee during holds.",
      ],
      activation:
        "With the roller on the tender spot, gently squeeze the legs together (10% effort) for 5 seconds, then relax — 8 reps. Then do 5 slow standing hip circles. Activating the glutes afterward restores the adductor-abductor balance.",
    },
    manualTherapy:
      "Stripping along the adductor group in side-lying with the hip supported, plus sustained holds at the pubic attachment. Practitioners retrain hip control and check the pelvic floor — the front sling rarely acts alone.",
    stretch: {
      name: "Wide-legged fold (inner thigh)",
      steps: [
        "Stand or sit with legs wide, toes slightly out.",
        "Hinge forward with a long spine, hands to the floor or a chair.",
        "Feel the inner thighs lengthen evenly.",
      ],
      hold: "45 seconds × 2",
    },
    prevention: [
      "Add Copenhagen adductor side-planks to training 2×/week.",
      "Warm up with lateral lunges before court sports.",
      "Limit marathon cross-legged sitting.",
    ],
    related: ["adductor-magnus", "sartorius", "iliopsoas"],
  },
  // ---------- Deep Front Line ----------
  {
    id: "tibialis-posterior",
    name: "Tibialis Posterior",
    commonName: "The deep arch spring",
    lineId: "dfl",
    view: "back",
    marker: { x: 104, y: 390 },
    referral: ["deep-calf", "heel", "sole", "achilles"],
    painSummary:
      "Deep, hard-to-localize tightness in the calf and under the arch that stretching never seems to reach — the deepest muscle of the calf supports the arch from inside. Pain concentrates behind the inner ankle bone.",
    symptoms:
      "The arch-collapse feeling when tired, inner-ankle ache after standing, deep calf burn on hills. Flat-footedness and 'shin splints' often trace back here.",
    causes: [
      "Collapsed arches and over-pronation",
      "Hill walking and stair volume",
      "Long standing on hard floors",
      "Tight deep-hip muscles altering leg alignment",
    ],
    howToFind:
      "Press behind and just below the inner ankle bone, then slide a thumb up the inner edge of the calf between the shin bone and the Achilles — deep tenderness there is the tibialis posterior zone.",
    release: {
      tool: "Small ball (inner calf, behind shin bone)",
      duration: "90 seconds per side",
      pressure: "Gentle and patient — it is deep",
      steps: [
        "Sit with a small ball wedged between the inner calf and the floor edge or wall.",
        "Press the inner calf just behind the shin bone and hold 45 seconds.",
        "Sweep slowly from inner ankle to mid-calf, 5 passes.",
        "Keep the ankle relaxed throughout.",
      ],
      activation:
        "While holding pressure, do 10 slow arch domes (draw the big toe joint toward the heel without curling the toes). Rebuilding the arch spring is the deep-line activation that stops the collapse feeling.",
    },
    manualTherapy:
      "Deep work behind the medial malleolus and along the interosseous line with the patient side-lying, combined with arch-tissue release on the sole. Practitioners rebuild foot mechanics with short-foot drills.",
    stretch: {
      name: "Inverted-foot deep-calf stretch",
      steps: [
        "Stand in a calf-stretch position but turn the stretching foot strongly inward.",
        "Bend the knee slightly and sink, aiming the stretch behind the inner ankle.",
        "Keep weight mid-foot, not on the outer edge.",
      ],
      hold: "30 seconds × 3",
    },
    prevention: [
      "Daily short-foot arch domes (10 × 3 sets).",
      "Vary standing surfaces; use arch-supportive footwear when standing long.",
      "Strengthen the hip deep rotators to align the leg above.",
    ],
    related: ["soleus", "plantar-fascia", "adductor-magnus"],
  },
  {
    id: "adductor-magnus",
    name: "Adductor Magnus (ischial portion)",
    commonName: "The fourth hamstring",
    lineId: "dfl",
    view: "front",
    marker: { x: 96, y: 270 },
    referral: ["groin", "inner-thigh", "perineum", "posterior-thigh"],
    painSummary:
      "Deep groin and inner-thigh ache that can feel like it lives inside the pelvis, plus pain at the sitting bone mimicking hamstring injury. Called the 'fourth hamstring' because its back portion extends the hip like one.",
    symptoms:
      "Discomfort with wide steps, deep squats and stairs; pelvic 'fullness' sensations; pain sitting on hard benches. Hip internal rotation feels restricted.",
    causes: [
      "Horse riding, wide-stance gym work",
      "Sudden splits or sliding movements",
      "Prolonged sitting compressing the inner thigh",
      "Pelvic instability from weak deep core",
    ],
    howToFind:
      "Lie on your back, knee bent, and press along the inner thigh from the groin fold down — the deep mass closer to the back of the bone is magnus. Tender deep pressure reproducing the groin ache is the point.",
    release: {
      tool: "Foam roller (inner thigh, upper third)",
      duration: "90 seconds per side",
      pressure: "Moderate — deep and slow, respect the sensitivity",
      steps: [
        "Kneel wide with the roller under the upper inner thigh.",
        "Rock gently over the upper third, 6 passes.",
        "Hold tender spots 30–45 seconds with slow breaths.",
        "Rotate the leg slightly to bias the back portion.",
      ],
      activation:
        "With pressure held, slowly adduct (squeeze the roller) 5 seconds and release — 8 reps. Then do 5 slow deep-hip rotations (knee circles) to re-glide the muscle around the pelvis.",
    },
    manualTherapy:
      "Practitioner work through the adductor canal with the hip flexed and abducted, plus pelvic-floor integration. The ischial portion connects to the sacrotuberous ligament — sacral work completes the release.",
    stretch: {
      name: "Frog stretch (deep adductors)",
      steps: [
        "Kneel with knees wide, shins parallel, ankles out.",
        "Forearms on the floor, hips rock gently back and sideways.",
        "Feel the deep inner-thigh and pelvic opening.",
      ],
      hold: "60 seconds × 2",
    },
    prevention: [
      "Warm up hips with circles and side lunges before wide-stance work.",
      "Strengthen deep core (dead bugs, diaphragm breathing).",
      "Avoid sudden split positions without prep.",
    ],
    related: ["adductor-longus", "hamstrings-medial", "tibialis-posterior"],
  },
  {
    id: "iliopsoas",
    name: "Iliopsoas",
    commonName: "The sitting muscle",
    lineId: "dfl",
    view: "front",
    marker: { x: 102, y: 205 },
    referral: ["lowback", "groin", "anterior-thigh", "abdomen-side"],
    painSummary:
      "Unilateral deep low-back ache beside the spine that wraps around to the groin and front of the thigh — the signature of the body's main hip flexor. Standing up after long sitting triggers the 'stuck' feeling.",
    symptoms:
      "Difficulty standing upright quickly after sitting, deep groin pinch, low-back ache that walking eases but sitting feeds, and a pulling sensation when lying flat with legs long.",
    causes: [
      "Sitting 6+ hours daily (the muscle shortens and guards)",
      "Running with over-striding",
      "Sleeping in fetal position",
      "Stress bracing (the psoas is wired to the fight-flight system)",
    ],
    howToFind:
      "True psoas access is deep — self-work targets the insertion: press into the hip crease just beside the pubic bone and out toward the hip point, or work the belly through the abdominal wall with practitioner guidance. Tenderness reproducing the back-ache pattern confirms it.",
    release: {
      tool: "Soft ball (hip-crease insertion) or supported lunge hold",
      duration: "90 seconds per side",
      pressure: "Very gentle — never force deep abdominal pressure",
      steps: [
        "Lie face down on a soft ball placed just inside the hip point (ASIS), below the belly.",
        "Let the body sink for 60–90 seconds, breathing slowly into the belly.",
        "Bend the same-side knee gently to lengthen the muscle under pressure.",
        "Alternatively: hold a low lunge with the back knee down and simply breathe.",
      ],
      activation:
        "In the lunge hold, gently press the back knee down (10% effort) 5 seconds, then relax deeper — 8 slow cycles. The psoas responds to breath and release far better than force; never 'stretch it hard'.",
    },
    manualTherapy:
      "Gloved abdominal access alongside the lumbar spine is advanced practitioner work — combined with diaphragm release and pelvic positioning. Because the psoas attaches to every lumbar disc, treatment transforms stubborn back pain.",
    stretch: {
      name: "Couch psoas lunge",
      steps: [
        "Kneel with the back foot up on a couch, front foot forward.",
        "Tuck the tailbone gently and rise tall.",
        "Raise the opposite arm and side-bend slightly away.",
      ],
      hold: "60 seconds × 2, each side",
    },
    prevention: [
      "Stand every 30 minutes; take walking meetings.",
      "Sleep with a pillow between knees, avoid tight fetal curl.",
      "Practice slow exhale breathing to down-shift the psoas guard.",
    ],
    related: ["quadratus-lumborum", "rectus-femoris", "diaphragm"],
  },
  {
    id: "diaphragm",
    name: "Diaphragm & Rib Attachments",
    commonName: "The breath anchor",
    lineId: "dfl",
    view: "front",
    marker: { x: 110, y: 148 },
    referral: ["lower-ribs", "chest-central", "midback", "abdomen"],
    painSummary:
      "Tightness across the front of the lower ribs that can refer to the mid-back between the shoulder blades and create an 'air hunger' feeling. Often experienced as an inability to take a satisfying deep breath.",
    symptoms:
      "Breath feels stuck at the chest; sighing and yawning constantly; side stitches; rib-flare posture. Hiccup-like twitches and anxiety loops of shallow breathing are common.",
    causes: [
      "Chronic stress breathing high into the chest",
      "Slouched sitting compressing the rib cage",
      "Post-surgical or post-illness guarding",
      "Heavy core-bracing in gym training all day",
    ],
    howToFind:
      "Wrap the fingers under the front lower ribs and press up-and-in gently while exhaling — tender spots along the costal margin are diaphragm attachments. Deep tenderness plus restricted breath confirms the point.",
    release: {
      tool: "Fingertips (self) or soft ball at the costal margin",
      duration: "90 seconds",
      pressure: "Very gentle — coordinate with breath",
      steps: [
        "Seated, hook fingertips under the front lower ribs.",
        "Exhale slowly and let the fingers sink upward and inward.",
        "Hold 20–30 seconds at each tender spot, working around the margin.",
        "Never hold through pain — breathe into the pressure.",
      ],
      activation:
        "Do 5 rounds of slow 4-6 breathing (4-second inhale through the nose, 6-second exhale) letting the belly lead. Place a hand on the belly and one on the chest — the belly hand must move most. This is the diaphragm's own activation protocol.",
    },
    manualTherapy:
      "Practitioner costal-margin release with coordinated breathing, plus thoracic mobilization. Diaphragm work transforms breathing patterns and often unloads the low back and neck simultaneously.",
    stretch: {
      name: "Supported side-rib opener",
      steps: [
        "Lie on your side over a rolled towel placed along the ribs.",
        "Reach the top arm overhead and breathe deeply into the upper side.",
        "Take 8 slow breaths, then switch sides.",
      ],
      hold: "8 breaths × 2, each side",
    },
    prevention: [
      "Two minutes of belly breathing morning and night.",
      "Sit tall enough that the ribs stack over the pelvis.",
      "Trade constant bracing for dynamic core work.",
    ],
    related: ["iliopsoas", "rectus-abdominis", "serratus-anterior"],
  },
  {
    id: "pelvic-floor",
    name: "Pelvic Floor (levator ani group)",
    commonName: "The deep-line floor",
    lineId: "dfl",
    view: "back",
    marker: { x: 110, y: 264 },
    referral: ["perineum", "sacrum", "buttock", "lowback"],
    painSummary:
      "Deep pelvic ache, sacral heaviness and coccyx pain that can refer to the buttocks and low back — a commonly overlooked layer in stubborn back and hip complaints.",
    symptoms:
      "Feeling of a 'full' or heavy pelvis, pain sitting long, discomfort with deep hip rotations, and the sense that the core never fully relaxes. Often co-tight with jaw clenching (the DFL's two ends).",
    causes: [
      "Chronic clenching under stress (the floor mirrors the jaw)",
      "Childbirth or heavy lifting strain",
      "Long sitting with the pelvis tucked",
      "Cycling with a nose-down saddle",
    ],
    howToFind:
      "Self-access is indirect: sit on a firm rolled towel placed under one sit bone and rock gently — tenderness through the pelvic floor on that side is common when points are active. True internal work belongs to pelvic-health specialists.",
    release: {
      tool: "Rolled towel / firm cushion (external, safe)",
      duration: "90 seconds",
      pressure: "Gentle rocking only — no deep internal self-work",
      steps: [
        "Sit on a rolled towel positioned under one sit bone.",
        "Rock gently forward-back and side-to-side over it, 60 seconds.",
        "Breathe out long and let the pelvic floor 'drop' with each exhale.",
        "Switch sides and repeat.",
      ],
      activation:
        "Do 8 slow pelvic-floor 'down-training' breaths: inhale and feel the floor widen, exhale without clenching. Then 5 gentle Kegel lifts and full drops. Both directions matter — chronic clenching needs release, not more strength.",
    },
    manualTherapy:
      "Pelvic-health physiotherapists perform internal release when indicated — highly effective for coccyx pain and chronic pelvic tension. External approaches treat the glutes, adductors and diaphragm to decompress the floor from above.",
    stretch: {
      name: "Deep squat hold (pelvic opening)",
      steps: [
        "Hold onto a door frame and squat as deep as comfortable, heels down.",
        "Let the pelvis open and the belly relax.",
        "Breathe slowly into the lower belly.",
      ],
      hold: "60 seconds × 2",
    },
    prevention: [
      "Match jaw and pelvic relaxation: unclench both during the day.",
      "Sit with the pelvis neutral, not tucked.",
      "See a pelvic-health specialist for persistent symptoms.",
    ],
    related: ["iliopsoas", "adductor-magnus", "masseter", "diaphragm"],
  },
  {
    id: "piriformis",
    name: "Piriformis & Deep Hip Rotators",
    commonName: "The sciatica impostor",
    lineId: "dfl",
    view: "back",
    marker: { x: 121, y: 242 },
    referral: ["buttock", "posterior-thigh", "lateral-hip-b"],
    painSummary:
      "A deep, boring ache in the middle of the buttock that can send a thin thread of pain down the back of the thigh — close enough to true sciatica to be mistaken for it. Sitting on hard chairs or a wallet lights it up within minutes.",
    symptoms:
      "The buttock feels bruised from the inside; climbing stairs and deep squats bite. True to its impostor name, pain may buzz down the thigh when the muscle squeezes the sciatic nerve beneath it. Lying flat with the legs rolled out usually eases it, while sitting aggravates it.",
    causes: [
      "Hours of sitting, especially on hard seats or a back-pocket wallet",
      "Long driving stints with the hip held in one rotation",
      "Running on cambered roads that twists the pelvis",
      "Hip instability forcing the deep rotators to brace every step",
    ],
    howToFind:
      "Find the midpoint between the side edge of the sacrum and the big knob of the hip bone, deep in the buttock. Press firmly there while seated. Then do the famous test seated: rest one ankle on the opposite knee and lean forward — if the buttock ache spikes sharply, the piriformis is the player.",
    release: {
      tool: "Firm ball while lying down or seated",
      duration: "90 seconds per side",
      pressure: "Moderate-firm, sinking slowly — deep buttock ache, never electric shots",
      steps: [
        "Lie on your back, knees up, and place the ball under the buttock at the tender midpoint.",
        "Cross the same-side ankle over the opposite knee into a figure-4 to open the rotators.",
        "Rock the raised knee in tiny arcs so the muscle rolls over the ball — 6–8 slow passes.",
        "Pause 20 seconds on the deepest tender spot, breathing long exhales.",
      ],
      activation:
        "With the ball pinned under the tender spot in figure-4, press the knee gently outward against your own hand — 20% effort, 5 seconds × 5. Contracting the rotators against resistance while they are compressed resets their guarding.",
    },
    manualTherapy:
      "Practitioners work prone or side-lying, sinking between the sacrum and greater trochanter with the hip externally rotated, and use contract–relax for the deep six. Persistent sciatica-like symptoms always deserve a professional screen for true nerve root involvement.",
    stretch: {
      name: "Figure-4 piriformis stretch",
      steps: [
        "Lie on your back, cross one ankle over the opposite thigh just above the knee.",
        "Thread the hands behind the supporting thigh and draw it toward the chest.",
        "Keep the tailbone heavy on the floor — the stretch should stay in the buttock, not the back.",
      ],
      hold: "60 seconds per side",
    },
    prevention: [
      "Evict the wallet from the back pocket — the classic silent cause.",
      "Stand and hip-hinge 10 times every 30 minutes of sitting.",
      "Build hip strength (side planks, single-leg work) so the rotators stop bracing as stabilizers.",
    ],
    related: ["gluteus-maximus", "gluteus-minimus", "iliopsoas", "gb30-huantiao"],
  },
  {
    id: "pectineus",
    name: "Pectineus",
    commonName: "The groin misread",
    lineId: "dfl",
    view: "front",
    marker: { x: 105, y: 248 },
    referral: ["groin", "inner-thigh"],
    painSummary:
      "A sharp pinprick deep in the groin fold that stabs with the first steps after sitting or when lifting the knee high. It is routinely misread as a hip-joint problem, a hernia or a pulled adductor.",
    symptoms:
      "The stab sits just below the groin crease and can send a deep ache into the pelvis. Squats, stairs, soccer kicks and getting out of a car provoke it. The spot is tender to fingertip pressure on a small shelf of muscle below the crease.",
    causes: [
      "Riding and saddle sports with the thighs gripping",
      "Sliding tackles, lunges and sudden kicking loads",
      "Sit-ups and gym work with the knees squeezed together",
      "A chronic habit of standing with the thighs pressed and pelvis shifted",
    ],
    howToFind:
      "Lie on your back and bend one knee out to the side. In the groin crease, find the strong pulse, then slide just below and slightly toward the inside — a flat muscular shelf lies there. Press it: the familiar groin sting confirms the pectineus.",
    release: {
      tool: "Fingertips, or a small soft ball while seated",
      duration: "45–60 seconds per side",
      pressure: "Moderate, angled gently down — ease off any pulsing sensation (the vessels run nearby)",
      steps: [
        "Seated on a chair with the foot flat, sink fingertips onto the shelf below the groin crease.",
        "Hold 15–20 seconds while slowly rotating the open knee in small circles.",
        "Shift a thumb-width along the shelf and repeat for 2–3 spots.",
        "Finish with 5 slow knee lifts to check the sting has faded.",
      ],
      activation:
        "Keep the fingertips on the tender shelf and lift the foot 2 centimeters off the floor — 8 slow lifts. The pectineus shortens and lengthens under your own pressure, which releases its stab far faster than static work.",
    },
    manualTherapy:
      "Practitioners strip the shelf with the hip flexed and turned out, working medial to the sartorius and lateral to the adductor canal — always with the pulse located first. Hip-flexor and adductor balance work prevents the relapse.",
    stretch: {
      name: "Half-kneel frog lean",
      steps: [
        "Kneel on all fours and slide both knees wide, shins parallel, sitting back toward the heels.",
        "Lean the weight back until the deep groin folds stretch evenly.",
        "Rock 2–3 centimeters side to side to explore both spots.",
      ],
      hold: "45 seconds × 2",
    },
    prevention: [
      "Warm up the groin with slow leg swings before kicking or sliding sports.",
      "Balance inner-thigh work with hip-abductor strength every training week.",
      "Avoid standing with the thighs pressed together and one hip dropped.",
    ],
    related: ["adductor-longus", "iliopsoas", "sartorius"],
  },
  {
    id: "flexor-hallucis-longus",
    name: "Flexor Hallucis Longus",
    commonName: "The big-toe cable",
    lineId: "dfl",
    view: "back",
    marker: { x: 103, y: 410 },
    referral: ["deep-calf", "sole", "arch"],
    painSummary:
      "A deep cramp in the lower calf on the inner side and an ache under the big toe with every push-off. Dancers call its overuse story 'dancer's heel'; hikers feel it on every stair climb.",
    symptoms:
      "Curling the big toe against resistance hurts; the toe may feel weak or slow. Behind the inner ankle bone a cord can be felt gliding — sometimes it catches with a click. The ache often spreads to the ball of the foot under the big toe.",
    causes: [
      "Ballet and pointe work, or any toe-dominant push-off ramped up quickly",
      "Hill hiking and stair climbing with the calf already tight",
      "Minimalist or low-drop running adopted too fast",
      "A cramped deep-calf compartment from long standing or boots laced tight",
    ],
    howToFind:
      "Curl the big toe down hard and watch the back of your inner ankle: a cord pops up just behind the ankle bone. Follow it up into the deep calf along the inner edge — the tender channel there is the target. Pressing under the big toe pad often echoes the ache.",
    release: {
      tool: "Thumbs behind the ankle + firm ball for the deep calf",
      duration: "60–90 seconds per side",
      pressure: "Moderate — deep tissue ache, easing as the cord lets go",
      steps: [
        "Seated, cross the ankle over the knee and hook both thumbs behind the inner ankle bone.",
        "Strip slowly along the cord from the ankle up into the deep calf, 8–10 passes.",
        "Then place the ball in the inner lower calf and sink 15–20 seconds per tender spot.",
        "Finish by pulling the big toe back gently to stretch the whole cable.",
      ],
      activation:
        "With thumbs holding pressure on the cord behind the ankle, slowly curl and straighten the big toe — 10 full cycles. The tendon glides under your thumbs in its groove, which clears the catch and quiets the cramp.",
    },
    manualTherapy:
      "Practitioners strip the retromalleolar groove and the deep posterior compartment with the foot hanging relaxed, then check the whole push-off chain from calf to hallux. Persistent catching behind the ankle merits a professional look for tendon sheath trouble.",
    stretch: {
      name: "Big-toe extension with soft knee",
      steps: [
        "Seated, cup the heel with one hand and grip the big toe with the other.",
        "Pull the toe back toward the shin with the knee slightly bent.",
        "Let the arch stretch along its inner edge — no forcing into cramp.",
      ],
      hold: "30 seconds × 3",
    },
    prevention: [
      "Keep calves supple: a 60-second roll before and after hill or studio work.",
      "Build toe strength slowly — towel scrunches and slow toe-yoga raises.",
      "Choose shoes with a roomy toe box and avoid lacing tightly over the ankle crease.",
    ],
    related: ["tibialis-posterior", "soleus", "plantar-fascia"],
  },
  {
    id: "teres-major",
    name: "Teres Major",
    commonName: "Lat's little helper",
    lineId: "bfl",
    view: "back",
    marker: { x: 90, y: 151 },
    referral: ["shoulder-back", "upper-arm-back", "axilla-b"],
    painSummary:
      "The thick strap in the back fold of the armpit that powers every pull-down and throw: overloaded, it aches deep in the back of the shoulder and down the rear arm — the lift that suddenly 'catches' at the top of a pull-up or a suitcase heave into the locker.",
    symptoms:
      "A deep ache in the back armpit fold and the back of the shoulder blade region, sharp on reaching up or behind; the arm feels weaker on pulls, and heaving a suitcase onto a rack provokes a stabbing pinch. Stretching the arm overhead across the body pulls on the exact spot.",
    causes: [
      "Pull-ups, rope climbs and heavy rowing volume",
      "Throwing sports with a hard acceleration phase",
      "Heaving suitcases and boxes with a snatchy lift",
      "Driving long with the elbow propped out the window",
    ],
    howToFind:
      "Reach across to the back fold of the opposite armpit and press into the thick strap just below the armpit crease, against the shoulder blade's outer edge — it tightens when you pull the elbow down and back. The tender band is teres major, running with the lat.",
    release: {
      tool: "A firm ball between the body and a wall",
      duration: "60 seconds per side",
      pressure: "Moderate — deep muscle ache, never a nerve-type zing down the arm",
      steps: [
        "Stand with your back to a wall and trap the ball in the back armpit fold.",
        "Lean gently and hold 20 seconds, letting the strap soften under the ball.",
        "Roll slowly up and down the fold, pausing on each dense spot, 8 stops.",
        "Slide the ball toward the shoulder blade edge and repeat the sweep.",
      ],
      activation:
        "Keep the ball pressed in the fold and slowly pull the elbow down and back as if starting a row — 8 slow pulls. The muscle works against its own release.",
    },
    manualTherapy:
      "Practitioners reach it side-lying with fingertips sinking into the posterior axilla fold toward the scapula, stripping it together with the latissimus below; both muscles are checked for the overhead-reach restriction that usually brings people in.",
    stretch: {
      name: "Doorway high reach with side lean",
      steps: [
        "Hold a doorframe with the arm overhead and lean the body gently through.",
        "Add a side lean away from the holding arm until the armpit fold draws taut.",
        "Breathe into the stretch and let the shoulder settle with each exhale.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Balance every pull-up block with rows and shoulder rotations.",
      "Lift suitcases and boxes with a two-count, not a snatch.",
      "Roll the back armpit fold for 30 seconds after climbing or throwing days.",
    ],
    related: ["latissimus-dorsi", "infraspinatus", "triceps"],
  },
  {
    id: "obturator-internus",
    name: "Obturator Internus",
    commonName: "The deep turner",
    lineId: "dfl",
    view: "back",
    marker: { x: 123, y: 266 },
    referral: ["buttock", "perineum", "sacrum"],
    painSummary:
      "One of the deep hip rotators that doubles as a pelvic-floor player: overloaded, it aches deep in the lower buttock and around the sitting bone, and makes turning over in bed or pivoting on one foot feel like the hip is full of gravel.",
    symptoms:
      "A deep, low buttock ache around the sitting bone, worse on hard chairs and long sits; pivoting the leg outward is stiff and pinchy, and there can be a faint heaviness in the pelvic floor. Turning in bed demands the whole body instead of one hip.",
    causes: [
      "Long sitting days, especially on hard seats and wallets in the back pocket",
      "Pelvic-floor guarding — stress, childbirth recovery, old abdominal surgery",
      "Hip strain compensations after sprains or one-sided sport loads",
      "Long drives with the hip pinned in one rotation",
    ],
    howToFind:
      "Sit on your hands and find the sitting bone (ischial tuberosity). Obturator internus runs just above and in front of it, toward the hip. Press gently into the soft hollow above the sitting bone while slowly turning the leg outward — the deep band that tightens is the muscle.",
    release: {
      tool: "A firm ball on a chair seat, or the thumb",
      duration: "60 seconds per side",
      pressure: "Gentle-firm — a deep spread is fine; sharp or electric sensations mean back off",
      steps: [
        "Sit on a hard chair, place the ball in the hollow above the sitting bone and settle onto it.",
        "Hold 20 seconds, breathing low and slow into the belly.",
        "Make 8 tiny hip circles, letting the ball ride the soft tissue.",
        "Shift the ball slightly toward the hip and repeat, then swap sides.",
      ],
      activation:
        "Keep the ball in place and slowly turn the knee outward and back — 8 slow rotations, as if showing the sole of the foot to a mirror. The deep turner shortens and releases exactly under the pressure.",
    },
    manualTherapy:
      "Clinical work treats the whole deep-rotator group through the buttock with the client side-lying, often alongside pelvic-floor downtraining — slow diaphragmatic breathing is a genuine part of the protocol, because this muscle and the pelvic floor guard together.",
    stretch: {
      name: "Supported figure-4 recline",
      steps: [
        "Lie on your back, cross the ankle over the opposite thigh, knee bent.",
        "Reach through and draw the supporting thigh toward the chest.",
        "Let the crossed knee drift away gently — keep the stretch deep, not sharp.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Take the wallet out of the back pocket and stand up every 30 minutes.",
      "Add 5 minutes of slow belly breathing after long sitting days.",
      "Build both directions of hip rotation into your weekly routine.",
    ],
    related: ["piriformis", "pelvic-floor", "adductor-magnus", "bl32-ciliao"],
  },
];
