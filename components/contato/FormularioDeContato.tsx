"use client";

import Link from "next/link";
import { useState } from "react";
import { AlertCircle, Check } from "lucide-react";

import { formulario } from "@/content/contato";
import { cn } from "@/lib/cn";

const { campos, consentimento } = formulario;

/* O texto do consentimento vem do briefing com o nome do documento no meio da
   frase. Quebra em volta do rotulo para o link ficar exatamente sobre ele, sem
   reescrever a frase e sem duplicar o ponto final. */
const [antesDoLink, depoisDoLink] = consentimento.texto.split(consentimento.link.rotulo);

type Campo = "nome" | "email" | "telefone" | "mensagem" | "consentimento";
type Valores = { nome: string; email: string; telefone: string; mensagem: string; consentimento: boolean };
type Erros = Partial<Record<Campo, string>>;

const valoresIniciais: Valores = {
  nome: "",
  email: "",
  telefone: "",
  mensagem: "",
  consentimento: false,
};

/** Formata enquanto digita: (11) 91234-5678. Guarda no estado já formatado. */
function formatarTelefone(valor: string): string {
  const digitos = valor.replace(/\D/g, "").slice(0, 11);
  if (digitos.length === 0) return "";
  if (digitos.length <= 2) return `(${digitos}`;
  if (digitos.length <= 6) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
  if (digitos.length <= 10) {
    return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 6)}-${digitos.slice(6)}`;
  }
  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
}

function validar(valores: Valores): Erros {
  const erros: Erros = {};

  const nome = valores.nome.trim();
  if (!nome) erros.nome = campos.nome.erroVazio;
  else if (nome.split(/\s+/).length < 2) erros.nome = campos.nome.erroIncompleto;

  const email = valores.email.trim();
  if (!email) erros.email = campos.email.erroVazio;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) erros.email = campos.email.erroFormato;

  const digitosDoTelefone = valores.telefone.replace(/\D/g, "");
  if (!digitosDoTelefone) erros.telefone = campos.telefone.erroVazio;
  else if (digitosDoTelefone.length < 10) erros.telefone = campos.telefone.erroFormato;

  const mensagem = valores.mensagem.trim();
  if (!mensagem) erros.mensagem = campos.mensagem.erroVazio;
  else if (mensagem.length < 10) erros.mensagem = campos.mensagem.erroCurta;

  if (!valores.consentimento) erros.consentimento = consentimento.erro;

  return erros;
}

/*
 * Estado de erro sem cor de erro.
 * A paleta do briefing nao tem vermelho e nao pode ganhar um, entao o erro e
 * marcado por borda de 2px em ink, mensagem em ink e icone de traco fino. Nunca
 * so pela cor: quem nao distingue cor le a mensagem, e o leitor de tela recebe
 * aria-invalid e aria-describedby.
 */
/* border-gray, nao border-line: o cinza clarissimo do filete da 1.16:1 contra o
   branco e reprova o criterio 1.4.11 da WCAG, que pede 3:1 para o contorno de um
   controle. Em campo de formulario a borda e a unica coisa que diz onde clicar,
   entao ela precisa ser vista. O filete claro segue valendo para separar secao,
   que e decorativo. gray sobre branco da 4.74:1. */
const bordaNormal = "border border-gray";
const bordaComErro = "border-2 border-ink";
const baseDoCampo =
  "w-full rounded-md bg-white px-4 py-3 text-base text-ink placeholder:text-gray";

function MensagemDeErro({ id, texto }: { id: string; texto: string }) {
  return (
    <p id={id} className="mt-2 flex items-start gap-2 text-sm font-semibold text-ink">
      <AlertCircle size={18} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0" />
      {texto}
    </p>
  );
}

export function FormularioDeContato() {
  const [valores, setValores] = useState<Valores>(valoresIniciais);
  const [erros, setErros] = useState<Erros>({});
  const [jaTentouEnviar, setJaTentouEnviar] = useState(false);
  const [enviado, setEnviado] = useState(false);

  /* Depois da primeira tentativa, revalida a cada digitacao: o erro some
     assim que a pessoa corrige, em vez de so no proximo envio. */
  function alterar<C extends Campo>(campo: C, valor: Valores[C]) {
    const proximos = { ...valores, [campo]: valor };
    setValores(proximos);
    if (jaTentouEnviar) setErros(validar(proximos));
  }

  function aoEnviar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setJaTentouEnviar(true);

    const encontrados = validar(valores);
    setErros(encontrados);

    const primeiroCampoComErro = (
      ["nome", "email", "telefone", "mensagem", "consentimento"] as const
    ).find((campo) => encontrados[campo]);

    if (primeiroCampoComErro) {
      document.getElementById(`campo-${primeiroCampoComErro}`)?.focus();
      return;
    }

    // TODO: integracao do backend entra aqui.
    // Enviar `valores` para o endpoint de contato (por exemplo, uma Route Handler
    // em app/api/contato/route.ts que encaminha para o CRM ou para um e-mail).
    // Enquanto nao existe, nada sai do navegador: os dados nao sao persistidos,
    // nao sao enviados a terceiros e o consentimento LGPD precisa ser registrado
    // junto do envio, com data e hora, quando a integracao for feita.
    setEnviado(true);
  }

  function recomecar() {
    setValores(valoresIniciais);
    setErros({});
    setJaTentouEnviar(false);
    setEnviado(false);
  }

  if (enviado) {
    return (
      <div role="status" className="border border-line p-8 md:p-10">
        <Check size={28} strokeWidth={1.5} aria-hidden="true" className="text-forest" />
        <h3 className="mt-6 font-heading text-xl font-semibold text-ink">
          {formulario.sucesso.titulo}
        </h3>
        <p className="mt-4 max-w-measure text-base text-gray">{formulario.sucesso.texto}</p>
        <button
          type="button"
          onClick={recomecar}
          className="mt-8 inline-flex items-center justify-center rounded-md border border-gray bg-white px-5 py-3 font-heading text-sm font-semibold text-forest transition-colors hover:border-green hover:bg-surface"
        >
          {formulario.sucesso.botao}
        </button>
      </div>
    );
  }

  const temErros = jaTentouEnviar && Object.keys(erros).length > 0;

  return (
    <form onSubmit={aoEnviar} noValidate className="flex flex-col gap-8">
      {/* Resumo para quem usa leitor de tela e nao ve as marcacoes de campo. */}
      <p role="alert" className={cn("text-sm font-semibold text-ink", !temErros && "sr-only")}>
        {temErros ? formulario.resumoDeErros : ""}
      </p>

      <div>
        <label htmlFor="campo-nome" className="block font-heading text-sm font-semibold text-ink">
          {campos.nome.rotulo}
        </label>
        <p id="dica-nome" className="mt-1 text-sm text-gray">
          {campos.nome.dica}
        </p>
        <input
          id="campo-nome"
          name="nome"
          type="text"
          autoComplete="name"
          value={valores.nome}
          onChange={(evento) => alterar("nome", evento.target.value)}
          aria-invalid={Boolean(erros.nome)}
          aria-describedby={erros.nome ? "erro-nome" : "dica-nome"}
          className={cn(baseDoCampo, "mt-3", erros.nome ? bordaComErro : bordaNormal)}
        />
        {erros.nome ? <MensagemDeErro id="erro-nome" texto={erros.nome} /> : null}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label
            htmlFor="campo-email"
            className="block font-heading text-sm font-semibold text-ink"
          >
            {campos.email.rotulo}
          </label>
          <p id="dica-email" className="mt-1 text-sm text-gray">
            {campos.email.dica}
          </p>
          <input
            id="campo-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={valores.email}
            onChange={(evento) => alterar("email", evento.target.value)}
            aria-invalid={Boolean(erros.email)}
            aria-describedby={erros.email ? "erro-email" : "dica-email"}
            className={cn(baseDoCampo, "mt-3", erros.email ? bordaComErro : bordaNormal)}
          />
          {erros.email ? <MensagemDeErro id="erro-email" texto={erros.email} /> : null}
        </div>

        <div>
          <label
            htmlFor="campo-telefone"
            className="block font-heading text-sm font-semibold text-ink"
          >
            {campos.telefone.rotulo}
          </label>
          <p id="dica-telefone" className="mt-1 text-sm text-gray">
            {campos.telefone.dica}
          </p>
          <input
            id="campo-telefone"
            name="telefone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={valores.telefone}
            onChange={(evento) => alterar("telefone", formatarTelefone(evento.target.value))}
            aria-invalid={Boolean(erros.telefone)}
            aria-describedby={erros.telefone ? "erro-telefone" : "dica-telefone"}
            className={cn(baseDoCampo, "mt-3", erros.telefone ? bordaComErro : bordaNormal)}
          />
          {erros.telefone ? <MensagemDeErro id="erro-telefone" texto={erros.telefone} /> : null}
        </div>
      </div>

      <div>
        <label
          htmlFor="campo-mensagem"
          className="block font-heading text-sm font-semibold text-ink"
        >
          {campos.mensagem.rotulo}
        </label>
        <p id="dica-mensagem" className="mt-1 text-sm text-gray">
          {campos.mensagem.dica}
        </p>
        <textarea
          id="campo-mensagem"
          name="mensagem"
          rows={6}
          value={valores.mensagem}
          onChange={(evento) => alterar("mensagem", evento.target.value)}
          aria-invalid={Boolean(erros.mensagem)}
          aria-describedby={erros.mensagem ? "erro-mensagem" : "dica-mensagem"}
          className={cn(baseDoCampo, "mt-3 resize-y", erros.mensagem ? bordaComErro : bordaNormal)}
        />
        {erros.mensagem ? <MensagemDeErro id="erro-mensagem" texto={erros.mensagem} /> : null}
      </div>

      <div>
        <div className="flex items-start gap-4">
          <input
            id="campo-consentimento"
            name="consentimento"
            type="checkbox"
            checked={valores.consentimento}
            onChange={(evento) => alterar("consentimento", evento.target.checked)}
            aria-invalid={Boolean(erros.consentimento)}
            aria-describedby={erros.consentimento ? "erro-consentimento" : undefined}
            className={cn(
              "mt-1 size-5 shrink-0 rounded-sm accent-forest",
              erros.consentimento ? bordaComErro : bordaNormal,
            )}
          />
          <label htmlFor="campo-consentimento" className="max-w-measure text-sm text-ink">
            {antesDoLink}
            <Link
              href={consentimento.link.href}
              className="font-semibold text-forest underline decoration-transparent underline-offset-4 transition-colors hover:decoration-green"
            >
              {consentimento.link.rotulo}
            </Link>
            {depoisDoLink}
          </label>
        </div>
        {erros.consentimento ? (
          <MensagemDeErro id="erro-consentimento" texto={erros.consentimento} />
        ) : null}
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md border border-forest bg-forest px-5 py-3 font-heading text-sm font-semibold text-white transition-colors hover:border-green hover:bg-white hover:text-forest"
        >
          {formulario.botao}
        </button>
        <p className="mt-6 max-w-measure text-sm text-gray">{formulario.nota}</p>
      </div>
    </form>
  );
}

