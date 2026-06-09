"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const STATUS_CONFIG = {
  Live: {
    dot: "#22c55e",
    bg: "rgba(34,197,94,0.1)",
    border: "rgba(34,197,94,0.25)",
    color: "#86efac",
  },
  "In Development": {
    dot: "#7c3aed",
    bg: "rgba(124,58,237,0.1)",
    border: "rgba(124,58,237,0.25)",
    color: "#c4b5fd",
  },
  Shipped: {
    dot: "#71717a",
    bg: "rgba(113,113,122,0.1)",
    border: "rgba(113,113,122,0.25)",
    color: "#a1a1aa",
  },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const status = STATUS_CONFIG[project.status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileHover={{
        y: -4,
        boxShadow: `0 0 0 1px ${project.color}40, 0 20px 60px ${project.color}20`,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        background: "#111111",
        border: "1px solid #2a2a2a",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Top accent bar */}
      <div
        style={{
          height: "3px",
          background: project.accentGradient,
          flexShrink: 0,
        }}
      />

      {/* Card body */}
      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          flex: 1,
        }}
      >
        {/* Category chip */}
        <div>
          <span
            className="font-mono"
            style={{
              display: "inline-block",
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "3px 10px",
              borderRadius: "999px",
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.25)",
              color: "#a78bfa",
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Title + subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <h3
            className="font-display"
            style={{
              fontSize: "28px",
              lineHeight: 1,
              letterSpacing: "-0.01em",
              color: "#f5f5f5",
              margin: 0,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.55)",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.45)",
            lineHeight: "1.6",
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="font-mono"
              style={{
                fontSize: "11px",
                padding: "3px 8px",
                borderRadius: "4px",
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(255,255,255,0.08)",
                letterSpacing: "0.02em",
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span
              className="font-mono"
              style={{
                fontSize: "11px",
                padding: "3px 8px",
                borderRadius: "4px",
                background: "rgba(255,255,255,0.03)",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <>
            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.06)",
              }}
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {project.metrics.slice(0, 2).map((m) => (
                <span
                  key={m}
                  className="font-mono"
                  style={{
                    fontSize: "11px",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    background: `${project.color}12`,
                    border: `1px solid ${project.color}28`,
                    color: project.color,
                    letterSpacing: "0.02em",
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </>
        )}

        {/* Bottom row: year | status | links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "4px",
          }}
        >
          {/* Year */}
          <span
            className="font-mono"
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.08em",
            }}
          >
            {project.year}
          </span>

          {/* Status badge + links */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "11px",
                padding: "2px 8px",
                borderRadius: "999px",
                background: status.bg,
                border: `1px solid ${status.border}`,
                color: status.color,
                fontFamily: "inherit",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: status.dot,
                  flexShrink: 0,
                  ...(project.status === "Live"
                    ? {
                        boxShadow: `0 0 6px ${status.dot}`,
                        animation: "pulse 2s infinite",
                      }
                    : {}),
                }}
              />
              {project.status}
            </span>

            {/* GitHub link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub`}
                style={{
                  color: "rgba(255,255,255,0.35)",
                  display: "flex",
                  alignItems: "center",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.8)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
                }
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            )}

            {/* Live link */}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live site`}
                style={{
                  color: "rgba(255,255,255,0.35)",
                  display: "flex",
                  alignItems: "center",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = project.color)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
                }
              >
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
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
