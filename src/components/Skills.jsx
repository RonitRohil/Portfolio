import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteContent } from "../data/content";

const levelWidths = {
  proficient: "88%",
  working: "62%",
  learning: "34%",
};

const levelLabels = {
  proficient: "Proficient",
  working: "Working knowledge",
  learning: "Learning",
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" title="Skills" eyebrow="A backend-first toolkit with room to explore." />

        <Reveal className="mt-12 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 font-mono text-[11px] uppercase tracking-[0.28em] text-paper/55">
          Skill tags include a subtle proficiency bar: Proficient, Working knowledge, and Learning.
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.skillGroups.map((group) => (
            <Reveal
              key={group.title}
              className="rounded-[1.8rem] border border-white/10 bg-panel/70 p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-lime/85">{group.title}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map(([skill, level]) => (
                  <div
                    key={skill}
                    className="relative overflow-hidden rounded-full border border-lime/20 bg-ink px-4 py-2"
                    title={levelLabels[level]}
                  >
                    <span
                      className="absolute bottom-0 left-0 h-[3px] rounded-full bg-lime/80"
                      style={{ width: levelWidths[level] }}
                    />
                    <span className="relative z-10 font-mono text-xs text-paper">{skill}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
