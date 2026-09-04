import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

/**
 * Link de texto com seta. Em forest (6.20:1) e nao em green: no tamanho de corpo
 * o green reprovaria AA. O sublinhado aparece no hover, e a seta anda 2px.
 */
export function LinkDeTexto({
  href,
  children,
  className,
}: {
  href: string;
  children: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        /* py-1 leva o alvo a 32px de altura. Sem ele fica em 24px cravados, no limite
     exato do criterio 2.5.8, e este e um link que se toca no celular. */
        "group inline-flex items-center gap-2 py-1 font-heading text-sm font-semibold text-forest",
        "underline decoration-transparent underline-offset-4 transition-colors hover:decoration-green",
        className,
      )}
    >
      {children}
      <ArrowRight
        size={18}
        strokeWidth={1.5}
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-0.5"
      />
    </Link>
  );
}
