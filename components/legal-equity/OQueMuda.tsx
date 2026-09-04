import { Equal, Plus } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { RotuloDeSecao } from "@/components/ui/RotuloDeSecao";
import { oQueMuda } from "@/content/legal-equity";

/*
 * Contraste direto em duas colunas separadas por filete vertical. O icone e
 * redundante com o titulo da coluna, entao vai como aria-hidden: ele existe para
 * quem varre a pagina com o olho, nao para carregar informacao.
 */
function Coluna({
  titulo,
  itens,
  icone: Icone,
  destacado = false,
}: {
  titulo: string;
  itens: readonly string[];
  icone: typeof Equal;
  destacado?: boolean;
}) {
  return (
    <div className="py-10 md:px-10 md:first:pl-0 md:last:pr-0">
      <h3
        className={
          destacado
            ? "font-heading text-xl font-semibold text-forest"
            : "font-heading text-xl font-semibold text-ink"
        }
      >
        {titulo}
      </h3>
      <ul className="mt-8 flex flex-col gap-5">
        {itens.map((item) => (
          <li key={item} className="flex items-start gap-4">
            <Icone
              size={20}
              strokeWidth={1.5}
              aria-hidden="true"
              className="mt-1 shrink-0 text-forest"
            />
            <span className="max-w-measure text-base text-ink">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function OQueMuda() {
  return (
    <section id="o-que-muda" aria-labelledby="o-que-muda-titulo" className="scroll-mt-24">
      <Container className="py-20 md:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <RotuloDeSecao>{oQueMuda.rotulo}</RotuloDeSecao>
            <h2
              id="o-que-muda-titulo"
              className="mt-6 font-heading text-2xl font-semibold text-ink md:text-3xl"
            >
              {oQueMuda.titulo}
            </h2>
          </div>
        </div>

        <div className="mt-12 grid divide-y divide-line border-t border-b border-line md:grid-cols-2 md:divide-x md:divide-y-0">
          <Coluna
            titulo={oQueMuda.continuaIgual.titulo}
            itens={oQueMuda.continuaIgual.itens}
            icone={Equal}
          />
          <Coluna
            titulo={oQueMuda.passaAExistir.titulo}
            itens={oQueMuda.passaAExistir.itens}
            icone={Plus}
            destacado
          />
        </div>
      </Container>
    </section>
  );
}
