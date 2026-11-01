export interface ContentSection {
  title: string;
  body: string[];
}

export interface SafetyCard {
  title: string;
  items: string[];
  severity: "stop" | "caution" | "see-pro";
}

export const FASCIA_PRIMER: ContentSection[] = [
  {
    title: "What fascia actually is",
    body: [
      "Fascia is the body's connective-tissue web — a continuous, slippery, collagen-rich fabric that wraps every muscle, bone, organ and nerve. If you removed everything else from the body, the fascia would still hold your shape in three dimensions. It is not packaging material; it is an organ of movement, transmitting force between muscles that never directly touch.",
      "For centuries anatomy textbooks cut fascia away to reveal muscles. Thomas Myers' Anatomy Trains approach flipped the scalpel: follow the fascia instead, and the 'individual' muscles turn out to be stations along continuous myofascial tracks — the Superficial Back Line from toes to brow, the Lateral Line, the Spiral Line, and so on. Strain travels along these tracks, which is why a tight calf can live in the same problem as a headache.",
      "Fascia is also densely innervated — richer in sensory nerve endings than muscle itself. It contracts and relaxes slowly, stiffens under stress, and dehydrates with inactivity. That makes it the body's great posture sensor and pain amplifier: when one zone dries out or locks, its neighbours take on the load and develop trigger points.",
    ],
  },
  {
    title: "Tensegrity: why pain travels",
    body: [
      "The body distributes force through tension, not compression — a principle called tensegrity (tensional integrity). Bones float in the fascial web the way masts float in the rigging of a sailing ship: pull one rope and the whole structure shifts, not just the local mast.",
      "This explains the clinical observation behind this atlas: releasing a trigger point in the glutes can end a headache, and work on the soleus can free a stiff neck. When one station of a myofascial line is locked, the line pulls taut everywhere else. The pain you feel is often at the line's weakest junction — not where the problem started.",
      "Practically, this means you should treat whole lines, not lonely points. In this atlas every trigger point is mapped to its meridian; the related points listed with each entry are usually involved. Releasing two or three stations of a line with the same 90-second protocol works better than attacking a single 'spot that hurts'.",
    ],
  },
  {
    title: "Trigger points: the short science",
    body: [
      "A myofascial trigger point is a small, irritable knot within a taut band of muscle where the contractile machinery has locked in a shortened state. Local energy crisis, overloaded motor endplates and sensitized nerve endings keep it switched on. Press it and you reproduce the exact pain the person complains about — referred along predictable maps documented by Travell & Simons.",
      "Trigger points cause far more pain than most people realize: they produce headaches, toothaches, ear ringing, 'sciatica', knee pain, bellyaches and dizziness without any tissue damage at the pain site. They are the low-hanging fruit of self-care because they respond to precise sustained pressure, movement and stretching — no medication required.",
      "The 'activation' method used throughout this atlas pairs sustained pressure with gentle active movement of the same muscle (contract-relax and range pumping). Moving the muscle while it is compressed re-lengthens its fibers, flushes the local chemistry and re-sets the length reflex — which is why 60–90 seconds of pressure plus movement outperforms passive rubbing.",
    ],
  },
  {
    title: "The Chinese-medicine layer: meridians and acupoints",
    body: [
      "Alongside the Anatomy Trains, this atlas carries a second, much older map: classical Chinese medicine. Where Myers describes fascial tracks, Chinese medicine describes meridian channels along which qi — the body's functional energy — is said to flow. At fixed stations on these channels sit some 365 classical acupoints, each with a documented tradition of what it relieves, refined over two thousand years of practice.",
      "The two maps are strikingly convergent: many of the great acupoints sit exactly where myofascial trigger points cluster. Fengchi (GB20) overlaps the suboccipitals, Jianjing (GB21) the upper trapezius, Huantiao (GB30) the deep hip rotators, and Weizhong (BL40) the same popliteal hollow that mirrors lumbar strain. Two independent traditions, built continents and centuries apart, marked the same neighborhoods as pain gateways.",
      "The 43 acupoints in this atlas are the classics of everyday pain — chosen because they are easy to find, safe to press with a thumb and quick to test. Work them exactly like the trigger points: locate, confirm with tenderness, sustain pressure while breathing, and add gentle movement. Use the system filter above the body map (All / Anatomy Trains / Chinese medicine) to walk each map on its own — then cross-reference the related points, which deliberately span both systems.",
    ],
  },
];

export const ASSESSMENT_SECTIONS: ContentSection[] = [
  {
    title: "How to find a trigger point",
    body: [
      "Use your fingertips, thumb or a tool and sweep slowly across the muscle fibers — trigger points sit inside taut bands that feel like a guitar string or a pencil under the skin. When your pressure lands on one, you will feel a distinctly tender spot, often with an unpleasant 'toothache' quality that ordinary muscle soreness lacks.",
      "Press with the fingernail edge or a ball using steady, patient pressure. The classic confirmation is the referral: pressure on the point reproduces or sharpens the distant pain you came to treat — temple pain from the neck, arm pain from the chest, knee pain from the thigh.",
    ],
  },
  {
    title: "The local twitch response",
    body: [
      "A quick snap across a trigger point often produces a brief visible twitch of the muscle — the local twitch response, considered the most reliable confirmation sign. You can feel it under your fingers as a small jump of the band. It is easiest to elicit in superficial muscles (calf, traps, hamstrings) and gets harder when a point is deeply guarded.",
      "Another hallmark: pressure on the point makes the referred pain jump within a second or two, and sustained pressure for 30–90 seconds makes it melt. If pressing reproduces the pain and holding eases it, you have found a live trigger point — treat it with the release protocol in this atlas.",
    ],
  },
  {
    title: "Reading your pain map",
    body: [
      "Before treating, match your complaint to the atlas: locate where the pain actually sits (the shaded referral zone in each entry), then look upstream and downstream along the same myofascial line. The point that reproduces your pain when pressed is your primary target; the line's neighbours are your supporting cast.",
      "Work in this order for best results: (1) release the primary point with pressure plus activation, (2) release one or two related points on the same line, (3) take the line's stretch, (4) apply the prevention habit for that entry. Repeat daily for 3–5 days — most points fade within a week when the line is treated as a whole.",
    ],
  },
];

export const SAFETY_CARDS: SafetyCard[] = [
  {
    title: "Stop — do not self-treat",
    severity: "stop",
    items: [
      "Chest pain, arm pain or pressure with breathlessness, sweating or nausea — call emergency services; trigger-point-style chest pain can mask cardiac events.",
      "New severe headache, 'worst headache of my life', headache with fever, stiff neck, vision change or weakness — seek urgent medical care.",
      "Pain with numbness, progressive weakness or loss of bladder/bowel control — emergency evaluation required.",
      "Hot, red, swollen calf after long travel or surgery (possible clot) — never massage or compress; see a doctor immediately.",
    ],
  },
  {
    title: "Caution — modify your approach",
    severity: "caution",
    items: [
      "Pregnancy: avoid deep work on the low back, inner thigh, sacrum and between the heel and ankle; always clear self-care with your provider.",
      "Never apply ball pressure to the front of the neck, the carotid area, or directly over the spine — finger-light work only in those zones.",
      "Acute injury with swelling or bruising (first 48–72 hours) needs ice, elevation and care, not trigger-point release.",
      "Bruising easily or on blood thinners: halve the pressure and duration; expect marks and stop if they spread.",
      "Varicose veins, diabetes with neuropathy or reduced skin sensation: work gently and inspect skin after sessions.",
      "Acupressure cautions: skip firm work on LI4, SP6 and GB21 during pregnancy; never press hard behind the knee (Weizhong) or into the hollow above the collarbones; avoid pressing over broken skin, varicose veins or known nerve-sensitive spots like the fibula head (above GB34).",
    ],
  },
  {
    title: "See a professional when",
    severity: "see-pro",
    items: [
      "Pain has persisted beyond 2–3 weeks of consistent self-treatment, or keeps returning to the same spot.",
      "A joint locks, gives way, or a shoulder cannot be raised — real structural problems need diagnosis first.",
      "You suspect a frozen shoulder, true nerve entrapment or disc problem — these benefit most from combined professional and self-care.",
      "Symptoms worsen steadily, disturb sleep badly, or spread to new areas despite treatment.",
      "Deep pelvic, dental, chest or abdominal pain always requires medical screening before trigger-point work is considered.",
    ],
  },
];

export const RELEASE_RULES: { title: string; body: string }[] = [
  {
    title: "Pressure: 7 out of 10, never 10",
    body: "Use enough pressure to feel a satisfying, tolerable ache — like a good massage. Wincing makes muscles guard and defeats the purpose. If you cannot breathe slowly and stay relaxed, lighten the pressure by a third.",
  },
  {
    title: "Time: 60–90 seconds per point",
    body: "Trigger points release on a time curve, not instantly. Hold steady, breathe, and expect the ache to fade by half within 90 seconds. If it hasn't eased, lighten the pressure and hold another 30 seconds.",
  },
  {
    title: "Activation: move the muscle under pressure",
    body: "The signature of this atlas: once pressure is set, gently contract the same muscle against the tool for 5 seconds (10–20% effort), relax and sink deeper — or slowly pump the muscle through its range. This contract-relax cycle is what 'switches off' the point.",
  },
  {
    title: "Frequency beats intensity",
    body: "Two short sessions daily for 3–5 days beat one heroic session. Expect mild next-day soreness like after exercise. Drink water, move gently afterward, and finish every session with the line's stretch.",
  },
];
