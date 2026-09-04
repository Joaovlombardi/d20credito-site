import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "as" | "children" | "className">;

/**
 * Conteiner de pagina: largura maxima e respiro lateral responsivo.
 * Repassa o resto das props para a tag escolhida em `as`, para que um
 * `<Container as="nav" aria-label="...">` consiga rotular o marco.
 */
export function Container({ as: Tag = "div", children, className, ...resto }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-page px-6 md:px-10", className)} {...resto}>
      {children}
    </Tag>
  );
}
