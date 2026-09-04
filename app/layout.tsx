import type { Metadata } from "next";
import { Archivo_Black, Inter, Poppins } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

/* Archivo Black existe em um unico peso. Headline de impacto, uso pontual. */
const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

/* Titulos de secao e subtitulos. Teto de dois pesos por familia. */
const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

/* Corpo, formularios e interface. Fonte variavel, cobre 400 e 600. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://d20credito.com.br"),
  title: {
    default: "D20 Cred | Crédito com a garantia do seu processo trabalhista",
    template: "%s | D20 Cred",
  },
  description:
    "Crédito com garantia de direitos creditórios judiciais. Você recebe agora, sem esperar o processo terminar. O processo continua no seu nome e com o mesmo advogado.",
  applicationName: "D20 Cred",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "D20 Cred",
    url: "/",
    title: "D20 Cred | Crédito com a garantia do seu processo trabalhista",
    description:
      "Crédito com garantia de direitos creditórios judiciais. O processo continua no seu nome e com o mesmo advogado.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivoBlack.variable} ${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink">
        <a
          href="#conteudo"
          /* Fora da tela ate receber foco. Nao use sr-only aqui: o Tailwind 4.3
             nao tem not-sr-only para desfazer, e o link ficaria invisivel no foco. */
          className="fixed -top-20 left-4 z-[60] rounded-md border border-forest bg-white px-4 py-3 font-heading text-sm font-semibold text-forest focus:top-4"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
