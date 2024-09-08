// Define the transition configuration object
export const transition: { type: string; duration: number } = { type: "spring", duration: 0.8 };

// Define the slideAnimation function with type annotations
export const slideAnimation = (direction: "left" | "right" | "up" | "down") => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

// Define the fadeAnimation object with types
export const fadeAnimation: {
  initial: { opacity: number; transition: { type: string; duration: number; delay: number } };
  animate: { opacity: number; transition: { type: string; duration: number; delay: number } };
  exit: { opacity: number; transition: { type: string; duration: number; delay: number } };
} = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

// Define the headTextAnimation object with types
export const headTextAnimation: {
  initial: { x: number; opacity: number };
  animate: { x: number; opacity: number };
  transition: {
    type: string;
    damping: number;
    stiffness: number;
    restDelta: number;
    duration: number;
  };
} = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

// Define the headContentAnimation object with types
export const headContentAnimation: {
  initial: { y: number; opacity: number };
  animate: { y: number; opacity: number };
  transition: {
    type: string;
    damping: number;
    stiffness: number;
    restDelta: number;
    duration: number;
    delay: number;
    delayChildren: number;
  };
} = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

// Define the headContainerAnimation object with types
export const headContainerAnimation: {
  initial: { x: number; opacity: number; transition: { type: string; duration: number; delay: number } };
  animate: { x: number; opacity: number; transition: { type: string; duration: number; delay: number } };
  exit: { x: number; opacity: number; transition: { type: string; duration: number; delay: number } };
} = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};
