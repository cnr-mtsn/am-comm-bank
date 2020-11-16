const pageVariants = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};
const homePageVariants = {
  in: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
};
const pageTransition = {
  transition: "tween",
  type: "anticipate",
  duration: 0.6,
};
const cardVariants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    scale: 0,
    y: "100vh",
  },
};
const cardTransition = {
  duration: 1,
};

export {
  pageVariants,
  pageTransition,
  homePageVariants,
  cardVariants,
  cardTransition,
};
