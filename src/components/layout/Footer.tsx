"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/devdanny2024",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:soliupeter@gmail.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full border-t"
      style={{
        backgroundColor: "#0a0a0a",
        borderColor: "rgba(255,255,255,0.05)",
      }}
    >
      {/* Top row */}
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-2xl tracking-widest text-white shrink-0 select-none"
          aria-label="Dev Danny — home"
        >
          DEV
          <span
            className="gradient-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #7c3aed, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            DANNY
          </span>
        </a>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6 flex-wrap justify-center">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group relative text-sm font-medium text-white/60 transition-colors duration-200 hover:text-white"
                >
                  {label}
                  {/* underline slide-in */}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-4 shrink-0">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-white/60 transition-colors duration-200 hover:text-white"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Gradient divider */}
      <div
        className="mx-auto max-w-7xl px-6"
        aria-hidden="true"
      >
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, #7c3aed 0%, #06b6d4 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Bottom row */}
      <div className="mx-auto max-w-7xl px-6 pt-5 pb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/40 text-center sm:text-left">
          &copy; 2024 Olukayode Soliu. Designed &amp; Built with obsession.
        </p>

        <button
          onClick={handleScrollTop}
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors duration-200 hover:text-white self-center sm:self-auto"
          aria-label="Back to top"
        >
          Back to top
          <span
            className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            ↑
          </span>
        </button>
      </div>
    </motion.footer>
  );
}
