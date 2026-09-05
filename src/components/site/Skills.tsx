import { Palette, Database, Wrench, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const groups = [
  {
    icon: Palette,
    number: "01",
    title: "Frontend",
    description: "Interfaces rápidas, fluidas y pensadas para las personas.",
    items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind"],
  },
  {
    icon: Database,
    number: "02",
    title: "Backend y datos",
    description: "Lógica sólida y datos conectados de forma eficiente.",
    items: ["Node.js", "Express", "REST APIs", "MySQL", "MongoDB"],
  },
  {
    icon: Wrench,
    number: "03",
    title: "Herramientas",
    description: "Un flujo moderno para convertir ideas en entregables.",
    items: ["Git", "GitHub", "Figma", "Postman", "n8n", "VS Code"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="skills-band scroll-mt-20 overflow-hidden border-y border-border py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionLabel>Skills</SectionLabel>
        <div className="mt-6 flex items-end justify-between gap-6">
          <h2 className="max-w-xl text-3xl sm:text-4xl">Mi caja de <span className="text-primary">herramientas</span></h2>
          <p className="hidden max-w-sm text-right text-sm leading-relaxed text-muted-foreground md:block">Tecnología al servicio de productos claros, útiles y bien construidos.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {groups.map((g) => (
            <article key={g.title} className="skill-card group relative overflow-hidden border border-border bg-surface p-6">
              <span className="absolute right-5 top-4 font-display text-5xl font-bold text-foreground/5 transition-colors group-hover:text-primary/10">{g.number}</span>
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <g.icon className="size-5" />
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <h3 className="mt-8 text-xl">{g.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted-foreground">{g.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="skill-chip rounded-full border border-border bg-surface-2 px-3.5 py-1.5 text-sm text-foreground/85"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
