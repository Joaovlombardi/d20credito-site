import type { Metadata } from "next";

import { EsbocoDePagina } from "@/components/ui/EsbocoDePagina";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como a D20 Cred trata dados pessoais, nos termos da Lei nº 13.709/2018 (LGPD).",
  robots: { index: false, follow: true },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <EsbocoDePagina
      titulo="Política de privacidade"
      resumo="Como a D20 Cred trata dados pessoais, nos termos da Lei nº 13.709/2018 (LGPD)."
      etapa="[PLACEHOLDER] O texto jurídico desta página precisa ser fornecido e revisado pelo jurídico antes de publicar. Não redija por conta própria."
    />
  );
}
