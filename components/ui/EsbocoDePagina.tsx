import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";

/**
 * Pagina com conteudo pendente de terceiros.
 *
 * Restam duas: politica de privacidade e termos de uso. O texto das duas e
 * juridico, precisa ser fornecido e revisado pelo juridico, e nao pode ser
 * redigido aqui. Ate la elas existem, navegam e ficam fora do indice de busca,
 * exibindo o aviso do que falta. Quando o texto chegar, este arquivo sai.
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
