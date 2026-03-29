import { Github, Instagram, Linkedin, Code2 } from "lucide-react";
import { siteContent } from "../data/content";

const iconMap = {
  Github,
  Linkedin,
  Code2,
  Instagram,
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-paper/74">Built by Ronit Jain - 2026</p>
          <p className="mt-1 text-sm text-paper/45">Jaipur, Rajasthan, India</p>
        </div>

        <div className="flex items-center gap-3">
          {siteContent.socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-paper/70 transition hover:border-lime hover:text-lime"
                aria-label={link.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
