import { Container } from "@/components/ui/Container";
import { RotuloDeSecao } from "@/components/ui/RotuloDeSecao";
import { LinkDeTexto } from "@/components/ui/LinkDeTexto";
import { Acordeao } from "@/components/ui/Acordeao";
import { perguntasFrequentes } from "@/content/home";

export function PerguntasFrequentes() {
  return (
    <section
      id="perguntas-frequentes"
      aria-labelledby="faq-titulo"
      className="scroll-mt-24 border-y border-line bg-surface"
    >
      <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <RotuloDeSecao>{perguntasFrequentes.rotulo}</RotuloDeSecao>
          <h2
            id="faq-titulo"
            className="mt-6 font-heading text-2xl font-semibold text-ink md:text-3xl"
          >
            {perguntasFrequentes.titulo}
          </h2>
          <LinkDeTexto href={perguntasFrequentes.link.href} className="mt-8">
            {perguntasFrequentes.link.rotulo}
          </LinkDeTexto>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Acordeao itens={perguntasFrequentes.itens} />
        </div>
      </Container>
    </section>
  );
}
