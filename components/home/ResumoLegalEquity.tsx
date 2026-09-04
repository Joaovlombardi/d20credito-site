import { Container } from "@/components/ui/Container";
import { RotuloDeSecao } from "@/components/ui/RotuloDeSecao";
import { LinkDeTexto } from "@/components/ui/LinkDeTexto";
import { resumoLegalEquity } from "@/content/home";

/* Tres colunas de texto separadas por filete de 1px, sem card e sem icone.
   No mobile a divisao vira horizontal. */
export function ResumoLegalEquity() {
  return (
    <section
      aria-labelledby="resumo-legal-equity-titulo"
      className="border-y border-line bg-surface"
    >
      <Container className="py-20 md:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <RotuloDeSecao>{resumoLegalEquity.rotulo}</RotuloDeSecao>
            <h2
              id="resumo-legal-equity-titulo"
              className="mt-6 font-heading text-2xl font-semibold text-ink md:text-3xl"
            >
              {resumoLegalEquity.titulo}
            </h2>
          </div>
        </div>

        <dl className="mt-14 grid divide-y divide-line border-t border-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {resumoLegalEquity.colunas.map((coluna, indice) => (
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
              <dd className="mt-3 text-base text-gray">{coluna.garantia}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="max-w-measure text-base text-ink">{resumoLegalEquity.texto}</p>
            <LinkDeTexto href={resumoLegalEquity.link.href} className="mt-6">
              {resumoLegalEquity.link.rotulo}
            </LinkDeTexto>
          </div>
        </div>
      </Container>
    </section>
  );
}
