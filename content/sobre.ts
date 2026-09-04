import { dadosEmpresa, parceiro } from "@/content/dados-empresa";

/**
 * Textos da página Sobre, conforme a seção 6 do BRIEFING.md.
 *
 * Página editorial: texto corrido em coluna de leitura, sem grade de cards e sem
 * missão, visão e valores. O público tem medo de golpe, então o que convence aqui
 * é explicar a estrutura com honestidade, inclusive o que a D20 não pode fazer.
 */

export const abertura = {
  titulo: "Quem é a D20 Cred.",
  paragrafos: [
    `A ${dadosEmpresa.nomeFantasia} é a marca do grupo Artemis para crédito com garantia de direitos creditórios judiciais. Nascemos dentro de uma empresa de tecnologia que analisa processos judiciais, e é essa análise que torna a operação possível.`,
    "Esta página explica de onde viemos, por que a empresa existe e, principalmente, como ela opera. Se você chegou aqui desconfiado, é o lugar certo para começar.",
  ],
  foto: "Equipe da D20 trabalhando no escritório em São Paulo, luz natural, enquadramento amplo e limpo. Fotografia real, sem banco de imagem corporativo.",
} as const;

export const deOndeViemos = {
  rotulo: "De onde viemos",
  titulo: "Uma empresa que já sabia ler processo judicial.",
  paragrafos: [
    "A Artemis é uma empresa de tecnologia que analisa e precifica processos judiciais. A base é de mais de 30 milhões de processos e mais de 80 tribunais, e o trabalho dela é ler esse volume para entender o que um processo é, em que fase está e o que isso significa em termos de direito creditório.",
    "Durante anos essa capacidade serviu para responder a uma pergunta: quanto vale um processo. A D20 nasceu de uma pergunta diferente. Se é possível analisar um processo com essa precisão, por que ele não pode servir de garantia?",
    "É essa mudança de pergunta que define o produto. Em vez de abrir mão do processo, a pessoa usa o processo como garantia e recebe o crédito. O processo continua no nome dela, com o mesmo advogado.",
  ],
} as const;

export const porQueExiste = {
  rotulo: "Por que existe",
  titulo: "O intervalo entre ganhar e receber.",
  paragrafos: [
    "Ganhar na Justiça e receber da Justiça são coisas diferentes. Entre a sentença e o dinheiro na conta costumam passar anos, e nesse intervalo a conta continua vencendo.",
    "Quem está nesse intervalo raramente tem aquilo que um banco pede como garantia. Não tem imóvel, não tem veículo, não tem margem consignável. Tem um direito reconhecido, ou em vias de ser, e nenhuma forma de usar isso enquanto espera.",
  ],
  destaque: "O ativo já existia. O que faltava era alguém capaz de analisar.",
  fechamento: [
    "É esse o espaço que a D20 ocupa. Não inventamos uma necessidade e não prometemos resultado nenhum na sua ação: o que fazemos é tornar utilizável, agora, um ativo que antes só valia no fim da fila.",
  ],
} as const;

export const comoOperamos = {
  rotulo: "Como operamos",
  titulo: "A parte que costuma ficar escondida no rodapé.",
  paragrafos: [
    `A ${dadosEmpresa.razaoSocial} não é um banco e não empresta dinheiro próprio. Isso não é detalhe de letra miúda: é o desenho da operação, e você tem o direito de entender antes de assinar qualquer coisa.`,
    "Somos correspondente bancário, uma figura prevista na Resolução CMN nº 3.954/2011. Em português claro: somos a empresa autorizada a falar com você, receber a sua solicitação, analisar o processo, reunir os documentos e levar a proposta a uma instituição financeira. Quem decide conceder o crédito, e sob quais condições, é ela.",
    `Essa instituição é a ${parceiro.nome}, e é ela que tem autorização do Banco Central, é dela a CCB que você assina, é dela o dinheiro e é dela a decisão de aprovar ou não. A D20 não aprova crédito por conta própria, e ninguém aqui pode garantir que a sua solicitação vai passar.`,
    "O Banco Central supervisiona a UY3. Se em algum momento você quiser reclamar da instituição financeira, o canal é o Registrato e o Fale Conosco do BCB, e ele existe independentemente de nós.",
    "Antes de a proposta chegar à UY3, a solicitação passa por três filtros nossos: a análise documental, que confere se os documentos são seus e estão íntegros; a análise jurídica, que olha o processo, a fase e os pedidos; e a checagem de conformidade, que é a verificação exigida de quem origina crédito no Brasil. Nenhum dos três é formalidade, e é normal que uma solicitação pare em algum deles.",
  ],
  quemFazOQue: {
    titulo: "Quem faz o quê",
    partes: [
      {
        nome: `${dadosEmpresa.razaoSocial} (${dadosEmpresa.nomeFantasia})`,
        papel:
          "Correspondente bancário. Fala com você, analisa o processo, reúne os documentos e encaminha a proposta. Não concede crédito e não define condições.",
      },
      {
        nome: parceiro.nome,
        papel:
          "Instituição financeira autorizada pelo Banco Central. Analisa, aprova, define as condições, emite a CCB e libera o valor.",
      },
      {
        nome: "Artemis",
        papel:
          "Empresa de tecnologia do mesmo grupo. Fornece a análise e a precificação de processos judiciais que sustentam a avaliação.",
      },
    ],
  },
} as const;

/** Seção de números. Os valores vêm de content/dados-empresa.ts, todos PLACEHOLDER. */
export const secaoNumeros = {
  titulo: "Os números.",
  introducao:
    "Preferimos deixar o campo em branco a publicar número que não dá para comprovar.",
  rotulos: {
    volumeOriginado: "Volume originado",
    clientesAtendidos: "Clientes atendidos",
    satisfacao: "Satisfação",
  },
  nota: "Os valores acima precisam ser confirmados antes da publicação do site.",
} as const;

export const encerramento = {
  rotulo: "Onde continuar",
  titulo: "Dois caminhos daqui.",
  paragrafos: [
    "Se você quer entender a modalidade antes de qualquer outra coisa, a explicação completa, do começo, está na página do Legal Equity.",
    "Se prefere falar com uma pessoa, os canais oficiais estão na página de contato e no rodapé de todas as páginas deste site. São os únicos canais pelos quais a D20 Cred fala com você.",
  ],
  link: { href: "/legal-equity", rotulo: "Entender o Legal Equity" },
  botao: { href: "/contato", rotulo: "Falar com a D20" },
} as const;
