import type { MyofascialLine } from "./types";

/**
 * The 12 myofascial meridians of the Anatomy Trains map (T. Myers).
 * Each line is a continuous fascial track that transmits strain and pain
 * along the body — which is why a trigger point in one station often
 * refers or "loads" trigger points in distant stations of the same line.
 */
export const LINES: MyofascialLine[] = [
  {
    id: "sbl",
    abbr: "SBL",
    name: "Superficial Back Line",
    color: "#B45309",
    family: "core",
    side: "Posterior, bilateral",
    summary:
      "Runs from the underside of the foot up the back of the legs, buttocks and spine, over the skull to the brow. It supports the body in standing and powers forward propulsion. The body's single most overloaded line in people who sit, drive or stand all day.",
    track: [
      "Plantar fascia & toe flexors",
      "Gastrocnemius / soleus",
      "Hamstrings",
      "Sacrotuberous ligament",
      "Gluteus maximus & erector spinae",
      "Thoracolumbar fascia",
      "Multifidi & spinal erectors",
      "Suboccipitals",
      "Scalp fascia to brow",
    ],
    painThemes:
      "Heel and arch pain, calf tightness, hamstring strains, sacral ache, low-back stiffness, hunched upper back, tension headaches at the skull base. Tightness here pulls the whole line taut like a bowstring from toes to eyebrows.",
    view: "back",
  },
  {
    id: "sfl",
    abbr: "SFL",
    name: "Superficial Front Line",
    color: "#0D9488",
    family: "core",
    side: "Anterior, bilateral",
    summary:
      "Runs from the top of the foot up the shin, front of thigh, through the abdominal wall and chest, up the front of the neck to the jaw and skull. It flexes the body forward and balances the Superficial Back Line. Chronically shortened by sitting and screen posture.",
    track: [
      "Tibialis anterior & toe extensors",
      "Quadriceps (rectus femoris)",
      "Anterior hip capsule",
      "Rectus abdominis",
      "Sternalis / chest fascia",
      "Sternocleidomastoid",
      "Scalp fascia & face muscles",
    ],
    painThemes:
      "Shin splints, front-of-knee pain, hip-flexor tightness, belly and rib pain, chest tightness, throat and jaw tension, forward-head posture with eye and sinus strain.",
    view: "front",
  },
  {
    id: "ll",
    abbr: "LL",
    name: "Lateral Line",
    color: "#7C3AED",
    family: "core",
    side: "Lateral, left & right pair",
    summary:
      "Runs from the outer foot up the outer leg, hip, flank, ribs and neck, holding the body upright side-to-side like guy-ropes on a mast. Posture that leans to one side, leg-crossing or carrying bags overloads one Lateral Line against the other.",
    track: [
      "Peroneus longus & brevis",
      "ITB & vastus lateralis / TFL",
      "Gluteus medius & minimus",
      "External & internal obliques",
      "Quadratus lumborum",
      "Intercostals",
      "Scalenes & cervical fascia",
    ],
    painThemes:
      "Outer-ankle and knee pain, hip-bursitis-style pain, side stitches, flank and low-back ache, IT-band burn, neck-side tightness, one-sided headaches and a habit of standing with weight on one leg.",
    view: "both",
  },
  {
    id: "spl",
    abbr: "SPL",
    name: "Spiral Line",
    color: "#BE185D",
    family: "core",
    side: "Double helix around the trunk",
    summary:
      "Wraps around the body in two loops: from the side of the skull across the upper back to the shoulder blade, around the ribs to the opposite hip, down the leg and back up to the spine. It rotates the trunk and keeps the diagonal balance between left and right halves.",
    track: [
      "Splenius capitis",
      "Rhomboids",
      "Serratus anterior",
      "External oblique",
      "Abdominal fascia to opposite hip",
      "Sartorius",
      "Tibialis anterior / peroneus longus",
      "Biceps femoris",
      "Sacrotuberous ligament & erector spinae",
    ],
    painThemes:
      "Rotation problems: twisted pelvis, rotated shoulder girdle, medial knee pain, deep chest-wall ache, one shoulder pulled forward, low-back pain worse with turning. Trigger points here often feed points far up or down the helix.",
    view: "both",
  },
  {
    id: "sbal",
    abbr: "SBAL",
    name: "Superficial Back Arm Line",
    color: "#4D7C0F",
    family: "arm",
    side: "Neck to back of hand",
    summary:
      "From the skull and spine across the trapezius, down the back of the arm through the triceps to the back of the hand. Typing, driving and phone-holding keep this line tense, dragging the shoulder girdle up and forward.",
    track: [
      "Occipital ridge & spinous processes",
      "Trapezius",
      "Deltoid",
      "Lateral triceps & anconeus",
      "Extensor carpi radialis longus/brevis",
      "Back of hand",
    ],
    painThemes:
      "Neck-to-shoulder band pain, tennis elbow, outer wrist ache, back-of-hand tension. Classic desk-worker overload combined with the Deep Back Arm Line.",
    view: "back",
  },
  {
    id: "dbal",
    abbr: "DBAL",
    name: "Deep Back Arm Line",
    color: "#9F1239",
    family: "arm",
    side: "Neck to little finger",
    summary:
      "The shoulder's stabilising core: from neck and inner shoulder-blade border through the rotator cuff and triceps to the little finger. Rotator-cuff trigger points here are the most common source of deep shoulder pain and 'frozen shoulder' complaints.",
    track: [
      "Levator scapulae & rhomboids",
      "Rotator cuff (supraspinatus, infraspinatus, subscapularis)",
      "Medial triceps",
      "Extensor carpi ulnaris / extensor digiti minimi",
      "Little finger side of hand",
    ],
    painThemes:
      "Deep shoulder ache that sleeps badly, pain reaching up the back, catching when lifting the arm, pain down the back of the forearm to the ring and little fingers.",
    view: "back",
  },
  {
    id: "sfal",
    abbr: "SFAL",
    name: "Superficial Front Arm Line",
    color: "#CA8A04",
    family: "arm",
    side: "Chest to palm",
    summary:
      "From the chest wall down the front of the arm through the brachialis and wrist flexors into the palm. Pushing, carrying and mouse-work shorten it, rounding the shoulders and compressing the elbow.",
    track: [
      "Pectoralis major fascia",
      "Brachialis",
      "Flexor carpi radialis & palmaris longus",
      "Palmar fascia & fingers",
    ],
    painThemes:
      "Front-of-shoulder tightness, golfer's elbow, aching forearms after typing, palm fatigue, thumb-web pain that mimics carpal tunnel.",
    view: "front",
  },
  {
    id: "dfal",
    abbr: "DFAL",
    name: "Deep Front Arm Line",
    color: "#DC2626",
    family: "arm",
    side: "Ribcage to thumb",
    summary:
      "From the ribs and chest under the collarbone through pectoralis minor and biceps to the thumb. Tightness here chokes the nerves and vessels running under the pec — a classic driver of arm tingling and 'dead arm' feelings.",
    track: [
      "Ribs 3-5 & pectoralis minor",
      "Biceps brachii",
      "Pronator teres / flexor pollicis longus",
      "Thumb",
    ],
    painThemes:
      "Chest tightness, biceps ache, thumb-side forearm and hand pain, arm heaviness or tingling (thoracic-outlet-style), shoulder pulled forward.",
    view: "front",
  },
  {
    id: "ffl",
    abbr: "FFL",
    name: "Front Functional Line",
    color: "#65A30D",
    family: "functional",
    side: "Crosses trunk diagonally (front)",
    summary:
      "A diagonal sling across the front of the trunk linking one shoulder to the opposite inner thigh — active whenever you swing or throw across the body. It ties chest, abdominal wall and adductors into one working chain.",
    track: [
      "Pectoralis major (lower fibers)",
      "Rectus abdominis & oblique fascia",
      "Adductor longus / gracilis fascia",
      "Inner thigh to opposite leg",
    ],
    painThemes:
      "Groin strains, inner-thigh pulls, abdominal-wall pain with twisting sports, chest-abdomen strain in racket and throwing athletes.",
    view: "front",
  },
  {
    id: "bfl",
    abbr: "BFL",
    name: "Back Functional Line",
    color: "#78716C",
    family: "functional",
    side: "Crosses trunk diagonally (back)",
    summary:
      "A diagonal sling across the back linking one latissimus dorsi through the lumbar fascia to the opposite glute and outer thigh. Powerful in lifting, running and rowing — and a hidden source of low-back and outer-hip pain.",
    track: [
      "Latissimus dorsi",
      "Thoracolumbar fascia",
      "Sacral fascia",
      "Gluteus maximus",
      "Vastus lateralis via ITB",
    ],
    painThemes:
      "Low-back pain on lifting, lat and armpit ache, outer-hip and outer-thigh burn, pain swinging a racket or golf club on one side only.",
    view: "back",
  },
  {
    id: "dfl",
    abbr: "DFL",
    name: "Deep Front Line",
    color: "#1E3A5F",
    family: "deep",
    side: "Deep core, feet to skull",
    summary:
      "The body's deep inner track: from the arch and deep calf through the inner thigh, hip flexors, diaphragm and chest fascia up to the jaw. It is the body's postural core — everything else balances around it. Usually the least massaged and most influential line.",
    track: [
      "Tibialis posterior & long toe flexors",
      "Adductor group & pelvic floor",
      "Iliopsoas",
      "Diaphragm & mediastinal fascia",
      "Scalene fascia & deep neck",
      "Jaw & skull base",
    ],
    painThemes:
      "Deep groin and pelvic ache, unexplained low-back pain (psoas), breath-holding patterns, calf 'deep' tightness that stretching never reaches, inner-knee instability, jaw clenching tied to pelvic tension.",
    view: "both",
  },
];

export const LINE_MAP: Record<string, MyofascialLine> = Object.fromEntries(
  LINES.map((l) => [l.id, l])
);
