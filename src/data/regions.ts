import type { ReferralRegion } from "./types";

/**
 * Referred-pain zones drawn as soft ellipses on the 220x480 body schematic.
 * Center x = 110. Coordinates were placed against the shared body silhouette.
 * Region ids are referenced by TriggerPoint.referral.
 */
export const REGIONS: ReferralRegion[] = [
  // ---------- head & neck ----------
  { id: "temple", view: "front", cx: 128, cy: 30, rx: 6, ry: 5, label: "Temple" },
  { id: "orbit", view: "front", cx: 123, cy: 33, rx: 5, ry: 4, label: "Eye / brow" },
  { id: "forehead", view: "front", cx: 110, cy: 21, rx: 13, ry: 7, label: "Forehead" },
  { id: "vertex", view: "front", cx: 110, cy: 12, rx: 8, ry: 5, label: "Top of head" },
  { id: "vertex-b", view: "back", cx: 110, cy: 14, rx: 9, ry: 6, label: "Top of head" },
  { id: "occiput", view: "back", cx: 110, cy: 24, rx: 12, ry: 8, label: "Back of head" },
  { id: "jaw", view: "front", cx: 126, cy: 44, rx: 6, ry: 7, label: "Jaw / teeth" },
  { id: "ear", view: "front", cx: 131, cy: 36, rx: 4, ry: 5, label: "Ear" },
  { id: "neck-side", view: "front", cx: 120, cy: 62, rx: 5, ry: 8, label: "Side of neck" },
  { id: "neck-back", view: "back", cx: 110, cy: 66, rx: 10, ry: 9, label: "Back of neck" },
  { id: "suboccipital", view: "back", cx: 110, cy: 56, rx: 9, ry: 6, label: "Base of skull" },
  { id: "throat", view: "front", cx: 110, cy: 66, rx: 7, ry: 6, label: "Throat" },

  // ---------- shoulder / chest / upper back ----------
  { id: "shoulder-front", view: "front", cx: 146, cy: 96, rx: 12, ry: 9, label: "Shoulder" },
  { id: "shoulder-back", view: "back", cx: 146, cy: 96, rx: 12, ry: 9, label: "Shoulder" },
  { id: "clavicle", view: "front", cx: 130, cy: 89, rx: 14, ry: 4, label: "Collarbone area" },
  { id: "pec", view: "front", cx: 126, cy: 114, rx: 14, ry: 11, label: "Chest" },
  { id: "chest-central", view: "front", cx: 110, cy: 120, rx: 8, ry: 12, label: "Behind sternum" },
  { id: "upper-chest", view: "front", cx: 110, cy: 100, rx: 16, ry: 8, label: "Upper chest" },
  { id: "scapula", view: "back", cx: 89, cy: 112, rx: 14, ry: 14, label: "Shoulder blade" },
  { id: "scapula-border", view: "back", cx: 99, cy: 122, rx: 4, ry: 15, label: "Inner shoulder-blade border" },
  { id: "infraspinatus-area", view: "back", cx: 86, cy: 122, rx: 10, ry: 8, label: "Below spine of shoulder blade" },
  { id: "supraspinatus-area", view: "back", cx: 92, cy: 98, rx: 9, ry: 5, label: "Above shoulder blade" },
  { id: "midback", view: "back", cx: 110, cy: 140, rx: 16, ry: 24, label: "Mid back" },
  { id: "axilla", view: "front", cx: 137, cy: 118, rx: 7, ry: 7, label: "Armpit" },
  { id: "axilla-b", view: "back", cx: 137, cy: 118, rx: 7, ry: 7, label: "Armpit" },
  { id: "lateral-ribs", view: "front", cx: 132, cy: 146, rx: 7, ry: 16, label: "Side of ribs" },
  { id: "back-ribs", view: "back", cx: 129, cy: 152, rx: 8, ry: 14, label: "Back of ribs" },
  { id: "lower-ribs", view: "front", cx: 110, cy: 154, rx: 18, ry: 8, label: "Lower ribs" },

  // ---------- abdomen / pelvis / low back ----------
  { id: "abdomen", view: "front", cx: 110, cy: 182, rx: 14, ry: 20, label: "Abdomen" },
  { id: "abdomen-side", view: "front", cx: 125, cy: 186, rx: 6, ry: 15, label: "Flank" },
  { id: "lowback", view: "back", cx: 110, cy: 212, rx: 13, ry: 15, label: "Low back" },
  { id: "lowback-side", view: "back", cx: 94, cy: 208, rx: 7, ry: 12, label: "Low back (one side)" },
  { id: "sacrum", view: "back", cx: 110, cy: 246, rx: 10, ry: 12, label: "Sacrum" },
  { id: "buttock", view: "back", cx: 126, cy: 252, rx: 14, ry: 14, label: "Buttock" },
  { id: "hip-crest", view: "back", cx: 129, cy: 216, rx: 10, ry: 8, label: "Iliac crest" },
  { id: "groin", view: "front", cx: 119, cy: 248, rx: 9, ry: 8, label: "Groin" },
  { id: "perineum", view: "back", cx: 110, cy: 268, rx: 7, ry: 6, label: "Pelvic floor" },

  // ---------- hip / thigh ----------
  { id: "lateral-hip", view: "front", cx: 134, cy: 256, rx: 8, ry: 12, label: "Side of hip" },
  { id: "lateral-hip-b", view: "back", cx: 134, cy: 256, rx: 8, ry: 12, label: "Side of hip" },
  { id: "anterior-thigh", view: "front", cx: 112, cy: 296, rx: 13, ry: 28, label: "Front of thigh" },
  { id: "inner-thigh", view: "front", cx: 96, cy: 285, rx: 8, ry: 24, label: "Inner thigh" },
  { id: "posterior-thigh", view: "back", cx: 114, cy: 300, rx: 12, ry: 26, label: "Back of thigh" },
  { id: "lateral-thigh", view: "front", cx: 132, cy: 302, rx: 7, ry: 26, label: "Outer thigh" },
  { id: "lateral-thigh-b", view: "back", cx: 132, cy: 302, rx: 7, ry: 26, label: "Outer thigh" },

  // ---------- knee ----------
  { id: "medial-knee", view: "front", cx: 95, cy: 345, rx: 7, ry: 8, label: "Inner knee" },
  { id: "knee-front", view: "front", cx: 110, cy: 350, rx: 8, ry: 9, label: "Front of knee" },
  { id: "popliteal", view: "back", cx: 110, cy: 350, rx: 8, ry: 9, label: "Back of knee" },
  { id: "lateral-knee", view: "front", cx: 127, cy: 348, rx: 6, ry: 8, label: "Outer knee" },

  // ---------- lower leg / foot ----------
  { id: "calf", view: "back", cx: 117, cy: 384, rx: 11, ry: 16, label: "Calf" },
  { id: "achilles", view: "back", cx: 110, cy: 424, rx: 5, ry: 12, label: "Achilles tendon" },
  { id: "shin", view: "front", cx: 114, cy: 390, rx: 7, ry: 20, label: "Shin" },
  { id: "lateral-lower-leg", view: "front", cx: 123, cy: 400, rx: 6, ry: 16, label: "Outer lower leg" },
  { id: "inner-lower-leg", view: "front", cx: 100, cy: 386, rx: 6, ry: 13, label: "Inner lower leg" },
  { id: "deep-calf", view: "back", cx: 110, cy: 388, rx: 7, ry: 13, label: "Deep calf" },
  { id: "lateral-ankle", view: "front", cx: 121, cy: 434, rx: 5, ry: 6, label: "Outer ankle" },
  { id: "medial-ankle", view: "front", cx: 99, cy: 434, rx: 4, ry: 6, label: "Inner ankle" },
  { id: "heel", view: "back", cx: 110, cy: 450, rx: 7, ry: 7, label: "Heel" },
  { id: "sole", view: "back", cx: 116, cy: 462, rx: 11, ry: 5, label: "Sole of foot" },
  { id: "arch", view: "back", cx: 111, cy: 457, rx: 7, ry: 4, label: "Arch" },
  { id: "top-of-foot", view: "front", cx: 114, cy: 454, rx: 9, ry: 7, label: "Top of foot" },
  { id: "big-toe", view: "front", cx: 104, cy: 468, rx: 4, ry: 4, label: "Big toe" },

  // ---------- arm ----------
  { id: "deltoid-area", view: "front", cx: 150, cy: 100, rx: 9, ry: 10, label: "Deltoid" },
  { id: "deltoid-area-b", view: "back", cx: 150, cy: 100, rx: 9, ry: 10, label: "Deltoid" },
  { id: "upper-arm-front", view: "front", cx: 148, cy: 132, rx: 8, ry: 18, label: "Upper arm" },
  { id: "upper-arm-back", view: "back", cx: 148, cy: 132, rx: 8, ry: 18, label: "Upper arm" },
  { id: "elbow-outer", view: "front", cx: 154, cy: 156, rx: 6, ry: 6, label: "Outer elbow" },
  { id: "elbow-outer-b", view: "back", cx: 154, cy: 156, rx: 6, ry: 6, label: "Outer elbow" },
  { id: "elbow-inner", view: "front", cx: 143, cy: 156, rx: 6, ry: 6, label: "Inner elbow" },
  { id: "forearm-inner", view: "front", cx: 146, cy: 186, rx: 7, ry: 14, label: "Inner forearm" },
  { id: "forearm-outer", view: "back", cx: 150, cy: 186, rx: 7, ry: 14, label: "Outer forearm" },
  { id: "wrist", view: "back", cx: 150, cy: 205, rx: 6, ry: 5, label: "Wrist" },
  { id: "hand-dorsal", view: "back", cx: 155, cy: 222, rx: 8, ry: 8, label: "Back of hand" },
  { id: "hand-palm", view: "front", cx: 151, cy: 222, rx: 7, ry: 8, label: "Palm" },
  { id: "thumb-web", view: "front", cx: 158, cy: 214, rx: 5, ry: 5, label: "Thumb" },
  { id: "ring-little-fingers", view: "back", cx: 147, cy: 230, rx: 5, ry: 6, label: "Ring & little fingers" },
];

export const REGION_MAP: Record<string, ReferralRegion> = Object.fromEntries(
  REGIONS.map((r) => [r.id, r])
);
