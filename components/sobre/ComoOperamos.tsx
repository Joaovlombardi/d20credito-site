import { BlocoEditorial, ParagrafoEditorial } from "@/components/sobre/BlocoEditorial";
import { comoOperamos } from "@/content/sobre";

/*
 * A lista de "quem faz o que" e uma lista de creditos, nao uma grade de cards:
 * cada parte ocupa uma linha inteira, separada por filete de 1px, com o nome a
 * esquerda e o papel a direita. E o jeito mais direto de deixar claro o que a
 * D20 pode e o que ela nao pode fazer.
 */
export function ComoOperamos() {
  return (
    <BlocoEditorial
      id="como-operamos"
      rotulo={comoOperamos.rotulo}
      titulo={comoOperamos.titulo}
    >
      {comoOperamos.paragrafos.map((paragrafo) => (
        <ParagrafoEditorial key={paragrafo.slice(0, 32)}>{paragrafo}</ParagrafoEditorial>
      ))}

      <div className="mt-6">
        <h3 className="font-heading text-xs font-semibold tracking-widest text-gray uppercase">
          {comoOperamos.quemFazOQue.titulo}
        </h3>
        <dl className="mt-6 border-t border-line">
          {comoOperamos.quemFazOQue.partes.map((parte) => (
            <div key={parte.nome} className="border-b border-line py-6 md:grid md:grid-cols-5 md:gap-8">
              <dt className="font-heading text-base font-semibold text-ink md:col-span-2">{parte.nome}</dt>
              <dd className="mt-2 text-base text-gray md:col-span-3 md:mt-0">{parte.papel}</dd>
            </div>
          ))}
        </dl>
      </div>
    </BlocoEditorial>
  );
}
