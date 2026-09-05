import { ArrowDown, ArrowRight, Braces, Code2, Mail, Rocket, Star, Users, Zap } from "lucide-react";
import heroPortrait from "@/assets/david-portrait-transparent.png";

const stats = [
  { icon: Zap, value: "+2 años", label: "de experiencia", tone: "text-primary" },
  { icon: Code2, value: "+5 proyectos", label: "completados", tone: "text-violet" },
  { icon: Star, value: "8 tecnologías", label: "dominadas", tone: "text-cyan" },
  { icon: Users, value: "Enfoque en", label: "resultados", tone: "text-violet" },
];

export function Hero() {
  return (
    <section id="top" className="hero-bg relative isolate min-h-[calc(100svh-4rem)] overflow-hidden">
      <div className="hero-code" aria-hidden="true">{"</>"}</div>
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-6 px-5 pb-10 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:pt-8">
        <div className="relative z-10 py-5">
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-sm text-foreground/85 backdrop-blur-md">
            <span className="size-2 animate-pulse rounded-full bg-success" />
            Disponible para nuevos proyectos
          </span>

          <h1 className="animate-rise delay-1 mt-7 max-w-2xl font-display text-4xl leading-[1.06] sm:text-5xl lg:text-[3.65rem]">
            Desarrollo experiencias <span className="text-primary">digitales</span> que convierten
            ideas en <span className="text-primary">productos.</span>
          </h1>

          <p className="animate-rise delay-2 mt-5 font-display text-3xl font-bold sm:text-4xl">
            <span className="text-primary">David</span>{" "}
            <span className="text-violet">Navas</span>
          </p>

          <p className="animate-rise delay-3 mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Desarrollador web apasionado por crear soluciones modernas, funcionales y escalables. Me
            encanta transformar desafíos en experiencias que generan impacto.
          </p>

          <div className="animate-rise delay-4 mt-8 flex flex-wrap gap-4">
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

          <dl className="animate-rise delay-5 mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface/80 px-4 py-4">
                <s.icon className={`size-4 ${s.tone}`} />
                <dt className="mt-2 text-sm font-semibold">{s.value}</dt>
                <dd className="text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-portrait animate-rise delay-2 relative mx-auto flex h-[490px] w-full max-w-lg items-end justify-center self-end lg:h-[680px]">
          <div className="portrait-orbit absolute left-[5%] top-[18%] size-[82%] rounded-full border border-violet/35" aria-hidden="true" />
          <div className="absolute left-3 top-[34%] hidden items-center gap-2 rounded-lg border border-border bg-surface/80 px-3 py-2 text-xs font-semibold text-primary shadow-lg backdrop-blur-md sm:flex animate-float-slow">
            <Braces className="size-4" /> código limpio
          </div>
          <div className="absolute right-0 top-[22%] hidden rounded-lg border border-border bg-surface/80 px-3 py-2 text-xs text-muted-foreground shadow-lg backdrop-blur-md sm:block animate-float-reverse">
            <span className="mr-2 inline-block size-2 rounded-full bg-success" />
            building ideas
          </div>
          <img
            src={heroPortrait}
            alt="Ilustración de David Navas, desarrollador web"
            className="relative z-10 max-h-full w-auto max-w-full object-contain object-bottom drop-shadow-portrait"
            width={928}
            height={1152}
            fetchPriority="high"
          />
          <div className="hero-floor absolute inset-x-[10%] bottom-0 h-px" aria-hidden="true" />
        </div>
      </div>
      <a href="#sobre-mi" aria-label="Ir a Sobre mí" className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary lg:block">
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
}
