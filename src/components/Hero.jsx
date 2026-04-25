import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { heroTech, siteContent } from "../data/content";

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const [techIndex, setTechIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTechIndex((current) => (current + 1) % heroTech.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-16 pt-12 sm:px-6"
    >
      <div className="absolute inset-0 bg-noise opacity-90" />
      <div className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-lime/12 blur-3xl" />
      <div className="absolute right-[-5%] top-40 h-96 w-96 rounded-full bg-indigo/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.35em] text-lime/85"
          >
            01 - Hero
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 font-display text-5xl font-bold leading-[0.95] text-paper sm:text-6xl lg:text-8xl"
          >
            <span className="block">{siteContent.tagline[0]}</span>
            <span className="mt-2 block text-paper/80">{siteContent.tagline[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-paper/72 sm:text-xl"
          >
            {siteContent.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs uppercase tracking-[0.26em] text-paper/75">
              <MapPin size={14} className="text-lime" />
              {siteContent.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-lime/35 bg-lime/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.26em] text-lime">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
              Open to Work
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => scrollToId("projects")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-medium text-ink transition hover:scale-[1.02]"
            >
              View My Work <ArrowDown size={17} />
            </button>
            <button
              type="button"
              onClick={() => scrollToId("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-paper transition hover:border-indigo hover:bg-indigo hover:text-white"
            >
              Let's Talk <ArrowRight size={17} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 flex items-center gap-4"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-paper/45">Current stack</span>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-5 flex min-h-[2.5rem] items-center overflow-hidden"
          >
            <motion.p
              key={heroTech[techIndex]}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-lg text-lime sm:text-xl"
            >
              {heroTech[techIndex]}
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="order-1 mx-auto w-full max-w-md lg:order-2"
        >
          <div className="relative aspect-square rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-2xl">
            <div className="absolute inset-5 rounded-[1.8rem] border border-dashed border-lime/50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(200,244,101,0.14),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(91,106,247,0.18),_transparent_38%)]" />
            <img
              src={siteContent.profileImage}
              alt={siteContent.name}
              className="relative h-full w-full rounded-[1.75rem] object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
