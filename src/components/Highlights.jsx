import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteContent } from "../data/content";

export default function Highlights() {
  return (
    <section id="highlights" className="border-t border-white/10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          title="Engineering Highlights"
          eyebrow="The fastest way to understand the kind of systems I like to build."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.engineeringHighlights.map((highlight, index) => (
            <Reveal key={highlight} delay={index * 0.05}>
              <article className="h-full rounded-[1.7rem] border border-white/10 bg-panel/75 p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 grid h-8 w-8 place-items-center rounded-full border border-lime/30 bg-lime/10 font-mono text-xs text-lime">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="leading-7 text-paper/76">{highlight}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
