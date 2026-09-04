import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { dadosEmpresa, enderecoCompleto, logos, parceiro } from "@/content/dados-empresa";
import { navegacaoInstitucional, navegacaoPrincipal } from "@/content/navegacao";
import { avisoCanaisOficiais, disclaimerCorrespondente } from "@/content/textos-legais";

const { endereco, contato } = dadosEmpresa;

/*
 * Fundo forest com texto branco, 6.20:1, aprovado em qualquer tamanho.
 * mint aparece so como filete e rotulo de coluna em caixa alta, nunca em texto
 * corrido: mint sobre forest fica em 3.09:1 e reprovaria AA.
 */
function RotuloColuna({ children }: { children: string }) {
  return (
    <h2 className="font-heading text-xs font-semibold tracking-widest text-white uppercase">
      {children}
    </h2>
  );
}

/* inline-block com py-1.5 leva o alvo de 19px para 31px de altura. O criterio
   2.5.8 da WCAG pede 24px, e link de rodape em lista nao tem a excecao de texto
   corrido: e um item de navegacao, tocado com o polegar. */
const linkRodape =
  "inline-block py-1.5 text-sm text-white underline decoration-transparent underline-offset-4 transition-colors hover:decoration-mint";

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src={logos.horizontalBranco.src}
              alt={logos.horizontalBranco.alt}
              width={logos.horizontalBranco.width}
              height={logos.horizontalBranco.height}
              className="h-auto w-40"
            />
            <p className="mt-6 max-w-measure text-sm text-white">
              Crédito com garantia de direitos creditórios judiciais.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <RotuloColuna>Navegação</RotuloColuna>
            <ul className="mt-4 flex flex-col gap-1">
              {navegacaoPrincipal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkRodape}>
                    {item.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Institucional">
            <RotuloColuna>Institucional</RotuloColuna>
            <ul className="mt-4 flex flex-col gap-1">
              {navegacaoInstitucional.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkRodape}>
                    {item.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <RotuloColuna>Canais oficiais</RotuloColuna>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-white">
              <li>{contato.email}</li>
              <li>{contato.telefone}</li>
              <li>
                {endereco.logradouro}, {endereco.bairro}
                <br />
                {endereco.cidade}, {endereco.uf}, CEP {endereco.cep}
              </li>
              <li>Atendimento: {dadosEmpresa.horarioAtendimento}</li>
            </ul>
            <p className="mt-5 max-w-measure text-sm text-white">{avisoCanaisOficiais}</p>
          </div>
        </div>

        <div className="mt-16 border-t border-mint/40 pt-10">
          <RotuloColuna>Instituição financeira parceira</RotuloColuna>
          <div className="mt-5 flex flex-wrap items-center gap-6">
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
                className="h-auto w-24"
              />
            </a>
            <p className="max-w-measure text-sm text-white">
              O contrato é uma CCB emitida pela {parceiro.nome}, autorizada pelo Banco Central.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-mint/40 pt-10">
          <h2 className="sr-only">Informações legais</h2>
          <div className="flex max-w-measure flex-col gap-4">
            {disclaimerCorrespondente.map((paragrafo) => (
              <p key={paragrafo.slice(0, 40)} className="text-xs text-white">
                {paragrafo}
              </p>
            ))}
          </div>

          <p className="mt-8 text-xs text-white">
            {dadosEmpresa.razaoSocial}, CNPJ {dadosEmpresa.cnpj}. {enderecoCompleto}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
