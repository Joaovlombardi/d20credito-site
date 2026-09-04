import { Container } from "@/components/ui/Container";
import { RotuloDeSecao } from "@/components/ui/RotuloDeSecao";
import { analogia } from "@/content/legal-equity";

/* Desenvolvimento do bloco de tres colunas da Home, com o texto editorial que
   la nao cabia. Mesma divisao por filete vertical, com uma linha a mais em cada
   coluna e paragrafos de abertura e fechamento em coluna de leitura. */
export function Analogia() {
  return (
    <section id="a-analogia" aria-labelledby="analogia-titulo" className="scroll-mt-24">
      <Container className="py-20 md:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <RotuloDeSecao>{analogia.rotulo}</RotuloDeSecao>
            <h2
              id="analogia-titulo"
              className="mt-6 font-heading text-2xl font-semibold text-ink md:text-3xl"
            >
              {analogia.titulo}
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-6 lg:col-span-6 lg:col-start-7 lg:mt-0">
            {analogia.aberturaParagrafos.map((paragrafo) => (
              <p key={paragrafo.slice(0, 32)} className="max-w-measure text-lg text-ink">
                {paragrafo}
              </p>
            ))}
          </div>
        </div>

        <dl className="mt-16 grid divide-y divide-line border-t border-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {analogia.colunas.map((coluna, indice) => (
            <div
              key={coluna.termo}
              className={
                indice === 2
                  ? "py-8 md:px-8 md:py-10 md:last:pr-0"
                  : "py-8 md:px-8 md:py-10 md:first:pl-0"
              }
            >
              <dt
                className={
                  indice === 2
                    ? "font-heading text-xl font-semibold text-forest"
                    : "font-heading text-xl font-semibold text-ink"
                }
              >
                {coluna.termo}
              </dt>
              <dd className="mt-3 text-base text-ink">{coluna.garantia}</dd>
              <dd className="mt-3 text-base text-gray">{coluna.texto}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-x-16 lg:gap-y-6">
          {analogia.fechamentoParagrafos.map((paragrafo) => (
            <p
              key={paragrafo.slice(0, 32)}
              className="max-w-measure text-base text-ink lg:col-span-6 lg:col-start-7"
            >
              {paragrafo}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
