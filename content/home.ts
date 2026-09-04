import { dadosEmpresa, enderecoCompleto, parceiro } from "@/content/dados-empresa";

/**
 * Textos da Home, conforme a seção 6 do BRIEFING.md.
 * Separados do layout para que a revisão editorial aconteça aqui, num arquivo só.
 * Todo texto passa pelo vocabulário travado no CLAUDE.md.
 */

export const hero = {
  titulo: "Crédito com a garantia do seu processo trabalhista.",
  subtitulo:
    "Você recebe agora, sem esperar o processo terminar. O processo continua no seu nome e com o mesmo advogado.",
  /* Prazo e valor ficam acima da dobra: a política de empréstimo pessoal do Google
     exige o prazo mínimo e máximo visível na home, não escondido na FAQ. */
  resumoDoProduto: "Até R$ 50.000, com prazo de 6 a 60 meses.",
  /* A menção ao CET no hero é a exigência 2 da seção 8 do briefing. */
  microcopy:
    "Simulação sem compromisso, sujeita a análise e aprovação de crédito pela instituição financeira parceira. O Custo Efetivo Total (CET) é informado antes da assinatura do contrato. A D20 Cred nunca cobra nenhum valor antes de liberar o crédito.",
  linkSecundario: { href: "/legal-equity", rotulo: "Entender o Legal Equity" },
  foto: "Pessoa adulta brasileira em casa, luz natural de janela, olhando para o celular com expressão de alívio. Enquadramento vertical, sem banco de imagem corporativo.",
} as const;

export const credibilidade = [
  { icone: "digital", texto: "100% digital" },
  { icone: "pix", texto: "Liberação por Pix" },
  { icone: "cet", texto: "Custo Efetivo Total informado antes da assinatura" },
  { icone: "banco", texto: "Correspondente bancário da UY3 SCD" },
] as const;

export const problema = {
  rotulo: "O problema",
  titulo: "Ganhar na Justiça e receber da Justiça são coisas diferentes.",
  texto:
    "Entre a sentença e o dinheiro na conta costumam passar anos. O direito está reconhecido, mas o valor não chega, e a conta continua vencendo.",
  destaque: "A D20 destrava esse valor sem que você precise abrir mão do processo.",
} as const;

export const resumoLegalEquity = {
  rotulo: "A modalidade",
  titulo: "Mesma lógica de garantia, ativo diferente.",
  colunas: [
    { termo: "Home equity", garantia: "A garantia é o imóvel." },
    { termo: "Car equity", garantia: "A garantia é o carro." },
    { termo: "Legal Equity", garantia: "A garantia é o processo judicial." },
  ],
  texto:
    "O Legal Equity é o nome que a D20 deu a essa modalidade no Brasil. A lógica é a mesma do crédito com garantia real: existe um ativo por trás da operação, e é isso que muda a condição.",
  link: { href: "/legal-equity", rotulo: "Entender como funciona" },
} as const;

export const comoFunciona = {
  rotulo: "Como funciona",
  titulo: "Quatro etapas, do primeiro contato ao Pix.",
  passos: [
    {
      titulo: "Simulação",
      texto: "Você informa seus dados e o processo. A análise é feita com a tecnologia do grupo.",
    },
    {
      titulo: "Documentos",
      texto: "Você envia os documentos pelo celular. Tudo digital.",
    },
    {
      titulo: "Análise",
      texto: "Análise documental, análise jurídica do processo e checagem de conformidade.",
    },
    {
      titulo: "Liberação",
      texto: "Com o contrato assinado eletronicamente, o valor cai por Pix.",
    },
  ],
  /* O briefing escreve esta nota com uma expressão da lista de vocabulário proibido
     do CLAUDE.md, que vale mesmo para negar. Reescrita mantendo a mesma trava. */
  nota: "O prazo varia conforme a análise documental, a análise jurídica e a checagem de conformidade. Nenhuma data de liberação é prometida antes da aprovação do crédito.",
} as const;

export const confianca = {
  titulo: "Como saber que a D20 é real.",
  introducao:
    "Quem tem processo em andamento vira alvo de fraude. Por isso deixamos aqui, de forma verificável, tudo o que você precisa checar antes de enviar qualquer documento.",
  blocos: [
    {
      titulo: "CNPJ e endereço públicos",
      texto: `${dadosEmpresa.razaoSocial}, CNPJ ${dadosEmpresa.cnpj}, com endereço físico em ${dadosEmpresa.endereco.cidade}: ${enderecoCompleto}.`,
    },
    {
      titulo: "Correspondente bancário registrado",
      texto: `Atuamos nos termos da Resolução CMN nº 3.954/2011. O contrato é emitido pela ${parceiro.nome}, autorizada pelo Banco Central.`,
    },
    {
      titulo: "Nenhuma cobrança antes da liberação",
      texto:
        "A D20 Cred nunca solicita depósito, Pix, transferência ou taxa para liberar crédito. Se alguém pedir isso em nosso nome, é golpe.",
    },
    {
      titulo: "Canais oficiais",
      texto:
        "Só falamos com você pelo site, pelo e-mail e pelo telefone listados no rodapé desta página.",
    },
  ],
} as const;

export const parametros = {
  rotulo: "Parâmetros",
  titulo: "As condições da operação, sem letra miúda.",
  nota: "Valor, prazo, taxa e Custo Efetivo Total de cada operação são definidos pela instituição financeira parceira após a análise, e apresentados integralmente antes da assinatura do contrato.",
} as const;

export const perguntasFrequentes = {
  rotulo: "Perguntas frequentes",
  titulo: "As dúvidas que mais aparecem.",
  itens: [
    {
      pergunta: "A D20 é confiável?",
      resposta: `A ${dadosEmpresa.razaoSocial} tem CNPJ ${dadosEmpresa.cnpj} e endereço físico em ${dadosEmpresa.endereco.cidade}, ambos públicos e verificáveis. Atuamos como correspondente bancário, nos termos da Resolução CMN nº 3.954/2011, e o contrato é emitido pela ${parceiro.nome}, autorizada pelo Banco Central. Confira esses dados antes de enviar qualquer documento.`,
    },
    {
      pergunta: "Preciso pagar algo antes para conseguir o crédito?",
      resposta:
        "Não. A D20 Cred nunca solicita depósito, Pix, transferência, taxa ou qualquer pagamento antes de liberar o crédito. Se alguém pedir isso em nosso nome, é golpe: não pague e procure a gente pelos canais oficiais do rodapé.",
    },
    {
      pergunta: "Eu perco meu processo?",
      resposta:
        "Não. O processo continua no seu nome e a titularidade não muda. Ele entra como garantia do crédito, da mesma forma que um imóvel entra como garantia em um financiamento imobiliário.",
    },
    {
      pergunta: "Preciso trocar de advogado?",
      resposta:
        "Não. O advogado que cuida do seu processo continua o mesmo e a condução da ação não muda. A D20 não interfere na estratégia do seu caso.",
    },
    {
      pergunta: "Tenho restrição no nome. Consigo?",
      resposta:
        "Restrição no nome não é impedimento automático, porque a operação tem a garantia do seu processo. Ainda assim, toda solicitação passa por análise documental, análise jurídica e checagem de conformidade, e a aprovação é da instituição financeira parceira.",
    },
    {
      pergunta: "O crédito é igual ao valor do meu processo?",
      resposta:
        "Não. O crédito é um valor calculado com base na análise do seu processo e não corresponde ao valor da causa. O valor, o prazo e o Custo Efetivo Total são apresentados antes da assinatura do contrato.",
    },
  ],
  link: { href: "/legal-equity#perguntas-frequentes", rotulo: "Ver todas as perguntas" },
} as const;

export const chamadaFinal = {
  titulo: "Veja a condição que o seu processo garante.",
  texto:
    "A simulação não tem compromisso e não custa nada. Se a operação não fizer sentido para você, é só não seguir.",
} as const;
