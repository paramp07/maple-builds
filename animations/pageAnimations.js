export const translate = {
  initial: {
    y: 20,
  },
  animate: {
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.2,
    },
  },
};

export const fadeUp = {
  initial: {
    y: "50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.2,
    },
  },
};

export const reveal = {
  initial: {
    clipPath: "inset(40% 0% 0% 0%)",
    opacity: 0,
  },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: 1.3,
      ease: [0.33, 1, 0.68, 1],
      delay: .8,
    },
  },
};

export const textFadeUp = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.3,
    },
  },
};