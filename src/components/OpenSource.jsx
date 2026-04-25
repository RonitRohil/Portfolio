import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteContent } from "../data/content";

export default function OpenSource() {
  return (
    <section id="open-source" className="border-t border-white/10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="08"
          title="Open Source & Engineering Projects"
          eyebrow="Code visibility, system thinking, and architecture in one place."
        />

        <Reveal className="mt-10 max-w-3xl text-lg leading-8 text-paper/72">
          Public engineering work adds a different kind of credibility. This section is
          designed to make the code-facing side of the portfolio as visible as the product
          work itself.
        </Reveal>

        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {siteContent.githubProjects.map((project) => (
            <Reveal key={project.title}>
              <article className="h-full rounded-[1.9rem] border border-white/10 bg-panel/80 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-4xl">{project.emoji}</p>
                    <h3 className="mt-4 font-display text-3xl text-paper">{project.title}</h3>
                  </div>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-2 text-sm text-paper transition hover:border-lime hover:bg-lime hover:text-ink"
                    >
                      <Github size={16} />
                      Repo
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-paper/50">
                      <Github size={14} />
                      {project.githubLabel}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-5 leading-8 text-paper/74">{project.description}</p>

                <ul className="mt-5 grid gap-3 text-paper/72">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-lime" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading
            title="Architecture Snapshots"
            eyebrow="A few systems read better when the flow is visible."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {siteContent.architectureFlows.map((flow) => (
              <Reveal key={flow.title}>
                <article className="rounded-[1.9rem] border border-white/10 bg-white/5 p-6">
                  <h3 className="font-display text-3xl text-paper">{flow.title}</h3>
                  <p className="mt-3 max-w-2xl text-paper/68">{flow.summary}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {flow.steps.map((step, index) => (
                      <div key={`${flow.title}-${step}`} className="contents">
                        <span className="rounded-full border border-lime/20 bg-ink px-4 py-2 font-mono text-xs text-paper">
                          {step}
                        </span>
                        {index < flow.steps.length - 1 ? (
                          <span className="font-mono text-xs uppercase tracking-[0.26em] text-lime/70">
                            →
                          </span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
