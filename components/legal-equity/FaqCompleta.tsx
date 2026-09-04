import { Container } from "@/components/ui/Container";
import { RotuloDeSecao } from "@/components/ui/RotuloDeSecao";
import { LinkDeTexto } from "@/components/ui/LinkDeTexto";
import { Acordeao } from "@/components/ui/Acordeao";
import { faqLegalEquity } from "@/content/legal-equity";

/*
 * FAQ agrupada por tema. Sao quinze perguntas: sem os grupos, viraria uma
 * parede de acordeao. O titulo de cada grupo fica na coluna da esquerda e
 * acompanha a leitura.
 * As seis perguntas sobre medo de golpe ficam na Home, e o bloco de abertura
 * aponta para la em vez de repetir o texto nas duas paginas.
 */
export function FaqCompleta() {
  return (
    <section
      id="perguntas-frequentes"
      aria-labelledby="faq-titulo"
      className="scroll-mt-24 border-y border-line bg-surface"
    >
      <Container className="py-20 md:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <RotuloDeSecao>{faqLegalEquity.rotulo}</RotuloDeSecao>
            <h2
              id="faq-titulo"
              className="mt-6 font-heading text-2xl font-semibold text-ink md:text-3xl"
            >
              {faqLegalEquity.titulo}
            </h2>
          </div>
          <div className="mt-8 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:self-end">
            <p className="max-w-measure text-base text-gray">
              {faqLegalEquity.chamadaHome.texto}
            </p>
            <LinkDeTexto href={faqLegalEquity.chamadaHome.link.href} className="mt-4">
              {faqLegalEquity.chamadaHome.link.rotulo}
            </LinkDeTexto>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-14">
          {faqLegalEquity.grupos.map((grupo) => (
            <div key={grupo.titulo} className="lg:grid lg:grid-cols-12 lg:gap-16">
              <h3 className="font-heading text-xs font-semibold tracking-widest text-gray uppercase lg:col-span-3">
                {grupo.titulo}
              </h3>
              <div className="mt-4 lg:col-span-8 lg:col-start-5 lg:mt-0">
                <Acordeao itens={grupo.itens} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
