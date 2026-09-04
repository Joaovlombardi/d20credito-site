import { Container } from "@/components/ui/Container";
import { BotaoLink } from "@/components/ui/Botao";
import { chamadaPrincipal } from "@/content/navegacao";
import { chamadaFinal } from "@/content/home";

/* Bloco simples de fechamento: filete de 1px, titulo em Archivo Black ocupando
   7 das 12 colunas e um botao so, alinhado a base do bloco. Sem formulario. */
export function ChamadaFinal() {
  return (
    <section aria-labelledby="chamada-final-titulo">
      <Container className="py-20 md:py-28">
        <div className="border-t border-line pt-12 lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2
              id="chamada-final-titulo"
              className="font-display text-2xl text-ink md:text-3xl"
            >
              {chamadaFinal.titulo}
            </h2>
            <p className="mt-6 max-w-measure text-base text-gray">{chamadaFinal.texto}</p>
          </div>

          <div className="mt-10 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:flex lg:items-end lg:justify-end">
            <BotaoLink href={chamadaPrincipal.href}>{chamadaPrincipal.rotulo}</BotaoLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
