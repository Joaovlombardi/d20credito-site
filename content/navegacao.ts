/** Navegação principal, usada no header e na coluna de navegação do rodapé. */
export const navegacaoPrincipal = [
  { href: "/", rotulo: "Início" },
  { href: "/sobre", rotulo: "Sobre" },
  { href: "/legal-equity", rotulo: "Legal Equity" },
  { href: "/contato", rotulo: "Contato" },
] as const;

/** Coluna institucional do rodapé. */
export const navegacaoInstitucional = [
  { href: "/politica-de-privacidade", rotulo: "Política de privacidade" },
  { href: "/termos-de-uso", rotulo: "Termos de uso" },
  { href: "/legal-equity#perguntas-frequentes", rotulo: "Perguntas frequentes" },
] as const;

/** Chamada primária do site. Leva à página de contato, onde a simulação é solicitada. */
export const chamadaPrincipal = {
  href: "/contato",
  rotulo: "Simular crédito",
} as const;
