/** Four-step engagement process. `key` → messages → Process.steps.<key>.{title,description}. */
export const processSteps = ["inspection", "diagnosis", "intervention", "report"] as const;

export type ProcessStep = (typeof processSteps)[number];
