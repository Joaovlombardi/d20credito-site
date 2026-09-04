# Projeto: site institucional da D20 Cred

Você vai construir do zero o site institucional da **D20 Cred**, uma operação de crédito brasileira. Leia este documento inteiro antes de escrever qualquer código. As regras de vocabulário e de conformidade da seção 7 e 8 não são preferência de estilo: elas sustentam a natureza jurídica do produto e uma frase errada gera exposição regulatória real.

---

## 1. O que é a D20 Cred

A D20 Cred oferece **crédito com garantia de direitos creditórios judiciais**.

Em português claro: uma pessoa que tem um processo trabalhista em andamento recebe um crédito agora, usando o próprio processo como garantia. Ela continua dona do processo e mantém o mesmo advogado. Não vende nada, não abre mão de nada.

O nome comercial do produto é **Legal Equity**, criado pela D20, na mesma lógica do *home equity* (garantia é o imóvel) e do *car equity* (garantia é o carro). No Legal Equity a garantia é o processo judicial.

A D20 Cred nasceu dentro da Artemis, uma empresa de tecnologia do mesmo grupo que analisa e precifica processos judiciais com base em mais de 30 milhões de processos e mais de 80 tribunais.

**Estrutura jurídica, e isso é obrigatório no site:** a D20 Capital Ltda não é instituição financeira. Ela atua como **correspondente bancário**, nos termos da Resolução CMN nº 3.954/2011. O contrato é uma **CCB emitida pela UY3 Sociedade de Crédito Direto S.A.**, que é a instituição autorizada pelo Banco Central.

### Público

Pessoa física com processo trabalhista em andamento, entre 25 e 65 anos, em geral classe C ou D, muitas vezes desempregada ou em trabalho informal, sob pressão de caixa. Não tem imóvel, veículo nem margem consignável para oferecer como garantia, então não consegue crédito bom em banco.

**A maior objeção desse público é medo de golpe.** Quem tem processo judicial vira alvo de fraude o tempo todo. Isso precisa guiar as decisões de design: o site tem que parecer sólido, verificável e institucional, não promocional. Prova de legitimidade antes de oferta.

### Parâmetros do produto

- Valor do crédito: até R$ 50.000
- Prazo: 6 a 60 meses
- Carência: até 90 dias
- Forma de pagamento: parcela única ao final ou parcelas mensais
- Operações simultâneas: 1 por CPF
- Idade: 18 a 74 anos
- Liberação: Pix
- Contrato: CCB com assinatura eletrônica
- Operação: 100% digital

---

## 2. Stack

- **Next.js 15** com App Router
- **TypeScript**
- **Tailwind CSS**
- `next/font` para as fontes do Google
- Sem biblioteca de componentes pronta (nada de shadcn, MUI, Chakra). Componentes próprios.
- Sem biblioteca de animação. Se precisar de transição, CSS puro e discreto.
- Imagens com `next/image`
- Preparado para deploy na Vercel

Estrutura de rotas:

```
/                    Home
/sobre               Sobre
/legal-equity        Legal Equity
/contato             Contato
/politica-de-privacidade   (placeholder)
/termos-de-uso             (placeholder)
```

Organize em `app/`, com componentes reutilizáveis em `components/` e o conteúdo textual separado em `content/` para facilitar a revisão de texto depois.

---

## 3. Paleta

Use exatamente estes valores. Nenhuma outra cor de marca.

- `#5dcaa5` verde-menta: acento claro, superfícies leves, detalhes
- `#1d9e75` verde principal: **cor âncora**, usada em CTAs, links e destaques
- `#0f6e56` verde escuro: fundo de seção escura, texto sobre fundo claro
- `#737373` cinza neutro: texto secundário, legendas, labels
- `#FFFFFF` branco: fundo padrão

Regras:

- Fundo do site é **branco**, com seções alternando para um cinza muito claro (`#FAFAFA` ou similar) para separar blocos.
- O **verde escuro `#0f6e56` sólido** é o tratamento premium da marca. Use em no máximo duas seções por página, como bloco de destaque com texto branco por cima.
- **Não use verde-menta para texto pequeno sobre branco.** Contraste insuficiente. Texto em verde usa `#1d9e75` ou `#0f6e56`.
- Gradiente da marca (`#5dcaa5` → `#1d9e75` → `#0f6e56`, sempre claro para escuro, de cima para baixo) é **exclusivo do símbolo do logo**. Não use gradiente em fundo, botão, card ou texto.
- Texto principal em quase-preto (`#1a1a1a`), não em preto puro.

---

## 4. Tipografia e logo

Três famílias, todas no Google Fonts:

- **Archivo Black**: headlines de impacto. Uso pontual: título do hero, chamada de seção grande. Nunca em bloco longo de texto.
- **Poppins**: títulos de seção e subtítulos. SemiBold ou Bold.
- **Inter**: corpo de texto, formulários, interface, legendas.

Corpo de texto em 17 ou 18px, `line-height` 1.7, largura máxima de leitura em torno de 68 caracteres.

### Arquivos de logo

Estarão em `public/images/`:

```
D20_logo_horizontal_cred_verde.png    header, sobre fundo claro
D20_logo_horizontal_branco.png        footer e seções de fundo verde escuro
D20_logo_verde.png                    favicon, ícone e usos pequenos em fundo claro
D20_logo_branco.png                   ícone e usos pequenos em fundo escuro
```

Use a versão horizontal no header e no footer. As versões compactas ficam para favicon, ícone de aba, compartilhamento e qualquer lugar onde a horizontal não caiba com legibilidade.

Regras do logo, do brandbook:

- Nunca redesenhar, distorcer, rotacionar, aplicar sombra ou efeito.
- Área de proteção livre ao redor equivalente a metade da altura do símbolo.
- Largura mínima de 90px para as versões com wordmark.
- **Um logo por tela.** Header e footer contam como superfícies diferentes, tudo bem, mas não espalhe o símbolo pela página como enfeite.

---

## 5. Direção de design

Esta é a parte mais importante do briefing.

O site precisa parecer feito por um estúdio de design para uma instituição financeira séria. **Não pode parecer template de IA.** O público tem medo de golpe, e site com cara de gerado automaticamente destrói confiança antes de qualquer texto ser lido.

### Proibido, sem exceção

- Gradiente em fundo, botão, card ou texto
- Glassmorphism, blur, glow, neon, brilho
- Emoji como ícone
- Blobs, formas abstratas, ilustrações vetoriais genéricas do tipo unDraw ou Storyset
- Hero centralizado com título grande, subtítulo, dois botões lado a lado e uma imagem abstrata à direita
- Grade de três cards idênticos com ícone circular colorido, título curto e parágrafo vago
- Animação de entrada em todo elemento ao rolar a página
- Sombra grande e difusa em card. Se precisar separar, use borda de 1px.
- `border-radius` acima de 12px em card ou seção. Botão pode ir a 8px.
- Roxo, azul-violeta, degradê colorido, qualquer cor fora da paleta
- Copy vaga do tipo "transforme sua vida", "realize seus sonhos", "o futuro do crédito"
- Contadores animados, badges de "novo", selos inventados

### Obrigatório

- **Layout assimétrico.** Nem tudo centralizado. Alterne alinhamento à esquerda com blocos de largura total. Use grid de 12 colunas e ocupe fatias irregulares.
- **Hierarquia tipográfica forte.** A diferença entre um H1 e o corpo deve ser grande e evidente. Contraste de tamanho e peso é o que dá aparência profissional, não cor.
- **Espaço em branco generoso.** Seções com respiro vertical amplo. Aperto visual é o que mais denuncia template.
- **Fotografia real** de pessoas brasileiras em contexto cotidiano, luz natural, enquadramento limpo. Nada de banco de imagem corporativo frio, nada de ilustração. Use placeholders com proporção correta e um comentário indicando o que entra ali.
- **Bordas de 1px** em cinza muito claro no lugar de sombra.
- **Tabela de verdade** para os parâmetros do produto. Não transforme número em card colorido.
- **Ícones em traço fino**, monocromáticos, do mesmo conjunto. Lucide ou Phosphor. Nunca coloridos, nunca dentro de círculo colorido.
- **Máximo dois pesos** por família de fonte.
- Responsivo de verdade, testado em 375px, 768px e 1440px.
- Acessibilidade: contraste AA, foco visível, HTML semântico, `alt` em toda imagem.

### Referência de gênero

Pense em como um banco digital sério ou uma fintech de crédito com garantia se apresenta: sóbrio, tipografia forte, muito branco, cor usada com parcimônia, informação regulatória visível em vez de escondida. O oposto de uma landing page de infoproduto.

---

## 6. Conteúdo página a página

O texto abaixo é a base. Escreva o site com ele, mantendo o sentido e o vocabulário. Ele passará por revisão editorial depois, então priorize estrutura e clareza.

### Header (todas as páginas)

Fixo no topo, fundo branco, borda inferior de 1px ao rolar.

- Logo à esquerda (`D20_LOGO_HORIZONTAL_green.png`)
- Navegação: Início · Sobre · Legal Equity · Contato
- Botão à direita: **Simular crédito** (verde principal, link para `/contato`)
- Menu hambúrguer no mobile, abrindo painel de tela cheia

### HOME

**1. Hero**
Layout dividido, texto à esquerda ocupando cerca de 55%, foto à direita. Não centralize.

- Headline (Archivo Black): **Crédito com a garantia do seu processo trabalhista.**
- Subheadline: Você recebe agora, sem esperar o processo terminar. O processo continua no seu nome e com o mesmo advogado.
- Botão primário: Simular crédito
- Link secundário: Entender o Legal Equity
- Microcopy abaixo, em cinza, texto pequeno: Simulação sem compromisso, sujeita a análise e aprovação de crédito pela instituição financeira parceira. A D20 Cred nunca cobra nenhum valor antes de liberar o crédito.

**2. Faixa de credibilidade**
Faixa fina logo abaixo do hero, fundo cinza muito claro, quatro itens em linha com ícone de traço fino e texto curto:
100% digital · Liberação por Pix · Custo Efetivo Total informado antes da assinatura · Correspondente bancário da UY3 SCD

**3. O problema**
Bloco de texto largo, alinhado à esquerda, com uma frase de destaque em Archivo Black.

Título: Ganhar na Justiça e receber da Justiça são coisas diferentes.
Texto: Entre a sentença e o dinheiro na conta costumam passar anos. O direito está reconhecido, mas o valor não chega, e a conta continua vencendo. A D20 destrava esse valor sem que você precise abrir mão do processo.

**4. O que é o Legal Equity (resumo)**
Três colunas de texto, sem card e sem ícone, separadas por linha vertical fina:

- **Home equity**: a garantia é o imóvel
- **Car equity**: a garantia é o carro
- **Legal Equity**: a garantia é o processo judicial

Abaixo: Mesma lógica, garantia diferente. O Legal Equity é o nome que a D20 deu a essa modalidade no Brasil.
Link: Entender como funciona → `/legal-equity`

**5. Como funciona**
Quatro passos numerados, dispostos na horizontal no desktop e empilhados no mobile. Numeração em Archivo Black grande, em verde-menta, atrás ou ao lado do texto. Sem card, sem círculo colorido.

1. **Simulação**. Você informa seus dados e o processo. A análise é feita com a tecnologia do grupo.
2. **Documentos**. Você envia os documentos pelo celular. Tudo digital.
3. **Análise**. Análise documental, análise jurídica do processo e checagem de conformidade.
4. **Liberação**. Com o contrato assinado eletronicamente, o valor cai por Pix.

Nota abaixo, em cinza: O prazo varia conforme a análise. A D20 não promete liberação no mesmo dia.

**6. Bloco de confiança** (seção em fundo verde escuro `#0f6e56`, texto branco)

Esta é a seção mais importante da página. Título: Como saber que a D20 é real.

Quatro blocos de texto curto, sem card:
- **CNPJ e endereço públicos**. D20 Capital Ltda, CNPJ [PLACEHOLDER], com endereço físico em São Paulo.
- **Correspondente bancário registrado**. Atuamos nos termos da Resolução CMN nº 3.954/2011. O contrato é emitido pela UY3 Sociedade de Crédito Direto S.A., autorizada pelo Banco Central.
- **Nenhuma cobrança antes da liberação**. A D20 Cred nunca solicita depósito, Pix, transferência ou taxa para liberar crédito. Se alguém pedir isso em nosso nome, é golpe.
- **Canais oficiais**. Só falamos com você pelo site, pelo e-mail e pelo telefone listados no rodapé.

Logo da UY3 no fim da seção, com link para uy3.com.br.

**7. Parâmetros do produto**
Tabela limpa, borda de 1px, sem cor de fundo alternada berrante. Use os dados da seção 1 deste documento.

**8. Perguntas frequentes**
Acordeão com 6 perguntas, as demais na página de Legal Equity. Prioridade para as que atacam o medo de golpe:

- A D20 é confiável?
- Preciso pagar algo antes para conseguir o crédito?
- Eu perco meu processo?
- Preciso trocar de advogado?
- Tenho restrição no nome. Consigo?
- O crédito é igual ao valor do meu processo?

Para a última, a resposta correta é: não. O crédito é calculado com base na análise do processo e não corresponde ao valor da causa.

**9. CTA final**
Bloco simples, fundo branco, título em Archivo Black, um botão. Sem formulário aqui.

### SOBRE

Página editorial, texto em coluna de leitura, sem grid de cards.

**1. Abertura**. Título e parágrafo de posicionamento.
A D20 Cred é a marca do grupo Artemis para crédito com garantia de direitos creditórios judiciais.

**2. De onde viemos**
A Artemis é uma empresa de tecnologia que analisa e precifica processos judiciais, com base em mais de 30 milhões de processos e mais de 80 tribunais. Com essa capacidade, o grupo criou a D20: em vez de o cliente abrir mão do processo, ele usa o processo como garantia e recebe o crédito.

**3. Por que existe**
Bloco sobre a espera da Justiça e o cliente que não tem garantia convencional para oferecer.

**4. Como operamos**
Explicação da estrutura: correspondente bancário, papel da UY3, análise jurídica, conformidade. Escreva com honestidade e sem juridiquês.

**5. Números** (seção em fundo verde escuro)
Use `[PLACEHOLDER]` nos valores, com nota de rodapé indicando que precisam ser confirmados antes de publicar. Não invente número.

**6. Encerramento** com link para Legal Equity e Contato.

### LEGAL EQUITY

Esta é a página mais importante para a estratégia de busca. Ela é o que a pessoa encontra quando pesquisa por termos ligados a processo trabalhista e dinheiro. Ela precisa **ensinar** o que é o produto, não vender.

**1. Hero da página**
Título: O que é Legal Equity.
Subtítulo: Crédito com a garantia de um processo judicial. Explicamos do começo.

**2. A analogia**
Desenvolvimento do bloco da home, com mais texto. Home equity, car equity, legal equity. Mesma lógica de garantia real, ativo diferente.

**3. Como funciona na prática**
Passo a passo detalhado, mais denso que o da home.

**4. O que muda e o que não muda**
Duas colunas, contraste direto:

*Continua igual:* o processo é seu · o advogado é o mesmo · você segue acompanhando a ação · a decisão da causa não muda
*Passa a existir:* um crédito na sua conta agora · um contrato com valor, prazo e custo definidos antes da assinatura · uma garantia registrada sobre o direito creditório

**5. O que o Legal Equity não é**
Bloco importante, porque o público confunde com outro produto.
- Não é venda do processo. Você não transfere o processo para ninguém.
- Não é empréstimo sem garantia. Existe uma garantia real por trás, e é isso que muda a condição.
- Não é promessa de ganho de causa. O resultado do processo continua dependendo da Justiça.

**6. Quem pode contratar**
Requisitos em lista clara: processo trabalhista em andamento, idade entre 18 e 74 anos, uma operação ativa por CPF, sujeito a análise documental, jurídica e de conformidade.

**7. Parâmetros**. Mesma tabela da home.

**8. FAQ completa**. Acordeão com as perguntas restantes.

**9. CTA** para simulação.

### CONTATO

**1. Formulário**
Campos: nome completo, e-mail, telefone, mensagem.
Checkbox obrigatório de consentimento LGPD, com link para a política de privacidade. Texto do consentimento: Autorizo a D20 Cred a tratar meus dados pessoais para responder a esta solicitação e a me contatar por telefone, WhatsApp ou e-mail, nos termos da Política de Privacidade.

Validação no cliente, estados de erro visíveis e mensagem de sucesso. Não implemente backend: deixe um `TODO` claro no `onSubmit` indicando onde a integração entra.

**2. Canais oficiais** (destaque visual forte, ao lado do formulário)
Bloco com aviso: Estes são nossos únicos canais oficiais. A D20 Cred nunca solicita nenhum pagamento antes da liberação do crédito.
E-mail, telefone, endereço e horário como `[PLACEHOLDER]`.

**3. Horário de atendimento**
Use `[PLACEHOLDER: confirmar com o RO antes de publicar]`. Existe divergência aberta entre as fontes internas e o site atual. Não fixe horário.

### Footer (todas as páginas)

Fundo verde escuro `#0f6e56`, texto branco e verde-menta.

- Logo branco
- Colunas: navegação, institucional (política de privacidade, termos de uso, FAQ)
- Dados da empresa como `[PLACEHOLDER]`: razão social, CNPJ, endereço, telefone, e-mail
- Bloco "Instituição financeira parceira" com o logo da UY3
- **Texto legal obrigatório**, reproduza integralmente, ajustando só os placeholders:

> A D20 Capital Ltda (D20 Cred), CNPJ [PLACEHOLDER], não é uma instituição financeira e não realiza operações de crédito por conta própria. Atuamos como correspondente bancário, nos termos da Resolução CMN nº 3.954/2011, originando e encaminhando propostas em nome da instituição financeira parceira, a quem cabem a análise, a aprovação, a concessão e a definição das condições de cada operação.
>
> Toda solicitação está sujeita a análise e aprovação de crédito pela instituição financeira parceira. Valores, prazos e taxas variam conforme o perfil do cliente e a linha contratada, e são apresentados integralmente, com o Custo Efetivo Total (CET), antes da assinatura do contrato.
>
> A D20 Cred nunca solicita depósito, PIX, transferência, taxa ou qualquer pagamento antes de liberar o crédito. Nossos únicos canais oficiais são o site https://d20credito.com.br, o e-mail [PLACEHOLDER] e o telefone [PLACEHOLDER].
>
> Tratamos dados pessoais conforme a Lei nº 13.709/2018 (LGPD). Para exercer seus direitos como titular, escreva para [PLACEHOLDER]. Reclamações sobre a instituição financeira parceira também podem ser registradas no Banco Central do Brasil pelo Registrato/Fale Conosco do BCB.

---

## 7. Vocabulário

### Sempre dizer

- crédito com garantia de direitos creditórios judiciais
- crédito com a garantia do seu processo
- um valor calculado com base no seu processo
- agora, sem esperar o processo terminar
- o processo continua no seu nome
- Legal Equity

### Nunca dizer, em nenhuma página, nenhum `alt`, nenhuma meta tag

**comprar, vender, ceder ou adquirir o processo**
Descreve outra operação e quebra a defesa jurídica do modelo.
Use: crédito com a garantia do seu processo

**antecipar, antecipação, adiantar, adiantamento**
Regra travada: a palavra não deve aparecer em lugar nenhum, nem para dizer o que a D20 não faz.
Use: agora, sem esperar o processo terminar

**receba o valor do seu processo**
Sugere que o crédito é igual ao valor da causa, e não é.
Use: um valor garantido pelo seu processo

**você vai receber, você já tem esse valor**
É promessa de resultado da causa.
Use: um valor calculado com base no seu processo

**dinheiro na hora, no mesmo dia**
O ciclo tem análise documental, análise jurídica e conformidade.
Use: agora, sem esperar o processo terminar

**as menores taxas do mercado**
Não há comprovação e nenhum concorrente publica taxa.
Use: condição diferente, porque tem garantia

**a D20 é autorizada pelo Banco Central**
Falso. A autorizada é a UY3, que emite o contrato.
Use: o contrato é emitido pela UY3, autorizada pelo Banco Central

**somos a única, não existe concorrente, criamos a categoria**
Superlativo absoluto sem comprovação, reprovado por plataforma de mídia e pelo CONAR.
Use: a marca que nomeia o Legal Equity

Também **não pode aparecer em nenhum lugar do site**: menção a fundo, investidor, estrutura de captação, percentual de deságio, ou qualquer conteúdo que sugira ganho garantido da causa.

**Não use travessão (—) em nenhum texto do site.** Use vírgula, ponto ou dois pontos.

Existe outra marca no mesmo grupo, com produto e vocabulário opostos. Ela **não é mencionada em nenhum lugar deste site**, nem por nome, nem por referência.

---

## 8. Conformidade obrigatória

O Google exige verificação para anunciar produtos financeiros no Brasil, e a política de empréstimo pessoal exige que a página informe com destaque o prazo mínimo e máximo de pagamento. Por isso:

1. **Prazo de 6 a 60 meses precisa estar visível na home**, não escondido em FAQ.
2. A menção ao **Custo Efetivo Total (CET) informado antes da assinatura** aparece no hero e no rodapé.
3. O aviso de que **não existe nenhuma cobrança antes da liberação** aparece no hero, na seção de confiança e no rodapé.
4. O disclaimer de correspondente bancário aparece no rodapé de **todas** as páginas.
5. Nenhuma condição, taxa ou valor de parcela específico aparece no site sem passar por aprovação. Se precisar exemplificar, use `[PLACEHOLDER]`.

---

## 9. Placeholders

Marque com `[PLACEHOLDER]` e centralize num único arquivo `content/dados-empresa.ts` para facilitar o preenchimento depois:

- CNPJ, razão social, endereço
- Telefone, e-mail, WhatsApp
- Horário de atendimento
- Números de resultado (volume originado, clientes atendidos, satisfação)
- Fotografias
- Conteúdo de política de privacidade e termos de uso

Não invente nenhum desses dados.

---

## 10. Critérios de aceite

Antes de dizer que terminou, verifique:

- [ ] As quatro páginas existem e a navegação funciona entre todas
- [ ] Nenhuma palavra da tabela de proibidos aparece no código, incluindo `alt`, `title` e meta tags
- [ ] Nenhum travessão em nenhum texto
- [ ] Nenhum gradiente fora do arquivo de logo
- [ ] Nenhuma cor fora da paleta da seção 3
- [ ] Prazo de 6 a 60 meses visível na home
- [ ] Disclaimer de correspondente bancário no rodapé das quatro páginas
- [ ] Contraste AA em todo texto
- [ ] Layout correto em 375px, 768px e 1440px
- [ ] `npm run build` sem erro e sem warning de TypeScript
- [ ] Nenhum dado de empresa inventado, todos como `[PLACEHOLDER]`

Ao final, gere um `README.md` com: como rodar, onde ficam os textos, onde ficam os placeholders e o que falta para publicar.

---

## 11. Ordem de trabalho

Não faça tudo de uma vez. Siga nesta ordem e pare para eu revisar entre as etapas:

1. Setup do projeto, configuração do Tailwind com a paleta e as fontes, estrutura de pastas
2. Header, footer e layout base, com o texto legal completo
3. Home
4. Legal Equity
5. Sobre
6. Contato
7. Revisão de responsividade e acessibilidade
8. README e checklist de aceite