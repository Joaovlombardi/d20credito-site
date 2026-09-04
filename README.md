# Site institucional da D20 Cred

Site da **D20 Cred**, marca do grupo Artemis para crédito com garantia de direitos creditórios judiciais.

A especificação completa está em [`BRIEFING.md`](./BRIEFING.md). As regras que valem para toda alteração neste repositório, incluindo vocabulário proibido, estão em [`CLAUDE.md`](./CLAUDE.md). **Leia os dois antes de mexer em qualquer texto.**

---

## Como rodar

Requer Node 18.18 ou superior.

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # build de produção
npm start        # serve o build
npm run lint     # ESLint
```

O projeto está pronto para deploy na Vercel: `npm run build` é o comando de build e nenhuma variável de ambiente é necessária hoje.

### Stack

- **Next.js 16.3.4** com App Router e Turbopack
- **React 19.2.8** e **TypeScript**
- **Tailwind CSS 4.3.3**, sem `tailwind.config.js`: a configuração é CSS-first, no bloco `@theme` de [`app/globals.css`](./app/globals.css)
- `next/font/google` para Archivo Black, Poppins e Inter, todas auto-hospedadas no build
- `lucide-react` só para ícones
- Nenhuma biblioteca de componentes e nenhuma biblioteca de animação

### Sobre o `globals.css`

Não é um arquivo de estilos comum: é onde as regras do briefing viram restrições que o compilador aplica.

As paletas e escalas padrão do Tailwind são zeradas com `--color-*: initial`, `--text-*: initial`, `--radius-*: initial`, `--shadow-*`, `--drop-shadow-*` e `--blur-*`. O efeito é que classes como `bg-blue-500`, `shadow-lg`, `rounded-3xl` ou `blur-md` **não geram CSS nenhum**: a cor errada não chega a pintar.

Uma ressalva importante: o Tailwind **descarta silenciosamente** o utilitário desconhecido, sem quebrar o build e sem avisar. Se um elemento aparecer sem estilo, a primeira hipótese é uma classe fora do sistema.

O arquivo também documenta, em comentário, a tabela de contraste medida de todos os pares da paleta e a regra travada de uso do verde `#1d9e75`, que reprova AA em tamanho de corpo e por isso nunca carrega texto pequeno.

---

## Onde ficam os textos

**Todo texto visível do site está em `content/`.** Os componentes não têm frase escrita dentro deles. Para uma revisão editorial, é nesta pasta e só nela que se mexe.

| Arquivo | O que contém |
|---|---|
| `content/dados-empresa.ts` | Razão social, CNPJ, endereço, telefone, e-mail, horário, números de resultado, dados da UY3, arquivos de logo e a tabela de parâmetros do produto |
| `content/textos-legais.ts` | Os quatro parágrafos do disclaimer de correspondente bancário, obrigatórios no rodapé de todas as páginas |
| `content/navegacao.ts` | Itens do menu, do rodapé e a chamada principal |
| `content/home.ts` | Home: hero, faixa de credibilidade, o problema, resumo do Legal Equity, como funciona, bloco de confiança, parâmetros, 6 perguntas frequentes e chamada final |
| `content/legal-equity.ts` | Legal Equity: hero e índice, analogia, passo a passo, o que muda e o que não muda, o que não é, requisitos, parâmetros e as 16 perguntas da FAQ completa |
| `content/sobre.ts` | Sobre: abertura, de onde viemos, por que existe, como operamos, números e encerramento |
| `content/contato.ts` | Contato: hero, rótulos e dicas dos campos, mensagens de erro, texto do consentimento LGPD, estado de sucesso e o bloco de canais oficiais |

### Regras que o texto precisa respeitar

Estão em `CLAUDE.md` e não são preferência de estilo. As mais fáceis de esquecer:

- **A lista de vocabulário proibido vale mesmo para negar.** O primeiro item dessa lista, com quatro palavras sobre receber o valor sem esperar o fim do processo, não pode aparecer em lugar nenhum, nem numa frase que diga o que a D20 não faz. A lista está no `CLAUDE.md` e este arquivo não a repete de propósito.
- **Nunca use travessão.** Vírgula, ponto ou dois-pontos.
- Não escreva que a D20 é autorizada pelo Banco Central. Quem é autorizada é a UY3, que emite o contrato.
- Não invente taxa, valor de parcela, prazo de liberação ou dado de empresa.

Antes de entregar qualquer alteração de texto, rode os **dois comandos de verificação que estão no fim do `CLAUDE.md`**, na seção "Antes de entregar qualquer etapa". Eles varrem o repositório atrás do vocabulário proibido e do travessão, e os dois precisam voltar vazios, exceto pelo próprio `CLAUDE.md` e por `BRIEFING.md`. Os comandos não são copiados para cá porque o padrão de busca contém as palavras que não podem ser escritas.

### Três frases que divergem do briefing, de propósito

O `BRIEFING.md` escreve, ao pé da letra, três frases que usam vocabulário da lista proibida do `CLAUDE.md`, que vale mesmo para negar. Nos três casos a ideia foi dita pelo lado positivo, e o motivo está comentado no código. Não "corrija" de volta sem decidir antes qual documento manda:

1. Nota do "Como funciona" na Home, sobre não prometer liberação em determinado prazo.
2. Resposta "Eu perco meu processo?" na FAQ da Home.
3. Título do primeiro bloco de "O que o Legal Equity não é", na página Legal Equity.

---

## Onde ficam os placeholders

Marcados com a string `[PLACEHOLDER]`. Para listar todos:

```bash
grep -rn "PLACEHOLDER" --include="*.ts" --include="*.tsx" app components content
```

### Dados de empresa, em `content/dados-empresa.ts`

Já preenchidos e confirmados: razão social, CNPJ, endereço, telefone e e-mail.

| Pendente | Campo | Quem resolve |
|---|---|---|
| Horário de atendimento | `dadosEmpresa.horarioAtendimento` | Há divergência aberta entre as fontes internas e o site atual. Confirmar com o RO. Aparece no rodapé de todas as páginas e no bloco de canais do contato. |
| WhatsApp | `dadosEmpresa.contato.whatsapp` | Não há número divulgado. Não reaproveitar o telefone fixo. |
| Volume originado, clientes atendidos, satisfação | `numeros` | Seção de números da página Sobre. Não estimar nem arredondar. |

### Respostas de FAQ, em `content/legal-equity.ts`

Três respostas ficaram com um trecho `[PLACEHOLDER]` porque não dá para escrevê-las sem inventar condição contratual ou regra de operação:

- **"E se eu perder a ação?"** É a pergunta mais consequente da página. O que está escrito é que o resultado depende da Justiça e que a D20 não promete nem influencia. O que acontece com a operação nessa hipótese precisa ser redigido pelo jurídico.
- **"Meu advogado precisa autorizar ou assinar alguma coisa?"** Falta confirmar se há algum ato formal do advogado no fluxo.
- **"Quais documentos eu preciso enviar?"** Falta a lista da operação.

### Páginas jurídicas

`app/politica-de-privacidade/page.tsx` e `app/termos-de-uso/page.tsx` renderizam apenas um aviso do que falta. O texto das duas é jurídico, precisa vir de fora e não deve ser redigido no repositório. As duas estão com `robots: { index: false }` e saem do índice de busca até o conteúdo chegar. Quando o texto chegar, o componente `components/ui/EsbocoDePagina.tsx` deixa de ter uso e pode ser removido.

### Fotografia

Não há nenhuma foto real no projeto. Os lugares reservados usam `components/ui/EspacoDeFoto.tsx`, que já ocupa a proporção final para o layout não mudar quando a imagem entrar, e descreve na tela o que entra ali.

| Página | Proporção | O que entra |
|---|---|---|
| Home, hero | 4:5 | Pessoa adulta brasileira em casa, luz natural de janela, olhando para o celular |
| Sobre, abertura | 21:9 | Equipe no escritório em São Paulo, luz natural, enquadramento amplo |

Ao substituir, troque o componente por `next/image` com `width` e `height` nativos e `alt` descritivo. O briefing pede fotografia real de pessoas brasileiras em contexto cotidiano: nada de banco de imagem corporativo e nada de ilustração vetorial.

### Logo da UY3

`public/images/logo_UY3.png` é uma versão estilizada, laranja com halo, cortada nas bordas e com 1,27 MB. Funciona, mas não é o wordmark oficial. O caminho está isolado em `parceiro.logo`, dentro de `content/dados-empresa.ts`, então trocar é alteração de uma linha.

---

## O que falta para publicar

Em ordem de bloqueio.

### Bloqueia o lançamento

1. **Backend do formulário de contato.** Hoje o formulário valida no cliente e mostra a confirmação, mas **nada sai do navegador**. O ponto de integração está marcado com `TODO` em `components/contato/FormularioDeContato.tsx`. Ao integrar, registre o consentimento LGPD com data e hora junto do envio: sem isso o checkbox não cumpre a função probatória.
2. **Política de privacidade e termos de uso.** Sem eles o link do consentimento LGPD aponta para uma página vazia.
3. **Horário de atendimento.** Aparece nas seis páginas.
4. **As três respostas de FAQ** listadas acima, em especial a de perder a ação.

### Precisa acontecer antes de anunciar

5. **Revisão jurídica de todo o texto**, com atenção à página Legal Equity e ao bloco "Como operamos" da página Sobre.
6. **Revisão editorial**, que o briefing já previa. Tudo está em `content/`.
7. **Verificação do Google para produtos financeiros**, exigida para anunciar crédito no Brasil. O prazo de 6 a 60 meses já está visível na Home, como a política exige.

### Deveria acontecer antes, mas não bloqueia

8. Fotografia real nos dois lugares reservados.
9. Wordmark oficial da UY3.
10. Números de resultado, ou remover a seção da página Sobre.
11. **Imagem de compartilhamento (Open Graph).** Os metadados existem em todas as páginas, mas não há arquivo de imagem. Sem ele o link compartilhado no WhatsApp aparece sem cartão, o que é ruim para um público que desconfia de golpe.
12. **Domínio e `metadataBase`.** Está fixo em `https://d20credito.com.br` no `app/layout.tsx`.
13. Decidir sobre o WhatsApp: ou entra o número, ou sai a palavra do texto de consentimento, que hoje autoriza contato por um canal que a empresa não publica.

---

## Estrutura

```
app/
  layout.tsx            fontes, metadata, header, footer e link de pular para o conteúdo
  globals.css           tokens da marca e tabela de contraste comentada
  icon.png              favicon gerado a partir do logo compacto verde
  page.tsx              Home
  sobre/                Sobre
  legal-equity/         Legal Equity
  contato/              Contato
  politica-de-privacidade/   placeholder jurídico
  termos-de-uso/             placeholder jurídico
components/
  layout/               Header e Footer
  ui/                   peças reutilizadas por mais de uma página
  home/  legal-equity/  sobre/  contato/    seções de cada página
content/                todo o texto do site
lib/cn.ts               junção de classes, sem dependência externa
public/images/          logos da D20 e da UY3
```

Alias de import: `@/` aponta para a raiz.

### Acessibilidade

O site foi auditado ao final da construção e o resultado está registrado aqui para não se perder:

- Contraste AA em 119 combinações distintas de cor, tamanho e peso, nas seis rotas, com acordeões abertos e formulário em estado de erro. O par mais apertado é 4.54:1.
- Sem rolagem horizontal em 320, 375, 768 e 1440px.
- Todo alvo de toque com pelo menos 24px, exceto o link dentro da frase de consentimento, que tem exceção explícita no critério 2.5.8.
- Anel de foco de 2px em verde sobre fundo claro e **branco sobre fundo verde escuro**, porque o verde sobre o verde escuro fica em 1.83:1 e desaparece.
- O painel de menu do celular é um diálogo: prende o foco, fecha com Escape e devolve o foco ao botão que o abriu.
- Um `h1` por página, hierarquia de títulos sem pulo, `alt` em toda imagem, `label` em todo campo e `<nav>` sempre com nome.

Ao mexer no site, o mínimo antes de entregar é: `npm run build`, `npm run lint`, os dois greps de vocabulário e uma passada em 375, 768 e 1440px.

### Estado de erro sem cor de erro

A paleta não tem vermelho e não pode ganhar um. O erro de formulário é marcado por borda de 2px em `#1a1a1a`, mensagem em negrito e ícone, nunca só pela cor, mais `aria-invalid` e `aria-describedby`. A borda dos campos em repouso usa o cinza `#737373` e não o filete claro: em controle de formulário a borda precisa de 3:1, e o filete claro dá 1.16:1.
