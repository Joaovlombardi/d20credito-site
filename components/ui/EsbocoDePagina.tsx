import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";

/**
 * TEMPORARIO.
 * Marca uma pagina cujo conteudo ainda nao foi escrito, mantendo a escala
 * tipografica e as cores reais. Cada pagina substitui esta chamada pelo seu
 * conteudo nas etapas 3 a 6, e o arquivo sai do projeto no fim.
 */

type EsbocoDePaginaProps = {
  titulo: string;
  resumo: string;
  etapa: string;
  children?: ReactNode;
};

export function EsbocoDePagina({ titulo, resumo, etapa, children }: EsbocoDePaginaProps) {
  return (
    <Container as="article" className="py-20 md:py-28">
      <h1 className="max-w-[16ch] font-display text-3xl text-ink md:text-4xl lg:text-5xl">
        {titulo}
      </h1>

      <p className="mt-8 max-w-measure text-lg text-ink">{resumo}</p>

      <p className="mt-4 max-w-measure text-base text-gray">{etapa}</p>

      {children}
    </Container>
  );
}
