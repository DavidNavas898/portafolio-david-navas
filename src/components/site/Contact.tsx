import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { SectionLabel } from "./SectionLabel";

const inputClass =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contacto"
      className="hero-bg scroll-mt-20 border-t border-border py-20"
    >
      <div className="mx-auto max-w-3xl px-5 text-center">
        <SectionLabel>Contáctame</SectionLabel>
        <h2 className="mt-6 text-3xl sm:text-4xl">
          Hablemos de tu <span className="text-primary">proyecto</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Cuéntame en qué estás pensando y te responderé lo antes posible.
        </p>

        <form
          className="surface-card mt-10 space-y-5 p-6 text-left sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                Nombre
              </span>
              <input required className={`${inputClass} mt-2`} placeholder="Tu nombre" />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                Teléfono
              </span>
              <input className={`${inputClass} mt-2`} placeholder="Tu teléfono" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              Email
            </span>
            <input
              required
              type="email"
              className={`${inputClass} mt-2`}
              placeholder="tucorreo@ejemplo.com"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              Mensaje
            </span>
            <textarea
              required
              rows={5}
              className={`${inputClass} mt-2 resize-y`}
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </label>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground glow-primary transition-transform hover:-translate-y-0.5"
            >
              Enviar mensaje
              <ArrowRight className="size-4" />
            </button>
            {sent && (
              <p className="mt-4 text-sm text-success">
                ¡Gracias! Tu mensaje quedó listo para enviarse.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
