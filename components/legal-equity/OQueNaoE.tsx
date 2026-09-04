import { Container } from "@/components/ui/Container";
import { oQueNaoE } from "@/content/legal-equity";

/*
 * Unica secao em forest solido da pagina. O tratamento premium fica aqui de
 * proposito: e o bloco que corrige a confusao com outro produto, e e o que a
 * pessoa precisa ler antes de assinar qualquer coisa.
 * Texto sempre em branco, 6.20:1. mint so como filete.
 */
export function OQueNaoE() {
  return (
    <section
      id="o-que-nao-e"
      aria-labelledby="o-que-nao-e-titulo"
      className="scroll-mt-24 bg-forest text-white"
    >
      <Container className="py-20 md:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 id="o-que-nao-e-titulo" className="font-display text-3xl md:text-4xl">
              {oQueNaoE.titulo}
            </h2>
            <p className="mt-8 max-w-measure text-lg text-white">{oQueNaoE.introducao}</p>
          </div>
        </div>

        <dl className="mt-16 grid gap-x-16 gap-y-12 lg:grid-cols-3">
          {oQueNaoE.itens.map((item) => (
            <div key={item.titulo} className="border-t border-mint pt-6">
              <dt className="font-heading text-lg font-semibold text-white">{item.titulo}</dt>
              <dd className="mt-3 text-base text-white">{item.texto}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
