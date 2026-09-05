import { SectionLabel } from "./SectionLabel";

const stats = [
  { value: "100%", label: "Ganas de aprender" },
  { value: "+2", label: "Años de experiencia" },
  { value: "8", label: "Tecnologías dominadas" },
  { value: "+5", label: "Proyectos completados" },
];

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <SectionLabel>Sobre mí</SectionLabel>
      <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-3xl sm:text-4xl">
            ¿Quién <span className="text-primary">soy?</span>
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-foreground/80">
            Soy un <strong className="text-foreground">desarrollador web junior</strong> apasionado
            por crear experiencias digitales atractivas y funcionales. Me encuentro en constante
            aprendizaje, explorando nuevas tecnologías y mejores prácticas del desarrollo moderno.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-foreground/80">
            Disfruto transformar ideas en{" "}
            <strong className="text-foreground">productos reales</strong>, cuidando tanto el diseño
            visual como la calidad del código. Mi objetivo es crecer profesionalmente y aportar
            valor a equipos y proyectos que impacten a las personas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="surface-card border-b-2 border-b-primary p-5 transition-transform hover:-translate-y-1"
            >
              <p className="font-display text-3xl font-bold">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
