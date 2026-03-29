import { motion } from "framer-motion";

export default function SectionHeading({ index, title, eyebrow, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className={align === "center" ? "text-center" : ""}
    >
      <p className="font-mono text-xs uppercase tracking-[0.32em] text-lime/80">
        {index} - {title}
      </p>
      {eyebrow ? (
        <p className="mt-3 font-serif text-2xl italic text-paper/75">{eyebrow}</p>
      ) : null}
    </motion.div>
  );
}
