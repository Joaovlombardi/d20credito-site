import { BlocoEditorial, ParagrafoEditorial } from "@/components/sobre/BlocoEditorial";
import { porQueExiste } from "@/content/sobre";

export function PorQueExiste() {
  return (
    <BlocoEditorial
      id="por-que-existe"
      rotulo={porQueExiste.rotulo}
      titulo={porQueExiste.titulo}
      fundoAlternado
    >
      {porQueExiste.paragrafos.map((paragrafo) => (
        <ParagrafoEditorial key={paragrafo.slice(0, 32)}>{paragrafo}</ParagrafoEditorial>
      ))}

      <p className="my-4 border-l-2 border-green pl-6 font-display text-xl text-ink md:text-2xl">
        {porQueExiste.destaque}
      </p>

      {porQueExiste.fechamento.map((paragrafo) => (
        <ParagrafoEditorial key={paragrafo.slice(0, 32)}>{paragrafo}</ParagrafoEditorial>
      ))}
    </BlocoEditorial>
  );
}
