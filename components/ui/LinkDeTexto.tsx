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
        "group inline-flex items-center gap-2 font-heading text-sm font-semibold text-forest",
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
