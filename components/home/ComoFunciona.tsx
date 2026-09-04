import { Container } from "@/components/ui/Container";
import { RotuloDeSecao } from "@/components/ui/RotuloDeSecao";
import { comoFunciona } from "@/content/home";

/*
 * A numeracao em mint e ornamento, nao texto: fica marcada como aria-hidden e a
 * ordem ja e dada pela lista ordenada, entao nenhuma informacao depende do
 * contraste dela. Texto e titulo de cada passo ficam em ink e gray.
 */
export function ComoFunciona() {
  return (
    <section aria-labelledby="como-funciona-titulo">
      <Container className="py-20 md:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <RotuloDeSecao>{comoFunciona.rotulo}</RotuloDeSecao>
            <h2
              id="como-funciona-titulo"
              className="mt-6 font-heading text-2xl font-semibold text-ink md:text-3xl"
            >
              {comoFunciona.titulo}
            </h2>
          </div>
        </div>

        <ol className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {comoFunciona.passos.map((passo, indice) => (
            <li key={passo.titulo} className="border-t border-line pt-6">
              <span
                aria-hidden="true"
                className="block font-display text-4xl text-mint"
              >
                {String(indice + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
                {passo.titulo}
              </h3>
              <p className="mt-3 text-base text-gray">{passo.texto}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-measure text-sm text-gray">{comoFunciona.nota}</p>
      </Container>
    </section>
  );
}
