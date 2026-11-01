import type { TriggerPoint } from "../types";

/**
 * The four Arm Lines — neck/ribs to hand.
 */
export const ARM_POINTS: TriggerPoint[] = [
  // ---------- Superficial Back Arm Line ----------
  {
    id: "upper-trapezius",
    name: "Upper Trapezius",
    commonName: "The classic tension point",
    lineId: "sbal",
    view: "back",
    marker: { x: 133, y: 76 },
    referral: ["neck-side", "temple", "jaw", "occiput", "shoulder-back", "ear"],
    painSummary:
      "Pain that climbs from the top of the shoulder up the side of the neck to behind the ear and into the temple and jaw — the textbook tension-headache pattern. It is the most commonly requested massage spot in the world.",
    symptoms:
      "Shoulders ride up and never come down; the neck feels short; temple headache after desk work; jaw tension. The muscle braces against gravity and stress simultaneously.",
    causes: [
      "Screen work with low monitors and high keyboards",
      "Phone cradling and heavy shoulder bags",
      "Stress bracing (the 'shoulder earrings' reflex)",
      "Weak lower trapezius and deep neck flexors",
    ],
    howToFind:
      "Shrug the shoulders — the strap that pops from neck to shoulder is the upper trap. Press into the thickest point midway; the exquisitely tender knot about two finger-widths from the skull edge is the famous one.",
    release: {
      tool: "Ball against wall or self pinch",
      duration: "90 seconds per side",
      pressure: "Moderate — hold, don't knead aggressively",
      steps: [
        "Stand with your back to a wall, ball between the top of the shoulder and the wall.",
        "Lean gently onto the tender knot and hold 60 seconds.",
        "Let the head tilt slowly away from the treated side.",
        "Sweep smaller circles down toward the shoulder blade.",
      ],
      activation:
        "With the ball on the knot, slowly shrug up toward the ball (10% effort) for 5 seconds, then fully relax and let the shoulder sink — 8 reps. This contract-relax trick reliably drops the shoulder by a centimeter and quiets the temple headache.",
    },
    manualTherapy:
      "Sustained pincer compression of the upper fibers plus stripping toward the occiput. Practitioners always treat the lower traps and deep neck flexors afterward — releasing without retraining means the knot returns by Friday.",
    stretch: {
      name: "Seated upper-trap stretch",
      steps: [
        "Sit tall, drop the right shoulder, place the right hand under the hip.",
        "Tilt the head left and forward slightly, left hand guiding.",
        "Feel the stretch from ear to shoulder tip.",
      ],
      hold: "30 seconds × 2, each side",
    },
    prevention: [
      "Raise the screen, lower the keyboard; elbows at 90°.",
      "Hourly: 10 slow shoulder rolls back, then 10 seconds of dead-arm hang.",
      "Strengthen lower traps (prone Y-raises) 2×/week.",
    ],
    related: ["levator-scapulae", "suboccipitals", "scm"],
  },
  {
    id: "deltoid",
    name: "Deltoid",
    commonName: "The shoulder cap",
    lineId: "sbal",
    view: "front",
    marker: { x: 148, y: 100 },
    referral: ["deltoid-area", "upper-arm-front", "shoulder-front"],
    painSummary:
      "Local soreness over the shoulder cap that can spread down the outer upper arm. Anterior-fiber points ache at the front of the shoulder; posterior points behind it.",
    symptoms:
      "Pain lifting the arm sideways, soreness carrying bags, and tenderness when sleeping on the shoulder. Deltoid points often accompany rotator-cuff points and heal poorly until the cuff is treated.",
    causes: [
      "Overhead work and throwing sports",
      "Carrying heavy bags by the side",
      "Compensation for weak rotator cuff",
      "Direct impact (falls, gym work)",
    ],
    howToFind:
      "Raise the arm sideways against light resistance — the cap that contracts is the deltoid. Press into the muscle mass with a thumb; tender knots cluster mid-belly and just below the shoulder edge.",
    release: {
      tool: "Ball against wall",
      duration: "90 seconds per side",
      pressure: "Moderate",
      steps: [
        "Place the ball between the shoulder cap and a wall.",
        "Lean in and make slow circles over the tender knots.",
        "Hold each 30–45 seconds.",
        "Raise and lower the arm during holds.",
      ],
      activation:
        "With the ball on the tender point, slowly raise the arm overhead and lower it 6 times, keeping the shoulder blade quiet. This pumps the muscle through its own range and clears the ache quickly.",
    },
    manualTherapy:
      "Cross-fiber stripping of anterior, middle and posterior heads with the arm supported. Practitioners screen the rotator cuff and neck — deltoid pain is usually downstream of cuff or cervical trigger points.",
    stretch: {
      name: "Cross-body shoulder stretch",
      steps: [
        "Pull one arm straight across the chest with the other hand.",
        "Keep the shoulder blade down.",
        "Feel the back of the shoulder stretch.",
      ],
      hold: "30 seconds × 2, each side",
    },
    prevention: [
      "Balance pressing with pulling exercises in training.",
      "Rotate heavy bag shoulders.",
      "Warm up shoulders before overhead or throwing work.",
    ],
    related: ["supraspinatus", "infraspinatus", "triceps"],
  },
  {
    id: "triceps",
    name: "Triceps Brachii",
    commonName: "The golf-elbow twin",
    lineId: "sbal",
    view: "back",
    marker: { x: 146, y: 132 },
    referral: ["upper-arm-back", "elbow-outer-b", "shoulder-back", "ring-little-fingers", "forearm-outer"],
    painSummary:
      "Ache in the back of the arm that often refers to the outer elbow and can shoot up toward the back of the shoulder or down the forearm to the ring and little fingers.",
    symptoms:
      "Pain straightening the arm under load, soreness pressing on the back of the arm, and 'tennis elbow' complaints that never respond to elbow treatment. The long head attaches at the shoulder blade — points there disturb shoulder motion too.",
    causes: [
      "Hammering, pushing and pressing work",
      "Golf, tennis and throwing sports",
      "Locking out elbows in gym pressing",
      "Long driving with the arm braced",
    ],
    howToFind:
      "Support the arm and press into the back of the upper arm from shoulder to elbow — tender knots cluster mid-belly and just above the elbow. A point that sends a line to the outer elbow explains many stubborn elbow complaints.",
    release: {
      tool: "Foam roller or ball on a table",
      duration: "90 seconds per side",
      pressure: "Moderate",
      steps: [
        "Place the back of the arm on a roller or ball on a table, palm up.",
        "Roll from shoulder to elbow, 6–8 passes.",
        "Hold tender spots 30 seconds.",
        "Bend and straighten the elbow over sticky points.",
      ],
      activation:
        "With pressure held, slowly extend and flex the elbow 8 times through a comfortable arc. Then practice 5 gentle wall push-ups with elbows tracking straight — re-grooving the pushing pattern.",
    },
    manualTherapy:
      "Stripping along all three heads with the arm supported, plus cross-fiber holds above the elbow. Practitioners pair triceps work with wrist extensors and neck checks — outer-elbow pain is rarely purely local.",
    stretch: {
      name: "Overhead triceps stretch",
      steps: [
        "Reach one arm overhead and bend the elbow, hand toward the upper back.",
        "Gently guide the elbow back with the opposite hand.",
        "Keep the ribs down.",
      ],
      hold: "30 seconds × 2, each side",
    },
    prevention: [
      "Unlock the elbows during pressing and desk work.",
      "Strengthen through full range with controlled tempo.",
      "Alternate manual work tools (hammering, raking) side to side.",
    ],
    related: ["wrist-extensors", "deltoid", "subscapularis"],
  },
  {
    id: "wrist-extensors",
    name: "Wrist Extensors (ECRL/B & finger extensors)",
    commonName: "Tennis elbow point",
    lineId: "sbal",
    view: "back",
    marker: { x: 148, y: 190 },
    referral: ["elbow-outer", "forearm-outer", "hand-dorsal", "ring-little-fingers"],
    painSummary:
      "Pain at the bony bump on the outer elbow that pours down the back of the forearm into the back of the hand — the true anatomy of most 'tennis elbow' (which is usually trigger points, not tendon damage).",
    symptoms:
      "Weak grip (coffee cups feel heavy), pain lifting with palm down, outer-elbow tenderness, and aching after typing. Wrist extension against resistance reproduces it.",
    causes: [
      "Repetitive typing with wrists extended",
      "Racket sports with grip too tight or grip size wrong",
      "Gardening, hammering, screwdriver work",
      "Weak shoulder stabilizers overloading the forearm",
    ],
    howToFind:
      "Press just below the outer elbow bump and along the forearm ridge — the extensor muscles. Exquisitely tender knots a thumb below the bump and mid-forearm are the points.",
    release: {
      tool: "Ball on table or thumb stripping",
      duration: "2 minutes per side",
      pressure: "Moderate — this tissue is easily overworked",
      steps: [
        "Rest the forearm on a table, palm down, ball under the outer forearm.",
        "Roll from below the elbow to the wrist, 8 slow passes.",
        "Hold tender knots 30 seconds each.",
        "Rock the wrist up and down over sticky spots.",
      ],
      activation:
        "With the ball on the tender band, slowly curl the wrist up and lower 10 times (light or no load). Then do 5 slow wrist circles. Eccentric-style pumping remodels the tendon tissue while releasing the points.",
    },
    manualTherapy:
      "Cross-fiber friction below the lateral epicondyle plus stripping of each extensor tendon line. Practitioners treat the shoulder and neck alongside, and coach grip relaxation and ergonomic wrist position.",
    stretch: {
      name: "Extensor stretch (palm down)",
      steps: [
        "Extend one arm, palm down, elbow straight.",
        "Bend the wrist down with the other hand, fingers pointing to the floor.",
        "Feel the stretch along the top of the forearm.",
      ],
      hold: "30 seconds × 3",
    },
    prevention: [
      "Type with neutral wrists; float the hands, don't rest on the heel.",
      "Relax the grip: check and unclench hourly.",
      "Strengthen wrist extensors with light slow eccentrics.",
    ],
    related: ["triceps", "wrist-flexors", "brachialis"],
  },
  // ---------- Deep Back Arm Line ----------
  {
    id: "levator-scapulae",
    name: "Levator Scapulae",
    commonName: "The stiff-neck cord",
    lineId: "dbal",
    view: "back",
    marker: { x: 114, y: 80 },
    referral: ["neck-back", "scapula", "shoulder-back"],
    painSummary:
      "A cord-like ache from the upper inner corner of the shoulder blade up to the side of the neck — the classic 'I can't turn my head' stiff neck. Pain is sharp when fully turning to the tight side.",
    symptoms:
      "Waking with the neck locked to one side, ache carrying tension in the shoulders, tenderness at the top corner of the blade. Long phone-holding and side-sleeping aggravate it.",
    causes: [
      "Sleeping on the stomach or with wrong pillow height",
      "Holding phones between ear and shoulder",
      "Carrying stress in a raised shoulder guard",
      "Uneven workstations forcing head rotation",
    ],
    howToFind:
      "Feel the inner top corner of the shoulder blade, then trace up toward the neck — the strap you find is the levator. Pinch the cord between fingers just above the blade corner; fierce tenderness confirms it.",
    release: {
      tool: "Ball against wall (top inner blade corner)",
      duration: "90 seconds per side",
      pressure: "Moderate — sustained, no kneading",
      steps: [
        "Place the ball on the upper inner corner of the shoulder blade against a wall.",
        "Lean in gently and hold 60 seconds, breathing slowly.",
        "Turn the head slowly toward the treated side to lengthen the cord.",
        "Sweep small circles up toward the neck.",
      ],
      activation:
        "With the ball in place, gently shrug the shoulder toward the ear (10% effort) 5 seconds, then let it fully sink — 8 reps. Then slowly rotate the head side to side 5 times to re-establish the range.",
    },
    manualTherapy:
      "Pincer compression of the cord in side-lying with the arm relaxed behind the back, plus stripping from blade to neck. Practitioners treat the upper trap and scalenes with it and adjust pillow height as part of care.",
    stretch: {
      name: "Levator stretch (nose to armpit)",
      steps: [
        "Sit tall and turn the head 45° toward the left armpit.",
        "Nod gently down; place the left hand behind the head for light guidance.",
        "Feel the cord stretch on the right neck-to-blade line.",
      ],
      hold: "30 seconds × 2, each side",
    },
    prevention: [
      "Match pillow height to shoulder width for side-sleeping.",
      "Use headsets for calls; stop shoulder-cradling.",
      "Daily slow neck rotations and chin-tucks.",
    ],
    related: ["upper-trapezius", "rhomboids", "scalenes"],
  },
  {
    id: "supraspinatus",
    name: "Supraspinatus",
    commonName: "The painful-arc point",
    lineId: "dbal",
    view: "back",
    marker: { x: 97, y: 97 },
    referral: ["deltoid-area-b", "elbow-outer-b", "shoulder-back"],
    painSummary:
      "Deep ache over the middle of the shoulder that can reach the outer elbow. Classic sign: pain in a specific arc when raising the arm sideways — fine below, painful mid-way, fine overhead.",
    symptoms:
      "Pain reaching up to a shelf, sleeping on that shoulder, and carrying with a straight arm. The muscle runs in a tunnel under the collarbone arch, so loaded points make lifting catch and grind.",
    causes: [
      "Overhead work and throwing sports",
      "Carrying loads at arm's length (suitcases)",
      "Sleeping on the shoulder nightly",
      "Poor scapular support from weak lower traps",
    ],
    howToFind:
      "Feel the groove just above the top edge of the shoulder blade, behind the big neck-shoulder trap mass. Press there — deep tenderness that reproduces the mid-lift ache is the point.",
    release: {
      tool: "Ball against wall (above the blade)",
      duration: "90 seconds per side",
      pressure: "Moderate — angle into the groove above the blade",
      steps: [
        "Place the ball on the groove above the top edge of the shoulder blade.",
        "Lean gently and hold the tender spot 60 seconds.",
        "Make tiny circles without sliding off the groove.",
        "Let the same-side arm hang and sway.",
      ],
      activation:
        "With pressure held, slowly shrug the shoulder toward the ear 5 times (gentle), then let it sink fully. Then raise the arm through the painful arc 5 times slowly — re-training the tendon's glide.",
    },
    manualTherapy:
      "Deep thumb work in the supraspinous fossa with the neck relaxed, plus cross-fiber holds. Practitioners restore scapular mechanics (lower trap, serratus) — releasing the point alone rarely stops the catch.",
    stretch: {
      name: "Behind-the-back towel stretch",
      steps: [
        "Hold a towel behind your back: good hand over the shoulder, sore hand low.",
        "Pull gently upward with the good hand.",
        "Feel the stretch at the top of the sore shoulder.",
      ],
      hold: "30 seconds × 3",
    },
    prevention: [
      "Avoid sleeping directly on the same shoulder nightly.",
      "Carry loads close to the body, elbow bent.",
      "Train scapular control: wall slides, Y-raises.",
    ],
    related: ["infraspinatus", "subscapularis", "deltoid"],
  },
  {
    id: "infraspinatus",
    name: "Infraspinatus",
    commonName: "The frozen-shoulder key",
    lineId: "dbal",
    view: "back",
    marker: { x: 85, y: 120 },
    referral: ["shoulder-front", "deltoid-area-b", "upper-arm-front", "elbow-outer", "hand-dorsal"],
    painSummary:
      "Deep ache in the front of the shoulder (surprising for a back muscle) spreading down the outer arm to the forearm and hand. It is the most frequent single source of 'frozen shoulder' pain and inability to reach behind.",
    symptoms:
      "Cannot lie on that side, pain reaching up the back to fasten a bra or tuck a shirt, weakness turning the forearm outward. The front-shoulder ache often misleads people into stretching the chest only.",
    causes: [
      "Mouse arm held slightly raised for hours",
      "Swimming and throwing sports",
      "Driving long distances with the arm raised",
      "Repeated reaching back (seatbelt, bag from back seat)",
    ],
    howToFind:
      "Press below the spine of the shoulder blade, in the hollow over the back of the ribs. The tender knot usually sits in the inner half. Pressing into it reproduces the familiar front-shoulder ache instantly.",
    release: {
      tool: "Ball on floor or wall (below blade spine)",
      duration: "2 minutes per side",
      pressure: "Firm — this muscle responds well",
      steps: [
        "Lie on the back with the ball below the spine of the shoulder blade.",
        "Hug the arms or place hands on chest, letting the body sink 60 seconds.",
        "Make slow circles over the tender knots.",
        "Let the treated arm fall across the chest to lengthen the muscle.",
      ],
      activation:
        "With the ball in place, slowly rotate the arm outward (thumbs turning up toward the floor beside you) and back 8 times. Then practice 5 slow arm circles — the external-rotation movement is the muscle's own reset.",
    },
    manualTherapy:
      "Sustained thumb or elbow compression through the infraspinous fossa until the front-shoulder referral fades, plus stripping toward the arm. Deep-cuff release is often the single fastest fix for stubborn shoulder complaints.",
    stretch: {
      name: "Sleeper stretch (external rotation)",
      steps: [
        "Lie on the sore side with the sore arm up, elbow bent 90°.",
        "Press the forearm gently toward the floor with the free hand.",
        "Feel the stretch deep at the back of the shoulder.",
      ],
      hold: "30 seconds × 3",
    },
    prevention: [
      "Keep the mouse at elbow height, arm supported.",
      "Strengthen external rotation with a band, 2×/week.",
      "Break long drives with shoulder rolls at every stop.",
    ],
    related: ["supraspinatus", "subscapularis", "deltoid", "triceps"],
  },
  {
    id: "subscapularis",
    name: "Subscapularis",
    commonName: "The hidden shoulder lock",
    lineId: "dbal",
    view: "back",
    marker: { x: 94, y: 138 },
    referral: ["shoulder-back", "deltoid-area-b", "wrist", "ring-little-fingers", "scapula"],
    painSummary:
      "Deep pain at the back of the shoulder that can run down the arm to the wrist — the classic 'frozen shoulder' restriction muscle. It hides on the underside of the shoulder blade, unreachable until you know the trick.",
    symptoms:
      "Cannot raise the arm straight overhead or reach across; the shoulder feels locked from inside; ache at rest lying down. Rotation outward is severely limited.",
    causes: [
      "Repeated forceful throwing or pressing",
      "Immobilization after injury (frozen-shoulder cycle)",
      "Rounded posture shortening the whole front cuff",
      "Repetitive pull-starts, rowing, climbing",
    ],
    howToFind:
      "Professional access is easiest, but self-access: lie on the sore side, reach the top hand behind the back and press along the inner blade edge, curling fingers under it. Deep, fierce tenderness confirms the point.",
    release: {
      tool: "Ball + assisted arm positions",
      duration: "2 minutes",
      pressure: "Moderate and patient — angle under the blade edge",
      steps: [
        "Side-lying on the sore side, place the ball just inside the inner blade border.",
        "Let the body sink, arm relaxed behind the back.",
        "Hold 60 seconds while breathing slowly.",
        "Slide the arm up the back as tolerated during holds.",
      ],
      activation:
        "Lying on the back, elbow bent at the side, slowly rotate the forearm outward against light resistance from the other hand — 8 gentle reps. This trains the locked muscle through its range without cranking the joint.",
    },
    manualTherapy:
      "Fingertip access under the medial blade border with the patient side-lying, sustained holds until the referral softens, then passive range restoration. This muscle is the make-or-break of frozen-shoulder recovery programs.",
    stretch: {
      name: "Assisted external rotation",
      steps: [
        "Lie on the back, elbow bent 90° close to the body.",
        "Use a stick or the good hand to rotate the forearm outward slowly.",
        "Stop at gentle stretch — never force.",
      ],
      hold: "30 seconds × 3",
    },
    prevention: [
      "Keep the shoulder moving daily — frozen shoulders freeze in stillness.",
      "Balance pressing with external-rotation band work.",
      "Treat front-cuff and chest tightness early in desk workers.",
    ],
    related: ["infraspinatus", "supraspinatus", "pectoralis-minor"],
  },
  // ---------- Superficial Front Arm Line ----------
  {
    id: "brachialis",
    name: "Brachialis",
    commonName: "The thumb-web trickster",
    lineId: "sfal",
    view: "front",
    marker: { x: 150, y: 148 },
    referral: ["thumb-web", "upper-arm-front", "elbow-inner", "hand-dorsal"],
    painSummary:
      "Pain concentrated in the thumb side of the hand and the web between thumb and index — frequently mistaken for carpal tunnel or 'texting thumb'. A deeper ache at the front of the lower arm accompanies it.",
    symptoms:
      "Weak pinch grip, thumb-base ache after phone scrolling, pain lifting with the palm up. The elbow may ache at the inner front side. Elbow extension (arm straight) feels restricted.",
    causes: [
      "Long phone and tablet grip",
      "Rowing and pulling exercises with tight elbows",
      "Carrying grocery bags with straight elbows",
      "Keyboard elbows bent over 90° constantly",
    ],
    howToFind:
      "Bend the elbow slightly and push the biceps aside with your thumb — the harder muscle underneath at the lower arm is the brachialis. Press just outside the biceps at the elbow crease; deep tenderness referring to the thumb confirms it.",
    release: {
      tool: "Thumb or knuckle self-stripping",
      duration: "90 seconds per side",
      pressure: "Moderate — press beside the biceps, not through it",
      steps: [
        "Bend the elbow to about 20° and relax the arm.",
        "Push the biceps outward and press the brachialis underneath.",
        "Strip slowly from mid-arm to the elbow crease, 8 passes.",
        "Hold the most tender spot 30 seconds.",
      ],
      activation:
        "While holding the tender spot, slowly straighten and bend the elbow 8 times (small range). Then do 5 slow palm-up / palm-down forearm turns to mobilize the whole front-arm line.",
    },
    manualTherapy:
      "Lateral displacement of the biceps with deep stripping of the brachialis beneath — a signature manual skill for stubborn thumb-web pain. Practitioners combine it with wrist flexor and neck-scalene checks.",
    stretch: {
      name: "Straight-arm pronation stretch",
      steps: [
        "Extend the arm and turn the palm fully down.",
        "Grasp the back of the hand and add a gentle downward turn.",
        "Feel the front of the elbow and lower arm stretch.",
      ],
      hold: "30 seconds × 2, each side",
    },
    prevention: [
      "Loosen the phone grip; prop devices instead of holding.",
      "Alternate carrying with bent elbows.",
      "Full-range slow biceps curls weekly for the front-arm muscles.",
    ],
    related: ["wrist-flexors", "biceps-brachii", "wrist-extensors"],
  },
  {
    id: "wrist-flexors",
    name: "Wrist Flexors (FCR, palmaris & group)",
    commonName: "Golfer's elbow point",
    lineId: "sfal",
    view: "front",
    marker: { x: 145, y: 188 },
    referral: ["elbow-inner", "forearm-inner", "hand-palm", "ring-little-fingers"],
    painSummary:
      "Ache at the bony bump on the inner elbow spreading down the front of the forearm into the palm — 'golfer's elbow' anatomy. Points deep in the group can also refer into the ring and little fingers.",
    symptoms:
      "Pain gripping, carrying, or shaking hands; palm fatigue after typing; tenderness at the inner elbow bump. Wrist flexion under load reproduces the pain.",
    causes: [
      "Typing with wrists dropped and flexed",
      "Racket and golf grips held too tightly",
      "Climbing and pulling work",
      "Carpentry and repetitive hand tools",
    ],
    howToFind:
      "Press the bumpy ridge just below the inner elbow and trace down the front forearm cord — the flexor group. Tender knots just below the inner bump and mid-forearm are the classic points.",
    release: {
      tool: "Ball on table or self stripping",
      duration: "2 minutes per side",
      pressure: "Moderate",
      steps: [
        "Rest the forearm palm-up on a table with the ball under the inner forearm.",
        "Roll from the inner elbow to the wrist, 8 slow passes.",
        "Hold tender knots 30 seconds.",
        "Flex and extend the wrist over sticky points.",
      ],
      activation:
        "With pressure held, slowly curl the wrist up and lower it 10 times, palm up. Then spread and close the fingers 5 times. The finger spread activates the deeper flexors and rebalances the whole grip.",
    },
    manualTherapy:
      "Stripping each flexor tendon line from the inner elbow to the palm plus cross-fiber holds at the epicondyle. Practitioners coach grip relaxation and neutral-wrist ergonomics; severe cases add night splinting.",
    stretch: {
      name: "Flexor stretch (palm up)",
      steps: [
        "Extend the arm palm-up, elbow straight.",
        "Bend the wrist back with the other hand, fingers pointing down.",
        "Feel the front forearm lengthen.",
      ],
      hold: "30 seconds × 3",
    },
    prevention: [
      "Neutral wrists while typing; soft-edge desk pads.",
      "Lighten golf/racket grip pressure consciously.",
      "Daily grip-and-release drills: 20 slow cycles.",
    ],
    related: ["brachialis", "wrist-extensors", "scalenes"],
  },
  // ---------- Deep Front Arm Line ----------
  {
    id: "pectoralis-minor",
    name: "Pectoralis Minor",
    commonName: "The nerve-choker",
    lineId: "dfal",
    view: "front",
    marker: { x: 130, y: 105 },
    referral: ["pec", "shoulder-front", "axilla", "upper-arm-front", "forearm-inner", "hand-palm"],
    painSummary:
      "Chest tightness below the collarbone referring over the front of the shoulder and down the inner arm to the palm and last three fingers — mimicking both heart and ulnar-nerve problems (always medically screened first).",
    symptoms:
      "Arm feels heavy or tingles (thoracic-outlet style), shoulder pulled forward, hard to take a deep breath, ache when lying face up. The nerves and vessels to the arm pass directly under this muscle.",
    causes: [
      "Rounded desk and driving posture",
      "Anxiety breathing with chest guard",
      "Heavy pressing exercises",
      "Sling bags compressing the chest wall",
    ],
    howToFind:
      "Place fingers just below the collarbone, midway out, and press down-and-back toward the ribs — the small muscle under the big pec is the target. Tenderness here that sends a line down the arm confirms it.",
    release: {
      tool: "Ball in doorway corner (upper chest)",
      duration: "90 seconds per side",
      pressure: "Light to moderate — this area is neurologically busy",
      steps: [
        "Stand sideways in a doorway, ball between the upper chest muscle and frame.",
        "Lean in gently and hold the tender spot 45–60 seconds.",
        "Slide the same-side arm up and down the frame slowly 5 times.",
        "Breathe deep into the belly throughout.",
      ],
      activation:
        "With the ball held, gently press the shoulder blade back toward the spine (10% effort) for 5 seconds, then relax — 6 reps. Then do 5 slow 'shoulder blade hugs' (retract/protract) to re-glide the muscle over the ribs.",
    },
    manualTherapy:
      "Fingertip compression below the clavicle with the arm overhead, holding until the arm symptoms fade. Practitioners always test for thoracic outlet signs and retrain scapular position with lower-trap and serratus work.",
    stretch: {
      name: "Corner pec-minor opener",
      steps: [
        "Stand in a corner, forearms on both walls at shoulder height.",
        "Step forward and let the chest sink between the arms.",
        "Keep the ribs down and breathe into the belly.",
      ],
      hold: "45 seconds × 2",
    },
    prevention: [
      "Open the chest hourly at the desk (10 slow chest-opening arm sweeps).",
      "Retrain nasal belly-breathing under stress.",
      "Strengthen mid-back rows to hold the opened posture.",
    ],
    related: ["subscapularis", "scalenes", "pec-major-sternal"],
  },
  {
    id: "biceps-brachii",
    name: "Biceps Brachii",
    commonName: "The front-shoulder pull",
    lineId: "dfal",
    view: "front",
    marker: { x: 146, y: 128 },
    referral: ["shoulder-front", "upper-arm-front", "elbow-inner"],
    painSummary:
      "Ache at the front of the shoulder over the biceps groove that can climb toward the shoulder blade top and down to the inner elbow — often diagnosed as 'biceps tendinitis' when it is actually trigger points.",
    symptoms:
      "Pain lifting the arm forward, soreness carrying buckets or groceries, tenderness along the front arm crease. Supination (turning a screwdriver clockwise with the right hand) aches.",
    causes: [
      "Chin-ups, curls and pulling beyond conditioning",
      "Carrying loads with straight arms",
      "Sudden eccentric loading (lowering heavy objects)",
      "Rounded posture with shortened front-arm line",
    ],
    howToFind:
      "Bend the elbow and resist with the other hand — the biceps pops. Press into its belly and along the front crease of the elbow; tender knots mid-belly and near the tendon are typical.",
    release: {
      tool: "Ball on table or self stripping",
      duration: "90 seconds per side",
      pressure: "Moderate",
      steps: [
        "Place the front of the arm on a ball on a table, elbow relaxed.",
        "Roll from shoulder crease to elbow, 8 slow passes.",
        "Hold tender knots 30 seconds.",
        "Bend and straighten the elbow over sticky spots.",
      ],
      activation:
        "With the ball on the tender knot, slowly curl the elbow open and closed 8 times without weight. Then do 5 slow palm-up rotations — re-grooving the supination action quiets the tendon-side ache.",
    },
    manualTherapy:
      "Stripping along both heads and the distal tendon plus cross-fiber holds. Practitioners check the shoulder cuff and front-line posture; biceps points often resolve only when the chest is reopened.",
    stretch: {
      name: "Doorway biceps stretch",
      steps: [
        "Place the palm on a door frame behind you, arm straight at shoulder height.",
        "Turn the torso away slowly.",
        "Feel the front of the arm lengthen.",
      ],
      hold: "30 seconds × 2, each side",
    },
    prevention: [
      "Balance pulling with full-range slow eccentrics.",
      "Carry with bent elbows and swapped sides.",
      "Open the chest daily to unload the front-arm line.",
    ],
    related: ["brachialis", "pectoralis-minor", "triceps"],
  },
  {
    id: "pronator-teres",
    name: "Pronator Teres",
    commonName: "The carpal-tunnel copycat",
    lineId: "sfal",
    view: "front",
    marker: { x: 140, y: 170 },
    referral: ["forearm-inner", "thumb-web", "hand-palm"],
    painSummary:
      "An ache along the inner forearm with tingling into the thumb, index and middle fingers — a near-perfect copy of carpal tunnel syndrome that actually starts higher, at the elbow. Screwing motions and long typing sessions feed it.",
    symptoms:
      "The forearm tires fast on gripping, turning and typing; grip strength dips without wrist pain. Tingling into the first three fingers is worse with firm gripping than with wrist bending — the reverse of true carpal tunnel. A tender cord springs up at the inner elbow when turning the palm down.",
    causes: [
      "Repetitive pronation: screwdriving, topspin strokes, kneading dough",
      "Carrying bags at the side with a straight, rotated-down arm",
      "Hours at a keyboard with forearms pinned palm-down",
      "Tight wrist-flexor chain pulling on the shared fascia",
    ],
    howToFind:
      "Bend the elbow to 90° and turn the palm up. Place a thumb just below the inner elbow crease, then resist turning the palm down with the other hand — the muscle springs under your thumb. Its tender belly a finger below the crease is the target.",
    release: {
      tool: "Thumb of the opposite hand, forearm supported",
      duration: "60 seconds per side",
      pressure: "Moderate — across the fibers, a working ache not a nerve buzz",
      steps: [
        "Rest the forearm palm-up on a table and hook the thumb onto the tender belly.",
        "Strip slowly across the muscle from inner elbow toward the mid-forearm, 8–10 passes.",
        "Pause 15–20 seconds on the most tender strand.",
        "Pinch-roll the belly gently between thumb and fingers to finish.",
      ],
      activation:
        "With the thumb holding pressure, slowly turn the palm up and down — 8 full rotations. The pronator lengthens and shortens under your thumb, which clears the tingling pattern faster than static pressing.",
    },
    manualTherapy:
      "Practitioners strip both heads of the muscle and screen the median nerve with glide tests — distinguishing this 'pronator syndrome' from true carpal tunnel is the key clinical skill. Forearm rotation drills and desk setup changes complete the work.",
    stretch: {
      name: "Supinated forearm extension stretch",
      steps: [
        "Extend the arm forward with the palm up.",
        "Cup the palm from below with the other hand and draw the fingers back and down.",
        "Keep the elbow dead straight for the full stretch up the inner forearm.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Keep forearms neutral at the keyboard — palms angled, not pinned flat.",
      "Alternate carrying sides and hook heavy bags into the elbow crease, not the straight hand.",
      "Build forearm extensor strength to balance the pull.",
    ],
    related: ["wrist-flexors", "brachialis", "pc6-neiguan"],
  },
  {
    id: "supinator",
    name: "Supinator",
    commonName: "The tennis-elbow twin",
    lineId: "dfal",
    view: "front",
    marker: { x: 154, y: 172 },
    referral: ["elbow-outer", "forearm-inner", "thumb-web"],
    painSummary:
      "A sharp spot just below the outer elbow that aches with turning screws, opening jars and carrying bags at the side — the deep-muscle twin of tennis elbow, sitting one layer under it. The radial nerve runs right through it, so a buzz toward the thumb web is a signature.",
    symptoms:
      "Grip weakness with a straight arm; groceries suddenly feel heavier. Pressing below the outer elbow crease finds a deep tender spot, and carrying anything at the side lights it up. Occasional tingling at the back of the thumb and index web betrays the nerve inside.",
    causes: [
      "Repetitive forearm turning: screwdrivers, jar lids, stirring heavy pots",
      "DIY or gardening weekends after sedentary weeks",
      "A cocked-wrist mouse arm held for hours",
      "Heavy carrying with the elbow locked straight",
    ],
    howToFind:
      "Rest the forearm on a table, palm down. Press just below the outer elbow crease, a finger toward the thumb side of the bone. Then lift the palm against light resistance from the other hand — the deep ache under your finger confirms the supinator.",
    release: {
      tool: "Thumb cross-fiber strips, forearm supported",
      duration: "60 seconds per side",
      pressure: "Moderate, sinking between muscle and bone — skip hard digging if the nerve buzzes",
      steps: [
        "Pin the thumb just below the outer elbow crease on the tender spot.",
        "Strip slowly across the direction of the forearm, 8 passes, staying deep and small.",
        "Pause 15–20 seconds on the sharpest strand.",
        "Finish with slow palm flips (palm up, palm down) under light thumb pressure.",
      ],
      activation:
        "Keep the thumb on the spot and slowly flip the palm up and down — 8 flips. The supinator and its partners spiral under the pressure, releasing the outer-elbow grip.",
    },
    manualTherapy:
      "Practitioners treat it with deep cross-fiber work mindful of the radial nerve, often alongside the wrist extensors — and fit a counterforce brace for load days. Task redesign (whole-arm turning instead of wrist flicking) is the lasting cure.",
    stretch: {
      name: "Seated pronation stretch",
      steps: [
        "Sit and rest the forearm on the table, palm down, elbow bent 90°.",
        "Grip the back of the hand with the other palm and slowly turn the palm toward the floor.",
        "Feel the stretch spiral down the outer forearm, not the wrist joint.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Turn jars and screws with the whole arm, not a flick of the wrist.",
      "Set the mouse low and flat; alternate hands on heavy tool days.",
      "Train grip endurance (farmer carries, moderate loads) before DIY weekends.",
    ],
    related: ["wrist-extensors", "brachialis", "li11-quchi"],
  },
  {
    id: "first-dorsal-interosseous",
    name: "First Dorsal Interosseous",
    commonName: "The pen-gripper",
    lineId: "sfal",
    view: "front",
    marker: { x: 161, y: 225 },
    referral: ["thumb-web", "hand-palm"],
    painSummary:
      "A deep ache in the fleshy web between thumb and index finger that spreads to the back of the hand and the index knuckle — the classic ache of gripping pens, phones and handlebars too hard.",
    symptoms:
      "Pinching, writing and mouse clicking ache; the muscle belly in the web is visibly tender and sometimes knotted. The index finger may feel weak or clumsy on fine tasks, and the web can cramp sharply during pinch-heavy work.",
    causes: [
      "A death-grip on pens, smartphones and computer mice",
      "Long cycling or driving sessions with constant handlebar pressure",
      "Pinch-heavy gym work and heavy thumb scrolling",
      "Cold hands working stiff (couriers, photographers, winter commuters)",
    ],
    howToFind:
      "Touch the tip of the thumb to the tip of the index finger and squeeze — a muscle belly pops up in the web between them. Press it against the bone underneath: the familiar web ache confirms the first dorsal interosseous.",
    release: {
      tool: "Pincer grip of the opposite hand (thumb + index)",
      duration: "45–60 seconds per hand",
      pressure: "Moderate — kneading a knot out of dough, not crushing it",
      steps: [
        "Pinch the popped-up belly between your opposite thumb and index finger.",
        "Roll it slowly across the underlying bone for 15–20 seconds.",
        "Then circle the web with the thumb tip, covering its whole width.",
        "Finish by spreading thumb and index wide against the table edge, 5 times.",
      ],
      activation:
        "Keep your treating thumb on the belly and repeatedly pinch thumb-to-index against it — 10 gentle squeezes. The muscle works right under the pressure, flushing the ache out of the web.",
    },
    manualTherapy:
      "Practitioners strip the web between the two metacarpals and check the whole pinch chain — wrist flexors, thumb base and neck (the nerve supply starts high). Ergonomic pen grips and hand-posture habits do the long-term fixing.",
    stretch: {
      name: "Wide thumb–index abduction",
      steps: [
        "Rest the hand flat on a table, palm down.",
        "Slide the thumb as far from the index finger as it will go, pressing lightly into the table.",
        "Lift the palm edge slightly to deepen the web stretch.",
      ],
      hold: "20 seconds × 4 per hand",
    },
    prevention: [
      "Grip pens and phones with the lightest hold that still works — recheck hourly.",
      "Use a fat-barrel pen or silicone grip for long writing sessions.",
      "Warm the hands before pinch-heavy work in the cold.",
    ],
    related: ["li4-hegu", "wrist-extensors", "pronator-teres"],
  },
  {
    id: "brachioradialis",
    name: "Brachioradialis",
    commonName: "The handshake muscle",
    lineId: "sbal",
    view: "back",
    marker: { x: 153, y: 178 },
    referral: ["elbow-outer-b", "forearm-outer", "hand-dorsal"],
    painSummary:
      "The beefy ridge on top of the forearm that powers every handshake grip: overloaded, it aches from the outer elbow all the way to the thumb-side wrist — the 'tennis elbow twin' that comes from hammers, steering wheels and kettles, not racquets.",
    symptoms:
      "A sore ridge along the outer forearm that grabs when lifting a full cup palm-down or gripping firmly; the ache gathers at the outer elbow and spills toward the thumb side of the wrist. The ridge itself is often visibly swollen and tender to a light stroke.",
    causes: [
      "Hammering, painting, gardening and brush-work sessions",
      "Death-gripping a steering wheel or bike handlebars",
      "Carrying kettles, buckets and bags on a straight, locked arm",
      "Long keyboard days with a floating, hovering forearm",
    ],
    howToFind:
      "Bend the elbow 90° with the thumb up, as if shaking hands, and grip firmly — the muscle that pops up on the top of the forearm from the outer elbow is brachioradialis. Follow the ridge from just above the elbow crease toward the wrist; press along it for the tender zone.",
    release: {
      tool: "Opposite thumb, or the edge of a table",
      duration: "60 seconds per side",
      pressure: "Moderate-firm — deep ridge soreness that eases as you breathe",
      steps: [
        "Rest the forearm palm-down on your lap and pin the tender ridge with the thumb.",
        "Press 20 seconds, then strip slowly from elbow to wrist, 8 passes.",
        "Turn the forearm thumb-up and repeat — the muscle's favorite working position.",
        "Finish with a 20-second hold at the most tender point, exhaling slowly.",
      ],
      activation:
        "Keep the thumb pressed on the ridge and slowly pretend to lift a heavy cup — flexing and straightening the elbow 8 times. The grip muscle contracts right under the pressure.",
    },
    manualTherapy:
      "A staple of forearm work for grip complaints: stripped from the elbow ridge to the wrist with the forearm thumb-up, usually together with the supinator and wrist extensors, while grip habits — steering, tools, lifting — are re-checked.",
    stretch: {
      name: "Straight-arm palm-in drop",
      steps: [
        "Extend the arm straight out with the thumb up.",
        "Turn the palm down and inward until the top forearm ridge draws taut.",
        "Cup the back of the hand with the other palm and gently deepen the turn.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Loosen the steering and bar grip; rest the hand in the lap at lights.",
      "Carry kettles and buckets with a bent elbow, close to the body.",
      "Roll the forearm ridge for 30 seconds after tool and garden days.",
    ],
    related: ["wrist-extensors", "supinator", "li11-quchi"],
  },
  {
    id: "coracobrachialis",
    name: "Coracobrachialis",
    commonName: "The deep front-arm wire",
    lineId: "dfal",
    view: "front",
    marker: { x: 158, y: 135 },
    referral: ["upper-arm-front", "axilla"],
    painSummary:
      "The short muscle diving from the armpit fold down the front of the arm: overloaded by pressing and overhead work, it sends a deep, hard-to-place ache down the front of the upper arm — the 'pumped' feeling that never quite recovers after gym or racquet days.",
    symptoms:
      "A deep ache in the front of the upper arm that ordinary biceps pressing doesn't quite reach; the arm feels faintly swollen and slow. Reaching up and behind the back pinches in the armpit fold, where a tender cord hides against the arm bone.",
    causes: [
      "Bench-press, pull-up and overhead-press volume jumps",
      "Racquet sports and throwing with a hard, late swing",
      "Carrying a child or a bag hooked in the elbow crook",
      "Sleeping with the arm folded overhead or under the pillow",
    ],
    howToFind:
      "Bring the arm slightly forward and find the front edge of the armpit fold (where the pec meets the arm). Slide fingertips down against the arm bone just behind that fold — a tender, cord-like band that contracts when you bend the elbow across the body is the muscle.",
    release: {
      tool: "Fingertips of the opposite hand",
      duration: "45–60 seconds per side",
      pressure: "Moderate — sink beside the arm bone, never into the center of the armpit (nerve bundle)",
      steps: [
        "Cradle the arm and press fingertips into the fold just behind the pec edge, against the bone.",
        "Hold 20 seconds with slow breaths, feeling the ache spread down the arm.",
        "Bend and straighten the elbow slowly 8 times while keeping the pressure.",
        "Strip the cord downward along the inner arm, 6 gentle passes.",
      ],
      activation:
        "Keep the fingertips on the cord and slowly draw the elbow across the chest and release — 8 slow crosses. The hidden muscle works exactly under your fingers.",
    },
    manualTherapy:
      "Practitioners work it side-lying or supine, sinking behind the short head of the biceps against the humerus, with careful respect for the neurovascular bundle that runs through the armpit — deep pressure goes onto the bone side only, and always after the biceps and pec have been treated first.",
    stretch: {
      name: "Wall arm back-and-out",
      steps: [
        "Stand beside a wall and rest the back of the hand and forearm against it.",
        "Step forward gently until the front of the arm and the armpit fold open.",
        "Turn the chest slightly away to deepen the line, and breathe.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Keep pulling exercises in the week to balance all the pressing.",
      "Raise overhead and racquet loads gradually — about 10% a week.",
      "Switch the child- and bag-carrying hip daily.",
    ],
    related: ["biceps-brachii", "pec-major-sternal", "wrist-flexors"],
  },
];
