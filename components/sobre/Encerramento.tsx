import { Container } from "@/components/ui/Container";
import { RotuloDeSecao } from "@/components/ui/RotuloDeSecao";
import { BotaoLink } from "@/components/ui/Botao";
import { LinkDeTexto } from "@/components/ui/LinkDeTexto";
import { encerramento } from "@/content/sobre";

/* Fechamento com os dois caminhos que o briefing pede: entender a modalidade ou
   falar com a empresa. Sem formulario e sem repetir a chamada das outras paginas. */
export function Encerramento() {
  return (
    <section aria-labelledby="encerramento-titulo">
      <Container className="py-20 md:py-28">
        <div className="border-t border-line pt-12 lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-2">
            <RotuloDeSecao>{encerramento.rotulo}</RotuloDeSecao>
          </div>

          <div className="mt-6 lg:col-span-7 lg:col-start-4 lg:mt-0">
            <h2
              id="encerramento-titulo"
              className="font-display text-2xl text-ink md:text-3xl"
            >
              {encerramento.titulo}
            </h2>

            <div className="mt-8 flex flex-col gap-6">
              {encerramento.paragrafos.map((paragrafo) => (
                <p key={paragrafo.slice(0, 32)} className="max-w-measure text-lg text-ink">
                  {paragrafo}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <BotaoLink href={encerramento.botao.href}>{encerramento.botao.rotulo}</BotaoLink>
              <LinkDeTexto href={encerramento.link.href}>{encerramento.link.rotulo}</LinkDeTexto>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
