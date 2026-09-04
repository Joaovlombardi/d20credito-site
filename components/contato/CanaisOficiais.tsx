import { ShieldAlert } from "lucide-react";

import { dadosEmpresa, enderecoCompleto } from "@/content/dados-empresa";
import { canaisOficiais } from "@/content/contato";

/*
 * Destaque visual forte, como pede o briefing: bloco solido em forest ao lado do
 * formulario, gruda no topo enquanto a pessoa preenche. E a unica secao escura da
 * pagina, e existe para que ninguem preencha o formulario sem ter lido, na mesma
 * tela, quais sao os canais reais e que a D20 nao cobra nada antes.
 * Texto sempre em branco, 6.20:1. mint so como filete.
 */
export function CanaisOficiais() {
  return (
    <aside
      aria-labelledby="canais-titulo"
      className="bg-forest p-8 text-white md:p-10 lg:sticky lg:top-28"
    >
      <h2 id="canais-titulo" className="font-heading text-xl font-semibold text-white">
        {canaisOficiais.titulo}
      </h2>

      <dl className="mt-8 flex flex-col">
        {canaisOficiais.itens.map((item) => (
          <div key={item.rotulo} className="border-t border-mint py-5 first:pt-0">
            <dt className="font-heading text-xs font-semibold tracking-widest text-white uppercase">
              {item.rotulo}
            </dt>
            <dd className="mt-2 text-base break-words text-white">
              {item.href && item.valor ? (
                <a
                  href={item.href}
                  className="underline decoration-mint underline-offset-4 transition-colors hover:decoration-white"
                >
                  {item.valor}
                </a>
              ) : (
                (item.valor ?? enderecoCompleto)
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex items-start gap-4 border-t border-mint pt-8">
        <ShieldAlert
          size={22}
          strokeWidth={1.5}
          aria-hidden="true"
          className="mt-1 shrink-0 text-white"
        />
        <p className="text-sm text-white">{canaisOficiais.aviso}</p>
      </div>

      <p className="mt-6 text-sm text-white">{canaisOficiais.reclamacao}</p>

      <p className="mt-8 border-t border-mint pt-6 text-xs text-white">
        {dadosEmpresa.razaoSocial}, CNPJ {dadosEmpresa.cnpj}.
      </p>
    </aside>
  );
}
