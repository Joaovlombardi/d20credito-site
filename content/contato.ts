import { dadosEmpresa } from "@/content/dados-empresa";

/**
 * Textos da página Contato, conforme a seção 6 do BRIEFING.md.
 *
 * O texto do consentimento LGPD é o do briefing, reproduzido sem alteração.
 * As mensagens de erro falam com a pessoa, não com o desenvolvedor: nada de
 * "campo inválido", que não diz o que fazer.
 */

export const heroContato = {
  titulo: "Falar com a D20 Cred.",
  subtitulo:
    "Use o formulário ou os canais oficiais ao lado. Respondemos pelos mesmos canais que estão no rodapé deste site, e por nenhum outro.",
} as const;

export const formulario = {
  rotulo: "Formulário",
  titulo: "Conte o seu caso.",
  introducao:
    "Quanto mais claro for o seu recado, mais direta é a resposta. Não peça nem envie documento por aqui: a solicitação tem um percurso próprio, com etapa certa para isso.",
  campos: {
    nome: {
      rotulo: "Nome completo",
      dica: "Como está no seu documento.",
      erroVazio: "Escreva o seu nome completo.",
      erroIncompleto: "Escreva nome e sobrenome.",
    },
    email: {
      rotulo: "E-mail",
      dica: "É por aqui que respondemos.",
      erroVazio: "Escreva o seu e-mail.",
      erroFormato: "Confira o e-mail: falta o @ ou o domínio.",
    },
    telefone: {
      rotulo: "Telefone com DDD",
      dica: "Fixo ou celular.",
      erroVazio: "Escreva o seu telefone com DDD.",
      erroFormato: "O telefone precisa ter DDD e 8 ou 9 dígitos.",
    },
    mensagem: {
      rotulo: "Mensagem",
      dica: "Se tiver processo trabalhista em andamento, conte em que fase ele está.",
      erroVazio: "Escreva a sua mensagem.",
      erroCurta: "Escreva um pouco mais, com pelo menos 10 caracteres.",
    },
  },
  /* Texto do consentimento reproduzido do briefing, sem alteração. */
  consentimento: {
    texto:
      "Autorizo a D20 Cred a tratar meus dados pessoais para responder a esta solicitação e a me contatar por telefone, WhatsApp ou e-mail, nos termos da Política de Privacidade.",
    link: { href: "/politica-de-privacidade", rotulo: "Política de Privacidade" },
    erro: "Para enviar, é preciso autorizar o tratamento dos seus dados.",
  },
  botao: "Enviar mensagem",
  resumoDeErros: "Confira os campos marcados antes de enviar.",
  sucesso: {
    titulo: "Mensagem registrada.",
    texto:
      "Respondemos pelo e-mail ou pelo telefone que você informou. Se alguém entrar em contato em nome da D20 Cred por outro canal, ou pedir qualquer pagamento, desconfie.",
    botao: "Enviar outra mensagem",
  },
  nota: "Enviar esta mensagem não é uma solicitação de crédito e não gera compromisso. Toda operação está sujeita a análise e aprovação de crédito pela instituição financeira parceira.",
} as const;

/* Deriva o tel: do telefone exibido, para nao existir o mesmo numero escrito
   em dois lugares. Se o telefone mudar em dados-empresa.ts, o link acompanha. */
const telefoneParaDiscagem = `tel:+55${dadosEmpresa.contato.telefone.replace(/\D/g, "")}`;

export const canaisOficiais = {
  titulo: "Canais oficiais",
  itens: [
    {
      rotulo: "E-mail",
      valor: dadosEmpresa.contato.email,
      href: `mailto:${dadosEmpresa.contato.email}`,
    },
    {
      rotulo: "Telefone",
      valor: dadosEmpresa.contato.telefone,
      href: telefoneParaDiscagem,
    },
    { rotulo: "Endereço", valor: null, href: null },
    { rotulo: "Horário de atendimento", valor: dadosEmpresa.horarioAtendimento, href: null },
  ],
  /* O briefing manda repetir o aviso de golpe aqui, com destaque visual forte. */
  aviso:
    "Estes são nossos únicos canais oficiais. A D20 Cred nunca solicita depósito, Pix, transferência, taxa ou qualquer pagamento antes de liberar o crédito. Se alguém pedir isso em nosso nome, é golpe.",
  reclamacao:
    "Reclamações sobre a instituição financeira parceira também podem ser registradas no Banco Central do Brasil, pelo Registrato e pelo Fale Conosco do BCB.",
} as const;
