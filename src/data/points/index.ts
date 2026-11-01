import type { TriggerPoint } from "../types";
import { SBL_POINTS } from "./sbl";
import { SFL_POINTS } from "./sfl";
import { LL_POINTS } from "./ll";
import { SPL_POINTS } from "./spl";
import { ARM_POINTS } from "./arms";
import { DEEP_POINTS } from "./deep";
import { TCM_POINTS_A } from "./tcm-points-a";
import { TCM_POINTS_B } from "./tcm-points-b";
import { TCM_POINTS_C } from "./tcm-points-c";
import { TCM_POINTS_D } from "./tcm-points-d";

export const TRIGGER_POINTS: TriggerPoint[] = [
  ...SBL_POINTS,
  ...SFL_POINTS,
  ...LL_POINTS,
  ...SPL_POINTS,
  ...ARM_POINTS,
  ...DEEP_POINTS,
  ...TCM_POINTS_A,
  ...TCM_POINTS_B,
  ...TCM_POINTS_C,
  ...TCM_POINTS_D,
];

export const POINT_MAP: Record<string, TriggerPoint> = Object.fromEntries(
  TRIGGER_POINTS.map((p) => [p.id, p])
);

export const pointsByLine = (lineId: string): TriggerPoint[] =>
  TRIGGER_POINTS.filter((p) => p.lineId === lineId);
