import { Variants } from "framer-motion";

export const navigationVariants: Variants = {
  initial: {
    x: "5vh",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    x: "5vh",
    opacity: 0,
    transition: { duration: 0.4 },
  },
};
