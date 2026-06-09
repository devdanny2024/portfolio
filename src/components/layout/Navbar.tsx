"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "12px 0" : "24px 0",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          backgroundColor: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
          transition: "padding 0.4s ease, background 0.4s ease, border 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "none", padding: 0 }}
          >
            <span
              style={{
                fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                fontSize: "26px",
                letterSpacing: "0.1em",
                color: "#ffffff",
              }}
            >
              DEV
              <span
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                DANNY
              </span>
            </span>
          </button>

          {/* Desktop nav links */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="hide-on-mobile"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "none",
                    padding: "4px 0",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.02em",
                    position: "relative",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Hire Me CTA */}
          <button
            onClick={() => scrollTo("#contact")}
            className="hide-on-mobile"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "999px",
              padding: "10px 24px",
              fontSize: "13px",
              fontWeight: 500,
              color: "#ffffff",
              cursor: "none",
              letterSpacing: "0.04em",
              transition: "border-color 0.3s, background 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.6)";
              e.currentTarget.style.background = "rgba(124,58,237,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Hire Me
          </button>

          {/* Mobile hamburger */}
          <button
            className="show-on-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "none",
              display: "none",
              flexDirection: "column",
              gap: "6px",
              padding: "4px",
            }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              style={{ display: "block", height: "1px", width: "24px", background: "#fff" }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ display: "block", height: "1px", width: "24px", background: "#fff" }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              style={{ display: "block", height: "1px", width: "24px", background: "#fff" }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "rgba(10,10,10,0.97)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "none",
                  fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                  fontSize: "56px",
                  color: "#ffffff",
                  letterSpacing: "0.05em",
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => scrollTo("#contact")}
              style={{
                marginTop: "16px",
                padding: "14px 40px",
                borderRadius: "999px",
                border: "1px solid #7c3aed",
                background: "transparent",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "none",
              }}
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          .hide-on-mobile { display: none !important; }
          .show-on-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
