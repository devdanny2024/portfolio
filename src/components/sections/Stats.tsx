"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: number | null;
  suffix: string;
  label: string;
  symbol?: string; // used for the infinity stat
}

const STATS: Stat[] = [
  { value: 22, suffix: "+", label: "Projects Shipped" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Platforms Live" },
  { value: null, suffix: "", label: "Coffee Consumed", symbol: "∞" },
];

function StatCounter({ stat, index }: { stat: Stat; index: number }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!isInView) return;
    if (stat.value === null) return; // infinity — no count-up

    const el = numRef.current;
    if (!el) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: stat.value,
      duration: 2,
      delay: index * 0.15,
      ease: "power2.out",
      onUpdate() {
        el.textContent = Math.round(obj.val).toString();
      },
      onComplete() {
        el.textContent = stat.value!.toString();
      },
    });
  }, [isInView, stat.value, index]);

  return (
    <div ref={cardRef} className="relative flex flex-col items-center gap-4 px-10 py-10">
      {/* Big number */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-baseline gap-1 leading-none"
      >
        {stat.symbol ? (
          <span
            className="font-display text-6xl md:text-7xl xl:text-8xl"
            style={{
              background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {stat.symbol}
          </span>
        ) : (
          <>
            <span
              ref={numRef}
              className="font-display text-6xl md:text-7xl xl:text-8xl tabular-nums"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              0
            </span>
            {stat.suffix && (
              <span
                className="font-display text-4xl md:text-5xl xl:text-6xl"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.suffix}
              </span>
            )}
          </>
        )}
      </motion.div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.12 + 0.2, ease: "easeOut" }}
        className="font-mono text-xs tracking-[0.2em] uppercase text-center"
        style={{ color: "#71717a" }}
      >
        {stat.label}
      </motion.p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background: "#111111",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Top gradient accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, #7c3aed 30%, #06b6d4 70%, transparent 100%)",
        }}
      />

      {/* Bottom gradient accent line */}
      <div
        className="absolute inset-x-0 bottom-0 h-px opacity-40"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, #7c3aed 30%, #06b6d4 70%, transparent 100%)",
        }}
      />

      {/* Subtle radial glow center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="relative flex">
              <StatCounter stat={stat} index={i} />

              {/* Vertical divider — hidden after last item, hidden on mobile for middle dividers */}
              {i < STATS.length - 1 && (
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-px hidden lg:block"
                  style={{
                    height: "60%",
                    background:
                      "linear-gradient(to bottom, transparent, rgba(124,58,237,0.3), transparent)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
