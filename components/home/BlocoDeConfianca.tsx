import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { confianca } from "@/content/home";
import { parceiro } from "@/content/dados-empresa";

/*
 * Unica secao em forest solido na pagina, dentro do teto de duas por pagina.
 * Texto corrido sempre em branco, 6.20:1. mint aparece so como filete acima de
 * cada bloco: mint sobre forest da 3.09 e nao pode carregar texto.
 */
export function BlocoDeConfianca() {
  return (
    <section aria-labelledby="confianca-titulo" className="bg-forest text-white">
      <Container className="py-20 md:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 id="confianca-titulo" className="font-display text-3xl md:text-4xl">
              {confianca.titulo}
            </h2>
            <p className="mt-8 max-w-measure text-lg text-white">{confianca.introducao}</p>
          </div>
        </div>

        <dl className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {confianca.blocos.map((bloco) => (
            <div key={bloco.titulo} className="border-t border-mint pt-6">
              <dt className="font-heading text-lg font-semibold text-white">{bloco.titulo}</dt>
              <dd className="mt-3 max-w-measure text-base text-white">{bloco.texto}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 flex flex-wrap items-center gap-6 border-t border-mint pt-10">
          <a
            href={parceiro.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md bg-white px-5 py-4"
          >
            <Image
              src={parceiro.logo.src}
              alt={parceiro.logo.alt}
              width={parceiro.logo.width}
              height={parceiro.logo.height}
              className="h-auto w-28"
            />
          </a>
          <p className="max-w-measure text-sm text-white">
            Instituição financeira parceira. O contrato é uma CCB emitida pela {parceiro.nome},
            autorizada pelo Banco Central.
          </p>
        </div>
      </Container>
    </section>
  );
}
