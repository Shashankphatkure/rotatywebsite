"use client";
import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

export default function AnimatedCounter({
  from,
  to,
  duration = 2,
  className = "",
}) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        node.textContent = value.toLocaleString("en-US", {
          maximumFractionDigits: 0,
        });
      },
    });

    return () => controls.stop();
  }, [from, to, duration]);

  return <span ref={nodeRef} className={className} />;
}
