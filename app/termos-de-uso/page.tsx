import type { Metadata } from "next";

import { EsbocoDePagina } from "@/components/ui/EsbocoDePagina";

export const metadata: Metadata = {
  title: "Termos de uso",
  description: "Condições de uso do site da D20 Cred.",
  robots: { index: false, follow: true },
};

export default function TermosDeUsoPage() {
  return (
    <EsbocoDePagina
      titulo="Termos de uso"
      resumo="Condições de uso do site da D20 Cred."
      etapa="[PLACEHOLDER] O texto jurídico desta página precisa ser fornecido e revisado pelo jurídico antes de publicar. Não redija por conta própria."
    />
  );
}
