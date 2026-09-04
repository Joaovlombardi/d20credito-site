import { Plus } from "lucide-react";

type ItemDeAcordeao = {
  readonly pergunta: string;
  readonly resposta: string;
};

/**
 * Acordeao em details/summary nativo: abre e fecha sem JavaScript, ja vem com
 * semantica e navegacao por teclado do proprio navegador, e o conteudo continua
 * disponivel para a busca. O sinal de + gira 45 graus e vira x quando abre.
 */
export function Acordeao({ itens }: { itens: readonly ItemDeAcordeao[] }) {
  return (
    <div>
      {itens.map((item) => (
        <details
          key={item.pergunta}
          className="group border-t border-line last:border-b [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-heading text-base font-semibold text-ink">
            {item.pergunta}
            <Plus
              size={22}
              strokeWidth={1.5}
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-forest transition-transform group-open:rotate-45"
            />
          </summary>
          <p className="max-w-measure pb-8 text-base text-gray">{item.resposta}</p>
        </details>
      ))}
    </div>
  );
}
