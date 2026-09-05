import { ArrowUpRight, FileCode2, GitBranch, Workflow, Github, ExternalLink } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const projects = [
  {
    icon: FileCode2,
    number: "01",
    badge: "Live",
    badgeTone: "text-success border-success/40",
    title: "Sistema Modular de Gestión",
    description:
      "Aplicación de consola en Python para gestionar gastos personales: registro, filtros, totales y reportes automáticos diarios, semanales y mensuales. La información se persiste en archivos JSON.",
    tags: ["Python", "JSON", "Reportes"],
    href: "https://github.com/DavidNavas898/Sistema_Modular_de_Gesti-_v2.0-_-NAVAS_JURADO_JUAN_DAVID",
    linkLabel: "Ver repositorio",
    linkIcon: Github,
  },
  {
    icon: GitBranch,
    number: "02",
    badge: "Destacado",
    badgeTone: "text-primary border-primary/40",
    title: "Escuela Acme",
    description:
      "Proyecto web hecho con HTML, CSS y JavaScript vanilla para gestionar exámenes y usuarios de una institución educativa. Nuestro primer proyecto colaborativo completo.",
    tags: ["HTML", "JS", "CSS"],
    href: "https://github.com/DavidNavas898/Escuela-Acme/settings",
    linkLabel: "Ver repositorio",
    linkIcon: Github,
  },
  {
    icon: Workflow,
    number: "03",
    badge: "Destacado",
    badgeTone: "text-violet border-violet/40",
    title: "Automatización de reservas con n8n",
    description:
      "Flujo de extremo a extremo: recibe la solicitud desde un formulario o webhook, valida disponibilidad, registra la reserva y envía confirmaciones por email o WhatsApp, con integración a Google Calendar.",
    tags: ["n8n", "Automatización", "Webhooks"],
    href: "https://davidnavas898.github.io/N8N-Automatizacion-de-reservas/",
    linkLabel: "Ver proyecto en vivo",
    linkIcon: ExternalLink,
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <SectionLabel>Proyectos</SectionLabel>
      <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <h2 className="max-w-xl text-3xl sm:text-4xl">Ideas llevadas a <span className="text-primary">producción.</span></h2>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Explora una selección de soluciones creadas para resolver problemas reales.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="project-card group flex flex-col overflow-hidden border border-border bg-surface"
          >
            <div className="project-visual dot-grid relative flex h-44 items-center justify-center overflow-hidden border-b border-border bg-surface-2/40">
              <span className="absolute right-4 top-3 font-display text-6xl font-bold text-foreground/5">{p.number}</span>
              <span
                className={`absolute left-4 top-4 rounded-full border bg-background/70 px-3 py-1 text-xs font-semibold ${p.badgeTone}`}
              >
                {p.badge}
              </span>
              <div className="project-icon grid size-20 place-items-center rounded-full border border-primary/25 bg-background/70 backdrop-blur-sm">
                <p.icon className="size-9 text-primary" />
              </div>
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
                    className="project-tag rounded-full border border-border px-3 py-1 text-xs text-foreground/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="project-link mt-6 inline-flex items-center justify-between gap-2 border-t border-border pt-5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                <span className="inline-flex items-center gap-2"><p.linkIcon className="size-4" />{p.linkLabel}</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
