import type { TriggerPoint } from "../types";

/**
 * Superficial Back Line — plantar fascia to the brow.
 * Referral patterns after Travell & Simons + clinical consensus.
 */
export const SBL_POINTS: TriggerPoint[] = [
  {
    id: "plantar-fascia",
    name: "Plantar Fascia & Toe Flexors",
    commonName: "The heel-cord anchor",
    lineId: "sbl",
    view: "back",
    marker: { x: 116, y: 458 },
    referral: ["sole", "arch", "heel"],
    painSummary:
      "Stabbing pain at the front edge of the heel and along the inner arch, classically worst with the first steps in the morning or after sitting. The ache can spread into the ball of the foot and the base of the toes.",
    symptoms:
      "Foot feels like walking on a pebble; the arch may cramp; toes may pull into slight flexion. Tight calves and heel pain almost always appear together because the plantar fascia is the first station of the Superficial Back Line.",
    causes: [
      "Long standing or walking on hard floors",
      "Tight calves pulling on the fascia from above",
      "Unsupportive shoes or barefoot on tile",
      "Sudden increases in running volume",
      "Ankle stiffness limiting the roll-through of the foot",
    ],
    howToFind:
      "Sit and rest the ankle on the opposite knee. Press along the sole from the heel bone forward to the base of the toes — the tender band usually sits just in front of the heel and along the inner arch. Flex the big toe back: if the arch pain lights up, you are on it.",
    release: {
      tool: "Firm ball (lacrosse) or frozen water bottle",
      duration: "90 seconds per foot",
      pressure: "Moderate — satisfying ache, never wincing",
      steps: [
        "Sit on a chair and place the ball under the arch of one foot.",
        "Roll slowly from the heel to the base of the toes, pausing 15–20 seconds on each tender spot.",
        "Keep the pressure steady and the movement slow — 4–5 passes per foot.",
        "Finish by gently pulling each toe back to stretch the fascia for 5 seconds.",
      ],
      activation:
        "While holding the ball on a tender spot, repeatedly press the toes down against the ball and release — 10 slow pumps. This contract-relax action pumps the fascia and quiets the point far faster than pressure alone.",
    },
    manualTherapy:
      "Practitioners strip the plantar fascia crosswise with the thumb from heel to toes, then treat the calf and hamstring above — releasing the whole line from the top down makes the foot work hold. Taping supports short-term relief.",
    stretch: {
      name: "Toe-extension fascia stretch",
      steps: [
        "Seated, place the toes of one foot over the opposite knee.",
        "Grip the toes and pull them back toward the shin until the arch stretches.",
        "Hold while pressing the thumb along the arch to deepen.",
      ],
      hold: "30 seconds × 3 rounds",
    },
    prevention: [
      "Roll the foot for 60 seconds each morning before the first steps.",
      "Train calf and foot strength: slow heel raises with full toe spread.",
      "Replace worn shoe cushioning; avoid habitual barefoot walking on hard floors.",
    ],
    related: ["gastrocnemius", "soleus"],
  },
  {
    id: "gastrocnemius",
    name: "Gastrocnemius (medial belly)",
    commonName: "Night-cramp calf point",
    lineId: "sbl",
    view: "back",
    marker: { x: 116, y: 382 },
    referral: [
      "calf",
      "popliteal",
      "arch",
      "heel",
    ],
    painSummary:
      "Ache deep in the upper calf that can shoot to the back of the knee and travel all the way into the arch of the foot. A classic cause of night cramps and of heel pain that is wrongly labelled plantar fasciitis.",
    symptoms:
      "Pain when pushing off the foot, walking uphill or climbing stairs; the calf may feel 'inflamed' though nothing is visible. Sudden cramps at night are a hallmark of active points in this muscle.",
    causes: [
      "Walking or running uphill, hard court sports",
      "Sitting with heels elevated and ankles slack (recliner posture)",
      "Tight or short ski boots, cycling cleats holding the foot plantar-flexed",
      "Cold exposure while the muscle is fatigued",
    ],
    howToFind:
      "Stand and rise onto the toes — the two bellies of the calf pop out. The medial (inner) belly is the most common trigger zone, a hand-width below the back of the knee. Pinch the muscle between fingers and thumb to find the tender rope.",
    release: {
      tool: "Foam roller or firm ball",
      duration: "90 seconds per side",
      pressure: "Moderate — roll across the muscle, not just along it",
      steps: [
        "Sit with the roller under the calf and hands behind for support.",
        "Sweep slowly from just below the knee to the lower calf, 6–8 passes.",
        "Stop on tender spots and hold 20–30 seconds each.",
        "Angle slightly side-to-side to reach the inner belly.",
      ],
      activation:
        "With the ball pinned on the tender point, slowly pump the ankle up and down — 10 full dorsi/plantar-flexion cycles. The moving muscle re-sets its own length under the pressure.",
    },
    manualTherapy:
      "Stripping strokes from heel to knee with the patient prone, plus sustained ischemic compression on the medial belly. Treating the hamstring and plantar fascia in the same session prevents the referral from simply returning.",
    stretch: {
      name: "Straight-knee calf stretch",
      steps: [
        "Face a wall, hands on it, one leg back with the knee dead straight.",
        "Press the back heel down and turn the back foot slightly inward.",
        "Lean in until a strong stretch draws along the upper calf.",
      ],
      hold: "30 seconds × 3, each side",
    },
    prevention: [
      "Never sit for long with the foot hanging plantar-flexed over a recliner edge.",
      "Build eccentric calf strength: slow 3-second lower from a heel raise.",
      "Hydrate and manage magnesium/potassium intake if cramps recur at night.",
    ],
    related: ["soleus", "plantar-fascia", "hamstrings-biceps"],
  },
  {
    id: "soleus",
    name: "Soleus",
    commonName: "The runner's heel ache",
    lineId: "sbl",
    view: "back",
    marker: { x: 112, y: 402 },
    referral: ["heel", "achilles", "calf", "sacrum"],
    painSummary:
      "A deep, bruise-like pain low in the calf and around the Achilles tendon, spreading under the heel. Long-standing soleus points can even refer an odd ache into the sacrum on the same side.",
    symptoms:
      "Pain with jogging and squatting but surprisingly little with walking; the heel feels bruised to the touch; the ankle may feel stiff into deep knee-bend positions.",
    causes: [
      "Running (especially on soft sand or hills)",
      "Long stints of driving with the foot on the pedal",
      "Wearing shoes with a dropped heel for years",
      "Deep squatting sports and weight-training volume",
    ],
    howToFind:
      "Sit with the knee bent 90° and the foot flat. Press into the lower calf just beside and in front of the Achilles cord, two finger-widths above the heel bone. A deep tenderness here is the soleus point.",
    release: {
      tool: "Foam roller (knee-bent position)",
      duration: "2 minutes per side",
      pressure: "Firm — the soleus is deep, work slowly",
      steps: [
        "Sit with the knee bent so the calf is slack — this exposes the soleus.",
        "Place the roller low on the calf near the Achilles.",
        "Make small crosswise sweeps and hold tender points 30 seconds.",
        "Trace the whole lower calf from side to side, not just the middle.",
      ],
      activation:
        "With pressure held on the point, do 10 slow ankle pumps with the knee bent. Bent-knee work isolates the soleus — this is the key to reaching it, since the straight-knee pump only moves gastrocnemius.",
    },
    manualTherapy:
      "Deep cross-fiber work through the lower third of the calf with the knee flexed, plus sustained compression with the ankle resting. Treating soleus resolves many stubborn 'Achilles' and heel complaints without any tendon damage present.",
    stretch: {
      name: "Bent-knee calf stretch",
      steps: [
        "Stand in a lunge but bring the back knee down and forward.",
        "Keep the back heel flat on the floor.",
        "Sink the hips until the stretch is felt low in the calf near the Achilles.",
      ],
      hold: "30 seconds × 3, each side",
    },
    prevention: [
      "Alternate running surfaces; add bent-knee calf raises to warm-ups.",
      "Take driving breaks on long trips — pump the ankles every hour.",
      "Progress running volume by no more than 10% per week.",
    ],
    related: ["gastrocnemius", "tibialis-posterior"],
  },
  {
    id: "hamstrings-biceps",
    name: "Biceps Femoris (outer hamstring)",
    commonName: "The sitting hamstring",
    lineId: "sbl",
    view: "back",
    marker: { x: 120, y: 312 },
    referral: ["posterior-thigh", "popliteal", "lowback-side"],
    painSummary:
      "A dull ache at the back of the knee and lower outer thigh that sharpens when you straighten the leg fully or bend to touch your toes. Points near the ischial tuberosity can feel like a 'pulled hamstring' that never quite heals.",
    symptoms:
      "Stiff-legged walking, pain sitting on hard chairs pressing the tendon, occasional referred ache into the calf top. Common in people who sit long hours and then sprint or play sport on weekends.",
    causes: [
      "Prolonged sitting with the knee bent",
      "Sprinting or hill running beyond conditioning",
      "Sudden toe-touch lifting",
      "Knee instability making the hamstring over-brace",
    ],
    howToFind:
      "Sit on a chair and press the outer hamstring tendon behind the knee, then trace up the outer muscle belly toward the sit bone. The tender band is usually just above the knee fold and near the sitting bone.",
    release: {
      tool: "Foam roller or massage ball",
      duration: "2 minutes per side",
      pressure: "Moderate — avoid rolling directly on the knee crease",
      steps: [
        "Sit with the roller under the outer hamstring, hands supporting behind.",
        "Roll from just above the knee to the sit bone, 6–8 slow passes.",
        "Pause 30 seconds on each tender band, letting the muscle melt.",
        "Rotate the leg slightly inward to reach the lateral fibers.",
      ],
      activation:
        "On a held tender spot, slowly straighten and bend the knee 5–6 times through a small range. Moving the muscle through range under compression is the 'activation' that releases the point and restores length.",
    },
    manualTherapy:
      "Long stripping strokes along the outer hamstring with the knee supported, then cross-fiber work at the attachment. Because the biceps femoris ties into the sacrotuberous ligament, sacral work finishes the treatment.",
    stretch: {
      name: "Supported hamstring stretch (outer bias)",
      steps: [
        "Place one heel on a low step, knee nearly straight.",
        "Keep the back long and hinge from the hips, chest tall.",
        "Turn the torso slightly toward the inner side of the straight leg to bias the outer hamstring.",
      ],
      hold: "30 seconds × 3, each side",
    },
    prevention: [
      "Stand up from the desk every 30 minutes.",
      "Eccentric hamstring curls or Nordic lowers 2×/week.",
      "Warm up thoroughly before sprinting or hill work.",
    ],
    related: ["gluteus-maximus", "hamstrings-medial"],
  },
  {
    id: "hamstrings-medial",
    name: "Semimembranosus & Semitendinosus",
    commonName: "Inner hamstring strain point",
    lineId: "sbl",
    view: "back",
    marker: { x: 100, y: 308 },
    referral: ["posterior-thigh", "popliteal", "medial-knee"],
    painSummary:
      "A deep ache in the inner back of the thigh and top of the inner knee, aggravated by sitting, driving and reaching forward. It can make the knee feel unstable or 'locked' when straightening.",
    symptoms:
      "Pain folding the leg under a chair, discomfort walking fast uphill, and a feeling that the knee cannot fully straighten. Often coexists with groin tightness along the Deep Front Line.",
    causes: [
      "Long sitting (car, desk, cinema)",
      "Slipping into a split or over-striding",
      "Weak glutes forcing the hamstring to over-work",
      "Cycling with the saddle too high",
    ],
    howToFind:
      "Seated, press the inner hamstring tendon behind the knee and trace up the inner muscle mass toward the sit bone. The most tender rope usually sits a hand-width above the knee on the inner side.",
    release: {
      tool: "Foam roller",
      duration: "2 minutes per side",
      pressure: "Moderate — work the inner half of the thigh's back",
      steps: [
        "Sit with the roller under the inner hamstring.",
        "Roll from above the knee to the sit bone, 6–8 passes.",
        "Hold each tender band 30 seconds.",
        "Bend and straighten the knee a few times on the stickiest spot.",
      ],
      activation:
        "Pin the roller on the tender band and slowly drag the heel along the floor toward the chair and back — 6 reps. This slides the hamstring while compressed, releasing the point.",
    },
    manualTherapy:
      "Prone or side-lying stripping of the medial hamstrings with the knee passively moved, finishing with contract-relax holds. Address the adductors and glutes in the same session — isolated hamstring treatment rarely holds.",
    stretch: {
      name: "Seated inner-hamstring stretch",
      steps: [
        "Sit on the floor with both legs in a wide V.",
        "Walk the hands toward one foot, keeping the spine long.",
        "Fold gently over the straight leg until the inner thigh draws.",
      ],
      hold: "30 seconds × 3, each side",
    },
    prevention: [
      "Use a footrest so the knees are not jammed deep-bent all day.",
      "Strengthen the glutes so hamstrings are not the brake for everything.",
      "Break up sitting with slow standing leg-swings.",
    ],
    related: ["hamstrings-biceps", "adductor-magnus"],
  },
  {
    id: "gluteus-maximus",
    name: "Gluteus Maximus",
    commonName: "The office-worker buttock",
    lineId: "sbl",
    view: "back",
    marker: { x: 118, y: 256 },
    referral: ["buttock", "sacrum", "hip-crest", "lowback"],
    painSummary:
      "A deep ache across the buttock that can reach the sacrum, the hip crest and even the low back. Sitting on the point feels like sitting on a bruise or a golf ball.",
    symptoms:
      "Difficulty climbing stairs without pushing off the hands, ache after long drives, and a burning spot when leaning back on a sofa. Because this muscle anchors the Superficial Back Line to the pelvis, its tension tilts the whole line.",
    causes: [
      "Sitting for hours on the muscle itself",
      "Lifting with the back instead of the hips",
      "Running or stair-climbing beyond conditioning",
      "Falls onto the buttock",
    ],
    howToFind:
      "Stand and squeeze the buttocks — feel the outer mass below the hip crest. Sit on your hands on a firm chair and slide until you press the thickest part of the glute, usually a palm-width out from the sacrum. A tender spot that 'feels like a bruise' is the point.",
    release: {
      tool: "Firm ball against a wall",
      duration: "2 minutes per side",
      pressure: "Moderate to firm — breathe slowly through it",
      steps: [
        "Stand with your back to a wall and the ball wedged between you and the wall on the buttock.",
        "Bend the knees and roll small circles until the ball sits on the tender spot.",
        "Hold 60–90 seconds, sinking weight gradually.",
        "Cross the same-side ankle over the opposite knee to open the glute.",
      ],
      activation:
        "With the ball held on the point, slowly squeeze the buttock to 20% effort for 5 seconds, then let go — 8 reps. This contract-relax flushes the point and re-lights the muscle's role as hip extensor.",
    },
    manualTherapy:
      "Deep sustained compression with fist or elbow through a sheet or shorts, combined with passive hip rotations. Checking and releasing the sacrotuberous attachment restores glide between glute and hamstring.",
    stretch: {
      name: "Figure-4 glute stretch",
      steps: [
        "Lie on your back, both knees bent.",
        "Cross the right ankle over the left knee, flexing the right foot.",
        "Pull the left thigh toward the chest until the right buttock stretches.",
      ],
      hold: "45 seconds × 2, each side",
    },
    prevention: [
      "Stand every 30 minutes; never let a chair own your glutes all day.",
      "Hinge at the hips when lifting to keep glutes loaded.",
      "Add hip thrusts or bridges twice weekly for endurance.",
    ],
    related: ["gluteus-medius", "hamstrings-biceps", "iliopsoas"],
  },
  {
    id: "erector-spinae-thoracic",
    name: "Thoracic Erector Spinae",
    commonName: "The posture cable",
    lineId: "sbl",
    view: "back",
    marker: { x: 98, y: 160 },
    referral: ["midback", "back-ribs", "lowback", "hip-crest"],
    painSummary:
      "Band-like ache running up and down either side of the spine through the mid-back, sometimes wrapping around the ribs to the front. Deep points can send pain down to the hip crest.",
    symptoms:
      "The back feels 'wooden' when straightening after desk work; deep breaths feel restricted; pressing between the spine and shoulder blade aches. Points here silently tighten the hamstring-calf line below.",
    causes: [
      "Slouched sitting rounding the thoracic spine for hours",
      "Carrying a bag on one shoulder",
      "Sustained leaning forward over a desk or bed (nurses, mechanics)",
      "Abdominal weakness leaving the spine cables unguarded",
    ],
    howToFind:
      "Reach over the opposite shoulder with your hand — the muscle you feel contracting beside the spine is the target. Lie back on a ball placed beside the spine (never on the spinous bones) between the shoulder blades.",
    release: {
      tool: "Two tennis balls in a sock, or a peanut roller",
      duration: "2–3 minutes total",
      pressure: "Light to moderate — the spine bones must never be pressed",
      steps: [
        "Lie on your back with the twin balls straddling the spine at bra-strap level.",
        "Let the shoulders sink and breathe slowly for 60–90 seconds.",
        "Move the balls one level down the back and repeat.",
        "Hug the arms across the chest to expose more muscle.",
      ],
      activation:
        "With the balls in place, do 5 slow pelvic tucks and arches, plus 5 gentle 'cat-camel' rolls. Waving the spine over the pressure point re-hydrates the discs and releases the erector spasm.",
    },
    manualTherapy:
      "Sustained paraspinal compression and cross-fiber stripping from sacrum to skull base, always treating the whole column — treating only the aching level ignores how load travels along the line. Finish with rotation mobilizations.",
    stretch: {
      name: "Seated spinal wave (cat-camel)",
      steps: [
        "Sit tall on a chair, hands on knees.",
        "Arch the chest forward and look up slightly (camel).",
        "Round the back and drop the head (cat), flowing slowly between the two.",
      ],
      hold: "10 slow rounds × 2 sets",
    },
    prevention: [
      "Set the screen at eye level; sit back into the chair, not on the tailbone.",
      "Do a daily 2-minute spinal wave standing or seated.",
      "Strengthen the deep core so the back cables don't over-pull.",
    ],
    related: ["multifidi", "suboccipitals", "quadratus-lumborum"],
  },
  {
    id: "multifidi",
    name: "Lumbar Multifidi & Deep Spinal Muscles",
    commonName: "The 'thrown-out back' point",
    lineId: "sbl",
    view: "back",
    marker: { x: 103, y: 218 },
    referral: ["lowback", "sacrum", "buttock"],
    painSummary:
      "A deep, sharp stab right beside the spine in the low back that can drop into the top of the buttock and sacrum. This is the point most responsible for the classic 'my back went out and I can't stand up' episode.",
    symptoms:
      "Sudden catching pain when bending to pick something up, guarding that makes you rise slowly with hands on knees, and deep tenderness one inch beside the lumbar spine. The muscle goes into protective spasm and stays for weeks if untreated.",
    causes: [
      "Lifting while twisted",
      "Sudden reach or sneeze in a bent position",
      "Core weakness after long desk years",
      "Old disc irritation sensitizing the deep spinal muscles",
    ],
    howToFind:
      "Stand and place a thumb one inch beside the spine at belt level. Press gently — a fierce, local tenderness that reproduces your back pain is the point. It often sits at the level between the last two lumbar vertebrae.",
    release: {
      tool: "Twin balls beside the spine (never on it)",
      duration: "90 seconds per level",
      pressure: "Very gentle — this area is easily guarded",
      steps: [
        "Lie on your back with the twin balls beside (not on) the lumbar spine.",
        "Bend the knees and let them fall slowly side to side, 10 times each way.",
        "Breathe into the belly, letting the back soften onto the balls.",
        "If any sharp pain flares, stop and lighten the pressure.",
      ],
      activation:
        "Gently press the low back down into the floor and release 10 times (tiny pelvic tilts). This micro-pumping wakes the multifidi without overload — the single most useful activation for a locked low back.",
    },
    manualTherapy:
      "Prone sustained palpation pressure on the spasm level while the patient does gentle breath-holds, followed by rotation mobilization. Persistent points often need a practitioner's finger-tip precision because the muscle is only centimeters deep.",
    stretch: {
      name: "Knees-to-chest lumbar release",
      steps: [
        "Lie on the back and hug both knees to the chest.",
        "Rock gently side to side massaging the low back on the floor.",
        "Then let the knees fall 10° to one side with the shoulders flat.",
      ],
      hold: "60 seconds, then 30 seconds each side",
    },
    prevention: [
      "Brace the belly before every lift; keep loads close to the body.",
      "Practice pelvic tilts daily to keep the deep spinal muscles responsive.",
      "Avoid fully bent-rotation reaching first thing in the morning.",
    ],
    related: ["erector-spinae-thoracic", "quadratus-lumborum", "gluteus-maximus"],
  },
  {
    id: "suboccipitals",
    name: "Suboccipitals (base of skull)",
    commonName: "The tension-headache switch",
    lineId: "sbl",
    view: "back",
    marker: { x: 110, y: 58 },
    referral: ["occiput", "temple", "forehead", "vertex-b"],
    painSummary:
      "A band of pressure starting at the base of the skull that wraps over the back of the head to the temples, eyes and forehead — the textbook tension headache. Sometimes felt as a deep pull behind the eyeball.",
    symptoms:
      "Head feels clamped in a vice; vision may blur slightly; the head feels heavy at day's end. Dizziness and unsteadiness can occur. These points light up in anyone who juts the chin toward a screen.",
    causes: [
      "Forward-head screen posture loading the skull levers",
      "Eye strain (the points fire with squinting and focusing)",
      "Grinding the teeth at night",
      "Whiplash or old neck injury",
    ],
    howToFind:
      "Place your fingertips where the skull meets the neck, one thumb-width either side of center. Press up and in — a fierce, tender, ropey fullness that reproduces the headache is the point.",
    release: {
      tool: "Twin balls (or suboccipital release tool)",
      duration: "2 minutes",
      pressure: "Very light — the weight of the head does the work",
      steps: [
        "Lie on your back with the twin balls just below the skull base.",
        "Let the head sink; breathe slowly for 60 seconds.",
        "Make tiny 'yes' nods and small 'no' shakes, 5 each.",
        "Finish with 5 slow eye movements side to side — the eyes and these muscles share wiring.",
      ],
      activation:
        "Tuck the chin gently down (making a double chin) and hold 5 seconds, repeat 8 times while the balls rest under the skull. This activation re-lengthens the suboccipitals and instantly deepens the release.",
    },
    manualTherapy:
      "Sustained suboccipital release with fingertip contact under the occiput while the head is cradled — a 90-second hold quiets the points. Treating the SCM, jaw and upper traps in the same session ends most recurring tension headaches.",
    stretch: {
      name: "Chin-tuck occipital stretch",
      steps: [
        "Sit tall; glide the chin straight back (double chin), not down.",
        "Feel the stretch at the skull base.",
        "Optional: press the back of the head gently into a wall for feedback.",
      ],
      hold: "10 seconds × 10 reps",
    },
    prevention: [
      "Raise screens to eye level and take a posture break every 30 minutes.",
      "Blink and re-focus far every 20 minutes to calm the eye-head reflex.",
      "Check for night grinding if headaches persist — a dental guard may be needed.",
    ],
    related: ["upper-trapezius", "scm", "erector-spinae-thoracic"],
  },
  {
    id: "semispinalis-capitis",
    name: "Semispinalis Capitis",
    commonName: "The helmet band",
    lineId: "sbl",
    view: "back",
    marker: { x: 117, y: 65 },
    referral: ["occiput", "suboccipital", "vertex-b"],
    painSummary:
      "A deep ache that sweeps from the upper neck up over the back of the skull like a tightening helmet band, often finishing behind one eye. It is the classic afternoon headache of desk workers whose head has drifted forward for hours.",
    symptoms:
      "The neck itself may feel fine — the pain shows up higher, as pressure over the crown or behind the eye. Looking up or lifting the head from a slouched reading position sharpens it. Deep pressure beside the spine at the hairline finds a sore, ropey column.",
    causes: [
      "Forward-head screen and reading posture for hours at a stretch",
      "Old whiplash or a fall that the neck never fully released",
      "Sleeping face-down with the neck rotated to one side",
      "Carrying heavy loads with the chin tucked and head thrust forward",
    ],
    howToFind:
      "Lie on your back and reach both hands over the top of the head. Find the two firm columns a thumb-width either side of the spine at hairline level, underneath the outer trapezius layer. Press gently toward the spine — a familiar headache confirms the spot.",
    release: {
      tool: "Fingertips or a small firm ball against a wall",
      duration: "60–90 seconds per side",
      pressure: "Moderate, sinking slowly — deep spread toward the head, never sharp",
      steps: [
        "Place the ball beside the spine at hairline level while lying on your back or standing against a wall.",
        "Sink slowly and let the weight of the head do the work — 15–20 seconds of stillness per spot.",
        "Walk the ball up and down the column a thumb-width at a time, from the skull edge to the shirt collar.",
        "Treat both sides, then finish with 5 slow chin-nods.",
      ],
      activation:
        "With the ball held on the tender column, nod the chin slowly down and up — 8 gentle arcs. The deep neck extensors shorten and lengthen under the pressure, resetting their tone far faster than still pressure.",
    },
    manualTherapy:
      "Practitioners work deep beside the midline with slow stripping from C7 to the occiput, often alternating with suboccipital release so the whole skull-base complex lets go. Cervical traction and chin-tuck retraining complete the work.",
    stretch: {
      name: "Chin-tuck crown lift",
      steps: [
        "Sit tall and slide the chin straight back to make a double chin.",
        "Imagine the crown being lifted by a thread while the chin stays tucked.",
        "Rest one hand on the forehead for a light isometric hold.",
      ],
      hold: "10 seconds × 5, twice a day",
    },
    prevention: [
      "Raise every screen to eye level — the head adds a kilogram of load per centimeter of drift.",
      "Break long reading with 10 chin-nods every 30 minutes.",
      "Sleep on your back or with a pillow that keeps the nose in line with the sternum.",
    ],
    related: ["suboccipitals", "splenius-capitis", "bl10-tianzhu"],
  },
  {
    id: "serratus-posterior-inferior",
    name: "Serratus Posterior Inferior",
    commonName: "The waistband ache",
    lineId: "sbl",
    view: "back",
    marker: { x: 117, y: 190 },
    referral: ["back-ribs", "lowback", "hip-crest"],
    painSummary:
      "A broad, tight band of ache across the lower ribs and flank, just above the belt line. Deep breaths, laughs and twists pull on it, and after long bending the back feels locked half-way up.",
    symptoms:
      "It feels like a strap cinched around the waist that no position fully releases. Breathing may be unconsciously kept shallow because a deep breath tugs the band. Pressing just under the bottom ribs a hand-width from the spine finds a tender ridge.",
    causes: [
      "Hours of forward bending over a bench, garden or steering wheel",
      "A long cough that never quite cleared",
      "Lifting with a twist while holding the breath",
      "Chest-dominant breathing that leaves this muscle doing rib-bracing duty",
    ],
    howToFind:
      "Reach behind yourself to the space between the lowest rib and the hip crest, a hand-width either side of the spine. Press upward under the rib edge and slide slightly across the fibers — the sore ridge that matches your waistband ache is the target.",
    release: {
      tool: "Firm ball between ribs and wall",
      duration: "60–90 seconds per side",
      pressure: "Moderate — relieving pressure, not bone-deep grinding",
      steps: [
        "Stand with your back to a wall and pin the ball on the tender ridge below the bottom ribs.",
        "Bend the knees slightly and let small squats roll the ball a few centimeters across the band.",
        "Pause 15–20 seconds on each sore spot while breathing low into the belly.",
        "Finish with 5 slow side-bends away from the treated side.",
      ],
      activation:
        "With the ball pressed on the tender spot, take 6 slow breaths that push the belly out and let the lower ribs widen against the pressure. The muscle works and releases with every breath instead of bracing against it.",
    },
    manualTherapy:
      "Practitioners strip the fan of this muscle from spine to ribs with the patient side-lying, often pairing it with diaphragm and QL work — the three together explain most stubborn flank-rib-lowback complaints.",
    stretch: {
      name: "Overhead side-bend over a bolster",
      steps: [
        "Sit with a bolster or firm cushion lengthwise under one hip, arm of that side overhead.",
        "Lean the torso sideways over the support until the lower ribs open.",
        "Breathe into the stretched flank for the length of the hold.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Breathe low and wide by default — the rib cage should move at the bottom, not only the chest.",
      "Break repetitive bending tasks every 20 minutes with 10 standing back extensions.",
      "Warm the lower ribs before garden or bench work; cold muscles brace here first.",
    ],
    related: ["erector-spinae-thoracic", "quadratus-lumborum", "diaphragm"],
  },
  {
    id: "popliteus",
    name: "Popliteus",
    commonName: "The downhill brake",
    lineId: "sbl",
    view: "back",
    marker: { x: 101, y: 344 },
    referral: ["popliteal", "calf"],
    painSummary:
      "A deep ache in the back of the knee that flares on downhills, stairs and the moment of standing from a squat. The knee may feel as if it cannot fully straighten or might fold without warning.",
    symptoms:
      "Unlike calf pain, the ache sits in the crease itself and deepens with the foot planted while the body twists. Sleeping with the knee bent can leave it stiff; fully extending the knee first thing in the morning may pull painfully.",
    causes: [
      "Long downhill hikes or running descents with the brakes on",
      "Deep squats and heavy leg presses past 90 degrees",
      "A twisting step on a locked, weight-bearing leg",
      "Standing with knees locked backward for years (hyperextension habit)",
    ],
    howToFind:
      "Sit and cross one ankle over the opposite knee. In the back of the knee crease, find the small tender knot toward the inner-lower corner, just below the crease line — never press the center of the crease. Curling the toes of the lifted foot often sharpens the spot.",
    release: {
      tool: "Fingertips or a very small soft ball",
      duration: "45–60 seconds per side",
      pressure: "Light-moderate, always at the inner-lower corner — the center of the crease is off-limits (vessels and nerve)",
      steps: [
        "Sit with the knee bent about 30 degrees and the heel resting on a low stool.",
        "Hook fingertips into the inner-lower corner below the crease and sink gently onto the tender knot.",
        "Hold 15–20 seconds while slowly rotating the foot in small circles.",
        "Finish by straightening the knee slowly with the fingers still holding light pressure.",
      ],
      activation:
        "Keep the fingertip pressure on and slowly roll the foot in and out — the shin bone rotates under the thigh and works the popliteus exactly where you press. 8 slow rotations per round.",
    },
    manualTherapy:
      "Practitioners treat it prone with the knee flexed over a bolster, sinking beside the hamstring tendons and stripping the small diagonal belly. Hip and foot mechanics are always checked — the popliteus rarely breaks down alone.",
    stretch: {
      name: "Supported half-bent knee release",
      steps: [
        "Lie on your back with a rolled towel under the knee so it rests bent about 20 degrees.",
        "Let the heel sink and the thigh fully relax for the length of the hold.",
        "Then slowly slide the heel along the floor to straighten the knee.",
      ],
      hold: "30 seconds × 3",
    },
    prevention: [
      "Learn to descend hills with hips and quads, not with the knee locked behind the step.",
      "Build slow eccentric control: step-downs from a low box, 3-second lowering.",
      "Avoid standing on locked knees; keep a soft, unlocked stance at counters and desks.",
    ],
    related: ["gastrocnemius", "hamstrings-medial", "bl40-weizhong"],
  },
  {
    id: "occipitalis",
    name: "Occipitalis & frontalis",
    commonName: "The scalp drawstring",
    lineId: "sbl",
    view: "back",
    marker: { x: 94, y: 32 },
    referral: ["occiput", "vertex-b"],
    painSummary:
      "The two small scalp muscles joined by the helmet-like galea aponeurotica: when the drawstring tightens, the whole scalp aches under your fingers — the classic concentration headache that feels like wearing a hat one size too small.",
    symptoms:
      "A sore band across the back of the skull and over the top of the head; the scalp itself is tender to touch, so brushing hair or resting against a headboard protests. Tension tends to pull toward the forehead, finishing the job the eyes and brows started.",
    causes: [
      "Long stretches of focus with raised brows and fixed gaze on a screen",
      "Eye strain and squinting in bright or flickering light",
      "Cold drafts or wind on an uncovered head tensing the scalp",
      "Unreleased suboccipital and neck tension pulling the galea taut",
    ],
    howToFind:
      "Hook your fingertips into the scalp about two fingers above the back of the skull, just off the midline — a firm, tender layer that slides barely at all is the occipitalis. Its partner frontalis sits above the brows on the front view.",
    release: {
      tool: "Fingertips of both hands (or a scalp-massage brush)",
      duration: "60 seconds",
      pressure: "Moderate — press the scalp firmly against the skull, not rub it",
      steps: [
        "Plant both sets of fingertips on the back of the scalp and press into the skull.",
        "Lift the scalp in small circles for 20 seconds, moving the skin, not sliding over it.",
        "Walk the fingertips up over the top of the head, circling every tender patch.",
        "Finish with slow firm strokes from the crown toward the forehead, 4 passes.",
      ],
      activation:
        "Keep the fingertips pressed in and slowly raise and lower the eyebrows — the galea pulls and releases under your hands. 8 slow cycles.",
    },
    manualTherapy:
      "Practitioners treat the galea as the roof of the whole Superficial Back Line: scalp lifts and stripping strokes over the crown, always paired with suboccipital work below, since a tight neck re-tensions the scalp within minutes.",
    stretch: {
      name: "Galea glide",
      steps: [
        "Plant both palms flat against the forehead and the back of the head.",
        "Gently draw the scalp backward with the forehead hand, then forward with the other.",
        "Alternate directions for the length of the set, moving skin against the skull.",
      ],
      hold: "20 seconds × 4",
    },
    prevention: [
      "On screen days, run a 10-second scalp glide every hour as a built-in reset.",
      "Cover your head against cold wind; warm muscle stays supple.",
      "Pair an evening suboccipital release with a slow scalp massage.",
    ],
    related: ["suboccipitals", "semispinalis-capitis", "bl2-zanzhu"],
  },
];
