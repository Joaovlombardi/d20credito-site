import { Container } from "@/components/ui/Container";
import { BotaoLink } from "@/components/ui/Botao";
import { LinkDeTexto } from "@/components/ui/LinkDeTexto";
import { EspacoDeFoto } from "@/components/ui/EspacoDeFoto";
import { chamadaPrincipal } from "@/content/navegacao";
import { hero } from "@/content/home";

/*
 * Layout dividido, texto a esquerda em 7 das 12 colunas e foto a direita em 4,
 * com a coluna 8 vazia como respiro. Assimetrico de proposito: o briefing proibe
 * o hero centralizado de titulo, subtitulo, dois botoes e imagem generica.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-titulo">
      <Container className="grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="lg:col-span-7">
          <h1
            id="hero-titulo"
            className="font-display text-3xl text-ink md:text-4xl xl:text-5xl"
          >
            {hero.titulo}
          </h1>

          <p className="mt-8 max-w-measure text-lg text-ink">{hero.subtitulo}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <BotaoLink href={chamadaPrincipal.href}>{chamadaPrincipal.rotulo}</BotaoLink>
            <LinkDeTexto href={hero.linkSecundario.href}>
              {hero.linkSecundario.rotulo}
            </LinkDeTexto>
          </div>

          <p className="mt-10 border-l-2 border-green pl-4 font-heading text-sm font-semibold text-ink">
            {hero.resumoDoProduto}
          </p>

          <p className="mt-6 max-w-measure text-sm text-gray">{hero.microcopy}</p>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <EspacoDeFoto descricao={hero.foto} className="h-full" />
        </div>
      </Container>
    </section>
  );
}
