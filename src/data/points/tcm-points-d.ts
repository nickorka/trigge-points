import type { TriggerPoint } from "../types";

/**
 * Classical Chinese-medicine acupoints — part D (shoulder, hand, ear, ankle,
 * brow, knee, chest, abdomen). Twelve further self-care classics: Jianyu,
 * Zhongzhu, Yifeng, Kunlun, Zanzhu, Xuehai, Shanzhong, Zhongwan, Shenmen,
 * Chize, Fengshi, Neiting.
 * `lineId: "tcm"` + `tcm` metadata; referral zones show the point's main
 * areas of influence rather than myofascial pain referral.
 */
export const TCM_POINTS_D: TriggerPoint[] = [
  {
    id: "li15-jianyu",
    name: "Jianyu · 肩髃 (LI15)",
    commonName: "The shoulder's front gate",
    lineId: "tcm",
    tcm: {
      pinyin: "Jianyu",
      hanzi: "肩髃",
      meridian: "li",
      functions:
        "The meeting gate of the large-intestine channel at the shoulder cap — the first point reached for a stiff, painful or frozen shoulder, and a classic for raising an arm that will not lift on its own.",
    },
    view: "front",
    marker: { x: 157, y: 93 },
    referral: ["deltoid-area", "shoulder-front"],
    painSummary:
      "The front gate of the shoulder, right on the deltoid cap: pressing here warms and unsticks a shoulder that resists lifting — the morning coat test, the top-shelf reach — and is the point acupuncturists reach for first in stubborn shoulders.",
    symptoms:
      "Aching around the cap of the shoulder that sharpens when the arm lifts sideways or forward; the hollow feels cold, stiff and tender at once. Classic usage also lists the shoulder that 'cannot be raised' — the gradual takeover of frozen shoulder.",
    causes: [
      "Repetitive reaching, lifting and throwing above shoulder height",
      "Sleeping on one shoulder through whole seasons",
      "Heavy backpack and one-strap bag carrying",
      "Cold drafts on bare shoulders in winter or under air-conditioning",
    ],
    howToFind:
      "Raise the arm slightly and find the hollow that appears at the front edge of the shoulder cap, level with the collarbone's outer end. Drop the arm — the hollow becomes a firm, tender dome on the deltoid. That is Jianyu.",
    release: {
      tool: "Thumb of the opposite hand",
      duration: "60 seconds per side",
      pressure: "Firm-sinking — spreading warmth and ache into the deltoid",
      steps: [
        "Cradle the sore shoulder and brace the thumb on the front dome of the cap.",
        "Press 20–30 seconds with slow breaths, feeling warmth spread down the arm.",
        "Make 8 small circles, then sweep from the point outward over the deltoid, 6 passes.",
        "Repeat with the arm swinging gently — small pendulums while the thumb holds.",
      ],
      activation:
        "Keep the thumb pressed in and slowly lift the arm out to the side an inch and lower it — 8 slow lifts. The deltoid works right over the gate as it opens.",
    },
    manualTherapy:
      "A staple of tuina shoulder work: kneaded and rubbed until warmth floods the cap, then combined with GB21 above and LI11 below to run the whole large-intestine channel through the arm.",
    stretch: {
      name: "Tabletop palm slide",
      steps: [
        "Stand behind a chair with the palms resting on its back.",
        "Slide the sore arm forward slowly, letting the chest sink.",
        "Stop when the shoulder cap opens and breathe there.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Warm the shoulders with arm circles before overhead work.",
      "Swap backpack sides daily and lighten one-strap loads.",
      "On cold days, keep a layer over the shoulder caps.",
    ],
    related: ["deltoid", "gb21-jianjing", "li11-quchi"],
  },
  {
    id: "te3-zhongzhu",
    name: "Zhongzhu · 中渚 (TE3)",
    commonName: "The island in the stream",
    lineId: "tcm",
    tcm: {
      pinyin: "Zhongzhu",
      hanzi: "中渚",
      meridian: "te",
      functions:
        "The shu-stream point of the triple-burner channel, in the valley between the fourth and fifth knuckles — a classic for stiffness along the back of the hand and wrist, aching neck and ear ringing.",
    },
    view: "back",
    marker: { x: 140, y: 222 },
    referral: ["hand-dorsal", "ring-little-fingers", "wrist"],
    painSummary:
      "The little island between the knuckles of the ring and little fingers: pressing it unblocks the whole channel that runs from the hand, up the outer arm and into the neck and ear — a favorite for keyboard-stiff hands and that side-of-neck-and-ear tension.",
    symptoms:
      "Tenderness between the fourth and fifth knuckles that reaches up the back of the hand; the ring and little fingers feel slow and wooden after typing or tool work. Classic usage also lists ear ringing and a stiff, dragged side of the neck.",
    causes: [
      "Long typing, mouse and controller sessions",
      "Gripping tools, needles or pencils for hours",
      "Cold, damp weather working into the hands",
      "Neck-and-shoulder tension feeding down the channel",
    ],
    howToFind:
      "Make a loose fist and find the groove between the knuckles of the ring and little fingers, on the back of the hand. Zhongzhu sits in that groove just behind the knuckles — a distinctly tender pocket between the bones.",
    release: {
      tool: "Thumb of the opposite hand",
      duration: "45 seconds per side",
      pressure: "Firm, angled toward the little-finger bone — soreness that runs up the forearm",
      steps: [
        "Brace the thumb tip into the groove behind the ring-finger knuckle.",
        "Press 20 seconds with slow breaths, letting the ache reach up the arm.",
        "Make 8 small circles, then strip up the groove toward the wrist, 6 passes.",
        "Repeat on the other hand and compare — treat the more tender side last.",
      ],
      activation:
        "Keep the thumb pressed in and slowly open and close the fist — 8 cycles. The channel slides under the pressure like a rope being flexed.",
    },
    manualTherapy:
      "Used in tuina as the distal key for the whole triple-burner channel: pressed and circled while the client opens and closes the hand, then the practitioner strips the forearm's outer line from wrist to elbow.",
    stretch: {
      name: "Fingers-back knuckle stretch",
      steps: [
        "Extend the arm and hold the four fingers with the other hand.",
        "Draw them gently back and toward the forearm.",
        "Hold until the back of the hand and outer forearm wake up.",
      ],
      hold: "20 seconds × 3 per hand",
    },
    prevention: [
      "On heavy typing days, press the groove for 10 seconds each hour.",
      "Warm the hands before fine-motor work in the cold.",
      "End the day with slow fist opening-closing, 20 cycles.",
    ],
    related: ["te5-waiguan", "si3-houxi", "wrist-extensors"],
  },
  {
    id: "te17-yifeng",
    name: "Yifeng · 翳风 (TE17)",
    commonName: "The wind screen behind the ear",
    lineId: "tcm",
    tcm: {
      pinyin: "Yifeng",
      hanzi: "翳风",
      meridian: "te",
      functions:
        "The 'screen from wind' in the hollow behind the earlobe — a classic for jaw tension and teeth-grinding days, ear ringing and the stiff, dragged feeling along the side of the neck.",
    },
    view: "back",
    marker: { x: 126, y: 44 },
    referral: ["ear", "occiput", "jaw"],
    painSummary:
      "The sheltered hollow behind the earlobe where the jaw hinge's tension gathers: pressing here softens a clenched jaw, quiets a strained, ringing ear and unknots the string that runs from behind the ear down the neck.",
    symptoms:
      "A deep, tender pocket behind the earlobe that aches on chewing or waking after a grinding night; the ear feels blocked or buzzing, and a thin, pulling line runs down the side of the neck. Screen-stress days park tension here.",
    causes: [
      "Teeth grinding and daytime jaw clenching under stress",
      "Long phone calls cradling the phone to one ear",
      "Cold wind on the ear and neck ('wind' in the classical sense)",
      "Screen days with the head drifted forward and jaw shut tight",
    ],
    howToFind:
      "Locate the earlobe and slide a fingertip straight behind it into the bony hollow between the jaw hinge and the skull — the pocket that feels distinctly tender and slightly warm is Yifeng.",
    release: {
      tool: "Middle fingertip",
      duration: "45–60 seconds per side",
      pressure: "Gentle-moderate, inward toward the nose — never sharp (the artery and nerve run close)",
      steps: [
        "Rest the middle fingertip in the hollow behind the earlobe.",
        "Press gently inward for 20 seconds while breathing slowly.",
        "Make 8 tiny circles, then let the jaw hang slightly open — feel the hinge soften.",
        "Sweep the fingertip down the side of the neck behind the jaw, 6 gentle passes.",
      ],
      activation:
        "Keep the fingertip in the hollow and slowly open and close the mouth — 8 slow cycles. The jaw hinge works right beside the pressure while the channel releases.",
    },
    manualTherapy:
      "Practitioners knead Yifeng with light circular pressure for jaw and ear complaints, usually paired with GB20 below and the masseter's front edge in front — a triangle that covers the whole chewing-and-neck tension network.",
    stretch: {
      name: "Jaw hang with ear-hold breath",
      steps: [
        "Rest fingertips on the hollows behind both earlobes.",
        "Let the jaw hang open a little, lips sealed, and breathe slowly.",
        "With each exhale, let the hinge sink a touch further.",
      ],
      hold: "20 seconds × 3",
    },
    prevention: [
      "Check jaw posture hourly on stressful days — lips sealed, teeth apart.",
      "Keep ears and neck covered in cold wind.",
      "Before sleep, 20 seconds of gentle pressure here per side calms a grinding jaw.",
    ],
    related: ["gb20-fengchi", "masseter", "scm"],
  },
  {
    id: "bl60-kunlun",
    name: "Kunlun · 昆仑 (BL60)",
    commonName: "The mountain pass",
    lineId: "tcm",
    tcm: {
      pinyin: "Kunlun",
      hanzi: "昆仑",
      meridian: "bl",
      functions:
        "The jing-river point of the bladder channel, named after the Kunlun mountains: a key for the low back 'mountain range' and the ankle below — swelling, heel ache and a stiff, untrustworthy ankle after a sprain.",
      cautions:
        "Traditionally avoided during pregnancy. The hollow holds small vessels and nerves — press gently, never sharply.",
    },
    view: "back",
    marker: { x: 120, y: 436 },
    referral: ["achilles", "heel", "lowback"],
    painSummary:
      "The pass between the outer ankle bone and the Achilles tendon: a master key in Chinese medicine for the low back above and the ankle below — pressing here loosens a stiff back and settles a complaining, once-sprained ankle.",
    symptoms:
      "Tenderness in the hollow behind the outer ankle bone; the ankle feels stiff on first steps and the heel aches after standing. Classic usage also lists low-back stiffness that eases once the channel opens — the back and the ankle share this one line.",
    causes: [
      "Old ankle sprains leaving the channel guarded",
      "Long standing days and hard floors",
      "Tight calves loading the heel and ankle all day",
      "Cold, damp weather settling into the ankles and low back",
    ],
    howToFind:
      "Find the outer ankle bone. Kunlun sits in the hollow midway between that bone and the Achilles tendon — the pocket that yields under a fingertip and feels distinctly tender is the point.",
    release: {
      tool: "Thumb of the opposite hand",
      duration: "45–60 seconds per side",
      pressure: "Moderate, angled slightly upward — a spreading ache, never sharp",
      steps: [
        "Cross the ankle over the other knee and brace the thumb in the hollow.",
        "Press 20 seconds with slow breaths, letting the ache spread to the heel.",
        "Make 8 small circles, then slowly flex and point the foot 8 times.",
        "Repeat on the other side and finish with a gentle sweep up the calf line.",
      ],
      activation:
        "Keep the thumb in the hollow and slowly draw circles with the toes in the air — 8 per direction. The ankle works while the pass stays open.",
    },
    manualTherapy:
      "A standard distal pair in acupuncture for the low back: Kunlun pressed while the client gently sways the back. In tuina the hollow is kneaded, then the Achilles line is swept toward the heel.",
    stretch: {
      name: "Kneeling ankle stretch",
      steps: [
        "Kneel on one knee, the other foot forward, heel down.",
        "Lean the front knee gently over the toes until the front ankle opens.",
        "Then sit back slightly to wake the hollow behind the ankle bone.",
      ],
      hold: "20 seconds × 3 per side",
    },
    prevention: [
      "After any rolled ankle, release the hollow daily for a week.",
      "Stretch the calves nightly — tight calves load this pass.",
      "Stand on soft mats, not bare floors, for long kitchen sessions.",
    ],
    related: ["bl57-chengshan", "ki3-taixi", "gb41-zulinqi"],
  },
  {
    id: "bl2-zanzhu",
    name: "Zanzhu · 攒竹 (BL2)",
    commonName: "The gathered bamboo brow",
    lineId: "tcm",
    tcm: {
      pinyin: "Zanzhu",
      hanzi: "攒竹",
      meridian: "bl",
      functions:
        "The bladder channel's first point above the eye, where the brow 'gathers like bamboo': the classic for eye strain and brow headaches, and a famous first-aid point for a fading stare during long screen work.",
    },
    view: "front",
    marker: { x: 118, y: 19 },
    referral: ["orbit", "forehead", "temple"],
    painSummary:
      "The tender notch at the inner end of each brow: two seconds of pressure here lifts a tired stare, softens a brow-line headache and unclenches the frown that screens and sun have been building all day.",
    symptoms:
      "A dull ache across the brows and into the eyes, with a knot under the fingers at the inner brow; blinking feels heavy, and the forehead carries a crease that will not smooth. Bright screens and unlit rooms both worsen it.",
    causes: [
      "Long screen sessions with unblinking, fixed focus",
      "Bright light, glare and flickering screens",
      "Unrested eyes after short nights",
      "Squinting against sun or wind without glasses",
    ],
    howToFind:
      "Look in a mirror and trace the brow from the inner corner of the eye upward — Zanzhu sits in the slight notch just inside the start of the brow, directly above the inner corner. Press both sides at once; the tender pockets confirm the spot.",
    release: {
      tool: "Tips of both middle fingers",
      duration: "30–45 seconds",
      pressure: "Light-moderate, upward against the brow ridge — a pleasant, spreading ache",
      steps: [
        "Rest both middle fingertips in the notches at the inner brows.",
        "Press up gently and hold 15 seconds, eyes closed, breathing slowly.",
        "Make 8 tiny circles, then sweep outward along the brows to the temples, 6 passes.",
        "Finish with warm palms over closed eyes for 10 seconds.",
      ],
      activation:
        "Keep the fingertips pressing and slowly squeeze the eyes shut, then open them wide — 5 slow cycles. The brow muscles work against the pressure and release into it.",
    },
    manualTherapy:
      "A standard point in eye-fatigue protocols: pressed with GB20 at the skull base and Taiyang at the temples to complete the brow-and-eye tension triangle. Also the classical point pressed to interrupt a bout of hiccups or a sneeze building up.",
    stretch: {
      name: "Long-distance gaze break",
      steps: [
        "After pressing, look at something at least 6 meters away.",
        "Let the gaze soften and blink slowly ten times.",
        "Finish by rolling the eyes gently in a wide circle, twice each way.",
      ],
      hold: "20 seconds × 2 per hour of screens",
    },
    prevention: [
      "Follow the 20-20-20 rule: every 20 minutes, look 20 feet away for 20 seconds.",
      "Match screen brightness to the room; add a warm evening filter.",
      "Press the brow notches for 10 seconds as part of every break.",
    ],
    related: ["ex-taiyang", "gb20-fengchi", "occipitalis"],
  },
  {
    id: "sp10-xuehai",
    name: "Xuehai · 血海 (SP10)",
    commonName: "The sea of blood",
    lineId: "tcm",
    tcm: {
      pinyin: "Xuehai",
      hanzi: "血海",
      meridian: "sp",
      functions:
        "The 'sea of blood' of the spleen channel, where blood is said to pool and be governed — the classic for nourishing sluggish circulation, cooling skin complaints and steadying a wobbly inner knee.",
    },
    view: "front",
    marker: { x: 93, y: 341 },
    referral: ["medial-knee", "inner-thigh"],
    painSummary:
      "The soft pocket above the inner knee where the 'sea of blood' gathers: pressing here warms and moves sluggish circulation through the legs and settles the inner knee that protests on stairs and long sits.",
    symptoms:
      "A tender, slightly cool pocket two fingers above the inner knee; the knee wobbles on stairs and aches after sitting cross-legged. In classical terms — heavy, tired legs, cool hands and feet, and skin that flushes or dries unevenly.",
    causes: [
      "Long sitting days slowing the circulation in the legs",
      "Stair-heavy weeks with weak inner-thigh support",
      "Cold floors and thin trousers through winter",
      "Hormonal cycles leaving legs heavy and tender",
    ],
    howToFind:
      "Sit with the knee slightly bent. Place the palm of the opposite hand on the kneecap, fingers pointing up and thumb out — where the thumb tip lands on the inner thigh, a soft, tender hollow two fingers above the kneecap's inner corner is Xuehai.",
    release: {
      tool: "Thumb, or the heel of the hand",
      duration: "60 seconds per side",
      pressure: "Firm-sinking with warmth — a spreading, pleasant ache",
      steps: [
        "Brace the thumb in the pocket above the inner knee.",
        "Press 20–30 seconds with slow breaths, feeling warmth spread down the shin.",
        "Make 8 small circles, then sweep up the inner thigh 6 passes and back down.",
        "Repeat on the other leg, then stand and compare the two legs.",
      ],
      activation:
        "Keep the thumb pressed in and slowly straighten and bend the knee — 8 slow cycles. The inner quadriceps work right under the sea of blood.",
    },
    manualTherapy:
      "A signature point of tuina for circulation: warmed with rubbing palms, kneaded, then the inner thigh swept downward to 'drain the sea'. Paired with SP6 below for leg heaviness and SP9 for damp, swollen knees.",
    stretch: {
      name: "Kneeling inner-thigh seat",
      steps: [
        "Kneel with knees wide and big toes touching, heels apart behind you.",
        "Sit back slowly between the heels until the inner thighs open.",
        "Breathe into the groin and inner knee for the length of the hold.",
      ],
      hold: "30 seconds × 2",
    },
    prevention: [
      "On desk days, stand and walk for 2 minutes every hour.",
      "Keep knees and lower legs warm in cold seasons.",
      "Finish showers with a 10-second cool sweep down each leg.",
    ],
    related: ["sp9-yinlingquan", "sp6-sanyinjiao", "vastus-medialis"],
  },
  {
    id: "cv17-shanzhong",
    name: "Shanzhong · 膻中 (CV17)",
    commonName: "The chest center sea",
    lineId: "tcm",
    tcm: {
      pinyin: "Shanzhong",
      hanzi: "膻中",
      meridian: "cv",
      functions:
        "The 'sea of qi' where the conception vessel gathers the breath: the classic for chest oppression, sighing breaths and the tight feeling that worry parks behind the sternum — and a steadying point for a stumbling heartbeat rhythm under stress.",
    },
    view: "front",
    marker: { x: 110, y: 128 },
    referral: ["chest-central", "upper-chest"],
    painSummary:
      "The center of the chest, level between the nipples — the sea of qi: a gentle touch here opens a compressed, sighing breath, softens the band of tension that stress draws across the chest, and settles a fluttery, anxious heart.",
    symptoms:
      "A tight, heavy band behind the sternum with shallow, sighing breaths; the chest feels compressed from the collarbones down. Emotionally — the choked, pre-tearful or fluttery feeling that comes with bad news and long stress days.",
    causes: [
      "Stress days with held breath and raised shoulders",
      "Grief, worry and long emotional strain",
      "Slumped desk posture folding the chest closed",
      "Overloaded schedules that leave no time to breathe out",
    ],
    howToFind:
      "Find the sternum and measure straight down to the level of the nipples — the slight hollow at the center of the breastbone there is Shanzhong. It often feels subtly tender and cooler than the skin around it.",
    release: {
      tool: "Fingertips of a flat hand, or a warm palm",
      duration: "45–60 seconds",
      pressure: "Light — this point works with a soft, steady touch, not force",
      steps: [
        "Rest the fingertips gently on the center of the breastbone.",
        "Breathe in slowly, and press a touch firmer as you breathe out — 6 breaths.",
        "Make 8 slow circles the size of a coin, both directions.",
        "Sweep the palm from the hollow down to the navel, 6 slow passes.",
      ],
      activation:
        "Keep the palm on the point and breathe so the chest pushes gently into your hand — 6 slow breaths. The sea of qi rises and falls under the palm and settles with each exhale.",
    },
    manualTherapy:
      "A calming anchor in clinical practice: light palpation of Shanzhong while the client slows the breath, usually paired with PC6 on the wrist for the chest and LV3 for the frustration underneath. Never treated with heavy pressure.",
    stretch: {
      name: "Doorway chest opener with breath",
      steps: [
        "Stand in a doorway, forearms on the frame, elbows level with the shoulders.",
        "Step through gently until the chest opens without pinching.",
        "Inhale slowly through the nose; exhale twice as long.",
      ],
      hold: "30 seconds × 2",
    },
    prevention: [
      "Take three 4-second exhales before stressful calls and meetings.",
      "Open the chest daily: one doorway stretch and one slow-breath minute.",
      "Notice sighing early — it is the sea of qi asking for a release.",
    ],
    related: ["diaphragm", "intercostals", "pc6-neiguan"],
  },
  {
    id: "cv12-zhongwan",
    name: "Zhongwan · 中脘 (CV12)",
    commonName: "The stomach's meeting stove",
    lineId: "tcm",
    tcm: {
      pinyin: "Zhongwan",
      hanzi: "中脘",
      meridian: "cv",
      functions:
        "The meeting point of all the bowels on the conception vessel — the stove at the center of digestion: the go-to for a knotted, bloated upper abdomen, food that 'just sits there', and the stomach's echo of a stressful day.",
      cautions:
        "Never on a full stomach. Avoid during pregnancy, and skip entirely over inflammation, ulcers or if a doctor is already investigating the abdomen.",
    },
    view: "front",
    marker: { x: 110, y: 166 },
    referral: ["abdomen", "lower-ribs"],
    painSummary:
      "The center of the upper abdomen, halfway between the navel and the rib-cage tip: the body's 'stove' in Chinese medicine, where a stressed, bloated, slow stomach gathers — and where slow clockwise pressure re-lights the fire.",
    symptoms:
      "A knotted, puffy band under the ribs that aches after eating and reacts to stress as much as to food; belching, food sitting 'like a stone', and a sour taste after rich meals. The area feels tight and cool until it is warmed and moved.",
    causes: [
      "Eating late, fast, or at the desk while working",
      "Stress that flips the stomach between knots and churning",
      "Cold drinks and raw food in quantity, especially in cold weather",
      "Rich, greasy celebration meals the stove cannot keep up with",
    ],
    howToFind:
      "Find the navel and the tip of the breastbone. Zhongwan sits at the midpoint between them, on the midline — usually a soft, slightly tender hollow that gurgles when pressed on an empty stomach.",
    release: {
      tool: "A warm palm (or the heel of the hand)",
      duration: "60 seconds",
      pressure: "Light-moderate, sinking on the exhale — warmth, not force",
      steps: [
        "Lie on your back with knees bent and rest a warm palm on the point.",
        "Breathe into the belly so it rises into the hand — 6 slow breaths.",
        "Make 8 slow clockwise circles, the direction the bowel flows.",
        "Finish with 3 gentle downward sweeps toward the navel.",
      ],
      activation:
        "Keep the palm on the point and hum or sigh out long on each exhale — the diaphragm massages the stove from above. 6 slow breaths.",
    },
    manualTherapy:
      "The centerpiece of abdominal (hara) treatment: warmed with moxa when cold, kneaded clockwise when stagnant, paired with ST36 on the leg to run the stomach channel to its foot. Practitioners always screen for red flags before abdominal work.",
    stretch: {
      name: "Sphinx belly breath",
      steps: [
        "Lie on your forearms, chest lifted, belly soft toward the floor.",
        "Breathe deep into the belly, letting it press down gently.",
        "Exhale twice as long as the inhale, 6 cycles.",
      ],
      hold: "30–45 seconds",
    },
    prevention: [
      "Eat at the table, not the desk — and stop at 'two-thirds full'.",
      "Keep drinks warm or room-temperature during meals.",
      "After rich meals, walk slowly for 10 minutes instead of sitting down.",
    ],
    related: ["diaphragm", "rectus-abdominis", "st36-zusanli"],
  },
  {
    id: "ht7-shenmen",
    name: "Shenmen · 神门 (HT7)",
    commonName: "The spirit gate",
    lineId: "tcm",
    tcm: {
      pinyin: "Shenmen",
      hanzi: "神门",
      meridian: "ht",
      functions:
        "The source point of the heart channel, the 'gate of the spirit': the classic for a racing, sleepless mind, anxiety that lodges in the chest, and the tender inner wrist that typing and phone-holding keep sore.",
    },
    view: "front",
    marker: { x: 146, y: 209 },
    referral: ["hand-palm", "wrist"],
    painSummary:
      "The gate on the inner wrist crease, on the little-finger side: the classical 'spirit gate' where a racing mind is slowed down — and the practical point for the aching wrist and palm that phones, typing and mouse days keep sore.",
    symptoms:
      "A tender hollow at the inner wrist crease; the palm side of the little finger feels buzzy and the wrist complains after long typing or phone holding. In classical terms — trouble falling asleep, a heart that thuds on small stresses, and dreams that leave you tired.",
    causes: [
      "Stress, worry and short nights feeding each other",
      "Long phone and keyboard sessions with the wrist bent",
      "Caffeine late in the day",
      "Emotional overload with nowhere to put it down",
    ],
    howToFind:
      "Turn the palm up and find the wrist crease. Slide a fingertip to the little-finger side, just outside the flexor tendon that pops up when you curl the wrist — the hollow right at the crease's edge, where a pulse flutters under the finger, is Shenmen.",
    release: {
      tool: "Thumb of the opposite hand",
      duration: "45–60 seconds per side",
      pressure: "Light-moderate — a soft, spreading calm; this point dislikes force",
      steps: [
        "Support the wrist in your other hand and brace the thumb in the hollow.",
        "Press gently 20 seconds, breathing long, slow exhales.",
        "Make 8 small circles, then sweep from the crease down the palm, 6 passes.",
        "Repeat on the other wrist before bed — the calmer side tells you where to end.",
      ],
      activation:
        "Keep the thumb in the hollow and slowly curl and open the wrist — 8 gentle cycles. The channel's deep flexors glide past the open gate.",
    },
    manualTherapy:
      "A flagship calming point in acupuncture — HT7 is the heart channel's source point, used for insomnia and anxiety protocols, usually with PC6 a hand-width above it and LV3 on the foot. In self-care it is treated with the lightest touch that still feels alive.",
    stretch: {
      name: "Palm-open wrist fold",
      steps: [
        "Extend the arm palm-up and let the hand relax open.",
        "With the other hand, draw the palm back gently at the wrist.",
        "Hold until the inner wrist and palm wake up softly.",
      ],
      hold: "20 seconds × 2 per side",
    },
    prevention: [
      "Press the gate for 20 seconds per wrist as part of the bedtime ritual.",
      "Cut caffeine after mid-afternoon; protect a fixed lights-out time.",
      "On anxious days, pair HT7 with six slow exhales instead of scrolling.",
    ],
    related: ["pc6-neiguan", "li4-hegu", "wrist-flexors"],
  },
  {
    id: "lu5-chize",
    name: "Chize · 尺泽 (LU5)",
    commonName: "The marsh pond",
    lineId: "tcm",
    tcm: {
      pinyin: "Chize",
      hanzi: "尺泽",
      meridian: "lu",
      functions:
        "The he-sea 'pond' of the lung channel at the elbow crease: the classic for a hot, scratchy cough and tight chest, and for the inner-elbow ache that lifting and desk work leave in the crook of the arm.",
    },
    view: "front",
    marker: { x: 148, y: 165 },
    referral: ["elbow-inner", "forearm-inner"],
    painSummary:
      "The pond in the crook of the elbow, on the thumb side of the crease: pressing here cools a hot, scratchy throat-and-cough pattern in Chinese terms and releases the inner-elbow tightness that keyboards, lifting and tennis weeks build up.",
    symptoms:
      "A tender cord in the elbow crook that grabs on lifting a chair or pulling open a heavy door; the inner elbow and upper forearm feel hot and short. Classically — dry cough, sore throat and a chest that feels hot and restless.",
    causes: [
      "Lifting and carrying with a locked, straight elbow",
      "Racquet sports and pulling work at the limit of the arm",
      "Desk weeks with the elbow bent and pinned to the ribs",
      "Colds and dry heated air irritating the airways",
    ],
    howToFind:
      "Bend the elbow 90° and find the crease. Follow it to the thumb side and meet the cord of the biceps tendon — LU5 sits in the hollow just on the outer (thumb) side of that tendon. Pressing reproduces the familiar inner-elbow ache.",
    release: {
      tool: "Thumb of the opposite hand",
      duration: "45–60 seconds per side",
      pressure: "Moderate — sink beside the tendon, spreading ache toward the forearm",
      steps: [
        "Support the bent elbow and brace the thumb beside the biceps cord.",
        "Press 20 seconds with slow breaths, letting the ache spill down the forearm.",
        "Make 8 small circles, then sweep from the crease toward the wrist, 6 passes.",
        "Straighten the arm slowly with the thumb still holding light pressure.",
      ],
      activation:
        "Keep the thumb in the hollow and slowly bend and straighten the elbow — 8 gentle cycles. The deep flexors work right beside the pond.",
    },
    manualTherapy:
      "In tuina the point is kneaded and then 'drained' with a sweeping stroke down the lung channel toward the thumb — the classical way to clear heat. Acupuncturists pair it with LU7 at the wrist for coughs and LI11 across the crease for hot, overworked elbows.",
    stretch: {
      name: "Palm-up straight-arm pull",
      steps: [
        "Extend the arm palm-up and place the fingers in the other palm.",
        "Draw the hand down and back until the inner elbow opens.",
        "Breathe into the stretch for the length of the hold.",
      ],
      hold: "25 seconds × 2 per side",
    },
    prevention: [
      "Carry with a soft, bent elbow — locked arms overload the crease.",
      "Alternate racquet and pulling work with rows and gentle curls.",
      "During cold season, press the pond for 10 seconds as a morning ritual.",
    ],
    related: ["li11-quchi", "wrist-flexors", "pronator-teres"],
  },
  {
    id: "gb31-fengshi",
    name: "Fengshi · 风市 (GB31)",
    commonName: "The wind market",
    lineId: "tcm",
    tcm: {
      pinyin: "Fengshi",
      hanzi: "风市",
      meridian: "gb",
      functions:
        "The 'market where wind gathers' on the gallbladder channel, halfway down the outer thigh: the classic for wind-damp leg aches — heavy, cold, numb-aching outer thighs that ease once the body warms up and moves.",
    },
    view: "front",
    marker: { x: 136, y: 320 },
    referral: ["lateral-thigh", "lateral-knee"],
    painSummary:
      "Halfway down the outer thigh, where the wind 'trades' in Chinese medicine: pressing here disperses the cold, heavy ache that sits along the outer thigh after drafts, long sits and damp weather — the leg that feels better once it warms up and moves.",
    symptoms:
      "A band of heavy, cool ache along the outer thigh, tender on pressing; standing up from a long sit takes a few stiff steps before the leg 'arrives'. Damp, windy weather and cold drafts worsen it; warmth and movement ease it.",
    causes: [
      "Cold drafts and wind on bare legs (classic 'wind' exposure)",
      "Long sitting that stalls circulation along the outer thigh",
      "ITB overload from running and cycling weeks",
      "Damp climates and changeable seasons",
    ],
    howToFind:
      "Stand upright with the arms at the sides — the point lies where the middle fingertip touches the outer thigh, about a hand-width above the knee. Alternatively, find the tender band on the outer thigh line, halfway hip-to-knee.",
    release: {
      tool: "Foam roller, or the heel of the hand",
      duration: "60–90 seconds per side",
      pressure: "Moderate-firm — the outer thigh tolerates and enjoys honest pressure",
      steps: [
        "Lie on your side with the roller just below the hip, or kneel and brace the heel of the hand.",
        "Press 20 seconds on the tender band, breathing slowly.",
        "Roll or sweep from hip to knee, pausing at each dense spot, 8 passes.",
        "Finish with both palms rubbing briskly until the thigh glows warm.",
      ],
      activation:
        "With pressure held on the point, slowly lift the straight leg an inch and lower it — 8 slow lifts. The outer hip works while the 'market' empties.",
    },
    manualTherapy:
      "A flagship point for leg 'wind-damp' in tuina: swept and kneaded along the gallbladder channel with GB30 above and GB34 below, usually after warming — and paired with advice about drafts, air-conditioning and cold floors.",
    stretch: {
      name: "Crossed-ankle side bend",
      steps: [
        "Stand and cross the tight leg behind the other.",
        "Push the hip out and lean away, arm overhead.",
        "Hold until the whole outer line draws taut and breathes.",
      ],
      hold: "30 seconds × 2 per side",
    },
    prevention: [
      "Keep legs covered against drafts, fans and air-conditioning.",
      "Break up sitting: stand, sway and roll the outer thighs hourly.",
      "After runs and rides, roll the outer line for 60 seconds.",
    ],
    related: ["iliotibial-band", "gb34-yanglingquan", "gluteus-medius"],
  },
  {
    id: "st44-neiting",
    name: "Neiting · 内庭 (ST44)",
    commonName: "The inner courtyard",
    lineId: "tcm",
    tcm: {
      pinyin: "Neiting",
      hanzi: "内庭",
      meridian: "st",
      functions:
        "The ying-spring 'inner courtyard' of the stomach channel, between the second and third toes: the classic for clearing heat — a hot, aching front of the foot, tooth-and-gum flare-ups and feverish restlessness.",
    },
    view: "front",
    marker: { x: 113, y: 461 },
    referral: ["top-of-foot", "big-toe", "jaw"],
    painSummary:
      "The courtyard between the second and third toes: a small heat-clearing valve in Chinese medicine — press here for the hot, cramped front of the foot after long walks, and for the tooth-and-jaw heat that flares alongside it.",
    symptoms:
      "A hot, tender spot between the toe tendons after long walking or tight shoes; the front of the foot feels swollen and restless. Classically — toothache, gum heat and mouth ulcers that ride along with stomach 'fire'.",
    causes: [
      "Long walking or standing days, especially in tight shoes",
      "Rich, spicy, fried food and alcohol 'heating' the stomach",
      "Summer heat and overheated rooms",
      "Stress grinding that loads the jaw and the channel at once",
    ],
    howToFind:
      "Trace the tendon of the second toe up from the nail — Neiting sits in the web between the second and third toes, just above the skin fold. The spot is sharply tender when the stomach channel is 'hot'.",
    release: {
      tool: "Thumbnail edge or fingertip",
      duration: "30–45 seconds per side",
      pressure: "Firm but precise — a sharp, clearing ache that fades as the heat 'vents'",
      steps: [
        "Cradle the foot and brace the fingertip in the toe web.",
        "Press 15–20 seconds with slow breaths, letting the sharp ache soften.",
        "Make 8 small circles, then sweep back across the top of the foot, 6 passes.",
        "Repeat on the other foot; the hotter channel will feel noticeably more tender.",
      ],
      activation:
        "Keep the fingertip in the web and slowly fan the toes apart and together — 8 cycles. The channel's spring opens and closes under the pressure.",
    },
    manualTherapy:
      "The distal heat-clearing pair in acupuncture: Neiting with ST36 below the knee to clear stomach fire from top to bottom. In foot massage, the webs of all three clefts are spread and pressed as a standard closing sequence.",
    stretch: {
      name: "Toe spread and floss",
      steps: [
        "Sit cross-legged and interlace the fingers between the toes.",
        "Gently squeeze and release, flossing the toe webs.",
        "Finish by fanning the toes wide and pointing and flexing the foot.",
      ],
      hold: "20 seconds × 2 per foot",
    },
    prevention: [
      "Give the toes room: wide toe boxes on long walking days.",
      "After rich or spicy meals, favor cooling foods and slower evenings.",
      "Press the toe webs for 10 seconds as part of the nightly foot check.",
    ],
    related: ["lr3-taichong", "gb41-zulinqi", "st36-zusanli"],
  },
];
