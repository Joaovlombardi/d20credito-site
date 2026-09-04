import { Container } from "@/components/ui/Container";
import { EspacoDeFoto } from "@/components/ui/EspacoDeFoto";
import { abertura } from "@/content/sobre";

/* Abertura de materia: titulo grande a esquerda, texto de posicionamento numa
   coluna deslocada e uma foto larga fechando o bloco. */
export function Abertura() {
  return (
    <section aria-labelledby="abertura-titulo" className="border-b border-line">
      <Container className="py-14 md:py-20 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <h1
            id="abertura-titulo"
            className="font-display text-3xl text-ink md:text-4xl lg:col-span-5"
          >
            {abertura.titulo}
          </h1>

          <div className="mt-8 flex flex-col gap-6 lg:col-span-6 lg:col-start-7 lg:mt-0">
            {abertura.paragrafos.map((paragrafo) => (
              <p key={paragrafo.slice(0, 32)} className="max-w-measure text-lg text-ink">
                {paragrafo}
              </p>
            ))}
          </div>
        </div>

        <EspacoDeFoto descricao={abertura.foto} proporcao="21 / 9" className="mt-16" />
      </Container>
    </section>
  );
}
