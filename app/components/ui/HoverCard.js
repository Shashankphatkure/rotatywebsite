"use client";
import { motion } from "framer-motion";
import Card from "./Card";

export default function HoverCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className={`h-full ${className}`}>{children}</Card>
    </motion.div>
  );
}
