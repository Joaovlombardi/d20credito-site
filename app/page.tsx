import { chamadaFinal } from "@/content/home";
import { Hero } from "@/components/home/Hero";
import { FaixaDeCredibilidade } from "@/components/home/FaixaDeCredibilidade";
import { Problema } from "@/components/home/Problema";
import { ResumoLegalEquity } from "@/components/home/ResumoLegalEquity";
import { ComoFunciona } from "@/components/home/ComoFunciona";
import { BlocoDeConfianca } from "@/components/home/BlocoDeConfianca";
import { Parametros } from "@/components/home/Parametros";
import { PerguntasFrequentes } from "@/components/home/PerguntasFrequentes";
import { ChamadaFinal } from "@/components/ui/ChamadaFinal";

/* Titulo e descricao herdam o default do layout raiz. */

export default function HomePage() {
  return (
    <>
      <Hero />
      <FaixaDeCredibilidade />
      <Problema />
      <ResumoLegalEquity />
      <ComoFunciona />
      <BlocoDeConfianca />
      <Parametros />
      <PerguntasFrequentes />
      <ChamadaFinal titulo={chamadaFinal.titulo} texto={chamadaFinal.texto} />
    </>
  );
}
