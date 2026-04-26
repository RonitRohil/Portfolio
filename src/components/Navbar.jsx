import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../data/content";

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar({ activeSection, resumeUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [activeSection]);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
          isScrolled
            ? "border-white/10 bg-ink/80 shadow-glow backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <button
          type="button"
          onClick={() => scrollToId("hero")}
          className="flex items-center gap-3 text-left"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full border border-lime/40 bg-lime/10 font-display text-lg font-bold text-paper">
            RJ
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.28em] text-paper/70 sm:block">
            Backend Engineer · DA-IICT '24
          </span>
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToId(link.id)}
              className={`text-sm transition ${
                activeSection === link.id ? "text-lime" : "text-paper/72 hover:text-paper"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-2 text-sm text-paper transition hover:border-lime hover:bg-lime hover:text-ink md:inline-flex"
          >
            Resume <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-paper md:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/10 bg-panel/95 p-4 shadow-2xl backdrop-blur"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToId(link.id)}
                  className={`rounded-2xl px-4 py-3 text-left text-sm ${
                    activeSection === link.id
                      ? "bg-lime text-ink"
                      : "bg-white/5 text-paper/80"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-lime/40 px-4 py-3 text-sm text-paper"
              >
                Resume <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
