"use client";

export type RevealDirection = "up" | "left" | "right";

const hiddenByDirection = {
  up: { opacity: 0, y: 28 },
  left: { opacity: 0, x: -36 },
  right: { opacity: 0, x: 36 },
} as const;

export const revealViewport = {
  once: true,
  amount: 0.2,
};

export const revealIn = (
  direction: RevealDirection = "up",
  delay = 0
) => ({
  initial: hiddenByDirection[direction],
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: revealViewport,
  transition: {
    duration: 0.6,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});

export const revealSequence = (index: number, delayStep = 0.08) => {
  const directions: RevealDirection[] = ["left", "up", "right"];
  return revealIn(directions[index % directions.length], index * delayStep);
};
