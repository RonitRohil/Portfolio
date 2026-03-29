import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OpenSource from "./components/OpenSource";
import Projects from "./components/Projects";
import SideVentures from "./components/SideVentures";
import Skills from "./components/Skills";
import { siteContent } from "./data/content";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false, hidden: true });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "experience",
      "skills",
      "projects",
      "open-source",
      "contact",
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -30% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const updateCursor = (event) => {
      const interactive = event.target.closest("a, button, input, textarea, select");
      setCursor({
        x: event.clientX,
        y: event.clientY,
        active: Boolean(interactive),
        hidden: false,
      });
    };

    const hideCursor = () => setCursor((current) => ({ ...current, hidden: true }));

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-paper">
      <motion.div
        className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-lime"
        style={{ scaleX }}
      />

      {!cursor.hidden ? (
        <motion.div
          className="pointer-events-none fixed z-50 hidden rounded-full border border-lime/70 bg-lime/10 mix-blend-screen md:block"
          animate={{
            x: cursor.x - 10,
            y: cursor.y - 10,
            width: cursor.active ? 36 : 20,
            height: cursor.active ? 36 : 20,
          }}
          transition={{ type: "spring", stiffness: 420, damping: 28, mass: 0.4 }}
        />
      ) : null}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.04]" />
      <Navbar activeSection={activeSection} resumeUrl={siteContent.resumeUrl} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Highlights />
        <Projects />
        <SideVentures />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
