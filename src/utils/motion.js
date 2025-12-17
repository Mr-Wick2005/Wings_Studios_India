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
      scale: 0.9,
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
