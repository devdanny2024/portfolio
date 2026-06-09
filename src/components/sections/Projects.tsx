"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, categories, featuredProjects } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

// ─── Icon helpers ────────────────────────────────────────────────────────────

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// ─── Featured Project Card ────────────────────────────────────────────────────

interface FeaturedCardProps {
  project: (typeof featuredProjects)[number];
  index: number;
}

function FeaturedCard({ project, index }: FeaturedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: isEven ? -80 : 80,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [isEven]);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: 0,
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #2a2a2a",
        background: "#111111",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
      className="featured-card"
    >
      {/* Visual side */}
      <div
        style={{
          order: isEven ? 1 : 2,
          background: project.accentGradient,
          position: "relative",
          minHeight: "320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 40px",
          overflow: "hidden",
        }}
      >
        {/* Noise overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.15,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "128px 128px",
          }}
        />
        {/* Large project number */}
        <span
          className="font-display"
          style={{
            fontSize: "clamp(80px, 12vw, 160px)",
            lineHeight: 1,
            color: "rgba(255,255,255,0.12)",
            fontWeight: 400,
            userSelect: "none",
            position: "absolute",
            bottom: "16px",
            right: "24px",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Category pill */}
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <span
            className="font-mono"
            style={{
              display: "inline-block",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "4px 14px",
              borderRadius: "999px",
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Content side */}
      <div
        style={{
          order: isEven ? 2 : 1,
          padding: "48px 40px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {/* Year + Status */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            className="font-mono"
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.1em",
            }}
          >
            {project.year}
          </span>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "11px",
              padding: "2px 8px",
              borderRadius: "999px",
              background:
                project.status === "Live"
                  ? "rgba(34,197,94,0.1)"
                  : project.status === "In Development"
                  ? "rgba(124,58,237,0.1)"
                  : "rgba(113,113,122,0.1)",
              border:
                project.status === "Live"
                  ? "1px solid rgba(34,197,94,0.25)"
                  : project.status === "In Development"
                  ? "1px solid rgba(124,58,237,0.25)"
                  : "1px solid rgba(113,113,122,0.25)",
              color:
                project.status === "Live"
                  ? "#86efac"
                  : project.status === "In Development"
                  ? "#c4b5fd"
                  : "#a1a1aa",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background:
                  project.status === "Live"
                    ? "#22c55e"
                    : project.status === "In Development"
                    ? "#7c3aed"
                    : "#71717a",
                flexShrink: 0,
              }}
            />
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-display"
          style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "#f5f5f5",
            margin: 0,
          }}
        >
          {project.title}
        </h3>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.5)",
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {project.subtitle}
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="font-mono"
              style={{
                fontSize: "11px",
                padding: "3px 9px",
                borderRadius: "4px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.02em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {project.metrics.map((m) => (
              <span
                key={m}
                className="font-mono"
                style={{
                  fontSize: "11px",
                  padding: "3px 9px",
                  borderRadius: "4px",
                  background: `${project.color}14`,
                  border: `1px solid ${project.color}2e`,
                  color: project.color,
                  letterSpacing: "0.02em",
                }}
              >
                {m}
              </span>
            ))}
          </div>
        )}

        {/* CTA links */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "9px 20px",
                borderRadius: "8px",
                background: project.accentGradient,
                color: "#fff",
                fontSize: "13px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.opacity = "0.85")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.opacity = "1")
              }
            >
              View Live
              <ExternalIcon />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "9px 20px",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.7)",
                fontSize: "13px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
              }}
            >
              <GitHubIcon />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

type FilterCategory = "All" | ProjectCategory;

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Header + underline animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
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
          { opacity: 0, y: 80, skewY: 3 },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .fromTo(
          underlineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          countRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Grid stagger animation — re-run on category change
  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll<HTMLElement>(".grid-card");
    if (cards.length === 0) return;

    // Set invisible before animating
    gsap.set(cards, { opacity: 0, y: 40 });

    const ctx = gsap.context(() => {
      ScrollTrigger.getAll()
        .filter((t: ScrollTrigger) => t.vars?.id === "projects-grid")
        .forEach((t: ScrollTrigger) => t.kill());

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          id: "projects-grid",
          trigger: gridRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background grid */}
      <div
        className="grid-bg pointer-events-none absolute inset-0"
        style={{ opacity: 0.35 }}
      />

      {/* Background gradient blobs */}
      <div
        className="pointer-events-none absolute top-[20%] left-[5%] w-[500px] h-[500px] rounded-full blur-[140px]"
        style={{ background: "rgba(124,58,237,0.07)" }}
      />
      <div
        className="pointer-events-none absolute top-[60%] right-[5%] w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ background: "rgba(6,182,212,0.05)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pt-24 pb-32 md:pt-36 md:pb-48">

        {/* ── HEADER ─────────────────────────────────────────────────────── */}
        <div ref={labelRef} className="flex items-center gap-4 mb-6">
          <span
            className="font-mono text-xs tracking-[0.3em] uppercase"
            style={{ color: "#7c3aed" }}
          >
            Selected Work
          </span>
          <div
            className="h-px flex-1 max-w-[80px]"
            style={{
              background: "linear-gradient(to right, #7c3aed, transparent)",
            }}
          />
        </div>

        <div className="relative mb-4">
          <h2
            ref={headingRef}
            className="font-display leading-none tracking-tight text-7xl md:text-9xl"
            style={{ color: "#f5f5f5" }}
          >
            PROJECTS
          </h2>
          {/* Animated gradient underline */}
          <div
            ref={underlineRef}
            style={{
              height: "3px",
              marginTop: "8px",
              background:
                "linear-gradient(to right, #7c3aed, #06b6d4, transparent)",
              transformOrigin: "left center",
              transform: "scaleX(0)",
              maxWidth: "520px",
            }}
          />
        </div>

        <div ref={countRef} style={{ opacity: 0 }}>
          <span
            className="font-mono text-sm"
            style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.06em" }}
          >
            ( {projects.length} projects )
          </span>
        </div>

        {/* ── CATEGORY FILTER ────────────────────────────────────────────── */}
        <div className="mt-14 mb-20">
          <div
            className="hide-scrollbar flex gap-2 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "none" }}
          >
            {(["All", ...categories] as FilterCategory[]).map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="font-mono"
                  style={{
                    flexShrink: 0,
                    padding: "7px 18px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    border: isActive
                      ? "1px solid transparent"
                      : "1px solid #2a2a2a",
                    background: isActive
                      ? "linear-gradient(135deg, #7c3aed, #06b6d4)"
                      : "transparent",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.45)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "#2a2a2a";
                      e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                    }
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── FEATURED PROJECTS ──────────────────────────────────────────── */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-10">
            <span
              className="font-mono text-xs tracking-[0.25em] uppercase"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Featured
            </span>
            <div
              className="h-px flex-1"
              style={{ background: "#2a2a2a", maxWidth: "240px" }}
            />
          </div>

          <div className="flex flex-col gap-10">
            {featuredProjects.map((project, i) => (
              <FeaturedCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* ── ALL PROJECTS GRID ──────────────────────────────────────────── */}
        <div>
          {/* Sub-heading */}
          <div className="flex items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-4">
              <span
                className="font-display text-2xl md:text-3xl tracking-tight"
                style={{ color: "#f5f5f5" }}
              >
                ALL PROJECTS
              </span>
              <div
                className="h-px flex-1"
                style={{ background: "#2a2a2a", minWidth: "60px" }}
              />
            </div>
            <span
              className="font-mono text-xs"
              style={{ color: "rgba(255,255,255,0.25)", flexShrink: 0 }}
            >
              {filteredProjects.length} shown
            </span>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
              gap: "28px",
            }}
          >
            {filteredProjects.map((project, i) => (
              <div key={project.id} className="grid-card">
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              <p className="font-mono text-sm">No projects in this category.</p>
            </div>
          )}
        </div>

        {/* ── BOTTOM CTA ─────────────────────────────────────────────────── */}
        <div
          className="mt-24 flex flex-col items-center gap-6 text-center"
        >
          <div
            className="h-px w-full max-w-xs"
            style={{
              background:
                "linear-gradient(to right, transparent, #2a2a2a, transparent)",
            }}
          />
          <p
            className="font-mono text-sm"
            style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em" }}
          >
            Want to build something together?
          </p>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 rounded-lg px-8 py-4 font-mono text-sm font-medium transition-all duration-300"
            style={{ color: "#e4e4e7" }}
          >
            {/* Gradient border */}
            <span
              className="pointer-events-none absolute inset-0 rounded-lg"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
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
            <span className="relative">Let&apos;s Talk</span>
            <span
              className="relative"
              style={{
                transition: "transform 0.25s",
              }}
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
