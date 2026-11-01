export type BodyView = "front" | "back";
export type LineId =
  | "sbl"
  | "sfl"
  | "ll"
  | "spl"
  | "sfal"
  | "dfal"
  | "sbal"
  | "dbal"
  | "ffl"
  | "bfl"
  | "dfl";

/** A shaded ellipse used to render a referred-pain zone on the body schematic. */
export interface ReferralRegion {
  id: string;
  view: BodyView;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  rot?: number;
  label?: string;
}

/**
 * Chinese-medicine metadata attached to acupoint entries
 * (points whose `lineId` is "tcm" instead of an Anatomy Trains line).
 */
export interface TcmPointInfo {
  pinyin: string;
  hanzi: string;
  /** id in TCM_MERIDIAN_MAP (src/data/tcm.ts), e.g. "gb", "bl", "extra". */
  meridian: string;
  /** What the point does in TCM terms (functions/indications). */
  functions: string;
  /** Optional safety caution (pregnancy, vessels, ...). */
  cautions?: string;
}

export interface ReleaseProtocol {
  tool: string;
  duration: string;
  pressure: string;
  steps: string[];
  activation: string;
}

export interface StretchProtocol {
  name: string;
  steps: string[];
  hold: string;
}

export interface TriggerPoint {
  id: string;
  name: string;
  commonName: string;
  /** An Anatomy Trains line id — or "tcm" for classical Chinese-medicine acupoints. */
  lineId: LineId | "tcm";
  /** Present iff lineId === "tcm". */
  tcm?: TcmPointInfo;
  view: BodyView;
  marker: { x: number; y: number };
  referral: string[];
  painSummary: string;
  symptoms: string;
  causes: string[];
  howToFind: string;
  release: ReleaseProtocol;
  manualTherapy: string;
  stretch: StretchProtocol;
  prevention: string[];
  related?: string[];
}

export interface MyofascialLine {
  /** An Anatomy Trains line id — or "tcm" for the virtual acupoint system. */
  id: LineId | "tcm";
  abbr: string;
  name: string;
  color: string;
  family: "core" | "arm" | "functional" | "deep";
  side: string;
  summary: string;
  track: string[];
  painThemes: string;
  view: BodyView | "both";
}
