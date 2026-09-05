import { ArrowUpRight, FileCode2, GitBranch, Workflow } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const projects = [
  {
    icon: FileCode2,
    badge: "Live",
    badgeTone: "text-success border-success/40",
    title: "Sistema de Gestión de Gastos",
    description:
      "Aplicación de consola en Python para gestionar gastos personales: registro, filtros, totales y reportes automáticos diarios, semanales y mensuales. La información se persiste en archivos JSON.",
    tags: ["Python", "JSON", "Reportes"],
  },
  {
    icon: GitBranch,
    badge: "Destacado",
    badgeTone: "text-primary border-primary/40",
    title: "Escuela Acme",
    description:
      "Proyecto web hecho con HTML, CSS y JavaScript vanilla para gestionar exámenes y usuarios de una institución educativa. Nuestro primer proyecto colaborativo completo.",
    tags: ["HTML", "JS", "CSS"],
  },
  {
    icon: Workflow,
    badge: "Destacado",
    badgeTone: "text-violet border-violet/40",
    title: "Automatización de reservas con n8n",
    description:
      "Flujo de extremo a extremo: recibe la solicitud desde un formulario o webhook, valida disponibilidad, registra la reserva y envía confirmaciones por email o WhatsApp, con integración a Google Calendar.",
    tags: ["n8n", "Automatización", "Webhooks"],
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <SectionLabel>Proyectos</SectionLabel>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="surface-card flex flex-col overflow-hidden transition-transform hover:-translate-y-1"
          >
            <div className="dot-grid relative flex h-36 items-center justify-center border-b border-border bg-surface-2/40">
              <span
                className={`absolute left-4 top-4 rounded-full border bg-background/70 px-3 py-1 text-xs font-semibold ${p.badgeTone}`}
              >
                {p.badge}
              </span>
              <p.icon className="size-10 text-primary" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Ir al proyecto
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
