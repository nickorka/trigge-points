import type { TriggerPoint } from "../types";

/**
 * Superficial Front Line — toes to jaw along the front.
 */
export const SFL_POINTS: TriggerPoint[] = [
  {
    id: "tibialis-anterior",
    name: "Tibialis Anterior",
    commonName: "The shin-splint point",
    lineId: "sfl",
    view: "front",
    marker: { x: 112, y: 392 },
    referral: ["shin", "lateral-ankle", "big-toe", "top-of-foot"],
    painSummary:
      "Ache along the outer shin that wraps to the front of the ankle and down into the big toe and top of the foot. Points in the lower part can make the ankle feel weak or 'springless'.",
    symptoms:
      "Shin burn when walking fast or running, tripping over small curbs (the muscle lifts the foot), and tenderness when pressing beside the shin bone. Sometimes mistaken for true shin splints or stress fracture.",
    causes: [
      "Running or hiking on hard or cambered surfaces",
      "Sitting with the foot tucked under the chair",
      "High heels shortening the calf and overloading the front shin",
      "Walking long distances without conditioning",
    ],
    howToFind:
      "Sit and run your fingers down the outer edge of the shin bone from just below the knee; the muscle belly your fingers fall onto is the tibialis anterior. Press into it a thumb-width beside the bone — the most tender spot is usually mid-shin.",
    release: {
      tool: "Foam roller or ball, kneeling",
      duration: "90 seconds per side",
      pressure: "Light to moderate — the bone is close, go easy",
      steps: [
        "Kneel with the ball under the outer shin muscle of one leg.",
        "Roll from below the knee to above the ankle, 6 passes.",
        "Pause on tender bands for 20–30 seconds.",
        "Rock the ankle up and down over any sticky point.",
      ],
      activation:
        "With the ball pinned on the tender band, slowly lift and lower the toes 10 times (ankle flexion). This re-programs the muscle that controls foot landing and clears shin pain quickly.",
    },
    manualTherapy:
      "Stripping along the muscle from knee to ankle with the therapist's thumb or knuckles, plus cross-fiber work at the tender spots. Checking footwear and gait prevents recurrence.",
    stretch: {
      name: "Kneeling top-of-foot stretch",
      steps: [
        "Kneel with the tops of the feet flat on the floor, toes pointing back.",
        "Sit the hips back toward the heels until the shin and foot top stretch.",
        "Ease weight on with hands if too intense.",
      ],
      hold: "30 seconds × 2",
    },
    prevention: [
      "Strengthen the shin: 20 slow toe-raises daily (lift toes while heels stay down).",
      "Vary walking/running terrain; build mileage gradually.",
      "Avoid habitual sitting with the foot tucked backward under the chair.",
    ],
    related: ["peroneus-longus", "gastrocnemius"],
  },
  {
    id: "rectus-femoris",
    name: "Rectus Femoris",
    commonName: "The night knee-ache",
    lineId: "sfl",
    view: "front",
    marker: { x: 110, y: 292 },
    referral: ["knee-front", "anterior-thigh", "popliteal"],
    painSummary:
      "Deep ache in the front of the thigh that concentrates behind and around the kneecap, often waking people at night with a dull knee throb. Points near the hip fold can make rising from a chair painful.",
    symptoms:
      "Stiff knees after sitting, pain when bending the knee fully, and the odd sensation of the knee 'giving' on stairs. Because this muscle crosses both hip and knee, its points hit both joints at once.",
    causes: [
      "Sitting with bent knees all day (the muscle shortens)",
      "Cycling, running and kicking sports",
      "Tight hip flexors forcing the quad to over-pull",
      "Sudden eccentric loading (downhill running, lunges)",
    ],
    howToFind:
      "Sit and straighten one knee against resistance — the central strap that pops up in the middle of the thigh is the rectus femoris. Pinch it mid-thigh; the tender knot is often a hand-width above the kneecap or just below the hip crease.",
    release: {
      tool: "Foam roller",
      duration: "2 minutes per side",
      pressure: "Moderate — keep breathing, roll slowly",
      steps: [
        "Lie face down with the roller under the front of the thigh.",
        "Roll from the hip crease to above the kneecap, 8 slow passes.",
        "Hold tender spots 30 seconds, especially just above the knee.",
        "Slight rotation of the leg reaches the deeper fibers.",
      ],
      activation:
        "On a held tender point, slowly extend and bend the knee 8 times through a small arc. Pumping the muscle under the roller restores its slide and quiets the kneecap pain.",
    },
    manualTherapy:
      "Long effleurage and cross-fiber stripping from hip to knee, followed by sustained compression on the deep spots. Always treat the hip flexors with it — the rectus femoris rarely stays released while the psoas is short.",
    stretch: {
      name: "Couch quad stretch",
      steps: [
        "Kneel with the back foot up on a sofa or bench behind you.",
        "Step the other foot forward into a lunge.",
        "Tuck the tailbone and rise tall until the front of the back thigh stretches.",
      ],
      hold: "45 seconds × 2, each side",
    },
    prevention: [
      "Break up sitting; stand with one leg extended back for a quad reset.",
      "Strengthen glutes to unload the front of the thigh.",
      "Foam roll the quads after hard riding or running sessions.",
    ],
    related: ["iliopsoas", "vastus-medialis", "vastus-lateralis"],
  },
  {
    id: "vastus-medialis",
    name: "Vastus Medialis (VMO)",
    commonName: "The kneecap-tracker",
    lineId: "sfl",
    view: "front",
    marker: { x: 97, y: 330 },
    referral: ["medial-knee", "knee-front", "anterior-thigh"],
    painSummary:
      "A deep ache just above and beside the inner knee that can make the whole kneecap area throb. The referral sometimes shoots up the inner thigh and, surprisingly, can produce mild groin ache.",
    symptoms:
      "Inner-knee pain on stairs (especially down), the knee feeling like it will buckle, and swelling that comes and goes. Weak, trigger-loaded VMO is the classic driver of 'patellofemoral' kneecap pain.",
    causes: [
      "Kneecap tracking problems from weak glutes and flat feet",
      "Running or hiking with fatigue",
      "Direct knocks to the inner thigh",
      "Long immobilization after knee injury",
    ],
    howToFind:
      "Sit and contract the thigh — the teardrop muscle just above the inner edge of the kneecap is the VMO. Press into it a thumb-width above the kneecap; a deep, unpleasant ache that matches your knee complaint is the point.",
    release: {
      tool: "Ball against wall or firm thumb",
      duration: "90 seconds",
      pressure: "Moderate — small, precise circles",
      steps: [
        "Sit with the leg long and relaxed on the floor.",
        "Press the ball just above the inner kneecap.",
        "Make slow small circles, finding the most tender band.",
        "Hold 30 seconds × 3 spots.",
      ],
      activation:
        "With the ball on the point, straighten the knee fully and hold the thigh squeeze for 5 seconds, then relax — 10 reps. This trains the exact fibers that keep the kneecap tracking straight, ending the cycle.",
    },
    manualTherapy:
      "Cross-fiber friction above the medial patella plus stripping of the whole inner quad. Practitioners pair this with glute and foot-arch correction — the VMO point is usually the victim of hip and ankle faults upstream.",
    stretch: {
      name: "Heel-sit quad stretch (inner bias)",
      steps: [
        "Kneel and sit the hips back onto the heels, knees slightly apart.",
        "Lean back on the hands, lifting the knees slightly.",
        "Turn the toes slightly outward to bias the inner quad.",
      ],
      hold: "30 seconds × 2",
    },
    prevention: [
      "Glute-strengthening (side steps, bridges) to protect kneecap tracking.",
      "Short-foot arch exercises barefoot.",
      "Avoid sudden big increases in stair or downhill work.",
    ],
    related: ["rectus-femoris", "vastus-lateralis"],
  },
  {
    id: "rectus-abdominis",
    name: "Rectus Abdominis",
    commonName: "The belly masquerader",
    lineId: "sfl",
    view: "front",
    marker: { x: 104, y: 180 },
    referral: ["abdomen", "lowback", "chest-central"],
    painSummary:
      "Burning, crampy pain in strips across the belly that can mimic heartburn, gallbladder or period pain. Points in the upper belly refer to the mid-back at the same level — a two-way switch.",
    symptoms:
      "Nausea, 'indigestion' that antacids don't fix, belly tenderness to light touch, and deep back ache that shifts when you curl up. Coughing or laughing may stab the belly wall.",
    causes: [
      "Excessive crunches and sit-up volume",
      "Chronic coughing",
      "Sitting slouched with the belly creased",
      "Abdominal surgery scars sensitizing the wall",
    ],
    howToFind:
      "Lie on your back and gently curl the head up — trace the vertical 'six-pack' straps. Press along the strap edges at each level from rib to pelvis; tender bands that re-create your symptoms are the points.",
    release: {
      tool: "Self palm or small soft ball",
      duration: "60–90 seconds per tender strip",
      pressure: "Gentle — the belly wall is sensitive",
      steps: [
        "Lie on your back with knees bent; locate the tender strip beside the belly button or at the rib edge.",
        "Press gently with fingertips and hold while breathing slowly.",
        "Sweep crosswise across the strip 10 times.",
        "Curl the head slightly during the sweep to soften the wall.",
      ],
      activation:
        "With gentle pressure held, do 5 slow diaphragmatic breaths letting the belly rise into the pressure. Then curl the head and shoulders 1 inch and hold 5 seconds × 3 — this tiny activation re-lengthens the wall.",
    },
    manualTherapy:
      "Gentle cross-fiber work along each rectus strap and scar tissue release where relevant. Practitioners screen carefully for visceral causes before treating — belly-wall points are a diagnosis of exclusion, then respond beautifully.",
    stretch: {
      name: "Prone belly-lengthening (sphinx)",
      steps: [
        "Lie face down, propped on the forearms, elbows under shoulders.",
        "Let the belly hang and the ribs open, breathing slowly.",
        "Press the pubic bone down to protect the low back.",
      ],
      hold: "60 seconds, 2 rounds",
    },
    prevention: [
      "Trade endless crunches for planks and standing core work.",
      "Un-crease the belly: sit tall, don't slouch into the waistband.",
      "Treat persistent coughs and check unresolved surgical scars.",
    ],
    related: ["diaphragm", "external-oblique", "erector-spinae-thoracic"],
  },
  {
    id: "pec-major-sternal",
    name: "Pectoralis Major (sternal fibers)",
    commonName: "The chest-tightness band",
    lineId: "sfl",
    view: "front",
    marker: { x: 124, y: 118 },
    referral: ["pec", "chest-central", "upper-chest", "axilla", "upper-arm-front", "elbow-inner"],
    painSummary:
      "A deep ache in the front of the chest beside the breastbone that can shoot over the breast tissue, into the armpit and down the inner arm to the inner elbow. Points can create chest pain that understandably raises alarm — always screened by clinicians first.",
    symptoms:
      "Chest tightness with deep breaths, discomfort lying on the belly, rounded-shoulder posture feeling 'normal', and inner-arm ache after typing. Intercostal-style twinges with twisting are common.",
    causes: [
      "Rounded desk and phone posture (shortened pecs)",
      "Heavy bench pressing or pushing work",
      "Anxiety breathing patterns recruiting chest muscles",
      "Carrying loads against the chest for long periods",
    ],
    howToFind:
      "Place the opposite hand on the chest beside the breastbone and press across the fibers toward the shoulder — tender knots usually sit at the sternal edge or the lower chest fold. A row of trigger points along the sternum is typical in desk workers.",
    release: {
      tool: "Ball in a doorway corner",
      duration: "90 seconds per side",
      pressure: "Light to moderate — avoid the breastbone itself",
      steps: [
        "Stand sideways in a doorway with the ball between chest muscle and frame.",
        "Lean in gently and roll across the fibers, shoulder to breastbone.",
        "Hold the tender bands 30 seconds each.",
        "Breathe deeply — the chest must not guard.",
      ],
      activation:
        "With the ball on the tender band, slide the arm up and down a wall (like a snow angel) 5 times. Moving the arm through range under the pressure unwinds the chest fibers and opens the front line.",
    },
    manualTherapy:
      "Cross-fiber stripping from sternum to armpit with the arm supported, plus sustained holds while the arm is passively raised. Paired with upper-back strengthening to keep the opened position.",
    stretch: {
      name: "Doorway pec opener (low anchor)",
      steps: [
        "Place the forearm on a door frame with the elbow at chest height.",
        "Step through until the chest opens, ribs staying down.",
        "Turn the torso slightly away for the lower fibers.",
      ],
      hold: "45 seconds × 2, each side",
    },
    prevention: [
      "Open the chest hourly: 10 shoulder rolls back, arms wide.",
      "Strengthen the mid-back rows 2×/week to counter desk posture.",
      "Notice breath-holding under stress — long exhales drop chest guarding.",
    ],
    related: ["pectoralis-minor", "serratus-anterior", "latissimus-dorsi"],
  },
  {
    id: "scm",
    name: "Sternocleidomastoid (SCM)",
    commonName: "The dizziness muscle",
    lineId: "sfl",
    view: "front",
    marker: { x: 120, y: 58 },
    referral: ["temple", "orbit", "occiput", "jaw", "throat", "vertex", "ear"],
    painSummary:
      "Pain to the temple and above the eye, the back of the head on the same side, the cheek and jaw, and deep in the ear. Sternal-head points can create a clogged-throat feeling and swallowing discomfort.",
    symptoms:
      "Unexplained dizziness, spatial disorientation and even motion-sickness-like feelings; 'sinus' pain with no sinus disease; tearing eye or blurred vision on one side. The muscle itself rarely hurts — the head does.",
    causes: [
      "Forward-head screen posture and jutting chin",
      "Whiplash and quick head turns",
      "Chronic coughing or chest-tight breathing",
      "Sleeping face-down with the neck twisted",
    ],
    howToFind:
      "Turn your head to one side — the diagonal strap that pops from collarbone to behind the ear is the SCM. Gently pinch it between finger and thumb along its length (never press hard on the deep side of the neck); tender knots reproduce the head symptoms.",
    release: {
      tool: "Fingertips only — never a ball on the front of the neck",
      duration: "60–90 seconds total",
      pressure: "Very gentle pinch, like holding a pencil",
      steps: [
        "Turn the head slightly to the opposite side to raise the muscle.",
        "Pinch the muscle belly gently between finger and thumb.",
        "Hold each tender knot 20–30 seconds while breathing slowly.",
        "Sweep along the strap from collarbone to skull base, 5 passes.",
      ],
      activation:
        "While pinching a tender knot, slowly press the forehead into your other palm for 5 seconds, then release — 6 reps. This contract-relax activation resets the muscle and frequently clears the dizzy, foggy feeling immediately.",
    },
    manualTherapy:
      "Gentle pincer-grip stripping along both heads with the head supported. Clinicians treat SCM together with the jaw and suboccipitals — the three fire as one unit in screen posture. Vessel and nerve structures make precision essential.",
    stretch: {
      name: "Seated SCM stretch",
      steps: [
        "Sit tall and turn the head 45° to one side.",
        "Tilt the head slightly back and let the opposite hand rest over the collarbone of the stretching side.",
        "Feel a gentle draw from behind the ear to the collarbone.",
      ],
      hold: "20 seconds × 2, each side",
    },
    prevention: [
      "Bring the screen up; the chin jutting is the root of most SCM load.",
      "Sleep on the back or side, never on the belly with the neck wrenched.",
      "Practice slow nasal breathing to unhook chest and neck accessory muscles.",
    ],
    related: ["scalenes", "upper-trapezius", "masseter", "suboccipitals"],
  },
  {
    id: "masseter",
    name: "Masseter",
    commonName: "The toothache impostor",
    lineId: "sfl",
    view: "front",
    marker: { x: 125, y: 44 },
    referral: ["jaw", "ear", "temple"],
    painSummary:
      "Aching in the back teeth and jaw that can feel exactly like a toothache (dentists find nothing), plus pressure in the ear and temple headache. One of the body's densest trigger-point muscles.",
    symptoms:
      "Clenching or grinding at night, tired jaw after meals, jaw clicking, restricted mouth opening, and tinnitus-like ear fullness. Gum-chewing and stress-clenching light it up.",
    causes: [
      "Stress clenching and night grinding",
      "Chewing gum, nail biting, ice chewing",
      "Dental misalignment",
      "Forward-head posture altering jaw mechanics",
    ],
    howToFind:
      "Clench the teeth — the muscle that bulges at the corner of the jaw is the masseter. Unclench and press into its belly; exquisitely tender knots near the jaw angle reproduce the tooth and ear sensations.",
    release: {
      tool: "Clean fingertips (gentle!) or intraoral glove technique by a professional",
      duration: "60 seconds per side",
      pressure: "Very gentle sustained hold — this muscle bruises easily",
      steps: [
        "Locate the jaw-angle muscle and press in with two fingertips.",
        "Hold the tender spot 30 seconds while the jaw hangs slightly open.",
        "Sweep crosswise across the muscle fibers, 5 gentle passes.",
        "Repeat on the other side.",
      ],
      activation:
        "With fingertips resting on the muscle, open the mouth slowly against light finger resistance for 5 seconds, then fully relax the jaw letting it drop — 8 reps. This eccentric-style activation disarms the clench reflex.",
    },
    manualTherapy:
      "Intraoral massage (gloved thumb inside the cheek) is the gold standard, combined with external stripping. Practitioners treat the temporalis and pterygoids with it and often coordinate with a dentist for a night guard.",
    stretch: {
      name: "Open-jaw stretch",
      steps: [
        "Let the jaw hang open as far as comfortable, tongue resting on the palate.",
        "Place a thumb between the teeth to gently support the opening.",
        "Keep the neck long — don't tilt the head back.",
      ],
      hold: "15 seconds × 5 reps",
    },
    prevention: [
      "Lips together, teeth apart, tongue on the palate — the resting jaw rule.",
      "Skip gum and hard-chew habits; slow down crunchy meals.",
      "Manage evening stress with a 5-minute jaw-and-face unwind.",
    ],
    related: ["scm", "upper-trapezius", "suboccipitals"],
  },
  {
    id: "temporalis",
    name: "Temporalis",
    commonName: "The temple clamp",
    lineId: "sfl",
    view: "front",
    marker: { x: 131, y: 33 },
    referral: ["temple", "ear", "jaw"],
    painSummary:
      "A clamping ache across the temple that can reach the brow, behind the eye and even the upper teeth. It builds through chewing, clenching and concentrating, and is the classic afternoon temple headache.",
    symptoms:
      "Teeth may feel sore or oversensitive with no dental cause; the jaw tires quickly on chewy food. Pressing above the ear finds a tender fan that twinges when you bite down gently. Night grinders often wake with both temples full.",
    causes: [
      "Daytime clenching and night grinding (stress bruxism)",
      "Gum chewing, nail biting or chewy foods",
      "Jaw misalignment after dental work or a missing tooth",
      "Hours of deep concentration with a set, unbreathing jaw",
    ],
    howToFind:
      "Place your flat fingers on the side of the head just above the ear and behind the outer brow. Gently clench — the whole fan bulges under your hand. Explore this fan with fingertip circles above the ear and up toward the crown; the most tender strands are the targets.",
    release: {
      tool: "Fingertips, or a soft small ball while lying on your side",
      duration: "60 seconds per side",
      pressure: "Light-moderate — the temple tolerates less than you think",
      steps: [
        "With the jaw relaxed and lips together, teeth apart, press the tender strands above the ear.",
        "Make slow small circles across the fiber direction for 15–20 seconds per spot.",
        "Glide slowly from just above the ear up toward the temple line.",
        "On very tender spots, lie on your side with a soft ball and let the head weight do the pressing.",
      ],
      activation:
        "Keep the pressure light on the tender spot and slowly open and close the mouth — 8 cycles, no wider than two finger-widths. The fan lengthens and shortens under your fingers, draining the clench out of it.",
    },
    manualTherapy:
      "Practitioners strip the fan externally from its crown attachment down to the cheekbone, and may work inside the cheek for the deep fibers. Night guards, stress management and jaw-habit retraining are the standard partners of hands-on work.",
    stretch: {
      name: "Supported jaw-opening stretch",
      steps: [
        "Sit tall; rest a knuckle of each hand gently between the molars.",
        "Let the jaw hang and the tongue rest on the palate for the hold.",
        "Keep the lips soft — no forcing the mouth wider than comfort.",
      ],
      hold: "20 seconds × 3",
    },
    prevention: [
      "Follow the daytime rule: lips together, teeth apart, tongue resting on the palate.",
      "Skip gum and chewy snacks during high-stress weeks.",
      "If you wake with tired temples, ask a dentist about a night guard.",
    ],
    related: ["masseter", "scm", "gb20-fengchi"],
  },
  {
    id: "intercostals",
    name: "Intercostal Muscles",
    commonName: "The rib-gap stitches",
    lineId: "sfl",
    view: "front",
    marker: { x: 137, y: 160 },
    referral: ["lateral-ribs", "lower-ribs", "abdomen-side"],
    painSummary:
      "Sharp, well-defined pain in the gap between two ribs that catches on deep breaths, coughs, laughs and twists. It can mimic a side stitch, a pinched nerve or — when near the front — even chest-wall pain.",
    symptoms:
      "One precise spot between ribs is tender; breathing shallow becomes a habit to avoid the catch. Twisting to look over the shoulder or reaching across the body can fire it instantly. A long coughing episode is a common trigger story.",
    causes: [
      "Prolonged or violent coughing",
      "Sudden trunk twists and swinging reaches in sport",
      "Lifting with the breath held and ribs braced",
      "Long slouching that folds the rib cage closed on one side",
    ],
    howToFind:
      "Press a fingertip into the spaces between the ribs, starting below the armpit and working down and forward. A trigger feels like a sore groove in one particular gap, sharper on a slow deep breath. Compare rib space by rib space — healthy gaps are painless.",
    release: {
      tool: "Fingertips of the opposite hand",
      duration: "45–60 seconds per tender gap",
      pressure: "Light-moderate — into the gap, not on the bone edges",
      steps: [
        "Reach the opposite hand across and hook a fingertip into the sore rib gap.",
        "Side-bend the trunk away from your hand until the gap opens and the pressure eases to a comfortable stretch.",
        "Take 5 slow, low breaths, letting the ribs widen under the fingertip.",
        "Move to the next sore gap and repeat; treat both sides if both are tender.",
      ],
      activation:
        "Keep the fingertip in the gap and breathe 6 times into it on purpose — pushing the rib outward against the finger. Breathing under gentle load resets the muscle far better than avoiding the breath.",
    },
    manualTherapy:
      "Practitioners release the spaces with cross-fiber fingertip work and mobilize the associated ribs, always screening for respiratory causes when a cough started the story. Rib-cage mobility drills and breathing retraining finish the job.",
    stretch: {
      name: "Seated side-bend with arm overhead",
      steps: [
        "Sit tall, one arm reaching overhead, other hand anchoring the seat.",
        "Bend sideways over the anchored side until the ribs open like a fan.",
        "Breathe into the stretched side for the length of the hold.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Exhale on exertion — never lift, twist or brace with a full held breath.",
      "Clear chest colds early: steam, hydration and gentle movement keep coughing from straining the gaps.",
      "Add thoracic rotation drills twice a week to keep every rib gap mobile.",
    ],
    related: ["diaphragm", "serratus-anterior", "external-oblique"],
  },
  {
    id: "extensor-digitorum-longus",
    name: "Extensor Digitorum Longus",
    commonName: "The toe lifter",
    lineId: "sfl",
    view: "front",
    marker: { x: 110, y: 408 },
    referral: ["top-of-foot", "shin", "lateral-lower-leg"],
    painSummary:
      "The slender muscle that lifts toes two through five: overloaded, it aches down the outer shin and across the top of the foot — the walk-all-day burn that makes a flat shoe feel like a plank and the tops of the toes tender to touch.",
    symptoms:
      "Top-of-foot ache that spreads toward the little toes, plus a ribbon of soreness along the outer shin. The toes feel slow and heavy to lift; flipping a flip-flop or tapping a foot to music becomes work.",
    causes: [
      "New walking, hiking or stair programs on hills and inclines",
      "Cleats, tight laces or straps pressing the extensor tendons",
      "Summer seasons in flip-flops, gripping with the toes every step",
      "Cycling or driving with constant toe-down foot posture",
    ],
    howToFind:
      "On the outer shin just below the knee, find the muscle belly lying next to the tibialis anterior ridge. Walk two fingers down the shin toward the ankle and extend your toes — the band that contracts and runs to toes two through five is the muscle.",
    release: {
      tool: "Thumb, or a small ball against the floor",
      duration: "60 seconds per side",
      pressure: "Moderate — firm soreness that eases as you breathe out",
      steps: [
        "Sit cross-legged or on a stool and pin the tender spot on the outer shin.",
        "Press 20–30 seconds with slow breaths, feeling the ache reach the foot.",
        "Strip slowly from below the knee to the ankle, 8 passes along the muscle.",
        "Hold the lowest tender point while pulling the toes gently down — 15 seconds.",
      ],
      activation:
        "Keep the thumb pressed on the point and slowly lift and lower toes two through five — 10 taps. The muscle works exactly under the pressure, flushing the tired fibers.",
    },
    manualTherapy:
      "Treated as part of the SFL shin sweep: the practitioner strips tibialis anterior, extensor digitorum longus and the peroneals in one continuous pass, then checks the shoe lace line — chronic compression above the tendons is the usual culprit.",
    stretch: {
      name: "Toes-down plantar stretch",
      steps: [
        "Sit and extend one leg; point the foot away and down.",
        "Cup the tops of the toes and press them gently further down and slightly in.",
        "Hold and breathe into the front of the shin and the top of the foot.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Loosen laces and straps over the extensor tendons — indentations are a warning.",
      "Alternate hill days with flat days; add toe taps and spreads as a warm-up.",
      "Limit flip-flop seasons; carry a spare shoe for long walking days.",
    ],
    related: ["tibialis-anterior", "peroneus-longus", "st44-neiting"],
  },
];
