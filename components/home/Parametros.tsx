import { Container } from "@/components/ui/Container";
import { RotuloDeSecao } from "@/components/ui/RotuloDeSecao";
import { TabelaDeParametros } from "@/components/ui/TabelaDeParametros";
import { parametros } from "@/content/home";

export function Parametros() {
  return (
    <section aria-labelledby="parametros-titulo">
      <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <RotuloDeSecao>{parametros.rotulo}</RotuloDeSecao>
          <h2
            id="parametros-titulo"
            className="mt-6 font-heading text-2xl font-semibold text-ink md:text-3xl"
          >
            {parametros.titulo}
          </h2>
          <p className="mt-8 max-w-measure text-sm text-gray">{parametros.nota}</p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <TabelaDeParametros />
        </div>
      </Container>
    </section>
  );
}
