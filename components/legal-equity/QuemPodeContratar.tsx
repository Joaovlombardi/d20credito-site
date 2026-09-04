import { Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { RotuloDeSecao } from "@/components/ui/RotuloDeSecao";
import { quemPodeContratar } from "@/content/legal-equity";

export function QuemPodeContratar() {
  return (
    <section
      id="quem-pode-contratar"
      aria-labelledby="quem-pode-contratar-titulo"
      className="scroll-mt-24 border-y border-line bg-surface"
    >
      <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <RotuloDeSecao>{quemPodeContratar.rotulo}</RotuloDeSecao>
          <h2
            id="quem-pode-contratar-titulo"
            className="mt-6 font-heading text-2xl font-semibold text-ink md:text-3xl"
          >
            {quemPodeContratar.titulo}
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-line">
            {quemPodeContratar.requisitos.map((requisito) => (
              <li
                key={requisito}
                className="flex items-start gap-4 border-b border-line py-5"
              >
                <Check
                  size={20}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-forest"
                />
                <span className="max-w-measure text-base text-ink">{requisito}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-measure text-sm text-gray">{quemPodeContratar.nota}</p>
        </div>
      </Container>
    </section>
  );
}
