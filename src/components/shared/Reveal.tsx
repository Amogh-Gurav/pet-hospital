import { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE_OUT, fadeUp, viewportOnce } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
