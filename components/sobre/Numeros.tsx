import { Container } from "@/components/ui/Container";
import { numeros } from "@/content/dados-empresa";
import { secaoNumeros } from "@/content/sobre";

/*
 * Unica secao em forest solido da pagina.
 * Os valores sao [PLACEHOLDER] de proposito: numero de resultado nao pode ser
 * estimado nem arredondado, e a nota de rodape diz isso em voz alta.
 * Nada de contador animado, que o briefing proibe.
 */
const linhas = [
  { rotulo: secaoNumeros.rotulos.volumeOriginado, valor: numeros.volumeOriginado },
  { rotulo: secaoNumeros.rotulos.clientesAtendidos, valor: numeros.clientesAtendidos },
  { rotulo: secaoNumeros.rotulos.satisfacao, valor: numeros.satisfacao },
];

export function Numeros() {
  return (
    <section
      id="numeros"
      aria-labelledby="numeros-titulo"
      className="scroll-mt-24 bg-forest text-white"
    >
      <Container className="py-20 md:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 id="numeros-titulo" className="font-display text-3xl md:text-4xl">
              {secaoNumeros.titulo}
            </h2>
            <p className="mt-8 max-w-measure text-lg text-white">{secaoNumeros.introducao}</p>
          </div>
        </div>

        <dl className="mt-16 grid gap-x-16 gap-y-10 md:grid-cols-3">
          {linhas.map((linha) => (
            <div key={linha.rotulo} className="border-t border-mint pt-6">
              <dt className="font-heading text-xs font-semibold tracking-widest text-white uppercase">
                {linha.rotulo}
              </dt>
              {/* break-words porque [PLACEHOLDER] e uma palavra unica e sem ele a
                  coluna estoura em 768px. Vale tambem para o numero definitivo. */}
              <dd className="mt-4 font-display text-2xl break-words text-white">
                {linha.valor}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-12 max-w-measure text-sm text-white">{secaoNumeros.nota}</p>
      </Container>
    </section>
  );
}
