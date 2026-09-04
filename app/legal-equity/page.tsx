import type { Metadata } from "next";

import { EsbocoDePagina } from "@/components/ui/EsbocoDePagina";

export const metadata: Metadata = {
  title: "O que é Legal Equity",
  description:
    "Crédito com a garantia de um processo judicial. Explicamos do começo: o que é, como funciona, o que muda e o que não muda.",
};

export default function LegalEquityPage() {
  return (
    <EsbocoDePagina
      titulo="O que é Legal Equity"
      resumo="Crédito com a garantia de um processo judicial. Explicamos do começo."
      etapa="Conteúdo da página Legal Equity na etapa 4: a analogia, como funciona na prática, o que muda e o que não muda, o que o Legal Equity não é, quem pode contratar, parâmetros, FAQ completa e CTA."
    />
  );
}
