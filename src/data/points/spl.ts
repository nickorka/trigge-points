import type { TriggerPoint } from "../types";

/**
 * Spiral Line — the double helix around the trunk.
 */
export const SPL_POINTS: TriggerPoint[] = [
  {
    id: "splenius-capitis",
    name: "Splenius Capitis",
    commonName: "The crown-pressure point",
    lineId: "spl",
    view: "back",
    marker: { x: 120, y: 56 },
    referral: ["vertex-b", "occiput", "temple", "forehead"],
    painSummary:
      "A focused burst of pain on the very top of the head, like a thumb-press on the crown, sometimes spreading to the back of the head and temple. It is the classic point behind 'hatband too tight' headaches.",
    symptoms:
      "Head feels heavy and pressurized; turning the head against resistance aches; neck rotation feels glued on one side. Often pairs with eye strain at the end of long screen sessions.",
    causes: [
      "Long hours with the head held rotated (two monitors, front-row seat)",
      "Whiplash-type injuries",
      "Sleeping with the neck twisted",
      "Upper-crossed posture loading the neck rotators",
    ],
    howToFind:
      "Feel the muscular triangle just below and behind the ear, between the skull edge and the neck. Turn the head opposite to feel it contract. The tender knot sits just below the skull line, a thumb behind the ear.",
    release: {
      tool: "Fingertips or twin balls very lightly",
      duration: "60–90 seconds per side",
      pressure: "Gentle — work beside the skull, never on the spine",
      steps: [
        "Lie on your back or sit supported; find the tender knot behind the ear.",
        "Press gently with fingertips and hold 30 seconds.",
        "Slowly turn the head away from the treated side while holding.",
        "Repeat 2–3 cycles.",
      ],
      activation:
        "While holding the point, gently press the head back into your supporting hand (looking up at 5% effort) for 5 seconds, then relax — 6 reps. This contract-relax re-lengthens the rotator without force.",
    },
    manualTherapy:
      "Sustained fingertip compression below the mastoid with passive head rotation — a precise technique that resolves crown headaches quickly. Always paired with suboccipital and upper-trapezius release along the same helix.",
    stretch: {
      name: "Rotation neck stretch",
      steps: [
        "Sit tall and turn the head fully to one side, chin level.",
        "Cup the jaw with the same-side hand and add gentle rotation pressure.",
        "Feel the stretch behind the opposite ear.",
      ],
      hold: "20 seconds × 2, each side",
    },
    prevention: [
      "Center monitors; avoid long one-way head rotation.",
      "Chin-tuck strength work for the deep neck flexors.",
      "Sleep with a pillow that keeps the nose in line with the sternum.",
    ],
    related: ["suboccipitals", "upper-trapezius", "rhomboids"],
  },
  {
    id: "rhomboids",
    name: "Rhomboids",
    commonName: "The between-the-shoulders knot",
    lineId: "spl",
    view: "back",
    marker: { x: 102, y: 118 },
    referral: ["scapula-border", "scapula", "shoulder-back", "upper-arm-back"],
    painSummary:
      "A gnawing ache between the shoulder blade and the spine that makes you want to press into a chair corner. It can reach the top of the shoulder and, less often, the inner upper arm.",
    symptoms:
      "Constant urge to 'crack' the upper back, ache holding the phone or steering wheel, pain that eases with movement but returns with stillness. Underactive lower traps and serratus make the rhomboids over-pull.",
    causes: [
      "Rounded-shoulder desk posture stretching the rhomboids taut",
      "Rowing or pulling exercises with poor form",
      "Carrying a backpack on one shoulder",
      "Weak serratus anterior shifting load backward",
    ],
    howToFind:
      "Reach the opposite hand over the shoulder to touch the inner border of the shoulder blade. Press along that border — tender knots a finger-width from the spine of the blade are the points, most often at mid-blade level.",
    release: {
      tool: "Twin balls in a sock or single ball on the floor",
      duration: "2 minutes",
      pressure: "Moderate — the ribs are behind, stay comfortable",
      steps: [
        "Lie on your back with the ball beside the spine at mid-blade level.",
        "Hug the arms across the chest to open the blades.",
        "Make small circles over the tender band, 30–60 seconds per level.",
        "Move down and up one level to sweep the whole border.",
      ],
      activation:
        "With the ball in place, squeeze the shoulder blades gently back and down 5 times, then reach the arms to the ceiling and lower 5 times. Alternating 'hug and open' activates the antagonists and stops the tug-of-war.",
    },
    manualTherapy:
      "Cross-fiber stripping along the blade borders through a cloth, plus sustained holds. Practitioners pair rhomboid release with serratus and lower-trap strengthening — the knot is a symptom of an unstable shoulder blade, not just a tight muscle.",
    stretch: {
      name: "Eagle-arms rhomboid stretch",
      steps: [
        "Seated, wrap the forearms in front of you (eagle arms) or simply hug yourself wide.",
        "Round the upper back gently and push the arms away.",
        "Feel the space between the blades open.",
      ],
      hold: "30 seconds × 3",
    },
    prevention: [
      "Strengthen the mid-back and serratus weekly (rows, wall slides).",
      "Set the desk so the shoulder blades stay lightly engaged, not collapsed.",
      "Alternate bag shoulders or go backpack.",
    ],
    related: ["serratus-anterior", "splenius-capitis", "levator-scapulae"],
  },
  {
    id: "serratus-anterior",
    name: "Serratus Anterior",
    commonName: "The side-stitch muscle",
    lineId: "spl",
    view: "front",
    marker: { x: 133, y: 148 },
    referral: ["lateral-ribs", "back-ribs", "axilla", "abdomen-side", "forearm-inner"],
    painSummary:
      "Sharp ache on the side of the ribs — the classic runner's stitch — that can wrap toward the shoulder blade behind and even run down the inner arm toward the palm.",
    symptoms:
      "Side pain with deep breaths, running or laughing; discomfort lying on that side; weakness pushing up from the floor. The muscle anchors the shoulder blade to the ribs, so its points disturb both breathing and shoulder mechanics.",
    causes: [
      "Running with shallow chest breathing",
      "Push-ups and overhead pressing beyond conditioning",
      "Long driving with the arm out the window",
      "Sudden twisting reaches",
    ],
    howToFind:
      "Reach the opposite hand under the armpit and slide down the side of the ribs — the finger-like muscle attachments you feel are the serratus. Press just above the bra-line / nipple-line on the side of the ribs; tenderness that reproduces the stitch is the point.",
    release: {
      tool: "Small ball against wall (side of ribs)",
      duration: "90 seconds per side",
      pressure: "Light to moderate — ribs respond quickly",
      steps: [
        "Stand side-on to a wall, ball between the side of the ribs and the wall.",
        "Lean gently and roll from below the armpit to the lower ribs.",
        "Hold tender bands 30 seconds while breathing deeply.",
        "Reach the same-side arm overhead during holds.",
      ],
      activation:
        "With the ball on the tender band, take 5 slow deep breaths letting the ribs expand into the pressure. Then do 5 wall-push plus shoulder-blade reaches (protraction) — this re-wires breath and shoulder together.",
    },
    manualTherapy:
      "Fingertip stripping along the rib attachments from armpit to lower ribs while the arm is passively moved. Practitioners retrain breathing mechanics and serratus strength (wall slides, punches) for lasting results.",
    stretch: {
      name: "Side-body reach (rib opener)",
      steps: [
        "Stand tall, reach the right arm overhead and grip the left wrist.",
        "Side-bend left, pulling the right arm gently.",
        "Feel the ribs on the right side open.",
      ],
      hold: "30 seconds × 2, each side",
    },
    prevention: [
      "Train nasal belly-breathing while running.",
      "Build serratus strength: wall slides and push-up plus reaches.",
      "Warm up the trunk with side-bends before hard running.",
    ],
    related: ["rhomboids", "external-oblique", "pectoralis-minor"],
  },
  {
    id: "external-oblique",
    name: "External Oblique",
    commonName: "The twisting-trunk guard",
    lineId: "spl",
    view: "front",
    marker: { x: 126, y: 188 },
    referral: ["abdomen-side", "lateral-ribs", "lower-ribs", "groin"],
    painSummary:
      "Flank pain along the side of the belly that can wrap from the lower ribs to the groin — often felt as a sharp stitch during twisting sports or a nagging side ache after a long drive.",
    symptoms:
      "Pain coughing, sneezing or sitting up; side belly tenderness to pressing; belt-line tightness. Deep points near the hip bone can imitate groin strain.",
    causes: [
      "Rotational sports (tennis, golf, baseball) with poor trunk prep",
      "Prolonged twisting seated positions",
      "Heavy asymmetric lifting",
      "Persistent coughing",
    ],
    howToFind:
      "Lie on your back and reach the opposite hand behind your head — the side wall of the belly that firms up is the oblique. Press along the line from the lower ribs toward the hip bone; the tender band is usually mid-flank.",
    release: {
      tool: "Small soft ball or self fingertips",
      duration: "90 seconds per side",
      pressure: "Gentle to moderate",
      steps: [
        "Lie on your side with a small ball under the flank between ribs and hip.",
        "Let the body sink over it for 30 seconds.",
        "Make small circles over the tender band.",
        "Reach the top arm overhead during holds.",
      ],
      activation:
        "On the held point, do 5 slow breaths expanding the ribs sideways. Then lying on your back, do 5 slow dead-bug reaches (opposite arm and leg) to re-activate the sling in a safe range.",
    },
    manualTherapy:
      "Cross-fiber stripping along the oblique fibers from ribs to iliac crest, with the patient side-lying. Practitioners integrate breathing work and rotational control drills — the obliques guard the trunk, so calming them also unlocks the spine.",
    stretch: {
      name: "Open-book rotational stretch",
      steps: [
        "Lie on your side, knees stacked, arms together in front.",
        "Open the top arm to the floor behind you, following with the eyes.",
        "Feel the front-side of the trunk stretch.",
      ],
      hold: "30 seconds × 2, each side",
    },
    prevention: [
      "Warm up rotation with standing trunk circles before racket sports.",
      "Lift with the trunk square; pivot the feet instead of twisting the spine.",
      "Add slow rotational core work (Pallof press) weekly.",
    ],
    related: ["serratus-anterior", "rectus-abdominis", "quadratus-lumborum"],
  },
  {
    id: "sartorius",
    name: "Sartorius",
    commonName: "The tailor's muscle sting",
    lineId: "spl",
    view: "front",
    marker: { x: 108, y: 275 },
    referral: ["anterior-thigh", "medial-knee", "groin"],
    painSummary:
      "A burning, stinging line along the front-inner thigh — sharp and superficial, unlike deep muscle ache. It can focus at the inner knee where the muscle attaches (pes anserinus).",
    symptoms:
      "Skin-level sting when lifting the leg to put on socks, tenderness at the inner knee below the joint line, and a feeling of the thigh 'catching' when crossing the legs. Long sitting with crossed legs keeps it active.",
    causes: [
      "Sitting cross-legged for long periods",
      "Dance and martial-arts kicks",
      "Hip instability forcing this thin strap to stabilize",
      "Falls onto the outer hip stretching it suddenly",
    ],
    howToFind:
      "Sit and cross one ankle over the opposite knee — the diagonal strap that tightens from the hip point to the inner knee is the sartorius. Pinch it gently along its course; stinging tenderness confirms the point.",
    release: {
      tool: "Gentle self pinch or soft roller",
      duration: "60 seconds per side",
      pressure: "Light — a thin superficial muscle",
      steps: [
        "Sit with the leg extended and slightly turned out.",
        "Pinch the diagonal strap from hip to inner knee gently.",
        "Hold tender spots 15–20 seconds, sweeping slowly along the line.",
        "Finish at the inner-knee attachment with small circles.",
      ],
      activation:
        "While gently pinching the muscle, slowly slide the heel along the floor out to the side and back 8 times (hip external rotation). This glides the sartorius through its own action and clears the sting.",
    },
    manualTherapy:
      "Gentle cross-fiber sweeps along the diagonal from ASIS to pes anserinus. Practitioners treat the hip rotators and adductors with it, then retrain sitting posture — sartorius points are nearly always posture-created.",
    stretch: {
      name: "Lying hip-extension stretch (sartorius bias)",
      steps: [
        "Lie on your side with the top leg hanging behind the bottom leg.",
        "Let the top leg extend back and down off the edge.",
        "Feel the front-inner thigh lengthen.",
      ],
      hold: "30 seconds × 2, each side",
    },
    prevention: [
      "Limit marathons of cross-legged sitting; swap sides often.",
      "Strengthen hip rotators and glutes for stability.",
      "Stand and walk every 30 minutes of desk time.",
    ],
    related: ["adductor-longus", "rectus-femoris", "vastus-medialis"],
  },
  {
    id: "gracilis",
    name: "Gracilis",
    commonName: "The inner seam",
    lineId: "spl",
    view: "front",
    marker: { x: 92, y: 300 },
    referral: ["inner-thigh", "medial-knee", "groin"],
    painSummary:
      "A hot, superficial burn along the inner thigh that runs down to the inner knee — like a seam of the trouser leg pulling tight. Pivoting on the standing leg or squeezing the knees together lights it up.",
    symptoms:
      "The ache stays close to the surface, unlike deeper adductor pain. The inner knee may grow tender where the tendon fans out (next to the pes anserinus). Deep adductor stretches feel sharp rather than releasing, and horse-stance or skating positions burn quickly.",
    causes: [
      "Skating, breaststroke kicking and horse-stance training ramped up too fast",
      "Sudden lunges or splits-type loading of the inner thigh",
      "Long sessions sitting cross-legged with the muscle shortened",
      "Hip weakness that leaves the inner thigh overworking on every step",
    ],
    howToFind:
      "Sit with knees apart and squeeze them together — a slim rope snaps taut at the innermost edge of the thigh, from groin to inner knee. Walk your fingers along this rope; the most tender strand above the knee is the classic spot.",
    release: {
      tool: "Foam roller or firm ball on a soft surface",
      duration: "60–90 seconds per side",
      pressure: "Moderate — the muscle sits shallow, so ease in gradually",
      steps: [
        "Lie face down with the inner thigh of one leg draped over the roller, leg turned out.",
        "Sweep slowly from the groin to just above the inner knee, 6–8 passes.",
        "Pause 15–20 seconds on the tender strands near the knee.",
        "Finish seated: pinch-roll the rope gently between thumb and fingers.",
      ],
      activation:
        "Seated, place a soft ball between the knees and squeeze it to 20% effort while pressing the tender rope with your fingers — 8 slow squeezes. The muscle contracts and lengthens under your hands, releasing its grip on the seam.",
    },
    manualTherapy:
      "Practitioners strip the rope with the hip abducted and turned out, then check the inner knee attachment and the pes anserinus group below. Hip-abductor strengthening is the durable fix for a gracilis that keeps returning.",
    stretch: {
      name: "Butterfly fold with long spine",
      steps: [
        "Sit with soles together, knees wide, and hold the ankles.",
        "Keep the back long and hinge the chest forward until the inner thighs stretch.",
        "Let the knees sink on the exhale — never push them down.",
      ],
      hold: "45 seconds × 2",
    },
    prevention: [
      "Ramp skating, breaststroke and horse-stance volume up no faster than 10% a week.",
      "Train the hip abductors (side planks, clamshells) so the inner line stops compensating.",
      "Unwind cross-legged sitting with 20 standing leg swings every hour.",
    ],
    related: ["adductor-longus", "adductor-magnus", "vastus-medialis"],
  },
];
