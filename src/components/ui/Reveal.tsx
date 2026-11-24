"use client";

import { motion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { useLocale } from "@/i18n/use-locale";

/** Wraps the app so every animation honours the user's reduced-motion setting. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type From = "up" | "start" | "end" | "scale" | "wipe";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  /** Where the block comes from. `start`/`end` follow the reading direction (flip in Arabic). */
  from?: From;
  className?: string;
  as?: "div" | "li";
};

const ease = [0.16, 1, 0.3, 1] as const;

/** Fade-and-slide when a block scrolls into view. Plays once. Reduced motion → opacity only. */
export function Reveal({ children, delay = 0, from = "up", className, as = "div" }: RevealProps) {
  const rtl = useLocale() === "ar";
  const dir = rtl ? -1 : 1;
  const Tag = as === "li" ? motion.li : motion.div;

  const initial =
    from === "start"
      ? { opacity: 0, x: -70 * dir }
      : from === "end"
        ? { opacity: 0, x: 70 * dir }
        : from === "scale"
          ? { opacity: 0, scale: 0.92, y: 24 }
          : from === "wipe"
            ? { opacity: 1, clipPath: rtl ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" }
            : { opacity: 0, y: 48 };
  const shown =
    from === "wipe"
      ? { opacity: 1, clipPath: "inset(0 0% 0 0%)" }
      : { opacity: 1, x: 0, y: 0, scale: 1 };

  return (
    <Tag
      className={className}
      initial={initial}
      whileInView={shown}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: from === "wipe" ? 1.1 : 0.95, delay, ease }}
    >
      {children}
    </Tag>
  );
}
