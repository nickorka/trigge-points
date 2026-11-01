import type { RuTcmPointText } from "./types";
import { TCM_POINTS_A_RU } from "./points-tcm-a";
import { TCM_POINTS_B_RU } from "./points-tcm-b";
import { TCM_POINTS_C_RU } from "./points-tcm-c";
import { TCM_POINTS_D_RU } from "./points-tcm-d";

/**
 * Russian overlays for the Chinese-medicine acupoints.
 * Aggregates the four translation batches (A: neck/back/hip/hand,
 * B: forearm/face/leg/foot, C: elbow/spine/knee/ankle, D: shoulder/hand/
 * ear/ankle/brow/knee/chest/abdomen) into the single record consumed by
 * src/data/localized.ts.
 */
export const TCM_POINTS_RU: Record<string, RuTcmPointText> = {
  ...TCM_POINTS_A_RU,
  ...TCM_POINTS_B_RU,
  ...TCM_POINTS_C_RU,
  ...TCM_POINTS_D_RU,
};
