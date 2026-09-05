export function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-full bg-primary px-5 py-1.5 text-sm font-semibold text-primary-foreground">
      {children}
    </span>
  );
}
