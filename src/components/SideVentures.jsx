import { BookOpen, BriefcaseBusiness, Plane } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteContent } from "../data/content";

const iconMap = {
  Plane,
  BookOpen,
  BriefcaseBusiness,
};

export default function SideVentures() {
  return (
    <section id="ventures" className="border-t border-white/10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="07" title="Side Ventures" eyebrow="The products I keep coming back to after work." />

        <Reveal className="mt-10 max-w-3xl text-lg leading-8 text-paper/72">
          {siteContent.venturesIntro}
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {siteContent.ventures.map((venture) => {
            const Icon = iconMap[venture.icon];

            return (
              <Reveal key={venture.title} className="h-full">
                <article className="flex h-full flex-col rounded-[1.9rem] border border-white/10 bg-panel/75 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime/30 bg-lime/10 text-lime">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 font-display text-3xl text-paper">{venture.title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-paper/70">{venture.description}</p>
                  <span className="mt-6 inline-flex w-fit rounded-full border border-white/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.26em] text-paper/65">
                    {venture.status}
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
