"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

const hidden: Record<Direction, string> = {
  up: "opacity-0 translate-y-10 max-md:blur-none md:translate-y-14 md:blur-[2px]",
  down: "opacity-0 -translate-y-10 max-md:blur-none md:-translate-y-14 md:blur-[2px]",
  left: "opacity-0 translate-x-10 max-md:blur-none md:translate-x-16 md:blur-[2px]",
  right: "opacity-0 -translate-x-10 max-md:blur-none md:-translate-x-16 md:blur-[2px]",
  scale: "opacity-0 scale-[0.92] max-md:blur-none md:scale-[0.88] md:blur-[3px]",
  fade: "opacity-0 max-md:blur-none md:blur-[2px]",
};

const visibleClass =
  "opacity-100 translate-x-0 translate-y-0 scale-100 blur-0";

type RevealProps = {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  once?: boolean;
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-ease transition-all duration-1000 will-change-[transform,opacity,filter] ${
        visible ? visibleClass : hidden[direction]
      } ${className}`}
    >
      {children}
    </div>
  );
}
