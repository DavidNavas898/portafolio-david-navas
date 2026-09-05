const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#skills", label: "Skills" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="size-2 rounded-full bg-primary glow-primary" />
          <span className="text-primary">DN</span>
        </a>
        <ul className="hidden items-center gap-9 text-sm text-foreground/85 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="rounded-full border border-border px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-primary hover:text-primary"
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
}
