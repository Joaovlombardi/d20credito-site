# D20 Cred — regras permanentes deste repositório

A especificação completa do site está em `BRIEFING.md`. Leia antes de qualquer tarefa.

As regras abaixo valem para **toda** sessão neste repositório, em qualquer arquivo, incluindo comentário de código, `alt`, `title`, meta tag, commit e README. Elas não são preferência de estilo: sustentam a natureza jurídica do produto.

## Vocabulário proibido

Nunca escreva, em nenhum contexto, nem para negar:

- **antecipar, antecipação, adiantar, adiantamento**
- comprar, vender, ceder ou adquirir o processo
- receba o valor do seu processo
- você vai receber, você já tem esse valor
- dinheiro na hora, no mesmo dia
- as menores taxas
- a D20 é autorizada pelo Banco Central
- somos a única, não existe concorrente, criamos a categoria
- qualquer menção a fundo, investidor, estrutura de captação ou deságio

## Vocabulário correto

- crédito com garantia de direitos creditórios judiciais
- crédito com a garantia do seu processo
- um valor calculado com base no seu processo
- agora, sem esperar o processo terminar
- o contrato é emitido pela UY3, autorizada pelo Banco Central
- a marca que nomeia o Legal Equity

## Outras regras travadas

- **Nunca use travessão (—).** Use vírgula, ponto ou dois pontos.
- Existe outra marca no mesmo grupo, com produto e vocabulário opostos. Ela não aparece em lugar nenhum deste projeto.
- Nunca invente dado de empresa: CNPJ, telefone, endereço, horário, número de clientes ou volume. Use `[PLACEHOLDER]`.
- Nunca invente taxa, valor de parcela ou condição de crédito.
- O disclaimer de correspondente bancário aparece no rodapé de todas as páginas.
- Paleta: `#5dcaa5`, `#1d9e75`, `#0f6e56`, `#737373`, `#FFFFFF`. Nenhuma outra cor de marca.
- Gradiente só existe dentro do arquivo do logo. Nunca em fundo, botão, card ou texto.

## Antes de entregar qualquer etapa

Rode e confira:

```bash
grep -rniE "antecip|adiant" --include="*.tsx" --include="*.ts" --include="*.md" .
grep -rn "—" --include="*.tsx" --include="*.ts" .
```

Ambos devem voltar vazios, exceto por este arquivo e por `BRIEFING.md`.