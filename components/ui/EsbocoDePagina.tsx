import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";

/**
 * TEMPORARIO, etapa 1.
 * Serve para conferir a escala tipografica, as cores e a navegacao entre as seis
 * rotas antes do conteudo existir. Sai quando Header e Footer entrarem na etapa 2,
 * junto com este arquivo inteiro.
 */

const rotas = [
  { href: "/", rotulo: "Início" },
  { href: "/sobre", rotulo: "Sobre" },
  { href: "/legal-equity", rotulo: "Legal Equity" },
  { href: "/contato", rotulo: "Contato" },
  { href: "/politica-de-privacidade", rotulo: "Política de privacidade" },
  { href: "/termos-de-uso", rotulo: "Termos de uso" },
] as const;

type EsbocoDePaginaProps = {
  titulo: string;
  resumo: string;
  etapa: string;
  children?: ReactNode;
};

export function EsbocoDePagina({ titulo, resumo, etapa, children }: EsbocoDePaginaProps) {
  return (
    <Container as="article" className="py-20 md:py-28">
      <p className="font-heading text-sm font-semibold tracking-widest text-forest uppercase">
        D20 Cred
      </p>

      <h1 className="mt-6 max-w-[16ch] font-display text-3xl text-ink md:text-4xl lg:text-5xl">
        {titulo}
      </h1>

      <p className="mt-8 max-w-measure text-lg text-ink">{resumo}</p>

      <p className="mt-4 max-w-measure text-base text-gray">{etapa}</p>

      {children}

      <nav aria-label="Rotas do site" className="mt-16 border-t border-line pt-8">
        <p className="font-heading text-sm font-semibold text-gray">
          Navegação temporária
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {rotas.map((rota) => (
            <li key={rota.href}>
              <Link
                href={rota.href}
                className="text-base text-forest underline underline-offset-4 hover:text-ink"
              >
                {rota.rotulo}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
