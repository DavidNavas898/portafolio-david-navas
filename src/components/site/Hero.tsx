import { ArrowRight, Code2, Mail, Rocket, Star, Users, Zap } from "lucide-react";
import heroAsset from "@/assets/hero-david.png.asset.json";

const stats = [
  { icon: Zap, value: "+2 años", label: "de experiencia", tone: "text-primary" },
  { icon: Code2, value: "+5 proyectos", label: "completados", tone: "text-violet" },
  { icon: Star, value: "8 tecnologías", label: "dominadas", tone: "text-cyan" },
  { icon: Users, value: "Enfoque en", label: "resultados", tone: "text-violet" },
];

export function Hero() {
  return (
    <section id="top" className="hero-bg relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-sm text-foreground/85">
            <span className="size-2 animate-pulse rounded-full bg-success" />
            Disponible para nuevos proyectos
          </span>

          <h1 className="mt-7 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
            Desarrollo experiencias <span className="text-primary">digitales</span> que convierten
            ideas en <span className="text-primary">productos.</span>
          </h1>

          <p className="mt-5 font-display text-3xl font-bold sm:text-4xl">
            <span className="text-primary">David</span>{" "}
            <span className="text-violet">Navas</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Desarrollador web apasionado por crear soluciones modernas, funcionales y escalables. Me
            encanta transformar desafíos en experiencias que generan impacto.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground glow-primary transition-transform hover:-translate-y-0.5"
            >
              <Rocket className="size-4" />
              Ver proyectos
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="size-4" />
              Contactarme
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface/80 px-4 py-4">
                <s.icon className={`size-4 ${s.tone}`} />
                <dt className="mt-2 text-sm font-semibold">{s.value}</dt>
                <dd className="text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-x-8 bottom-2 h-24 rounded-full bg-violet/25 blur-3xl" />
          <img
            src={heroAsset.url}
            alt="Ilustración de David Navas, desarrollador web"
            className="relative w-full"
            width={521}
            height={711}
          />
        </div>
      </div>
    </section>
  );
}
