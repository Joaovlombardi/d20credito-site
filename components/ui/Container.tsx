import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

/** Conteiner de pagina: largura maxima e respiro lateral responsivo. */
export function Container({ as: Tag = "div", children, className }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-page px-6 md:px-10", className)}>
      {children}
    </Tag>
  );
}
