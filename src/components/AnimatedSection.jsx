import { motion } from "framer-motion";

/**
 * Animated wrapper for sections
 * Automatically animates when the section enters view
 * You can set direction = "up" | "left" | "right" | "zoom"
 */
export default function AnimatedSection({ children, delay = 0, direction = "up" }) {
  const directions = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    zoom: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  };

  const variant = directions[direction] || directions.up;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variant}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
