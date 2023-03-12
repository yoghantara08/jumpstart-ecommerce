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

export const adminSidebarVariants: Variants = {
  initial: {
    x: "-50vh",
  },
  animate: {
    x: 0,
    transition: { duration: 0.2 },
  },
  exit: {
    x: "-50vh",
    transition: { duration: 0.2 },
  },
};
