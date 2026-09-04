import { dadosEmpresa } from "@/content/dados-empresa";

/**
 * Texto legal obrigatório do rodapé, reproduzido integralmente conforme a seção 6
 * do BRIEFING.md. Só os placeholders são interpolados.
 *
 * Ele aparece no rodapé de TODAS as páginas: é a exigência 4 da seção 8 do briefing.
 * Não reescreva, não resuma e não quebre em bullets sem revisão jurídica.
 */
export const disclaimerCorrespondente: readonly string[] = [
  `A ${dadosEmpresa.razaoSocial} (${dadosEmpresa.nomeFantasia}), CNPJ ${dadosEmpresa.cnpj}, não é uma instituição financeira e não realiza operações de crédito por conta própria. Atuamos como correspondente bancário, nos termos da Resolução CMN nº 3.954/2011, originando e encaminhando propostas em nome da instituição financeira parceira, a quem cabem a análise, a aprovação, a concessão e a definição das condições de cada operação.`,

  `Toda solicitação está sujeita a análise e aprovação de crédito pela instituição financeira parceira. Valores, prazos e taxas variam conforme o perfil do cliente e a linha contratada, e são apresentados integralmente, com o Custo Efetivo Total (CET), antes da assinatura do contrato.`,

  `A ${dadosEmpresa.nomeFantasia} nunca solicita depósito, PIX, transferência, taxa ou qualquer pagamento antes de liberar o crédito. Nossos únicos canais oficiais são o site ${dadosEmpresa.site}, o e-mail ${dadosEmpresa.contato.email} e o telefone ${dadosEmpresa.contato.telefone}.`,

  `Tratamos dados pessoais conforme a Lei nº 13.709/2018 (LGPD). Para exercer seus direitos como titular, escreva para ${dadosEmpresa.contato.email}. Reclamações sobre a instituição financeira parceira também podem ser registradas no Banco Central do Brasil pelo Registrato/Fale Conosco do BCB.`,
];

/** Aviso de canal oficial, repetido no rodapé e na página de contato. */
export const avisoCanaisOficiais =
  "Estes são nossos únicos canais oficiais. A D20 Cred nunca solicita nenhum pagamento antes da liberação do crédito.";
