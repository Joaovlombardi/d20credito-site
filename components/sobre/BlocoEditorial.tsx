import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { RotuloDeSecao } from "@/components/ui/RotuloDeSecao";
import { cn } from "@/lib/cn";

/**
 * Estrutura editorial das secoes de texto da pagina Sobre.
 *
 * O rotulo fica na margem, em duas colunas de doze, e o texto corre numa coluna
 * de leitura deslocada para a direita. E o oposto da grade de cards: a pagina
 * inteira se le de cima para baixo, como materia, e o deslocamento da coluna
 * mantem o layout assimetrico sem inventar bloco decorativo.
 */
export function BlocoEditorial({
  id,
  rotulo,
  titulo,
  children,
  fundoAlternado = false,
}: {
  id: string;
  rotulo: string;
  titulo: string;
  children: ReactNode;
  fundoAlternado?: boolean;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titulo`}
      className={cn(
        "scroll-mt-24",
        fundoAlternado && "border-y border-line bg-surface",
      )}
    >
      <Container className="py-20 md:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-2">
            <RotuloDeSecao>{rotulo}</RotuloDeSecao>
          </div>

          <div className="mt-6 lg:col-span-7 lg:col-start-4 lg:mt-0">
            <h2
              id={`${id}-titulo`}
              className="font-heading text-2xl font-semibold text-ink md:text-3xl"
            >
              {titulo}
            </h2>
            <div className="mt-8 flex flex-col gap-6">{children}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Paragrafo da coluna de leitura: 19px, entrelinha larga, largura de medida. */
export function ParagrafoEditorial({ children }: { children: string }) {
  return <p className="max-w-measure text-lg text-ink">{children}</p>;
}
