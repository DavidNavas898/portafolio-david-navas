export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted-foreground sm:flex-row">
        <p className="flex items-center gap-2 font-display font-semibold text-foreground">
          <span className="size-2 rounded-full bg-primary" /> David Navas
        </p>
        <p>© {new Date().getFullYear()} — Desarrollador web</p>
      </div>
    </footer>
  );
}
