import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { heroLegalEquity } from "@/content/legal-equity";

/*
 * A pagina e longa e didatica, entao o hero entrega o indice junto: quem chega
 * da busca com uma duvida especifica pula direto para ela, e quem chega sem
 * saber o que e o produto ve de cara o tamanho e a ordem da explicacao.
 */
export function HeroDaPagina() {
  return (
    <section aria-labelledby="hero-titulo" className="border-b border-line">
      <Container className="grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="lg:col-span-7">
          <h1 id="hero-titulo" className="font-display text-3xl text-ink md:text-4xl">
            {heroLegalEquity.titulo}
          </h1>
          <p className="mt-8 max-w-measure text-lg text-ink">{heroLegalEquity.subtitulo}</p>
        </div>

        <nav aria-label="Nesta página" className="lg:col-span-4 lg:col-start-9">
          <h2 className="font-heading text-xs font-semibold tracking-widest text-gray uppercase">
            Nesta página
          </h2>
          <ol className="mt-5 border-t border-line">
            {heroLegalEquity.indice.map((item, indice) => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  className="flex items-baseline gap-4 py-3 text-sm text-ink transition-colors hover:text-forest"
                >
                  <span aria-hidden="true" className="font-heading text-xs text-gray">
                    {String(indice + 1).padStart(2, "0")}
                  </span>
                  {item.rotulo}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </section>
  );
}
