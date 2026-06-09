"use client";

import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/sections/Preloader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  useLenis();

  return (
    <>
      <CustomCursor />
      <Preloader isVisible={!preloaderDone} onComplete={() => setPreloaderDone(true)} />

      {preloaderDone && (
        <main className="relative bg-[#0a0a0a] overflow-x-hidden">
          <Navbar />
          <Hero />
          <About />
          <Stats />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
