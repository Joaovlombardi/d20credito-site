import { cn } from "@/lib/cn";

/**
 * Sobretítulo curto que abre uma seção.
 * Em cinza sobre branco (4.74:1) ou em branco sobre forest, nunca em mint nem
 * em green: nesse tamanho os dois reprovariam AA.
 */
export function RotuloDeSecao({
  children,
  claro = false,
  className,
}: {
  children: string;
  claro?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-heading text-xs font-semibold tracking-widest uppercase",
        claro ? "text-white" : "text-gray",
        className,
      )}
    >
      {children}
    </p>
  );
}
