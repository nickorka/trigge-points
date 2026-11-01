import type { MyofascialLine, TcmPointInfo, TriggerPoint } from "@/data/types";

/**
 * Russian text overlays.
 *
 * Structural fields (id, lineId, view, marker, referral, related, color,
 * abbr, family) are locale-independent and stay in the English source files.
 * Every user-visible text field is overridden here — the typed overlay makes
 * an incomplete translation a compile error, and the merge step warns at
 * runtime if a point id has no Russian entry.
 */
export type RuPointText = Pick<
  TriggerPoint,
  | "name"
  | "commonName"
  | "painSummary"
  | "symptoms"
  | "causes"
  | "howToFind"
  | "release"
  | "manualTherapy"
  | "stretch"
  | "prevention"
>;

/**
 * Overlay for TCM acupoints: all RuPointText fields plus the full `tcm`
 * block (pinyin/hanzi/meridian are copied verbatim; functions/cautions are
 * translated). Replaces the whole `tcm` object on merge.
 */
export type RuTcmPointText = RuPointText & {
  tcm: Pick<TcmPointInfo, "pinyin" | "hanzi" | "meridian" | "functions" | "cautions">;
};

export type RuLineText = Pick<
  MyofascialLine,
  "name" | "side" | "summary" | "track" | "painThemes"
>;
