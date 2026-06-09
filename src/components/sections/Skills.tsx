"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SkillGroup {
  label: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Vue.js",
      "Flutter",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Java",
      "Prisma ORM",
      "PostgreSQL",
      "Redis",
      "BullMQ",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "AWS (ECS, IVS, S3, ECR, ALB)",
      "Terraform",
      "Docker",
      "GitHub Actions",
      "Nginx",
      "Vercel",
    ],
  },
  {
    label: "AI & Integrations",
    skills: [
      "Claude AI (Anthropic)",
      "GPT-4",
      "Vapi.ai",
      "Gemini",
      "Tesseract OCR",
      "WhatsApp API",
      "Telegram Bot API",
      "Paystack",
      "Flutterwave",
    ],
  },
];

const exploringSkills = ["Rust", "WebGL", "Three.js", "Solidity"];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);
  const chipRefs = useRef<(HTMLSpanElement | null)[][]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading entrance
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        subheadingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // Each group: label + chips
      groupRefs.current.forEach((groupEl, groupIndex) => {
        if (!groupEl) return;

        gsap.fromTo(
          groupEl.querySelector(".group-label"),
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: groupEl,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        const chips = chipRefs.current[groupIndex];
        if (chips && chips.length) {
          gsap.fromTo(
            chips.filter(Boolean),
            { y: 24, opacity: 0, scale: 0.88 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.45,
              ease: "back.out(1.4)",
              stagger: 0.06,
              scrollTrigger: {
                trigger: groupEl,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ padding: "120px 0", background: "#0a0a0a" }}
    >
      {/* Subtle grid background */}
      <div className="grid-bg absolute inset-0 opacity-30 pointer-events-none" />

      {/* Ambient violet glow top-left */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>
        {/* Section heading */}
        <div className="mb-16">
          <p
            className="font-mono text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#7c3aed" }}
          >
            // 03
          </p>
          <h2
            ref={headingRef}
            className="font-display text-6xl md:text-8xl tracking-wider mb-4"
            style={{ color: "#f5f5f5", lineHeight: 1 }}
          >
            TECH STACK
          </h2>
          <p
            ref={subheadingRef}
            className="font-mono text-sm md:text-base"
            style={{ color: "#888888" }}
          >
            Tools I use to build at scale
          </p>
        </div>

        {/* Skill groups */}
        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => {
            if (!chipRefs.current[groupIndex]) {
              chipRefs.current[groupIndex] = [];
            }
            return (
              <div
                key={group.label}
                ref={(el) => {
                  groupRefs.current[groupIndex] = el;
                }}
              >
                {/* Group label */}
                <div className="group-label flex items-center gap-3 mb-5">
                  <span
                    className="font-mono text-xs tracking-[0.25em] uppercase font-semibold"
                    style={{ color: "#7c3aed" }}
                  >
                    {group.label}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(to right, #2a2a2a, transparent)",
                    }}
                  />
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      ref={(el) => {
                        chipRefs.current[groupIndex][skillIndex] = el;
                      }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "#7c3aed",
                        color: "#e5e5e5",
                      }}
                      transition={{ duration: 0.18 }}
                      className="px-4 py-2 rounded-full font-mono text-xs md:text-sm cursor-default select-none"
                      style={{
                        background: "#111111",
                        border: "1px solid #2a2a2a",
                        color: "#aaaaaa",
                        boxShadow: "none",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 0 14px rgba(124,58,237,0.35)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "none";
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div
          className="my-14 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, #2a2a2a, transparent)",
          }}
        />

        {/* Currently exploring */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="font-mono text-xs tracking-[0.25em] uppercase font-semibold"
              style={{ color: "#06b6d4" }}
            >
              Currently Learning / Exploring
            </span>
            <div
              className="flex-1 h-px"
              style={{
                background:
                  "linear-gradient(to right, #2a2a2a, transparent)",
              }}
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {exploringSkills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  scale: 1.05,
                  borderColor: "#06b6d4",
                  color: "#cccccc",
                }}
                transition={{ duration: 0.18 }}
                className="px-4 py-2 rounded-full font-mono text-xs md:text-sm cursor-default select-none"
                style={{
                  background: "rgba(6,182,212,0.04)",
                  border: "1px dashed #2a2a2a",
                  color: "#666666",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 14px rgba(6,182,212,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
