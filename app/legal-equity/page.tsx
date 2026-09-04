import type { Metadata } from "next";

import { HeroDaPagina } from "@/components/legal-equity/HeroDaPagina";
import { Analogia } from "@/components/legal-equity/Analogia";
import { ComoFuncionaDetalhado } from "@/components/legal-equity/ComoFuncionaDetalhado";
import { OQueMuda } from "@/components/legal-equity/OQueMuda";
import { OQueNaoE } from "@/components/legal-equity/OQueNaoE";
import { QuemPodeContratar } from "@/components/legal-equity/QuemPodeContratar";
import { ParametrosLegalEquity } from "@/components/legal-equity/ParametrosLegalEquity";
import { FaqCompleta } from "@/components/legal-equity/FaqCompleta";
import { ChamadaFinal } from "@/components/ui/ChamadaFinal";
import { chamadaLegalEquity } from "@/content/legal-equity";

/* Esta e a pagina de entrada da busca: o titulo e a descricao respondem a
   pergunta que a pessoa digita, sem promessa e sem chamada de venda. */
export const metadata: Metadata = {
  title: "O que é Legal Equity",
  description:
    "Legal Equity é crédito com a garantia de um processo judicial. Explicamos do começo: como funciona, o que muda e o que não muda no seu processo, quem pode contratar e o que a modalidade não é.",
  alternates: { canonical: "/legal-equity" },
  openGraph: {
    type: "article",
    url: "/legal-equity",
    title: "O que é Legal Equity",
    description:
      "Crédito com a garantia de um processo judicial. Explicamos do começo: como funciona, o que muda e o que não muda no seu processo, e quem pode contratar.",
  },
};

export default function LegalEquityPage() {
  return (
    <>
      <HeroDaPagina />
      <Analogia />
      <ComoFuncionaDetalhado />
      <OQueMuda />
      <OQueNaoE />
      <QuemPodeContratar />
      <ParametrosLegalEquity />
      <FaqCompleta />
      <ChamadaFinal titulo={chamadaLegalEquity.titulo} texto={chamadaLegalEquity.texto} />
    </>
  );
}
