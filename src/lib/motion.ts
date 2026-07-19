export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const viewportOnce = { once: true, margin: "-80px" } as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerChildren = (delayChildren = 0, staggerAmount = 0.08) => ({
  hidden: {},
  visible: {
    transition: { delayChildren, staggerChildren: staggerAmount },
  },
});
