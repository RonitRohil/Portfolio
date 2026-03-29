import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteContent } from "../data/content";

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" title="About" eyebrow="Building the systems behind the product." />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="space-y-5">
            {siteContent.about.map((paragraph) => (
              <p key={paragraph} className="max-w-3xl text-lg leading-8 text-paper/74">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {siteContent.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`rounded-[1.75rem] border p-6 ${
                  index % 2 === 0 ? "border-lime/20 bg-lime/10" : "border-white/10 bg-white/5"
                }`}
              >
                <p className="font-display text-4xl font-bold text-paper">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-paper/55">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="mt-12 grid gap-4 md:grid-cols-3">
          {siteContent.education.map((item) => (
            <article
              key={`${item.title}-${item.subtitle}`}
              className="rounded-[1.5rem] border border-white/10 bg-panel/70 p-5"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime/80">{item.meta}</p>
              <h3 className="mt-3 font-display text-2xl text-paper">{item.title}</h3>
              <p className="mt-2 text-paper/72">{item.subtitle}</p>
              <p className="mt-4 text-sm text-paper/52">{item.detail}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
