// utils/motion.js

export const tiltZoomIn = (delay = 0, duration = 1.4) => {
  return {
    hidden: {
      opacity: 0,
      scale: 1.05,
      rotateX: 10,
      rotateZ: -1,
    },
    show: {
      opacity: 1,
      scale: 0.75,
      rotateX: 0,
      rotateZ: 0,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};

export const cardTiltFadeUp = (delay = 0, duration = 1.2) => {
  return {
    hidden: {
      opacity: 0,
      y: 45,
      scale: 0.92,
      rotateX: 10,
    },
    show: {
      opacity: 1,
      y: 95,
      scale: 0.7,
      rotateX: 0,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};

export const fadeUpStagger = (index = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};

export const hoverZoom = {
  scale: 1.05,
};

export const dividerGrow = (index = 0) => {
  return {
    hidden: { width: 0 },
    show: {
      width: "40px",
      transition: {
        duration: 0.6,
        delay: 0.4 + index * 0.1,
        ease: "easeOut",
      },
    },
  };
};
