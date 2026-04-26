import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteContent } from "../data/content";

const tones = {
  lime: "from-lime/20 via-lime/5 to-transparent border-lime/20",
  indigo: "from-indigo/20 via-indigo/5 to-transparent border-indigo/20",
  paper: "from-paper/10 via-white/5 to-transparent border-white/10",
};

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="06" title="Projects" eyebrow="Shipping useful systems, not just demos." />

        <div className="mt-14 space-y-8">
          {siteContent.projects.map((project, index) => (
            <Reveal key={project.title}>
              <article className="grid gap-6 rounded-[2rem] border border-white/10 bg-panel/85 p-5 md:p-7 lg:grid-cols-2">
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div
                    className={`relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[1.6rem] border bg-gradient-to-br p-6 ${tones[project.tone]}`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(10,10,15,0.25),_transparent_35%)]" />
                    <div className="relative">
                      <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-paper/55">
                        Featured Project
                      </p>
                      <p className="mt-6 text-5xl">{project.emoji}</p>
                    </div>
                    <div className="relative">
                      <p className="font-display text-3xl text-paper">{project.title}</p>
                      <p className="mt-3 max-w-md text-sm text-paper/68">{project.status}</p>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/62"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-lg leading-8 text-paper/76">{project.description}</p>

                  <ul className="mt-6 grid gap-3 text-paper/72">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-lime" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-lime/80">
                    {project.status}
                  </p>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-2 text-sm text-paper transition hover:border-lime hover:bg-lime hover:text-ink"
                    >
                      View Live →
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
