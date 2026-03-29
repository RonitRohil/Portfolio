import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteContent } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" title="Experience" eyebrow="Product work that ships into real operations." />

        <div className="relative mt-14 space-y-8 md:pl-10">
          <div className="absolute bottom-0 left-3 top-2 hidden w-px bg-white/10 md:block" />
          {siteContent.experience.map((item) => (
            <Reveal key={`${item.role}-${item.company}`} className="relative">
              <div className="absolute left-0 top-10 hidden h-6 w-6 rounded-full border border-lime/50 bg-ink md:block" />
              <article className="rounded-[2rem] border border-white/10 bg-panel/80 p-6 md:ml-10 md:p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime/80">
                      {item.period} · {item.location}
                    </p>
                    <h3 className="mt-3 font-display text-3xl text-paper">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-lg text-paper/72">{item.company}</p>
                  </div>
                  {item.stack ? (
                    <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <p className="mt-6 max-w-4xl text-paper/72">{item.summary}</p>
                <ul className="mt-6 grid gap-3 text-paper/75">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-lime" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
