import type { Metadata } from "next";

import { Abertura } from "@/components/sobre/Abertura";
import { BlocoEditorial, ParagrafoEditorial } from "@/components/sobre/BlocoEditorial";
import { PorQueExiste } from "@/components/sobre/PorQueExiste";
import { ComoOperamos } from "@/components/sobre/ComoOperamos";
import { Numeros } from "@/components/sobre/Numeros";
import { Encerramento } from "@/components/sobre/Encerramento";
import { deOndeViemos } from "@/content/sobre";

export const metadata: Metadata = {
  title: "Sobre a D20 Cred",
  description:
    "A D20 Cred é a marca do grupo Artemis para crédito com garantia de direitos creditórios judiciais. De onde viemos, por que a empresa existe e como funciona a estrutura de correspondente bancário.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    type: "article",
    url: "/sobre",
    title: "Sobre a D20 Cred",
    description:
      "De onde viemos, por que a empresa existe e como funciona a estrutura de correspondente bancário.",
  },
};

export default function SobrePage() {
  return (
    <>
      <Abertura />

      <BlocoEditorial
        id="de-onde-viemos"
        rotulo={deOndeViemos.rotulo}
        titulo={deOndeViemos.titulo}
      >
        {deOndeViemos.paragrafos.map((paragrafo) => (
          <ParagrafoEditorial key={paragrafo.slice(0, 32)}>{paragrafo}</ParagrafoEditorial>
        ))}
      </BlocoEditorial>

      <PorQueExiste />
      <ComoOperamos />
      <Numeros />
      <Encerramento />
    </>
  );
}
