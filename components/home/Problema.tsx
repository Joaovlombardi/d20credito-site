import { Container } from "@/components/ui/Container";
import { RotuloDeSecao } from "@/components/ui/RotuloDeSecao";
import { problema } from "@/content/home";

export function Problema() {
  return (
    <section aria-labelledby="problema-titulo">
      <Container className="grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <RotuloDeSecao>{problema.rotulo}</RotuloDeSecao>
          <h2
            id="problema-titulo"
            className="mt-6 font-heading text-2xl font-semibold text-ink md:text-3xl"
          >
            {problema.titulo}
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="max-w-measure text-lg text-ink">{problema.texto}</p>
          <p className="mt-10 border-l-2 border-green pl-6 font-display text-xl text-ink md:text-2xl">
            {problema.destaque}
          </p>
        </div>
      </Container>
    </section>
  );
}
