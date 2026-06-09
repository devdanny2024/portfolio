"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant: "primary" | "ghost";
  target?: string;
  rel?: string;
}

function MagneticButton({
  href,
  children,
  variant,
  target,
  rel,
}: MagneticButtonProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.35;
    const dy = (e.clientY - cy) * 0.35;
    setPos({ x: dx, y: dy });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const primaryStyles: React.CSSProperties = {
    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
    border: "none",
    color: "#ffffff",
    boxShadow: "0 0 24px rgba(124,58,237,0.4)",
  };

  const ghostStyles: React.CSSProperties = {
    background: "transparent",
    border: "1px solid #2a2a2a",
    color: "#aaaaaa",
  };

  return (
    <motion.a
      ref={btnRef}
      href={href}
      target={target}
      rel={rel}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={
        variant === "ghost"
          ? { borderColor: "#7c3aed", color: "#e5e5e5" }
          : { scale: 1.04 }
      }
      className="inline-flex items-center cursor-pointer no-underline"
      style={{
        ...(variant === "primary" ? primaryStyles : ghostStyles),
        padding: "14px 28px",
        borderRadius: "9999px",
        fontFamily: "monospace",
        fontSize: "14px",
        letterSpacing: "0.05em",
        gap: "8px",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {children}
    </motion.a>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        { y: 80, opacity: 0, skewY: 3 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 0.85,
          ease: "power4.out",
          stagger: 0.12,
        }
      )
        .fromTo(
          subtextRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          buttonsRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          badgeRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "clamp(48px,8vw,80px) clamp(20px,5vw,48px)", background: "#0a0a0a" }}
    >
      {/* Glowing gradient orb behind text */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(6,182,212,0.07) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Secondary smaller orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "40%",
          left: "55%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Grid background */}
      <div className="grid-bg absolute inset-0 opacity-20 pointer-events-none" />

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        {/* Section label */}
        <p
          style={{ fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#7c3aed", marginBottom: "32px" }}
        >
          // get in touch
        </p>

        {/* Big atmospheric heading */}
        <h2
          className="font-display leading-none mb-8 overflow-hidden"
          style={{ fontSize: "clamp(4rem, 14vw, 13rem)" }}
        >
          <span
            ref={line1Ref}
            className="block"
            style={{ color: "#f5f5f5", display: "block" }}
          >
            LET'S BUILD
          </span>
          <span
            ref={line2Ref}
            className="block"
            style={{ color: "#f5f5f5", display: "block" }}
          >
            SOMETHING
          </span>
          <span
            ref={line3Ref}
            className="gradient-text block"
            style={{ display: "block" }}
          >
            GREAT
          </span>
        </h2>

        {/* Subtext */}
        <p
          ref={subtextRef}
          style={{ fontFamily: "monospace", fontSize: "14px", color: "#888888", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 48px", textAlign: "center" }}
        >
          Open to full-time roles, freelance contracts, and interesting collaborations.
        </p>

        {/* Contact buttons */}
        <div
          ref={buttonsRef}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "64px" }}
        >
          <MagneticButton
            href="mailto:soliupeter@gmail.com"
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Send Email
          </MagneticButton>

          <MagneticButton
            href="https://wa.me/2349131300627"
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            WhatsApp
          </MagneticButton>

          <MagneticButton href="https://www.linkedin.com/in/olukayode-soliu" variant="ghost" target="_blank" rel="noopener noreferrer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </MagneticButton>
        </div>

        {/* Availability badge */}
        <div ref={badgeRef} className="flex justify-center">
          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-mono text-xs tracking-wide"
            style={{
              background: "#111111",
              border: "1px solid #2a2a2a",
              color: "#aaaaaa",
            }}
          >
            {/* Pulsing green dot */}
            <span className="relative flex items-center justify-center w-2 h-2">
              <span
                className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping"
                style={{ background: "#22c55e" }}
              />
              <span
                className="relative inline-flex w-2 h-2 rounded-full"
                style={{ background: "#22c55e" }}
              />
            </span>
            Currently available for new projects
          </div>
        </div>
      </div>
    </section>
  );
}
