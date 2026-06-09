"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
  isVisible: boolean;
}

export default function Preloader({ onComplete, isVisible }: PreloaderProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    const tl = gsap.timeline({ onComplete });

    tl.to(counterRef.current, {
      innerHTML: 100,
      duration: 2,
      ease: "power2.inOut",
      snap: { innerHTML: 1 },
    })
      .to(
        barRef.current,
        {
          scaleX: 1,
          duration: 2,
          ease: "power2.inOut",
          transformOrigin: "left center",
        },
        "<"
      )
      .to({}, { duration: 0.3 });
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[99998] bg-[#0a0a0a] flex flex-col items-center justify-center"
        >
          {/* Grid background */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-violet/10 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-cyan/10 blur-[100px]" />

          <div className="relative z-10 text-center">
            {/* Name reveal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-2"
            >
              <span className="font-mono text-xs tracking-[0.4em] uppercase text-white/30">
                Loading Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display text-6xl md:text-8xl text-white mb-1 tracking-wider"
            >
              DEV<span className="gradient-text">DANNY</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/30 text-sm font-mono tracking-widest uppercase mb-12"
            >
              Full Stack Engineer
            </motion.p>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-64 h-px bg-white/10 overflow-hidden rounded-full">
                <div
                  ref={barRef}
                  className="h-full bg-gradient-to-r from-accent-violet to-accent-cyan scale-x-0"
                />
              </div>
              <span className="font-mono text-white/40 text-sm">
                <span ref={counterRef}>0</span>%
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
