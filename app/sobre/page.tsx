import type { Metadata } from "next";

import { EsbocoDePagina } from "@/components/ui/EsbocoDePagina";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A D20 Cred é a marca do grupo Artemis para crédito com garantia de direitos creditórios judiciais.",
};

export default function SobrePage() {
  return (
    <EsbocoDePagina
      titulo="Sobre a D20 Cred"
      resumo="A D20 Cred é a marca do grupo Artemis para crédito com garantia de direitos creditórios judiciais."
      etapa="Conteúdo da página Sobre na etapa 5: abertura, de onde viemos, por que existe, como operamos, números e encerramento."
    />
  );
}
