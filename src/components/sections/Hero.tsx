"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const ROLES = ["Full Stack Engineer", "AI Builder", "Systems Architect", "Product Engineer"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLDivElement>(null);
  const lastNameRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  // Parallax orb on mouse move
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      gsap.to(orbRef.current, { x, y, duration: 1.2, ease: "power2.out" });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.8 });

    tl.fromTo(
      firstNameRef.current,
      { y: 120, opacity: 0, skewY: 5 },
      { y: 0, opacity: 1, skewY: 0, duration: 1, ease: "power4.out" }
    )
      .fromTo(
        lastNameRef.current,
        { y: 120, opacity: 0, skewY: 5 },
        { y: 0, opacity: 1, skewY: 0, duration: 1, ease: "power4.out" },
        "-=0.7"
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.2"
      );
  }, []);

  // Scroll-driven parallax
  useEffect(() => {
    if (!containerRef.current) return;
    gsap.to(firstNameRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to(lastNameRef.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: true },
    });
  }, []);

  // Role text cycle
  useEffect(() => {
    let i = 0;
    const cycle = () => {
      if (!roleRef.current) return;
      gsap.to(roleRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        onComplete: () => {
          i = (i + 1) % ROLES.length;
          if (roleRef.current) roleRef.current.textContent = ROLES[i];
          gsap.fromTo(roleRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 });
        },
      });
    };
    const interval = setInterval(cycle, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Gradient orbs */}
      <div
        ref={orbRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent-violet/20 via-accent-mid/10 to-accent-cyan/20 blur-[120px]" />
      </div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-accent-cyan/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-accent-violet/10 blur-[100px] pointer-events-none" />

      {/* Floating tag — left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.5, duration: 0.6 }}
        style={{
          position: "absolute",
          top: "25%",
          left: "48px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div style={{ width: "32px", height: "1px", background: "#7c3aed" }} />
        <span style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.25em", textTransform: "uppercase" }}>
          Based in Nigeria
        </span>
      </motion.div>

      {/* Floating tag — right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.6, duration: 0.6 }}
        style={{
          position: "absolute",
          top: "25%",
          right: "48px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.25em", textTransform: "uppercase" }}>
          Available for Projects
        </span>
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block", animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }} />
      </motion.div>

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 clamp(20px, 5vw, 48px)", width: "100%", maxWidth: "1280px", margin: "0 auto" }}>
        {/* Alias label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-3"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent-violet" />
          <span className="font-mono text-xs text-accent-violet tracking-[0.3em] uppercase">
            devdanny2024
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent-violet" />
        </motion.div>

        {/* Name — massive display */}
        <div className="overflow-hidden mb-1">
          <div
            ref={firstNameRef}
            className="font-display text-[clamp(4rem,15vw,14rem)] leading-[0.88] tracking-tight text-white"
            style={{ opacity: 0 }}
          >
            OLUKAYODE
          </div>
        </div>
        <div className="overflow-hidden mb-6">
          <div
            ref={lastNameRef}
            className="font-display text-[clamp(4rem,15vw,14rem)] leading-[0.88] tracking-tight gradient-text"
            style={{ opacity: 0 }}
          >
            SOLIU
          </div>
        </div>

        {/* Animated role subtitle */}
        <div ref={subtitleRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10" style={{ opacity: 0 }}>
          <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
            &lt;role&gt;
          </span>
          <span
            ref={roleRef}
            className="text-white/70 text-lg font-light tracking-wide min-w-[220px] text-center"
          >
            {ROLES[0]}
          </span>
          <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
            &lt;/role&gt;
          </span>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#work"
            style={{
              padding: "16px 32px",
              borderRadius: "9999px",
              background: "linear-gradient(to right, #7c3aed, #06b6d4)",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "0.05em",
              boxShadow: "0 0 24px rgba(124,58,237,0.4)",
            }}
          >
            View My Work
          </MagneticButton>
          <MagneticButton
            href="mailto:soliupeter@gmail.com"
            style={{
              padding: "16px 32px",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "0.05em",
              background: "transparent",
            }}
          >
            Get In Touch
          </MagneticButton>
        </motion.div>
      </div>

      {/* Floating tech stack strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.8 }}
        className="absolute bottom-24 left-0 right-0 overflow-hidden pointer-events-none"
      >
        <div className="flex gap-6 animate-[marquee_20s_linear_infinite] whitespace-nowrap opacity-20">
          {["Next.js", "TypeScript", "React", "Flutter", "Node.js", "AWS", "Terraform", "Claude AI", "PostgreSQL", "Docker", "GSAP", "Framer Motion",
            "Next.js", "TypeScript", "React", "Flutter", "Node.js", "AWS", "Terraform", "Claude AI", "PostgreSQL", "Docker", "GSAP", "Framer Motion"].map(
            (tech, i) => (
              <span key={i} className="font-mono text-xs text-white tracking-widest uppercase">
                {tech} <span className="text-accent-violet mx-2">·</span>
              </span>
            )
          )}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0 }}
      >
        <span className="font-mono text-xs text-white/20 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-violet to-transparent"
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            style={{ height: "40%" }}
          />
        </div>
      </div>

    </section>
  );
}
