import { useState } from "react";
import { ArrowRight, Github, Instagram, Linkedin, Code2, Mail, CalendarDays } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteContent } from "../data/content";

const iconMap = {
  Github,
  Linkedin,
  Code2,
  Instagram,
  CalendarDays,
};

const initialState = {
  name: "",
  email: "",
  subject: "Job Opportunity",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      if (formEndpoint) {
        const response = await fetch(formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          throw new Error("Unable to submit the form right now.");
        }

        setStatus({ type: "success", message: "Message sent successfully." });
        setForm(initialState);
        return;
      }

      const subject = encodeURIComponent(`${form.subject} - ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
      );
      window.location.href = `mailto:${siteContent.email}?subject=${subject}&body=${body}`;
      setStatus({
        type: "success",
        message: "Mail client opened. Add a Formspree endpoint later for in-page submissions.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong while sending the message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-white/10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="09" title="Contact" eyebrow="Let's build something." />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-[2rem] border border-white/10 bg-panel/75 p-7">
            <p className="max-w-xl text-lg leading-8 text-paper/74">
              {siteContent.contactIntro}
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${siteContent.email}`}
                className="flex items-center gap-3 text-paper/78 transition hover:text-lime"
              >
                <Mail size={18} className="text-lime" />
                <span>{siteContent.email}</span>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {siteContent.socialLinks.map((link) => {
                const Icon = iconMap[link.icon];

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-paper/72 transition hover:border-lime hover:text-lime"
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <label className="grid gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper/58">
                  Name
                </span>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="rounded-2xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none transition focus:border-lime"
                />
              </label>

              <label className="grid gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper/58">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="rounded-2xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none transition focus:border-lime"
                />
              </label>

              <label className="grid gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper/58">
                  Subject
                </span>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="rounded-2xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none transition focus:border-lime"
                >
                  {siteContent.contactSubjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper/58">
                  Message
                </span>
                <textarea
                  required
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  className="rounded-[1.5rem] border border-white/10 bg-ink px-4 py-3 text-paper outline-none transition focus:border-lime"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-medium text-ink transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight size={17} />
              </button>

              {status.message ? (
                <p
                  className={`text-sm ${
                    status.type === "error" ? "text-rose-300" : "text-paper/60"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
