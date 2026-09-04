/**
 * Fonte unica dos dados institucionais.
 *
 * Todo valor marcado como [PLACEHOLDER] precisa ser confirmado antes de publicar.
 * Nao preencha nenhum destes campos por estimativa: CNPJ, endereco, telefone,
 * e-mail, horario e numeros de resultado sao dados verificaveis e um valor errado
 * aqui aparece no rodape de todas as paginas.
 */

export const dadosEmpresa = {
  nomeFantasia: "D20 Cred",
  razaoSocial: "[PLACEHOLDER: razão social completa]",
  cnpj: "[PLACEHOLDER: CNPJ]",
  site: "https://d20credito.com.br",
  endereco: {
    logradouro: "[PLACEHOLDER: logradouro e número]",
    complemento: "[PLACEHOLDER: complemento]",
    bairro: "[PLACEHOLDER: bairro]",
    cidade: "São Paulo",
    uf: "SP",
    cep: "[PLACEHOLDER: CEP]",
  },
  contato: {
    email: "[PLACEHOLDER: e-mail]",
    telefone: "[PLACEHOLDER: telefone]",
    whatsapp: "[PLACEHOLDER: WhatsApp]",
  },
  /* Existe divergência aberta entre as fontes internas e o site atual. Não fixe horário. */
  horarioAtendimento: "[PLACEHOLDER: confirmar com o RO antes de publicar]",
} as const;

/** Seção de números da página Sobre. Nenhum valor pode ser estimado. */
export const numeros = {
  volumeOriginado: "[PLACEHOLDER]",
  clientesAtendidos: "[PLACEHOLDER]",
  satisfacao: "[PLACEHOLDER]",
  nota: "Valores a confirmar antes da publicação.",
} as const;

/**
 * Instituição financeira parceira.
 * O arquivo do logo está isolado aqui: substituir pelo wordmark oficial da UY3
 * é uma alteração de uma linha.
 */
export const parceiro = {
  nome: "UY3 Sociedade de Crédito Direto S.A.",
  site: "https://uy3.com.br",
  logo: {
    src: "/images/logo_UY3.png",
    width: 1536,
    height: 1024,
    alt: "UY3 Sociedade de Crédito Direto S.A.",
  },
} as const;

/**
 * Arquivos de marca com as dimensões nativas, para o next/image receber
 * width e height corretos e não gerar deslocamento de layout.
 * Nunca redesenhar, distorcer, rotacionar nem aplicar efeito.
 */
export const logos = {
  horizontalVerde: {
    src: "/images/D20_logo_horizontal_cred_verde.png",
    width: 2400,
    height: 800,
    alt: "D20 Cred",
  },
  horizontalBranco: {
    src: "/images/D20_logo_horizontal_branco.png",
    width: 2400,
    height: 800,
    alt: "D20 Cred",
  },
  compactoVerde: {
    src: "/images/D20_logo_verde.png",
    width: 1503,
    height: 601,
    alt: "D20",
  },
  compactoBranco: {
    src: "/images/D20_logo_branco.png",
    width: 2000,
    height: 2000,
    alt: "D20",
  },
} as const;

/**
 * Parâmetros do produto, conforme a seção 1 do briefing.
 * Consumido pela mesma tabela na Home e na página Legal Equity.
 * O prazo de 6 a 60 meses precisa ficar visível na Home, exigência da política
 * de empréstimo pessoal do Google.
 */
export const parametrosProduto = [
  { rotulo: "Valor do crédito", valor: "Até R$ 50.000" },
  { rotulo: "Prazo", valor: "6 a 60 meses" },
  { rotulo: "Carência", valor: "Até 90 dias" },
  { rotulo: "Forma de pagamento", valor: "Parcela única ao final ou parcelas mensais" },
  { rotulo: "Operações simultâneas", valor: "1 por CPF" },
  { rotulo: "Idade", valor: "18 a 74 anos" },
  { rotulo: "Liberação", valor: "Pix" },
  { rotulo: "Contrato", valor: "CCB com assinatura eletrônica" },
  { rotulo: "Operação", valor: "100% digital" },
] as const;
