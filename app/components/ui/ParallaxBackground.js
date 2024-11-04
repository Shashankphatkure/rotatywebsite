"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBackground({ children, className = "" }) {
  const containerRef = useRef();
  const backgroundRef = useRef();

  useEffect(() => {
    const element = backgroundRef.current;

    gsap.to(element, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={backgroundRef} className="absolute inset-0 z-0">
        {children}
      </div>
    </div>
  );
}
