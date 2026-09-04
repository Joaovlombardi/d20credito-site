import { Container } from "@/components/ui/Container";
import { RotuloDeSecao } from "@/components/ui/RotuloDeSecao";
import { TabelaDeParametros } from "@/components/ui/TabelaDeParametros";
import { parametrosLegalEquity } from "@/content/legal-equity";

/* Mesma tabela da Home, em outra disposicao: aqui o titulo abre a secao e a
   tabela vem embaixo, porque a pagina inteira e lida de cima para baixo. */
export function ParametrosLegalEquity() {
  return (
    <section id="parametros" aria-labelledby="parametros-titulo" className="scroll-mt-24">
      <Container className="py-20 md:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <RotuloDeSecao>{parametrosLegalEquity.rotulo}</RotuloDeSecao>
            <h2
              id="parametros-titulo"
              className="mt-6 font-heading text-2xl font-semibold text-ink md:text-3xl"
            >
              {parametrosLegalEquity.titulo}
            </h2>
          </div>
          <p className="mt-8 max-w-measure text-sm text-gray lg:col-span-5 lg:col-start-8 lg:mt-0 lg:self-end">
            {parametrosLegalEquity.nota}
          </p>
        </div>

        <div className="mt-12 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-9">
            <TabelaDeParametros />
          </div>
        </div>
      </Container>
    </section>
  );
}
