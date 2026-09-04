import type { Metadata } from "next";

import { EsbocoDePagina } from "@/components/ui/EsbocoDePagina";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a D20 Cred pelos canais oficiais e solicite uma simulação, sem compromisso.",
};

export default function ContatoPage() {
  return (
    <EsbocoDePagina
      titulo="Fale com a D20 Cred"
      resumo="Solicite uma simulação, sem compromisso, sujeita a análise e aprovação de crédito pela instituição financeira parceira."
      etapa="Conteúdo da página Contato na etapa 6: formulário com consentimento LGPD, canais oficiais em destaque e horário de atendimento."
    />
  );
}
