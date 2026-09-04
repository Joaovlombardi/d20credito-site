"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { BotaoLink } from "@/components/ui/Botao";
import { chamadaPrincipal, navegacaoPrincipal } from "@/content/navegacao";
import { logos } from "@/content/dados-empresa";
import { cn } from "@/lib/cn";

export function Header() {
  const caminho = usePathname();
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  /* Borda inferior de 1px so aparece depois que a pagina rola. */
  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 0);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  /* O painel mobile ocupa a tela inteira: trava a rolagem do fundo. */
  useEffect(() => {
    if (!menuAberto) return;

    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setMenuAberto(false);
    };

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", aoTeclar);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", aoTeclar);
    };
  }, [menuAberto]);

  const ehAtual = (href: string) =>
    href === "/" ? caminho === "/" : caminho.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-colors",
        rolou ? "border-b border-line" : "border-b border-transparent",
      )}
    >
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href="/" aria-label="D20 Cred, ir para a página inicial" className="shrink-0">
          <Image
            src={logos.horizontalVerde.src}
            alt={logos.horizontalVerde.alt}
            width={logos.horizontalVerde.width}
            height={logos.horizontalVerde.height}
            className="h-auto w-40"
            priority
          />
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navegacaoPrincipal.map((item) => {
              const atual = ehAtual(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={atual ? "page" : undefined}
                    className={cn(
                      /* O texto nunca fica em green: nesse tamanho reprovaria AA.
                         O green marca o sublinhado, que e detalhe grafico. */
                      "font-heading text-sm font-semibold transition-colors",
                      "border-b-2 pb-1",
                      atual
                        ? "border-green text-ink"
                        : "border-transparent text-gray hover:border-green hover:text-ink",
                    )}
                  >
                    {item.rotulo}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <BotaoLink href={chamadaPrincipal.href}>{chamadaPrincipal.rotulo}</BotaoLink>
        </div>

        <button
          type="button"
          onClick={() => setMenuAberto(true)}
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          className="rounded-sm p-2 text-ink lg:hidden"
        >
          <Menu size={24} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </Container>

      {menuAberto ? (
        <div
          id="menu-mobile"
          className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden"
        >
          <Container className="flex items-center justify-between py-4">
            <Image
              src={logos.horizontalVerde.src}
              alt={logos.horizontalVerde.alt}
              width={logos.horizontalVerde.width}
              height={logos.horizontalVerde.height}
              className="h-auto w-40"
            />
            <button
              type="button"
              onClick={() => setMenuAberto(false)}
              aria-label="Fechar menu"
              className="rounded-sm p-2 text-ink"
            >
              <X size={24} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </Container>

          <Container as="nav" className="flex flex-1 flex-col justify-between pt-8 pb-10">
            <ul className="flex flex-col gap-2">
              {navegacaoPrincipal.map((item) => {
                const atual = ehAtual(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuAberto(false)}
                      aria-current={atual ? "page" : undefined}
                      className={cn(
                        "block border-b border-line py-4 font-heading text-xl font-semibold",
                        atual ? "text-forest" : "text-ink",
                      )}
                    >
                      {item.rotulo}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <BotaoLink
              href={chamadaPrincipal.href}
              className="mt-10 w-full"
              onClick={() => setMenuAberto(false)}
            >
              {chamadaPrincipal.rotulo}
            </BotaoLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
