import { Container } from "@/components/ui/Container";
import { RotuloDeSecao } from "@/components/ui/RotuloDeSecao";
import { comoFuncionaDetalhado } from "@/content/legal-equity";

/*
 * Passo a passo em lista vertical, com o numeral a esquerda e o texto ocupando
 * a largura de leitura. Tratamento diferente do da Home, que dispoe quatro
 * passos curtos na horizontal: aqui sao cinco passos com texto denso.
 * O numeral em menta e ornamento, marcado com aria-hidden, porque a ordem ja
 * vem da lista ordenada.
 */
export function ComoFuncionaDetalhado() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-titulo"
      className="scroll-mt-24 border-y border-line bg-surface"
    >
      <Container className="py-20 md:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <RotuloDeSecao>{comoFuncionaDetalhado.rotulo}</RotuloDeSecao>
            <h2
              id="como-funciona-titulo"
              className="mt-6 font-heading text-2xl font-semibold text-ink md:text-3xl"
            >
              {comoFuncionaDetalhado.titulo}
            </h2>
            <p className="mt-8 max-w-measure text-lg text-ink">
              {comoFuncionaDetalhado.introducao}
            </p>
          </div>
        </div>

        <ol className="mt-14 border-t border-line">
          {comoFuncionaDetalhado.passos.map((passo, indice) => (
            <li
              key={passo.titulo}
              className="grid gap-x-16 gap-y-4 border-b border-line py-8 lg:grid-cols-12"
            >
              <div className="flex items-baseline gap-5 lg:col-span-5">
                <span aria-hidden="true" className="font-display text-3xl text-mint">
                  {String(indice + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg font-semibold text-ink">{passo.titulo}</h3>
              </div>
              <p className="max-w-measure text-base text-gray lg:col-span-7">{passo.texto}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-measure text-sm text-gray">{comoFuncionaDetalhado.nota}</p>
      </Container>
    </section>
  );
}
