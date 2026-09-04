import { cn } from "@/lib/cn";

/**
 * TEMPORARIO, ate a producao fotografica.
 *
 * O briefing pede fotografia real de pessoas brasileiras em contexto cotidiano,
 * luz natural e enquadramento limpo. Nada de banco de imagem corporativo, nada de
 * ilustracao vetorial. Enquanto a foto nao existe, este bloco reserva a proporcao
 * certa para que o layout nao mude quando a imagem entrar, e descreve o que entra.
 *
 * Ao substituir: troque por next/image com width e height nativos e alt descritivo.
 */
export function EspacoDeFoto({
  descricao,
  proporcao = "4 / 5",
  className,
}: {
  descricao: string;
  proporcao?: string;
  className?: string;
}) {
  return (
    <figure
      className={cn("flex flex-col justify-end border border-line bg-surface p-6", className)}
      style={{ aspectRatio: proporcao }}
    >
      <figcaption className="text-sm text-gray">
        <span className="font-heading font-semibold text-ink">Espaço de fotografia. </span>
        {descricao}
      </figcaption>
    </figure>
  );
}
