"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/** Hero photograph with a gentle scroll parallax (disabled for reduced motion). */
export function HeroMedia() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div className="absolute -inset-y-[8%] inset-x-0" style={reduce ? undefined : { y }}>
        <Image
          src="/images/hero-tower.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_50%] grayscale"
        />
      </motion.div>
    </div>
  );
}
