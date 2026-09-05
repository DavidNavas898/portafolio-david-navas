import { Palette, Database, Wrench } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const groups = [
  {
    icon: Palette,
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind"],
  },
  {
    icon: Database,
    title: "Backend y datos",
    items: ["Node.js", "Express", "REST APIs", "MySQL", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Herramientas",
    items: ["Git", "GitHub", "Figma", "Postman", "n8n", "VS Code"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-y border-border bg-surface/30 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionLabel>Skills</SectionLabel>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="surface-card p-6">
              <div className="flex items-center gap-2">
                <g.icon className="size-5 text-primary" />
                <h3 className="text-lg">{g.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-full border border-border bg-surface-2 px-3.5 py-1.5 text-sm text-foreground/85 transition-colors hover:border-primary hover:text-primary"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
