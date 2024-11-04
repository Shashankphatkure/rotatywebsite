"use client";
import { motion } from "framer-motion";

export default function TextReveal({ children, delay = 0 }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.5,
          delay,
          ease: [0.6, 0.01, -0.05, 0.95],
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
}
