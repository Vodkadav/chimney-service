/** Four-step engagement process. `key` → messages → Process.steps.<key>.{title,description}. */
export const processSteps = ["contact", "assess", "service", "certify"] as const;

export type ProcessStep = (typeof processSteps)[number];
