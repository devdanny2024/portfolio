"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutJson = `{
  "name": "Olukayode Soliu",
  "alias": "Dev Danny",
  "role": "Full Stack Engineer",
  "location": "Nigeria",
  "focus": [
    "AI Integrations",
    "Fintech Systems",
    "Real-time Platforms",
    "Streaming Tech"
  ],
  "platforms": [
    "Ally — WhatsApp AI Tutor",
    "Wanzami — Streaming",
    "CreditPath — Fintech",
    "UK2ME — E-commerce"
  ],
  "status": "open to work",
  "available": true
}`;

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const codeBlockRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 60, skewY: 4 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.9, ease: "power4.out" },
          "-=0.3"
        )
        .fromTo(
          bioRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          chipsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          btnRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );

      gsap.fromTo(
        orbRef.current,
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        codeBlockRef.current,
        { opacity: 0, x: 80, rotateY: -10 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-32 md:py-44 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-32 items-center">
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-10">
            {/* Label */}
            <div ref={labelRef} className="flex items-center gap-4">
              <span
                className="font-mono text-xs tracking-[0.3em] uppercase"
                style={{ color: "#7c3aed" }}
              >
                About Me
              </span>
              <div
                className="h-px flex-1 max-w-[80px]"
                style={{
                  background:
                    "linear-gradient(to right, #7c3aed, transparent)",
                }}
              />
            </div>

            {/* Heading */}
            <h2
              ref={headingRef}
              className="font-display text-5xl md:text-6xl xl:text-7xl leading-none tracking-tight"
              style={{ color: "#f5f5f5" }}
            >
              I BUILD{" "}
              <span
                className="gradient-text"
                style={{
                  background:
                    "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                THINGS
              </span>
              <br />
              THAT MATTER
            </h2>

            {/* Bio paragraphs */}
            <div
              ref={bioRef}
              className="flex flex-col gap-5 text-base leading-relaxed"
              style={{ color: "#a1a1aa" }}
            >
              <p>
                I&apos;m a Full Stack Engineer with a deep focus on AI
                integrations, fintech infrastructure, and real-time systems. I
                don&apos;t just write code — I architect solutions that handle
                real load, real users, and real consequences.
              </p>
              <p>
                I&apos;ve shipped production platforms across Nigeria and
                beyond: <strong style={{ color: "#e4e4e7" }}>Ally</strong>, a
                WhatsApp-native AI tutor live at{" "}
                <a
                  href="https://allyhomework.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#7c3aed" }}
                  className="hover:underline underline-offset-2"
                >
                  allyhomework.com
                </a>
                ;{" "}
                <strong style={{ color: "#e4e4e7" }}>Wanzami</strong>, a
                full-scale streaming platform;{" "}
                <strong style={{ color: "#e4e4e7" }}>CreditPath</strong>,
                bringing credit scoring to Nigeria&apos;s unbanked; and{" "}
                <strong style={{ color: "#e4e4e7" }}>UK2ME</strong>, an
                e-commerce automation engine.
              </p>
              <p>
                I&apos;m obsessed with performance, clean architecture, and
                tools that solve real problems for real people. If it ships,
                it&apos;s tested. If it&apos;s tested, it&apos;s fast.
              </p>
            </div>

            {/* Chips */}
            <div ref={chipsRef} className="flex flex-wrap gap-3">
              {["Based in Nigeria", "Available for Projects"].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-mono"
                  style={{
                    borderColor: "rgba(124, 58, 237, 0.4)",
                    color: "#a78bfa",
                    background: "rgba(124, 58, 237, 0.08)",
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full animate-pulse"
                    style={{ background: "#06b6d4" }}
                  />
                  {chip}
                </span>
              ))}
            </div>

            {/* Download CV button */}
            <div>
              <a
                ref={btnRef}
                href="mailto:soliupeter@gmail.com?subject=CV Request — Olukayode Soliu&body=Hi Danny, I would like to request your CV."
                className="group relative inline-flex items-center gap-3 rounded-lg px-7 py-3.5 text-sm font-mono font-medium transition-all duration-300"
                style={{ color: "#e4e4e7" }}
              >
                {/* Gradient border via pseudo-element simulation */}
                <span
                  className="pointer-events-none absolute inset-0 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #7c3aed, #06b6d4)",
                    padding: "1px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <span
                  className="pointer-events-none absolute inset-[1px] rounded-[7px]"
                  style={{ background: "#0a0a0a" }}
                />
                <span className="relative flex items-center gap-3">
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V4"
                    />
                  </svg>
                  Download CV
                </span>
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Decorative orb */}
            <div
              ref={orbRef}
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full blur-[100px] opacity-30"
              style={{
                background:
                  "radial-gradient(circle, #7c3aed 0%, #06b6d4 60%, transparent 100%)",
              }}
            />

            {/* Code block / terminal */}
            <div
              ref={codeBlockRef}
              className="relative w-full max-w-md rounded-2xl border overflow-hidden"
              style={{
                borderColor: "rgba(124, 58, 237, 0.25)",
                background: "rgba(15, 15, 20, 0.9)",
                boxShadow:
                  "0 0 0 1px rgba(124,58,237,0.1), 0 24px 80px rgba(124,58,237,0.15), 0 0 120px rgba(6,182,212,0.05)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Terminal title bar */}
              <div
                className="flex items-center gap-2 border-b px-5 py-3.5"
                style={{
                  borderColor: "rgba(124, 58, 237, 0.2)",
                  background: "rgba(124, 58, 237, 0.06)",
                }}
              >
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
                <span
                  className="ml-3 font-mono text-xs"
                  style={{ color: "#71717a" }}
                >
                  about.json
                </span>
              </div>

              {/* Code content */}
              <pre
                className="overflow-x-auto px-6 py-6 font-mono text-sm leading-relaxed"
                style={{ color: "#a1a1aa" }}
              >
                {aboutJson.split("\n").map((line, i) => {
                  // Colour keys violet, strings cyan, booleans/numbers amber
                  const keyMatch = line.match(/^(\s*)"([^"]+)"(\s*:\s*)(.*)/);
                  if (keyMatch) {
                    const [, indent, key, colon, rest] = keyMatch;
                    const valueColor = rest.startsWith('"')
                      ? "#06b6d4"
                      : rest === "true" || rest === "false"
                      ? "#f59e0b"
                      : "#e4e4e7";
                    return (
                      <span key={i} className="block">
                        {indent}
                        <span style={{ color: "#a78bfa" }}>&quot;{key}&quot;</span>
                        <span style={{ color: "#71717a" }}>{colon}</span>
                        <span style={{ color: valueColor }}>{rest}</span>
                      </span>
                    );
                  }
                  return (
                    <span key={i} className="block" style={{ color: "#52525b" }}>
                      {line}
                    </span>
                  );
                })}
              </pre>

              {/* Bottom glow line */}
              <div
                className="h-px w-full"
                style={{
                  background:
                    "linear-gradient(to right, transparent, #7c3aed, #06b6d4, transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
