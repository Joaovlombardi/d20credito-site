import Link from "next/link";

import { cn } from "@/lib/cn";

type BotaoLinkProps = {
  href: string;
  children: string;
  variante?: "primario" | "secundario";
  className?: string;
  onClick?: () => void;
};

/*
 * Cores conforme a decisao travada em globals.css.
 * Primario: fundo forest com rotulo branco, 6.20:1. No hover inverte para fundo
 * branco com rotulo forest e borda green, tambem 6.20:1. A borda existe nos dois
 * estados, na mesma espessura, entao o botao nao muda de tamanho no hover.
 * green nunca preenche um botao de rotulo branco, nem no hover: reprovaria AA.
 */
const variantes = {
  primario:
    "border border-forest bg-forest text-white hover:border-green hover:bg-white hover:text-forest",
  /* border-gray e nao border-line: em botao a borda e o contorno do controle e
     precisa de 3:1 pela WCAG 1.4.11. line da 1.16:1 e some contra o branco. */
  secundario:
    "border border-gray bg-white text-forest hover:border-green hover:bg-surface",
} as const;

export function BotaoLink({
  href,
  children,
  variante = "primario",
  className,
  onClick,
}: BotaoLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-5 py-3 font-heading text-sm font-semibold transition-colors",
        variantes[variante],
        className,
      )}
    >
      {children}
    </Link>
  );
}
