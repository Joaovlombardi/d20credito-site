import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { RotuloDeSecao } from "@/components/ui/RotuloDeSecao";
import { FormularioDeContato } from "@/components/contato/FormularioDeContato";
import { CanaisOficiais } from "@/components/contato/CanaisOficiais";
import { heroContato, formulario } from "@/content/contato";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a D20 Cred pelos canais oficiais. E-mail, telefone e endereço da D20 Capital Ltda, correspondente bancário da UY3 SCD.",
  alternates: { canonical: "/contato" },
  openGraph: {
    type: "website",
    url: "/contato",
    title: "Contato",
    description: "Fale com a D20 Cred pelos canais oficiais.",
  },
};

export default function ContatoPage() {
  return (
    <>
      <section aria-labelledby="contato-titulo" className="border-b border-line">
        <Container className="py-14 md:py-20 lg:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            <h1
              id="contato-titulo"
              className="font-display text-3xl text-ink md:text-4xl lg:col-span-5"
            >
              {heroContato.titulo}
            </h1>
            <p className="mt-8 max-w-measure text-lg text-ink lg:col-span-6 lg:col-start-7 lg:mt-0">
              {heroContato.subtitulo}
            </p>
          </div>
        </Container>
      </section>

      {/*
        No desktop: formulario em 7 colunas a esquerda, canais oficiais em 4 a direita.
        No mobile vira uma coluna so, e os canais vem PRIMEIRO. A ordem no HTML e a
        mesma da ordem visual em qualquer largura, entao ninguem le fora de sequencia.
        Vir primeiro e deliberado: a maior objecao deste publico e medo de golpe, e
        ver o canal real e o aviso de que a D20 nao cobra nada antes vale mais do que
        chegar ao campo de nome dois segundos antes.
      */}
      <Container className="grid gap-14 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4 lg:col-start-9 lg:row-start-1">
          <CanaisOficiais />
        </div>

        <div className="lg:col-span-7 lg:row-start-1">
          <RotuloDeSecao>{formulario.rotulo}</RotuloDeSecao>
          <h2 className="mt-6 font-heading text-2xl font-semibold text-ink md:text-3xl">
            {formulario.titulo}
          </h2>
          <p className="mt-6 mb-12 max-w-measure text-base text-gray">
            {formulario.introducao}
          </p>

          <FormularioDeContato />
        </div>

      </Container>
    </>
  );
}
