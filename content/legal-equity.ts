import { dadosEmpresa, parceiro } from "@/content/dados-empresa";

/**
 * Textos da página Legal Equity, conforme a seção 6 do BRIEFING.md.
 *
 * Esta é a página de educação, não de venda: ela recebe quem chega da busca sem
 * saber o que é o produto. O texto explica do zero, na ordem em que a dúvida
 * aparece, e evita qualquer construção que soe a oferta.
 *
 * Onde o briefing escreve uma frase com vocabulário da lista proibida do
 * CLAUDE.md, que vale mesmo para negar, a ideia foi dita pelo lado positivo.
 */

export const heroLegalEquity = {
  titulo: "O que é Legal Equity.",
  subtitulo: "Crédito com a garantia de um processo judicial. Explicamos do começo.",
  indice: [
    { href: "#a-analogia", rotulo: "A analogia" },
    { href: "#como-funciona", rotulo: "Como funciona na prática" },
    { href: "#o-que-muda", rotulo: "O que muda e o que não muda" },
    { href: "#o-que-nao-e", rotulo: "O que o Legal Equity não é" },
    { href: "#quem-pode-contratar", rotulo: "Quem pode contratar" },
    { href: "#parametros", rotulo: "Parâmetros" },
    { href: "#perguntas-frequentes", rotulo: "Perguntas frequentes" },
  ],
} as const;

export const analogia = {
  rotulo: "A analogia",
  titulo: "Crédito com garantia real, com um ativo que quase ninguém aceitava.",
  aberturaParagrafos: [
    "Crédito com garantia real é uma das formas mais antigas de crédito que existem. A lógica é simples: existe um ativo vinculado à operação, esse ativo responde pela dívida, e a condição do contrato reflete isso. Quem empresta corre menos risco, e isso aparece por escrito.",
    "O mercado brasileiro já usa essa lógica com dois ativos, e deu nome aos dois.",
  ],
  colunas: [
    {
      termo: "Home equity",
      garantia: "A garantia é o imóvel.",
      texto:
        "Você continua morando na casa. Ela responde pela operação, e a condição do crédito reflete isso.",
    },
    {
      termo: "Car equity",
      garantia: "A garantia é o carro.",
      texto: "Você continua usando o veículo. Ele responde pela operação, do mesmo jeito.",
    },
    {
      termo: "Legal Equity",
      garantia: "A garantia é o processo judicial.",
      texto:
        "Você continua sendo parte no processo, com o mesmo advogado. O direito creditório responde pela operação.",
    },
  ],
  fechamentoParagrafos: [
    "O Legal Equity é o nome que a D20 deu a essa modalidade no Brasil. O ativo é o direito creditório do seu processo trabalhista, ou seja, o direito de receber aquilo que a Justiça vier a reconhecer na ação.",
    "É um ativo que existe, tem valor e pode ser analisado, mas que quase ninguém aceitava como garantia, porque analisar processo judicial dá trabalho. A D20 nasceu dentro da Artemis, uma empresa de tecnologia do mesmo grupo que analisa e precifica processos judiciais com base em mais de 30 milhões de processos e mais de 80 tribunais. É essa capacidade de análise que torna a operação possível.",
  ],
} as const;

export const comoFuncionaDetalhado = {
  rotulo: "Como funciona na prática",
  titulo: "Da simulação ao Pix, etapa por etapa.",
  introducao:
    "Nenhuma etapa exige que você vá a algum lugar ou pague alguma coisa. Todo o percurso é digital, e cada etapa só começa depois que a anterior fecha.",
  passos: [
    {
      titulo: "Simulação",
      texto:
        "Você informa seus dados e os dados do processo. Nessa etapa não há custo, não há compromisso e nada é contratado. A simulação existe para saber se a operação é possível no seu caso.",
    },
    {
      titulo: "Análise do processo",
      texto:
        "O processo é analisado com a tecnologia do grupo: a fase em que está, a natureza dos pedidos e o histórico do tribunal, entre outros fatores. É dessa análise que sai o valor possível de crédito, que não é o valor da causa.",
    },
    {
      titulo: "Documentos",
      texto:
        "Você envia os documentos pelo celular, sem imprimir, sem reconhecer firma e sem ir a um cartório.",
    },
    {
      titulo: "Análise documental, jurídica e de conformidade",
      texto:
        "Os documentos são conferidos, o processo passa por análise jurídica e a solicitação passa pela checagem de conformidade exigida da instituição financeira parceira. É a etapa mais longa, e é ela que decide a aprovação.",
    },
    {
      titulo: "Contrato e liberação",
      texto: `Aprovado, você recebe o contrato com valor, prazo, taxa e Custo Efetivo Total escritos, antes de assinar. O contrato é uma CCB emitida pela ${parceiro.nome}, e com a assinatura eletrônica feita o valor cai por Pix.`,
    },
  ],
  nota: "O prazo total varia conforme a análise. Nenhuma data de liberação é prometida antes da aprovação do crédito.",
} as const;

export const oQueMuda = {
  rotulo: "O que muda e o que não muda",
  titulo: "Contratar o crédito não mexe no seu processo.",
  continuaIgual: {
    titulo: "Continua igual",
    itens: [
      "O processo é seu. A titularidade não muda.",
      "O advogado é o mesmo, e a condução da ação continua com ele.",
      "Você segue acompanhando a ação normalmente.",
      "A decisão da causa não muda, e continua dependendo da Justiça.",
    ],
  },
  passaAExistir: {
    titulo: "Passa a existir",
    itens: [
      "Um crédito na sua conta agora, sem esperar o processo terminar.",
      "Um contrato com valor, prazo e custo definidos antes da assinatura.",
      "Uma garantia registrada sobre o direito creditório.",
    ],
  },
} as const;

export const oQueNaoE = {
  titulo: "O que o Legal Equity não é.",
  introducao:
    "Este bloco existe porque a confusão é comum e a diferença é jurídica, não de nome. Leia com atenção antes de contratar qualquer coisa, aqui ou em qualquer lugar.",
  itens: [
    {
      titulo: "Não é transferência do processo",
      texto:
        "O processo não muda de mãos e você continua sendo parte na ação, com o mesmo advogado. O que existe é uma garantia registrada sobre o direito creditório, constituída no contrato.",
    },
    {
      titulo: "Não é empréstimo sem garantia",
      texto:
        "Existe uma garantia real por trás da operação, e é isso que muda a condição em relação a um crédito que olha apenas o seu perfil.",
    },
    {
      titulo: "Não é promessa de ganho de causa",
      texto:
        "O resultado do processo continua dependendo da Justiça. A D20 não influencia, não acelera e não garante o desfecho da sua ação.",
    },
  ],
} as const;

export const quemPodeContratar = {
  rotulo: "Quem pode contratar",
  titulo: "Os requisitos, sem rodeio.",
  requisitos: [
    "Ter um processo trabalhista em andamento.",
    "Ter entre 18 e 74 anos.",
    "Não ter outra operação ativa: é uma por CPF.",
    "Passar pela análise documental, pela análise jurídica do processo e pela checagem de conformidade.",
  ],
  nota: "Cumprir os requisitos não significa aprovação. A decisão de conceder o crédito e as condições de cada operação são da instituição financeira parceira.",
} as const;

export const parametrosLegalEquity = {
  rotulo: "Parâmetros",
  titulo: "As condições da operação.",
  nota: "Valor, prazo, taxa e Custo Efetivo Total de cada operação são definidos pela instituição financeira parceira após a análise, e apresentados integralmente antes da assinatura do contrato.",
} as const;

/**
 * FAQ completa da página, com as perguntas que não estão na Home.
 * As seis da Home atacam o medo de golpe e ficam lá. Estas explicam o produto,
 * o contrato e o percurso, que é o que procura quem chega pela busca.
 */
export const faqLegalEquity = {
  rotulo: "Perguntas frequentes",
  titulo: "Tudo o que costuma ficar faltando.",
  chamadaHome: {
    texto:
      "As perguntas sobre confiança, golpe e cobrança antes da liberação estão respondidas na página inicial.",
    link: { href: "/#perguntas-frequentes", rotulo: "Ver as perguntas sobre confiança" },
  },
  grupos: [
    {
      titulo: "A operação",
      itens: [
        {
          pergunta: "Qual a diferença entre o Legal Equity e um empréstimo comum?",
          resposta:
            "Num crédito sem garantia, quem empresta olha apenas o seu perfil. No Legal Equity existe um ativo vinculado à operação, o direito creditório do seu processo, e é isso que muda a condição do contrato.",
        },
        {
          pergunta: "O que entra como garantia, exatamente?",
          resposta:
            "O direito creditório do processo, ou seja, o direito de receber aquilo que a Justiça vier a reconhecer na ação. Não é o processo em si, que continua seu, e não é nenhum bem seu fora dele.",
        },
        {
          pergunta: "Como o valor do crédito é calculado?",
          resposta:
            "Com base na análise do processo feita com a tecnologia do grupo: a fase, a natureza dos pedidos e o histórico do tribunal, entre outros fatores. O resultado é um valor calculado com base no seu processo, e ele não corresponde ao valor da causa.",
        },
        {
          pergunta: "Preciso ter uma sentença? Serve processo em qualquer fase?",
          resposta:
            "Não é preciso que o processo tenha terminado. A fase em que ele está entra na análise jurídica, e é ela que define se a operação é possível no seu caso.",
        },
        {
          pergunta: "Serve para qualquer tipo de processo?",
          resposta:
            "O produto atende processo trabalhista em andamento. Outras naturezas de processo não estão contempladas.",
        },
      ],
    },
    {
      titulo: "Contrato e custo",
      itens: [
        {
          pergunta: "O que é a CCB que eu vou assinar?",
          resposta: `CCB é a Cédula de Crédito Bancário, título de crédito previsto na Lei nº 10.931/2004 e usado em operações de crédito no Brasil. Ela traz valor, prazo, encargos e garantias por escrito. Aqui ela é emitida pela ${parceiro.nome}, autorizada pelo Banco Central, e não pela ${dadosEmpresa.razaoSocial}.`,
        },
        {
          pergunta: "Quando eu fico sabendo a taxa e o Custo Efetivo Total?",
          resposta:
            "Antes de assinar. Valores, prazos e taxas variam conforme o perfil e a linha contratada, e são apresentados integralmente, com o Custo Efetivo Total (CET), antes da assinatura do contrato. Não assine nada que não traga esses números escritos.",
        },
        {
          pergunta: "Como eu pago? Existe carência?",
          resposta:
            "O pagamento pode ser em parcela única ao final ou em parcelas mensais, com carência de até 90 dias e prazo de 6 a 60 meses. Qual dessas combinações vale para você é definido na aprovação e fica escrito no contrato.",
        },
        {
          pergunta: "Posso quitar o saldo antes do fim do prazo?",
          resposta:
            "Sim. O Código de Defesa do Consumidor assegura a quitação do saldo devedor, total ou parcial, com redução proporcional dos juros. O procedimento fica descrito no contrato.",
        },
      ],
    },
    {
      titulo: "Processo e advogado",
      itens: [
        {
          pergunta: "Meu advogado precisa autorizar ou assinar alguma coisa?",
          resposta:
            "A condução da ação continua com ele e a estratégia do caso não muda. Converse com o seu advogado antes de contratar: é ele quem conhece o seu processo. [PLACEHOLDER: confirmar com o jurídico se há algum ato formal do advogado no fluxo.]",
        },
        {
          pergunta: "A D20 passa a atuar no meu processo?",
          resposta:
            "Não. A D20 não é parte na ação, não fala com o juiz e não representa você em nada. O que existe é uma garantia registrada sobre o direito creditório, constituída no contrato.",
        },
        {
          pergunta: "E se eu perder a ação?",
          resposta:
            "O resultado da causa continua dependendo da Justiça, e a D20 não promete nem influencia esse resultado. O que acontece com a operação nessa hipótese está definido no contrato, que você recebe por escrito antes de assinar. [PLACEHOLDER: redação desta hipótese a ser definida pelo jurídico.]",
        },
      ],
    },
    {
      titulo: "Solicitação e dados",
      itens: [
        {
          pergunta: "Quais documentos eu preciso enviar?",
          resposta:
            "A relação completa é informada durante a solicitação, e o envio é todo pelo celular. [PLACEHOLDER: lista de documentos exigidos, a confirmar com a operação.]",
        },
        {
          pergunta: "Quanto tempo leva?",
          resposta:
            "Depende da análise documental, da análise jurídica do processo e da checagem de conformidade. Nenhuma data de liberação é prometida antes da aprovação do crédito.",
        },
        {
          pergunta: "Simular tem algum custo?",
          resposta:
            "Não. A simulação não tem custo e não tem compromisso, e nada é contratado nessa etapa.",
        },
        {
          pergunta: "O que a D20 faz com os meus dados?",
          resposta:
            "Tratamos dados pessoais conforme a Lei nº 13.709/2018 (LGPD), para analisar a solicitação e falar com você sobre ela. Os detalhes, e como exercer seus direitos como titular, estão na Política de Privacidade.",
        },
      ],
    },
  ],
} as const;

export const chamadaLegalEquity = {
  titulo: "Entendeu o conceito? O passo seguinte é ver se cabe no seu caso.",
  texto:
    "A simulação não tem custo e não tem compromisso, e mostra se a operação é possível com o seu processo.",
} as const;
